import React, { useEffect, useRef, useState, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

/**
 * 点击地图上的某一点, 获取该点的经纬度, 并且传输获经纬度给 yelp 然后取该点附近的餐馆
 * @returns
 */

// const options = {
//     method: 'GET',
//     url: 'https://api.yelp.com/v3/businesses/search',
//     params: { location: '616%20West%2034th%20Street%2C%20Austin' },
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer gHHslBAwr8R1CTnH7z5l7Mc-EiYx-6lDJYZwIDfs6rpLmEFhgE05PaEk1p6CLrK6qjsB_xTeGKn9KQIMoSyorcYWM8-BDO9-gw3wYEeD0yZqdWE-qmyDbmzRwfCNZHYx'
//     }
// };

// axios
//     .request(options)
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

const GoogleMap = () => {
  const [searchResultList, setSearchResultList] = useState([]);
  // const [curlocation, setCurlocation] = useState({lat, lng})
  const mapRef = useRef(null);
  const mapObjRef = useRef(null); // 用于存储map对象
  const loader = useMemo(
    () =>
      new Loader({
        apiKey: process.env.REACT_APP_MAP_API_KEY, //替换为你的Google API密钥
        version: "weekly",
      }),
    []
  ); // 空依赖数组，确保 loader 只被创建一次

  useEffect(() => {
    console.log(
      "process.env.REACT_APP_MAP_API_KEY: ",
      process.env.REACT_APP_MAP_API_KEY
    );
    // 初始化Map
    loader.importLibrary("maps").then((maps) => {
      const map = new maps.Map(mapRef.current, {
        center: { lat: 30.322988090702403, lng: -97.70346438986991 }, //设置地图的中心坐标
        zoom: 12,
      });
      mapObjRef.current = map; // 将创建的map对象保存到ref中
      // 设置点击事件
      map.addListener("click", (e) => handleClickMap(e));
    });
    // templateGetDataFunc(loader, mapObjRef.current)
  }, []);

  const handleClickMap = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    // setCurlocation({lat, lng})
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    // 调用搜索方法和配置参数
    const nearbySearchRequest = {
      location: { lat, lng }, // 地图中的位置
      radius: "500", // 搜索半径，单位是米
      type: ["restaurant"], // 搜索的地点类型，这里是餐馆
    };
    nearbySearchYelpFunc(lat, lng);
    // nearbySearchFunc(loader, mapObjRef.current, nearbySearchRequest)   /// 有问题, google获取的餐馆,yelp 不一定有
  };

  const handleClickMenuBtn = (url) => {
    console.log("cilcked handleClickMenuBtn");
    getMenuInfo(url);
  };

  const handleClickReviewsBtn = (url) => {
    console.log("cilcked handleClickReviewsBtn");
    getReviewsInfo(url);
  };

  // *******************help function ********************
  const nearbySearchYelpFunc = (lat, lng) => {
    console.log("nearbySearchYelpFunc clicked");
    axios
      .get("http://localhost:3005/searchBusinessByYelp", {
        params: {
          lat: lat,
          lng: lng,
        },
      })
      .then((res) => {
        console.log("nearbySearchYelpFunc res: ", res.data.data);
        setSearchResultList(res.data.data?.businesses);
      })
      .catch((err) => {
        console.log("nearbySearchYelpFunc err: ", err);
      });
    console.log("nearbySearchYelpFunc end");
  };

  const getMenuInfo = (url) => {
    console.log("getMenuInfo url: ", url);
    axios
      .get("http://localhost:3005/api2", {
        params: {
          url: url,
        },
      })
      .then((res) => {
        console.log("getMenuInfo res: ", res.data.data);
      })
      .catch((err) => {
        console.log("getMenuInfo err: ", err);
      });
  };

  const getReviewsInfo = (url) => {
    console.log("getMenuInfo url: ", url);
    axios
      .get("http://localhost:3005/api3", {
        params: {
          url: url,
        },
      })
      .then((res) => {
        console.log("getReviewsInfo res: ", res.data.data);
      })
      .catch((err) => {
        console.log("getReviewsInfo err: ", err);
      });
  };

  const nearbySearchFunc = (loader, map, nearbySearchRequest) => {
    loader
      .importLibrary("places")
      .then((places) => {
        // 创建 PlacesService 对象
        let placesService = new places.PlacesService(map);
        // 调用 nearbySearch 方法, 获取周围餐馆
        placesService.nearbySearch(nearbySearchRequest, (results, status) => {
          if (status === places.PlacesServiceStatus.OK) {
            console.log("nearbySearch result: ", results); // 获取到的餐馆搜索结果，数组形式
            setSearchResultList(results);
          }
          if (results.length === 0) {
            console.log("No data can be searched");
          }
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  return (
    <>
      <div
        className="Map"
        ref={mapRef}
        style={{ width: "80vw", height: "80vh" }}
      ></div>
      <ul>
        food near me:
        {searchResultList?.map((item) => (
          <li key={item.id}>
            <p>name: {item.name}</p>
            <p>location: {JSON.stringify(item.location)}</p>
            <a href={item.url}>to url</a>
            <button onClick={() => handleClickMenuBtn(item.url)}>
              get url menu
            </button>
            <button onClick={() => handleClickReviewsBtn(item.url)}>
              get url reviews
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoogleMap;
