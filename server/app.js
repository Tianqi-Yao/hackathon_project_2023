const express = require('express');
const cors = require('cors');
const app = express();
const playwright = require('playwright');
const fs = require('fs');

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
}
);
app.get('/api', async(req, res) => {
    urlParam = "https://www.yelp.com/menu/jack-allens-kitchen-austin-17"
    const plainText = await getWebData(urlParam);
    res.status(200).json({note:"This is an example, the message is from https://www.yelp.com/menu/jack-allens-kitchen-austin-17 ", message: plainText })
}
);
app.get('/api/:url', async(req, res) => {
    let urlParam = "https://www.yelp.com/menu/"+req.params.url;
    const plainText = await getWebData(urlParam);
    res.status(200).json({ message: plainText })
}
);
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);
app.listen(3001, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3001');
}
);



// 从提供的URL, 获取在网页中->"menu-sections" class container内的所有内容的纯文本
// 提供的URL应该"暂定"要求是yelp里的菜单页面,以确保获取内容一致. eg: https://www.yelp.com/menu/the-salt-lick-bbq-driftwood
async function getWebData(url) {
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