const express = require('express');
const { getWebDataByPlaywright, getWebDataByPlaywright_Test, analyzingDataFromAIApi, truncateString } = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const {getCalorieByFood} = require('../public/javascripts/calorie');
const router = express.Router();
const fs = require('fs');

router.get('/', async (req, res) => {
    res.status(200).json({ message: "Hello" })
});

router.get('/api', async (req, res) => {
    const plainText = await getWebDataByPlaywright("https://www.yelp.com/menu/jack-allens-kitchen-austin-17");
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

    res.status(200).json({ note: "This is an example, the message is from https://www.yelp.com/menu/jack-allens-kitchen-austin-17 ", message: resData })
}
);

router.get('/api/:url', async (req, res) => {
    let urlParam = "https://www.yelp.com/menu/" + req.params.url;

    const plainText = await getWebData(urlParam);

    res.status(200).json({ message: plainText })
}
);

// 获取食物的卡路里,通过调用第三方API,输入食物的字符串,返回数组
router.get('/food/:food', async (req, res) => {
    const foodList = await getCalorieByFood(req.params.food);
    console.log('foodList!!!!!!: ', foodList);
    res.status(200).json({ message: foodList })
}
);




router.get('/test', async (req, res) => {
    // const plainText = await getWebDataByPlaywright_Test("https://www.yelp.com/biz/1618-asian-fusion-austin?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ");
    const plainText = await getWebDataByPlaywright_Test("https://www.yelp.com/biz/cocos-cafe-austin");
    // console.log('plainText',plainText);
    res.status(200).json({ message: plainText })
}
);

module.exports = router;