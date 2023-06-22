import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const GoogleMap = () => {
    const [searchResultList, setSearchResultList] = useState([{name:1,vicinity:2}])
    const mapRef = useRef(null);
    const mapObjRef = useRef(null); // 用于存储map对象\
    const loader = useMemo(() => new Loader({
        apiKey: process.env.REACT_APP_MAP_API_KEY, //替换为你的Google API密钥
        version: "weekly",
    }), []);  // 空依赖数组，确保 loader 只被创建一次

    useEffect(() => {
        // 初始化Map
        loader.importLibrary('maps').then((maps) => {
            const map = new maps.Map(mapRef.current, {
                center: { lat: 30.322988090702403, lng: -97.70346438986991 }, //设置地图的中心坐标
                zoom: 12,
            });

            mapObjRef.current = map; // 将创建的map对象保存到ref中

            // 设置点击事件
            map.addListener("click", (e) => handleClickMap(e));
        })
        // templateGetDataFunc(loader, mapObjRef.current)
    }, []);


    const handleClickMap = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        // 调用搜索方法和配置参数
        const nearbySearchRequest = {
            location: { lat, lng }, // 地图中的位置
            radius: '500',          // 搜索半径，单位是米
            type: ['restaurant']    // 搜索的地点类型，这里是餐馆
        };
        nearbySearchFunc(loader, mapObjRef.current,nearbySearchRequest)
    }


    // *******************help function ********************
    const nearbySearchFunc = (loader, map, nearbySearchRequest) => {
        loader.importLibrary('places').then((places) => {
            // 创建 PlacesService 对象
            let placesService = new places.PlacesService(map);
            // 调用 nearbySearch 方法, 获取周围餐馆
            placesService.nearbySearch(nearbySearchRequest, (results, status) => {
                if (status === places.PlacesServiceStatus.OK) {
                    console.log("nearbySearch result: ", results); // 获取到的餐馆搜索结果，数组形式
                    setSearchResultList(results)
                }
            });
        }).catch((err) => {
            console.log(err, "err");
        });
    }

    console.log("searchResultList",searchResultList);
    return (
        <>
            <div className='Map' ref={mapRef} style={{ width: '80vw', height: '80vh' }}></div>
            <ul>food near me:  
                {searchResultList.map((item)=>(
                    <li key="temp.reference">
                        <p>name: {item.name}</p>
                        <p>location: {item.vicinity}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default GoogleMap;



    // const templateGetDataFunc = (loader, map) => {
    //     loader.importLibrary('places').then((places) => {
    //         // 创建 PlacesService 对象
    //         let placesService = new places.PlacesService(map);
    //         console.log("placesService:", placesService);
    //         const onePlaceGetDetailsRequest = {
    //             placeId: "ChIJt-S1aiLKRIYRxRr3OHqdVH0", // 地点的唯一标识符
    //         };
    //         // 调用 getDetails 方法, 获取某一地点详细信息
    //         placesService.getDetails(onePlaceGetDetailsRequest, (place, status) => {
    //             if (status === places.PlacesServiceStatus.OK) {
    //                 console.log("getDetails result: ", place); // 获取到的地点详细信息
    //             }
    //         });

    //         const nearbySearchRequest = {
    //             location: map.getCenter(), // 地图中心点的位置
    //             radius: '500', // 搜索半径，单位是米
    //             type: ['restaurant'] // 搜索的地点类型，这里是餐馆
    //         };
    //         // 调用 nearbySearch 方法, 获取周围餐馆
    //         placesService.nearbySearch(nearbySearchRequest, (results, status) => {
    //             if (status === places.PlacesServiceStatus.OK) {
    //                 console.log("nearbySearch result: ", results); // 获取到的餐馆搜索结果，数组形式
    //             }
    //         });
    //         const findPlaceFromQueryRequest = {
    //             query: "BBQ", // 查询内容
    //             fields: ["ALL"] // 查询返回的字段
    //         };
    //         // 调用 findPlaceFromQuery 方法
    //         placesService.textSearch(findPlaceFromQueryRequest, (results, status) => {
    //             if (status === places.PlacesServiceStatus.OK) {
    //                 for (let i = 0; i < results.length; i++) {
    //                     console.log(`findPlaceFromQuery results[${i}]: `, results[i]); // 获取到的地点搜索结果
    //                 }
    //             }
    //         });
    //     }).catch((err) => {
    //         console.log(err, "err");
    //     });
    // }