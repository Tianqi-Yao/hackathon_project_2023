const express = require('express');
const { getWebDataByPlaywright, getWebDataByPlaywright_Test, analyzingDataFromAIApi, truncateString } = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const { getCalorieByFood } = require('../public/javascripts/calorie');
const { searchBusinessByYelp } = require('../public/javascripts/yelp');
const MenuScraper = require('../public/javascripts/MenuScraper');
const ReviewsScraper = require('../public/javascripts/ReviewsScraper');
const {getAIScore} = require('../public/javascripts/AI');
const {getAllRestaurantID} = require('../models');
const router = express.Router();
const fs = require('fs');
const { off } = require('process');
const { sequelize, Restaurant, Category, Menu, Ingredient, Review } = require('../models')


// default route
router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Hello",
        api2: "/api2",
        api3: "/api3",
        food: "/food/:food",
        getAllRestaurantID:"/getAllRestaurantID",
        searchBusinessByYelp: "/searchBusinessByYelp?lat=30.2672&lng=-97.7431"
    })
});

// 弃用** 最早版本获取菜谱 json 数据, 通过 playwright 获取网页数据, 通过 AI 分析数据, 返回 json 数据
// router.get('/api', async (req, res) => {
//     const url = "https://www.yelp.com/menu/jack-allens-kitchen-austin-17"
//     const plainText = await getWebDataByPlaywright(url);
//     const prompt = "Extract the following menu, ingredients, and prices, and export them in json format: "
//     // console.log("plainText:", plainText);

//     let truncatedString = truncateString(plainText, 1000);
//     fs.writeFile('public/temp/output2.txt', prompt + truncatedString, function (err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("The file2 was saved!");
//     });
//     const resData = await analyzingDataFromAIApi(prompt + truncatedString)  // return json data

//     res.status(200).json({
//         home: "/",
//         note: "This is an example, the message is from https://www.yelp.com/menu/jack-allens-kitchen-austin-17 ",
//         message: resData
//     })
// }
// );

// running - 合并获取菜谱和评论 json 数据, 通过 playwright 获取网页数据, 返回 json 数据
router.get('/api', async (req, res) => {
    // const url = "https://www.yelp.com/biz/jack-allens-kitchen-austin-17"
    const url = req.query.url;
    console.log("server get url: ", url);
    try {
        const menuScraper = new MenuScraper();
        const results = await menuScraper.menuScrape(url);
        if (results === null || results === undefined || results === []) {
            console.log("no data");
            res.status(200).json({
                home: "/",
                note: `The message is from ${url}`,
                data: null,
                data2: null
            })
        } else {
            // menuScraper.saveResults(results);
            const reviewsScraper = new ReviewsScraper();
            const results2 = await reviewsScraper.reviewsScrape(url);
            console.log('Scrape completed!');
            res.status(200).json({
                home: "/",
                note: `The message is from ${url}`,
                data: results?.menuDetails,
                data2: results2?.reviewDetails
            })
        }
    } catch (error) {
        console.log("!!!!*****####error: ", error);
        res.status(200).json({
            home: "/",
            note: `The message is from ${url}`,
            data: null,
            data2: null
        })
    }
}
);

//  stop - 获取菜谱 json 数据, 通过 playwright 获取网页数据, 返回 json 数据
router.get('/api2', async (req, res) => {
    const url = "https://www.yelp.com/biz/jack-allens-kitchen-austin-17"
    // const url = req.query.url;
    console.log("server get url: ", url);
    const menuScraper = new MenuScraper();
    const results = await menuScraper.menuScrape(url);
    if (results === null) { 
        console.log("no data");
    } else {
        // menuScraper.saveResults(results);
        console.log('Scrape completed!');
    }
    res.status(200).json({
        home: "/",
        note: `The message is from ${url}`,
        data: results?.menuDetails   
    })
}
);

// stop - 获取评论 json 数据, 通过 playwright 获取网页数据, 返回 json 数据
router.get('/api3', async (req, res) => {
    const url = "https://www.yelp.com/biz/jack-allens-kitchen-austin-17"
    // const url = req.query.url;
    console.log("server get url: ", url);
    const reviewsScraper = new ReviewsScraper();
    const results = await reviewsScraper.reviewsScrape(url);
    // reviewsScraper.saveResults(results);
    console.log('Scrape completed!');

    res.status(200).json({
        home: "/",
        note: `The message is from ${url}`,
        data: results?.reviewDetails
    })
}
);

