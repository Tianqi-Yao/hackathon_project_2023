const playwright = require('playwright');
const fs = require('fs');
const axios = require('axios');
const { log } = require('console');

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

    //等待页面加载完成
    await page.waitForLoadState('networkidle');

    // // just get class="menu-sections" content
    // const content = await page.$eval('.menu-sections', el => el.innerHTML);

    // //保存 content 内容
    // fs.writeFile('public/temp/output3.txt', content, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("The file3 was saved!");
    // });

    const detailData = []

    // 使用 .eval 获取页面中class="arrange_unit arrange_unit--fill menu-item-detailss"里面的所有h4和p标签内容
    const detailSections = await page.$$('.arrange_unit.arrange_unit--fill.menu-item-details');
    for (const eachDetailSection of detailSections) {
        const menuSectionData = await eachDetailSection.$eval('h4', el => el.textContent.trim());
        // 如果不存在p标签, 则menuSectionData2为空
        let menuSectionData2 = "";
        const elementHandle = await eachDetailSection.$('p');
        if (elementHandle !== null) {
            menuSectionData2 = await eachDetailSection.$eval('p', el => el.textContent.trim());
        }
        detailData.push({ food:menuSectionData, ingradients:menuSectionData2 })
    }


    // 保存 detailData 内容,到json文件
    fs.writeFile('public/temp/output4.json', JSON.stringify(detailData), function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file4 was saved!");
    });

    // 保存 detailData 里的 food内容,到 json    
    const foodData = []
    for (const eachDetailData of detailData) {
        foodData.push(eachDetailData.food)
    }
    fs.writeFile('public/temp/output5.json', JSON.stringify(foodData), function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file5 was saved!");
    });
    // 保存 detailData 里的 ingradients内容,到 json
    const ingradientsData = []
    for (const eachDetailData of detailData) {
        ingradientsData.push(eachDetailData.ingradients)
    }
    fs.writeFile('public/temp/output6.json', JSON.stringify(ingradientsData), function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file6 was saved!");
    });




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
    fs.writeFile('public/temp/output1.txt', plainText, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("The file1 was saved!");
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
        url: 'http://127.0.0.1:3010',
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

module.exports = {
    getWebDataByPlaywright,     // 从提供的URL, 获取在网页中->"menu-sections" class container内的所有内容的纯文本
    analyzingDataFromAIApi,     // 从提供的纯文本, 通过AI分析, 返回分析结果
    truncateString,             // 截取字符串到最大长度
    getWebDataByPlaywright_Test // 测试用
}