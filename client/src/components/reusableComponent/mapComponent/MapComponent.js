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
    const ingradientsList = await analyzeMenu(filteredResults);
    console.log("finish analyzeMenu, start assign ingradientsList");
    // const ingradientsList = [
    //   {
    //       "name": "lettuce",
    //       "calories": 17,
    //       "serving_size_g": 100,
    //       "fat_total_g": 0.3,
    //       "fat_saturated_g": 0,
    //       "protein_g": 1.2,
    //       "sodium_mg": 7,
    //       "potassium_mg": 30,
    //       "cholesterol_mg": 0,
    //       "carbohydrates_total_g": 3.3,
    //       "fiber_g": 2.1,
    //       "sugar_g": 1.2
    //   },
    //   {
    //       "name": "tomatoes",
    //       "calories": 18.5,
    //       "serving_size_g": 100,
    //       "fat_total_g": 0.2,
    //       "fat_saturated_g": 0,
    //       "protein_g": 0.9,
    //       "sodium_mg": 5,
    //       "potassium_mg": 23,
    //       "cholesterol_mg": 0,
    //       "carbohydrates_total_g": 3.9,
    //       "fiber_g": 1.2,
    //       "sugar_g": 2.6
    //   },
    //   {
    //       "name": "cucumbers",
    //       "calories": 15.1,
    //       "serving_size_g": 100,
    //       "fat_total_g": 0.1,
    //       "fat_saturated_g": 0,
    //       "protein_g": 0.7,
    //       "sodium_mg": 1,
    //       "potassium_mg": 23,
    //       "cholesterol_mg": 0,
    //       "carbohydrates_total_g": 3.6,
    //       "fiber_g": 0.5,
    //       "sugar_g": 1.7
    //   },
    //   {
    //       "name": "cheese",
    //       "calories": 393.9,
    //       "serving_size_g": 100,
    //       "fat_total_g": 33,
    //       "fat_saturated_g": 18.9,
    //       "protein_g": 22.7,
    //       "sodium_mg": 661,
    //       "potassium_mg": 459,
    //       "cholesterol_mg": 100,
    //       "carbohydrates_total_g": 3.2,
    //       "fiber_g": 0,
    //       "sugar_g": 0.5
    //   }]
    // 遍历restaurantData, 为每个restaurant里的menu添加对应的ingradientsList 元素
    const analyzedRestaurantData = filteredResults.map((restaurant) => {
      const newMenu = restaurant.menu.map((menu) => {
        const ingradientStr = menu.ingredients;
        const newIngradientList = [];
        let isSameItem = false;
        for (let i = 0; i < ingradientsList.length; i++) {
          for (const item of newIngradientList) {
            if (item.name === ingradientsList[i].name) {
              isSameItem = true;
              break;
            }
          }
          if (ingradientStr.includes(ingradientsList[i].name) && !isSameItem) {
            newIngradientList.push(ingradientsList[i]);
          }
        }
        const calorie = newIngradientList.reduce((acc, cur) => acc + cur.calories, 0);
        return { ...menu, calorie, ingradientsList: newIngradientList }; // 每道菜
      });
      const averageCalorie = newMenu.reduce((acc, cur) => acc + cur.calorie, 0) / newMenu.length; // 计算平均卡路里
      return { ...restaurant, averageCalorie, menu: newMenu };  //每个餐厅
    });
    console.log("finish assign, analyzedRestaurantData: ", analyzedRestaurantData);
    props.emptyRestaurantList();  // 清空restaurantData
    props.appendAnalyzedRestaurantList(analyzedRestaurantData);  // 将分析后的数据存入redux
  }


  const nearbySearchYelpFunc = async (lat, lng) => {
    const { radius } = props;
    try {
      console.log("nearbySearchYelpFunc clicked, radius: ", radius);

      const res = await axios.get("http://localhost:3005/searchBusinessByYelp", {
        params: {
          lat: lat,
          lng: lng,
          radius: radius,
        },
      });

      const restaurantList = res.data.data;
      restInfoCount.current = restaurantList.length;
      console.log("nearbySearchYelpFunc res: ", restaurantList);

      const results = await Promise.all(restaurantList.map(async (item, i) => {
        if (item.menu) {  // !!! 如果已经有menu, 则不再获取
          return item;
        }
        console.log(`getInfo url - ${i}: `, item.url);
        try {
          const { menuDetails: menu, reviewDetails: reviews } = await getInfo(item.url);

          restInfoCount.current--;
          console.log("restInfoCount.current: ", restInfoCount.current);
          if (menu === null) {
            return item
          } else {
            const result = { ...item, menu, reviews };
            return result;
          }
        } catch (error) {
          console.error(`Error getting info for restaurant ${i}: ${error}`);
          return item; // 返回原始项目，如果 getInfo 失败
        }
      }));

      console.log("results: ", results);
      const filteredResults = results.filter(result => result.menu && result.menu.length > 0);
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

  const analyzeMenu = async (filteredResults) => {
    const ingredientsStrList = []
    let ingredientsStr = ''
    filteredResults.forEach((restaurant) => {
      restaurant.menu.forEach((menu) => {
        ingredientsStr += menu.ingredients + ' '
        if (ingredientsStr.length > 1200) {
          ingredientsStrList.push(ingredientsStr)
          ingredientsStr = ''
        }
      })
    })
    console.log("ingredientsStrList: ", ingredientsStrList);
    try {
      const res = await axios.post("http://localhost:3005/ingradients", {
        ingredientsStrList,
      })
      const ingradientsList = res.data.message;
      console.log("analyzeMenu res: ", ingradientsList);
      return ingradientsList;

    } catch (error) {
      console.log("analyzeMenu err: ", error);
    }

  }

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
  appendRestaurantList: (payload) => dispatch(actions.appendRestaurantList(payload)),
  appendAnalyzedRestaurantList: (payload) => dispatch(actions.appendAnalyzedRestaurantList(payload)),
  emptyRestaurantList: () => dispatch(actions.emptyRestaurantList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