// stop - 获取食物的卡路里,通过调用第三方API,输入食物的字符串,返回数组
router.get('/food/:food', async (req, res) => {
    const foodList = await getCalorieByFood(req.params.food);
    console.log('foodList!!!!!!: ', foodList);
    res.status(200).json({
        home: "/",
        message: foodList
    })
}
);

// running - 获取食物的卡路里,通过调用第三方API,输入食物的长文本,返回数组
router.post('/ingradients', async (req, res) => {
    // console.log("req**:",req);
    let ingradientsList = [];
    console.log('req.body.ingredientsStrList: ', req.body);
    for (const iterator of req.body.ingredientsStrList) {
        console.log('iterator: ', iterator);
        const temp = await getCalorieByFood(iterator);
        ingradientsList = ingradientsList.concat(temp);
    }
    console.log('ingradientsList!!!!!!: ', ingradientsList);
    res.status(200).json({
        home: "/",
        message: ingradientsList
    })
}
);

router.get('/searchBusinessByYelp', async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const radius = req.query.radius;
    console.log("in router get")
    const data1 = await searchBusinessByYelp(lat, lng, radius, 0);
    // const data2 = await searchBusinessByYelp(lat, lng, radius, 50);
    // const data3 = await searchBusinessByYelp(lat, lng, radius, 100);
    // const data4 = await searchBusinessByYelp(lat, lng, radius, 150);

    // 合并 data1, data2, data3, data4
    // const data = data1.businesses.concat(data2.businesses, data3.businesses, data4.businesses);
    const data = data1.businesses


    res.status(200).json({
        home: "/",
        message: "searchBusinessByYelp",
        data: data
    })
}
);

router.post('/AI', async (req, res) => {
    const prompt = req.body.prompt;
    const keyAttrList = req.body.keyAttrList;
    console.log("in router post")
    const data = await getAIScore(prompt, keyAttrList);
    // const data = await analyzingDataFromAIApi(prompt);
    res.status(200).json({
        home: "/",
        message: "AI",
        data: data
    })
}
);

router.get('/getAllRestaurantID', async (req, res) => {
    const data = await getAllRestaurantID();
    res.status(200).json({
        home: "/",
        message: "getAllRestaurantID",
        data: data
    })
}
);

router.post('/updateRestaurantAllInfo', async (req, res) => {
    console.log("inin");
    
    const analyzedRestaurantData = req.body.analyzedRestaurantData;
    analyzedRestaurantData.forEach((restaurantData) => {
        Restaurant.findOrCreate({
            where: { id: restaurantData.id },
            defaults: {
            alias: restaurantData.alias,
            name: restaurantData.name,
            image_url: restaurantData.image_url,
            is_closed: restaurantData.is_closed,
            url: restaurantData.url,
            review_count: restaurantData.review_count,
            rating: restaurantData.rating,
            coordinates: restaurantData.coordinates,
            transactions: restaurantData.transactions,
            price: restaurantData.price,
            location: restaurantData.location,
            phone: restaurantData.phone,
            display_phone: restaurantData.display_phone,
            distance: restaurantData.distance,
            averageCalorie: restaurantData.averageCalorie,
            averageTotalFat: restaurantData.averageTotalFat,
            averageTotalProtien: restaurantData.averageTotalProtien,
            averageTotalCarbohydrates: restaurantData.averageTotalCarbohydrates
            }
        }).then(([restaurant, created]) => {
            const categories = restaurantData.categories.map(category => {
            return {
                alias: category.alias,
                title: category.title,
                restaurant_id: restaurant.id
            };
            });
        
            Category.bulkCreate(categories);
        
            const menus = restaurantData.menu.map(menuItem => {
            return {
                food: menuItem.food,
                ingredients: menuItem.ingredients,
                imgSrc: menuItem.imgSrc,
                calorie: menuItem.calorie,
                restaurant_id: restaurant.id
            };
            });
        
            Menu.bulkCreate(menus).then(createdMenus => {
            createdMenus.forEach((menu, index) => {
                const ingredients = restaurantData.menu[index].ingradientsList.map(ingredient => {
                return {
                    ...ingredient,
                    menu_id: menu.id
                };
                });
        
                Ingredient.bulkCreate(ingredients);
            });
            });
        
            const reviews = restaurantData.reviews.map(review => {
            return {
                username: review.username,
                review: review.review,
                restaurant_id: restaurant.id
            };
            });
        
            Review.bulkCreate(reviews);
        }).catch(error => console.log('Error inserting data: ', error));
    });
    console.log("finish");
    res.status(200).json({
        home: "/",
        message: "get file",
    })
}
);


module.exports = router;