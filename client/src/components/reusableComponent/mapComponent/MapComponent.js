import { useRef, useEffect, useMemo } from "react";
import "./MapComponent.css";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { connect } from "react-redux";
import { actions } from "../../../actions";

const MapComponent = (props) => {
  const restInfoCount = useRef(0);
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
  }, []);

  const handleClickMap = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    // setCurlocation({lat, lng})
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    await nearbySearchYelpFunc(lat, lng);
  };

  /************** help func ***************/

  const nearbySearchYelpFunc = async (lat, lng) => {
    const { radius } = props;
    console.log("nearbySearchYelpFunc clicked, radius: ", radius);
    await axios
      .get("http://localhost:3005/searchBusinessByYelp", {
        params: {
          lat: lat,
          lng: lng,
          radius: radius,
        },
      })
      .then(async (res) => {
        const restaurantList = res.data.data;
        restInfoCount.current = restaurantList.length;
        console.log("nearbySearchYelpFunc res: ", restaurantList);
        const results = await Promise.all(restaurantList.map(async (item, i) => {
          if (item.menu) {
            return item;
          }
          console.log(`getInfo url - ${i}: `, item.url);
          const { menuDetails: menu, reviewDetails: reviews } = await getInfo(item.url);

          restInfoCount.current--;
          console.log("restInfoCount.current: ", restInfoCount.current);
          if (menu === null) {
            return item
          } else {
            const result = { ...item, menu, reviews };
            return result;
          }
        }
        ));
        console.log("results: ", results);
        const filteredResults = results.filter(result => result.menu && result.menu.length > 0);

        console.log("filteredResults: ", filteredResults);
        await props.updateRestaurantList(filteredResults);
      })
      .catch((err) => {
        console.log("nearbySearchYelpFunc err: ", err);
      });
    console.log("nearbySearchYelpFunc end");
  };

  const getInfo = async (url) => {
    try {
      const res = await axios.get("http://localhost:3005/api", {
        params: {
          url: url,
        },
      })
      const menuDetails = res.data.data;
      const reviewDetails = res.data.data2;
      console.log("getInfo res: ", menuDetails);
      console.log("getInfo res2: ", reviewDetails);
      return { menuDetails, reviewDetails }
    } catch (error) {
      console.log("getInfo err: ", error);
    }
  }

  // const getMenuInfo = async (url) => {
  //   console.log("getMenuInfo url: ", url);
  //   try {
  //     const res = await axios.get("http://localhost:3005/api2", {
  //       params: {
  //         url: url,
  //       },
  //     })
  //     const menuDetails = res.data.data;
  //     console.log("getMenuInfo res: ", menuDetails);
  //     return menuDetails;
  //   } catch (error) {
  //     console.log("getMenuInfo err: ", error);
  //   }
  // };

  // const getReviewsInfo = async (url) => {
  //   console.log("getReviewsInfo url: ", url);
  //   try {
  //     const res = await axios.get("http://localhost:3005/api3", {
  //       params: {
  //         url: url,
  //       },
  //     })
  //     const reviewDetails = res.data.data;
  //     console.log("getReviewsInfo res: ", reviewDetails);
  //     return reviewDetails;
  //   } catch (error) {
  //     console.log("getReviewsInfo err: ", error);
  //   }
  // };

  return (
    <>
      <div
        className="Map map-component"
        ref={mapRef}
        style={{ width: "80vw", height: "80vh" }}
      ></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.home.count,
  radius: state.home.mapData.radius,
  restaurantData: state.home.restaurantData,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCounter()),
  minusCount: () => dispatch(actions.minusCounter()),
  updateRestaurantList: (payload) => dispatch(actions.updateRestaurantList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
