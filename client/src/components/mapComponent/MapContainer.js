import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.REACT_APP_MAP_API_KEY,
    version: "weekly",
    libraries: ["places"]
});

const MapContainer = () => {
    const [data, setData] = useState([])
    const [dataR, setDataR] = useState([])
    const [markerPositions, setMarkerPositions] = useState([{
        lat: 30.322988090702403,
        lng: -97.70346438986991
    }]);
    const [position, setPosition] = useState([])

    const mapRef = useRef(null);

    const mapStyles = {
        height: "80vh",
        width: "80%"
    };

    const defaultCenter = {
        lat: 30.322988090702403, lng: -97.70346438986991
    }

    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    const handleMapClick = event => {
        // 添加新的标记
        // setMarkerPositions(current => [...current, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
        setPosition(current => [...current, { lat: event.latLng.lat(), lng: event.latLng.lng() }])

    };

    const handleQuery = (e) => {
        // 查询标记
        let request = {
            query: dataR[0],
            fields: ["ALL"]
        };
        handleMapClick(e)

        console.log("position!!!!!!!!!", position);

        loader.importLibrary('places').then((places) => {
            console.log(places, "places");
            let map = mapRef.current;
            const request2 = {
                location: map.getCenter(),
                radius: '500',  // 搜索半径，单位是米
                type: ['restaurant']  // 搜索的地点类型，这里是餐馆
            };

            const request3 = {
                placeId: "ChIJt-S1aiLKRIYRxRr3OHqdVH0",
                
            };
            console.log(map, "map");
            console.log(map.getCenter(), "map.getCenter()");
            let service = new places.PlacesService(map)
            console.log(service, "service");

            console.log("****************************");
            service.getDetails(request3, callback);
            function callback(place, status) {
                if (status == places.PlacesServiceStatus.OK) {
                    // createMarker(place);
                    console.log("place!!!!!!!!!!!!!!!!",place);
                }
            }
            console.log("****************************");

            service.nearbySearch(request2, (results, status) => {
                if (status === places.PlacesServiceStatus.OK) {
                    console.log(results, "restaurant");  // results 是一个包含搜索结果的数组
                    setDataR(prev => [...prev].concat(request))

                }
            });

            service.findPlaceFromQuery(request, (results, status) => {
                console.log("in111111111", results, status);
                if (status === places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        console.log(results[i], "results[i]");
                        setData(prev => [...prev, results[i]])
                    }
                }
            });
        }).catch((err) => {
            console.log(err, "err");
        })
    };

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY  // , 
        // ...otherOptions 
    })

    const handleTest = () => {
        console.log(data, "data");
    }
    return (
        <>
            {isLoaded && <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={defaultCenter}
                onClick={handleQuery}
                onLoad={map => mapRef.current = map}
            >
                {markerPositions.map((position) =>
                    <Marker
                        key={`${position.lat}-${position.lng}`} // 为每个标记生成一个唯一的 key
                        position={position}
                        onLoad={onLoad}
                    />
                )}
            </GoogleMap>}
            <button onClick={handleTest}>test</button>
        </>
    )
}

export default MapContainer;
