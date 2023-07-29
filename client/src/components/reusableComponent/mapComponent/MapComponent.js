import { useState, useRef, useEffect, useMemo } from "react";
import "./MapComponent.css";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import useFetchNewInfo from "../customHooks/useFetchNewInfo";

const MapComponent = (props) => {
  const [hint,setHint] = useState("")
  const [hintFeaching,setHintFeaching] = useState(true)
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

  const fetchData = useFetchNewInfo();

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
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const radius = props.radius;
      fetchData(radius, lat, lng).then((data) => {
        if (data === false) {
          setHint("Sorry, we can't find any restaurant nearby you, please try again later")
          return;
        } else {  
          
          props.appendAnalyzedRestaurantList(data);
        }
        setHintFeaching(false)
      }
      );
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
});

const mapDispatchToProps = (dispatch) => ({
  appendAnalyzedRestaurantList: (payload) =>
    dispatch(actions.appendAnalyzedRestaurantList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
