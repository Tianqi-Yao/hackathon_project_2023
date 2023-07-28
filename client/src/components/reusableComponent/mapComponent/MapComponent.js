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
    // 初始化Map
    loader.importLibrary("maps").then((maps) => {
      const map = new maps.Map(mapRef.current, {
        center: { lat: 30.322988090702403, lng: -97.70346438986991 }, //设置地图的中心坐标
        zoom: 12,
        // disableDefaultUI: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });
      mapObjRef.current = map; // 将创建的map对象保存到ref中
      // 设置点击事件
      map.addListener("click", (e) => handleClickMap(e));
    });
  }, []);

  const handleClickMap = async (event) => {
    if (window.confirm("Do you want to click on the map?")) {
      console.log("handleClickMap clicked");
      await fetchAllRestaurantInfo(event);
    }
  };

  /************** help func ***************/
  // Find nearby restaurants and get information about their menus and reviews.
  const fetchAllRestaurantInfo = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    // setCurlocation({lat, lng})
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    const filteredResults = await nearbySearchYelpFunc(lat, lng);
    /************** start analyzeMenu ***************/
    console.log("start analyzeMenu");
    let ingradientsList = await analyzeMenu(filteredResults);
    if (ingradientsList === false) {
      ingradientsList = await analyzeMenu(filteredResults);
    }
    console.log("finish analyzeMenu, start assign ingradientsList");

    // 遍历restaurantData, 为每个restaurant里的menu添加对应的ingradientsList 元素
    const analyzedRestaurantData = filteredResults.map((restaurant) => {
      const newMenu = restaurant.menu.map((menu) => {
        const ingradientStr = menu.ingredients.toLowerCase();
        const newIngradientList = [];
        let isSameItem = false;
        for (let i = 0; i < ingradientsList.length; i++) {
          for (const item of newIngradientList) {
            if (item?.name.includes(ingradientsList[i].name)) {
              // 如果newIngradientList里已经有了这个元素，就不再添加
              isSameItem = true;
              break;
            }
          }
          if (ingradientStr.includes(ingradientsList[i].name) && !isSameItem) {
            newIngradientList.push(ingradientsList[i]);
          }
        }
        const calorie = newIngradientList.reduce(
          (acc, cur) => acc + cur.calories,
          0
        );
        const totalFat = newIngradientList.reduce(
          (acc, cur) => acc + cur.fat_total_g,
          0
        );
        const totalProtien = newIngradientList.reduce(
          (acc, cur) => acc + cur.protein_g,
          0
        );
        const totalCarbohydrates = newIngradientList.reduce(
          (acc, cur) => acc + cur.carbohydrates_total_g,
          0
        );
        return {
          ...menu,
          calorie,
          totalFat,
          totalProtien,
          totalCarbohydrates,
          ingradientsList: newIngradientList,
        }; // 每道菜
      });
      const averageCalorie =
        newMenu.reduce((acc, cur) => acc + cur.calorie, 0) / newMenu.length; // 计算平均卡路里
      const averageTotalFat =
        newMenu.reduce((acc, cur) => acc + cur.totalFat, 0) / newMenu.length;
      const averageTotalProtien =
        newMenu.reduce((acc, cur) => acc + cur.totalProtien, 0) /
        newMenu.length;
      const averageTotalCarbohydrates =
        newMenu.reduce((acc, cur) => acc + cur.totalCarbohydrates, 0) /
        newMenu.length;
      return {
        ...restaurant,
        averageCalorie,
        averageTotalFat,
        averageTotalProtien,
        averageTotalCarbohydrates,
        menu: newMenu,
      }; //每个餐厅
    });
    console.log(
      "finish assign, analyzedRestaurantData: ",
      analyzedRestaurantData
    );
    props.emptyRestaurantList(); // 清空restaurantData
    props.appendAnalyzedRestaurantList(analyzedRestaurantData); // 将分析后的数据存入redux
  };

  const nearbySearchYelpFunc = async (lat, lng) => {
    const { radius } = props;
    try {
      console.log("nearbySearchYelpFunc clicked, radius: ", radius);

      const res = await axios.get(
        "http://localhost:3005/searchBusinessByYelp",
        {
          params: {
            lat: lat,
            lng: lng,
            radius: radius,
          },
        }
      );

      const restaurantList = res.data.data;
      restInfoCount.current = restaurantList.length;
      console.log("nearbySearchYelpFunc res: ", restaurantList);

      const results = await Promise.all(
        restaurantList.map(async (item, i) => {
          if (item.menu) {
            // !!! 如果已经有menu, 则不再获取
            return item;
          }
          console.log(`getInfo url - ${i}: `, item.url);
          try {
            const { menuDetails: menu, reviewDetails: reviews } = await getInfo(
              item.url
            );

            restInfoCount.current--;
            console.log("restInfoCount.current: ", restInfoCount.current);
            if (menu === null) {
              return item;
            } else {
              const result = { ...item, menu, reviews };
              return result;
            }
          } catch (error) {
            console.error(`Error getting info for restaurant ${i}: ${error}`);
            return item; // 返回原始项目，如果 getInfo 失败
          }
        })
      );

      console.log("results: ", results);
      const filteredResults = results.filter(
        (result) => result.menu && result.menu.length > 0
      );
      console.log("filteredResults: ", filteredResults);
      // await props.appendRestaurantList(filteredResults);
      console.log("nearbySearchYelpFunc end");
      return filteredResults;
    } catch (err) {
      console.log("nearbySearchYelpFunc err: ", err);
    }
  };

  const getInfo = async (url) => {
    try {
      const res = await axios.get("http://localhost:3005/api", {
        params: {
          url: url,
        },
      });
      const menuDetails = res.data.data;
      const reviewDetails = res.data.data2;
      console.log("getInfo res: ", menuDetails);
      console.log("getInfo res2: ", reviewDetails);
      return { menuDetails, reviewDetails };
    } catch (error) {
      console.log("getInfo err: ", error);
    }
  };

  const analyzeMenu = async (filteredResults) => {
    const ingredientsStrList = [];
    let ingredientsStr = "";
    await Promise.all(
      filteredResults.map(async (restaurant) => {
        restaurant.menu.forEach((menu) => {
          ingredientsStr += menu.ingredients + " ";
          if (ingredientsStr.length > 1200) {
            ingredientsStrList.push(ingredientsStr);
            ingredientsStr = "";
          }
        });
      })
    );
    console.log("ingredientsStrList: ", ingredientsStrList);
    try {
      const res = await axios.post("http://localhost:3005/ingradients", {
        ingredientsStrList,
      });
      const ingradientsList = res.data.message;
      console.log("analyzeMenu res: ", ingradientsList);
      return ingradientsList;
    } catch (error) {
      console.log("analyzeMenu err: ", error);
      return false;
    }
  };

  return (
    <>
      <div
        className="Map map-component"
        ref={mapRef}
        style={{
          width: "57%",
          height: "38rem",
          borderRadius: "0.625rem 0rem 0rem 0.625rem",
          boxShadow: "-5px 0px 20px 1px rgba(0, 0, 0, 0.50)",
        }}
      ></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  radius: state.home.mapData.radius,
  restaurantData: state.home.restaurantData,
});

const mapDispatchToProps = (dispatch) => ({
  appendRestaurantList: (payload) =>
    dispatch(actions.appendRestaurantList(payload)),
  appendAnalyzedRestaurantList: (payload) =>
    dispatch(actions.appendAnalyzedRestaurantList(payload)),
  emptyRestaurantList: () => dispatch(actions.emptyRestaurantList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
