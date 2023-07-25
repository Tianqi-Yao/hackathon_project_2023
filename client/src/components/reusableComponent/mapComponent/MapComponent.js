import { useRef, useEffect, useMemo } from "react";
import "./MapComponent.css";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { connect } from "react-redux";
import { actions } from "../../../actions";

const MapComponent = (props) => {
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

  const handleClickMap = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    // setCurlocation({lat, lng})
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    // 调用搜索方法和配置参数
    
    nearbySearchYelpFunc(lat, lng);
  };

  const nearbySearchYelpFunc = (lat, lng) => {
    const { radius } = props;
    console.log("nearbySearchYelpFunc clicked, radius: " , radius);
    axios
      .get("http://localhost:3005/searchBusinessByYelp", {
        params: {
          lat: lat,
          lng: lng,
          radius: radius,
        },
      })
      .then((res) => {
        console.log("nearbySearchYelpFunc res: ", res.data.data);
        // setSearchResultList(res.data.data?.businesses); redux
        props.updateRestaurantList(res.data.data);
      })
      .catch((err) => {
        console.log("nearbySearchYelpFunc err: ", err);
      });
    console.log("nearbySearchYelpFunc end");
  };

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
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCounter()),
  minusCount: () => dispatch(actions.minusCounter()),
  updateRestaurantList: (payload) => dispatch(actions.updateRestaurantList(payload)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);