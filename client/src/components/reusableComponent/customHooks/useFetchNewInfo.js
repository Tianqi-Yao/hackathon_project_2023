import {useRef } from 'react';
import axios from "axios";


function useFetchNewInfo() {
    // const [data, setData] = useState(null);
    const restInfoCount = useRef(0);

    const fetchData = async (radius, lat, lng) => {
        const filteredResults = await nearbySearchYelpFunc(radius,lat, lng);

        // 拿 database 数据, 对比filteredResults, 如果有重复的，就不再添加
        // 拿 database id

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
            const averageCalorie = newMenu.reduce((acc, cur) => acc + cur.calorie, 0) / newMenu.length; // 计算平均卡路里
            const averageTotalFat = newMenu.reduce((acc, cur) => acc + cur.totalFat, 0) / newMenu.length;
            const averageTotalProtien = newMenu.reduce((acc, cur) => acc + cur.totalProtien, 0) / newMenu.length;
            const averageTotalCarbohydrates = newMenu.reduce((acc, cur) => acc + cur.totalCarbohydrates, 0) / newMenu.length;
            return { ...restaurant, averageCalorie, averageTotalFat, averageTotalProtien, averageTotalCarbohydrates, menu: newMenu };  //每个餐厅
        });
        console.log(
            "finish assign, analyzedRestaurantData: ",
            analyzedRestaurantData
        );
        // setData(analyzedRestaurantData);
        return analyzedRestaurantData;
        // 添加到数据库

    };

    const nearbySearchYelpFunc = async (radius,lat, lng) => {
        // const { radius } = props;
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
            console.log("nearbySearchYelpFunc res: ", res);
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


    return fetchData;
}
export default useFetchNewInfo;