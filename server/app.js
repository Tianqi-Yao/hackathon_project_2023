const express = require('express');
const cors = require('cors');
const app = express();
const playwright = require('playwright');
const fs = require('fs');
const axios = require('axios');

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
}
);
app.get('/api', async (req, res) => {
    const plainText = await getWebDataByPlaywright("https://www.yelp.com/menu/jack-allens-kitchen-austin-17");
    const prompt = "Extract the following menu, ingredients, and prices, and export them in json format: "

    let truncatedString = truncateString(plainText, 1000);
    fs.writeFile('output2.txt', prompt + truncatedString, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file was saved!");
    });
    const resData = await analyzingDataFromAIApi(prompt + truncatedString)  // return json data
    console.log("resData:", resData);

    res.status(200).json({ note: "This is an example, the message is from https://www.yelp.com/menu/jack-allens-kitchen-austin-17 ", message: resData })
}
);
app.get('/api/:url', async (req, res) => {
    let urlParam = "https://www.yelp.com/menu/" + req.params.url;
    const plainText = await getWebDataByPlaywright(urlParam);
    res.status(200).json({ message: plainText })
}
);

app.get('/test', async (req, res) => {
    // const plainText = await getWebDataByPlaywright_Test("https://www.yelp.com/biz/1618-asian-fusion-austin?adjust_creative=DCZgw_02OZNeg4oTnfSNUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=DCZgw_02OZNeg4oTnfSNUQ");
    const plainText = await getWebDataByPlaywright_Test("https://www.yelp.com/biz/cocos-cafe-austin");
    // console.log('plainText',plainText);
    res.status(200).json({ message: plainText })
}
);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);
app.listen(3009, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3009');
}
);



// 从提供的URL, 获取在网页中->"menu-sections" class container内的所有内容的纯文本
// 提供的URL应该"暂定"要求是yelp里的菜单页面,以确保获取内容一致. eg: https://www.yelp.com/menu/the-salt-lick-bbq-driftwood
async function getWebDataByPlaywright(url) {
    // 启动一个新的 Chromium 浏览器实例
    const browser = await playwright.chromium.launch();

    // 创建一个新的浏览器上下文。这代表了一个浏览器会话。
    const context = await browser.newContext();

    // 在当前浏览器上下文中打开一个新的页面
    const page = await context.newPage();

    // 导航到指定的 URL
    console.log("url: ", url);
    await page.goto(url);

    // just get class="menu-sections" content
    const content = await page.$eval('.menu-sections', el => el.innerHTML);


    // 获取页面内容并提取纯文本
    let plainText = await page.evaluate(() => {
        // 使用JavaScript DOM操作提取纯文本, just get class="menu-sections" content
        const menuSections = document.querySelector('.menu-sections');
        return menuSections.textContent;
        // return document.body.textContent;
    });

    // 去除plainText里的空格
    plainText = plainText.replace(/\s+/g, ' ').trim();

    // output plain text to file
    fs.writeFile('output.txt', plainText, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file was saved!");
    });
    // 关闭浏览器实例
    await browser.close();
    return plainText
}

async function analyzingDataFromAIApi(content) {
    console.log("start use OpenAI");
    console.log("content:", content);
    const options = {
        method: 'POST',
        url: 'http://172.27.8.212:5000',
        data: {
            content: content,
        }
    };
    try {
        const response = await axios.request(options);
        console.log("AI result: ", response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

function truncateString(str, maxLength) {
    // 如果字符串长度小于等于最大长度，直接返回原字符串
    if (str.length <= maxLength) {
        return JSON.stringify(str).slice(1, -1);
    }

    // 截取字符串到最大长度
    let truncatedStr = str.substr(0, maxLength);

    // 使用正则表达式匹配最后一个$符号及其后面的数字部分
    let regex = /\$([\d.]+)(?!.*\$\d)/;
    let match = truncatedStr.match(regex);

    // 如果找到匹配项，则截取字符串到匹配项结束的位置
    if (match) {
        let matchIndex = match.index + match[0].length;
        truncatedStr = truncatedStr.substr(0, matchIndex);
    }

    return JSON.stringify(truncatedStr).slice(1, -1);
}

async function getWebDataByPlaywright_Test(url) {
    // 启动一个新的 Chromium 浏览器实例
    const browser = await playwright.chromium.launch();

    // 创建一个新的浏览器上下文。这代表了一个浏览器会话。
    const context = await browser.newContext();

    // 在当前浏览器上下文中打开一个新的页面
    const page = await context.newPage();

    // 导航到指定的 URL
    console.log("url: ", url);
    await page.goto(url);

    
    const menuBtnLocator = page.getByText('Full menu', { exact: true })
    if (await menuBtnLocator.count() > 0) {
        await menuBtnLocator.click();
        console.log('Button found and clicked');
        console.log("page.url(): ", page.url());
    } else {
        console.log('Button not found');
    }
    // 关闭浏览器实例
    await browser.close();
    // return plainText
}