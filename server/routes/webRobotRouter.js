const express = require('express');
const { getWebDataByPlaywright, getWebDataByPlaywright_Test, analyzingDataFromAIApi, truncateString } = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const { getCalorieByFood } = require('../public/javascripts/calorie');
const { searchBusinessByYelp } = require('../public/javascripts/yelp');
const MenuScraper = require('../public/javascripts/MenuScraper');
const ReviewsScraper = require('../public/javascripts/ReviewsScraper');
const router = express.Router();
const fs = require('fs');


// default route
router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Hello",
        api2: "/api2",
        api3: "/api3",
        food: "/food/:food",
        searchBusinessByYelp: "/searchBusinessByYelp?lat=30.2672&lng=-97.7431"
    })
});

// 弃用** 最早版本获取菜谱 json 数据, 通过 playwright 获取网页数据, 通过 AI 分析数据, 返回 json 数据
router.get('/api', async (req, res) => {
    const url = "https://www.yelp.com/menu/jack-allens-kitchen-austin-17"
    const plainText = await getWebDataByPlaywright(url);
    const prompt = "Extract the following menu, ingredients, and prices, and export them in json format: "
    // console.log("plainText:", plainText);

    let truncatedString = truncateString(plainText, 1000);
    fs.writeFile('public/temp/output2.txt', prompt + truncatedString, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file2 was saved!");
    });
    const resData = await analyzingDataFromAIApi(prompt + truncatedString)  // return json data

    res.status(200).json({
        home: "/",
        note: "This is an example, the message is from https://www.yelp.com/menu/jack-allens-kitchen-austin-17 ",
        message: resData
    })
}
);

//  running - 获取菜谱 json 数据, 通过 playwright 获取网页数据, 返回 json 数据
router.get('/api2', async (req, res) => {
    // const url = "https://www.yelp.com/biz/jack-allens-kitchen-austin-17"
    const url = req.query.url;
    console.log("server get url: ", url);
    const menuScraper = new MenuScraper();
    const results = await menuScraper.menuScrape(url);
    if (results === null) { 
        console.log("no data");
    } else {
        menuScraper.saveResults(results);
        console.log('Scrape completed!');
    }
    res.status(200).json({
        home: "/",
        note: `The message is from ${url}`,
        data: results?.menuDetails   
    })
}
);

// running - 获取评论 json 数据, 通过 playwright 获取网页数据, 返回 json 数据
router.get('/api3', async (req, res) => {
    // const url = "https://www.yelp.com/biz/jack-allens-kitchen-austin-17"
    const url = req.query.url;
    console.log("server get url: ", url);
    const reviewsScraper = new ReviewsScraper();
    const results = await reviewsScraper.reviewsScrape(url);
    reviewsScraper.saveResults(results);
    console.log('Scrape completed!');

    res.status(200).json({
        home: "/",
        note: `The message is from ${url}`,
        data: results?.reviewDetails
    })
}
);

// running - 获取食物的卡路里,通过调用第三方API,输入食物的字符串,返回数组
router.get('/food/:food', async (req, res) => {
    const foodList = await getCalorieByFood(req.params.food);
    console.log('foodList!!!!!!: ', foodList);
    res.status(200).json({
        home: "/",
        message: foodList
    })
}
);

router.get('/searchBusinessByYelp', async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    console.log("in router get")
    const data = await searchBusinessByYelp(lat, lng)
    res.status(200).json({
        home: "/",
        message: "searchBusinessByYelp",
        data: data
    })
}
);

module.exports = router;