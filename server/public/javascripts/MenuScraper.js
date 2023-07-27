const playwright = require('playwright');
const fs = require('fs');
const {v4: uuidv4} = require('uuid')
class MenuScraper {

    async menuScrape(url) {
        const browser = await playwright.chromium.launch(); // 启动一个新的 Chromium 浏览器实例
        const context = await browser.newContext();  // 创建一个新的浏览器上下文。这代表了一个浏览器会话。
        // this.context = await this.browser.newContext({
        //     userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537'
        // });
        const page = await context.newPage(); // 在当前浏览器上下文中打开一个新的页面
        console.log("start loading main page");
        await page.goto(url);
        // 等 1 秒
        await page.waitForTimeout(500);
        // 保存截图
        // await page.screenshot({ path: 'public/temp/menu.png' });
        console.log("finish loading main page");

        // 点击菜单按钮
        const menuBtnLocator = page.getByText('Full menu', { exact: true })
        if (await menuBtnLocator.count() > 0) {
            await menuBtnLocator.click();
            await page.waitForLoadState('networkidle');
            // console.log('Button found and clicked and finish loading menu page');
            // console.log("page.url(): ", page.url());
        } else {
            console.log('Button not found');
            return null
        }

        const menuText = await this.getMenuText(page);
        const menuDetails = await this.getMenuDetails(page);

        await browser.close();

        return {
            menuText,
            menuDetails
        };
    }

    async getMenuText(page) {
        const text = await page.$eval('.menu-sections', el => el.innerText);
        return text.replace(/\s+/g, ' ').trim();
    }

    async getMenuDetails(page) {
        const details = [];

        const items = await page.$$('.menu-item');

        for (let item of items) {
            let food = await item.$eval('h4', el => el.textContent);
            food = food.replace(/\s+/g, ' ').trim();
            let ingredients
            let imgSrc
            try {
                ingredients = await item.$eval('p', el => el.textContent);
                ingredients = ingredients.replace(/,/g, ' ').trim();
            } catch (error) {
                ingredients = '';
            }
            try {
                imgSrc = await item.$eval('img', el => el.src);
                const uuid = uuidv4();
                details.push({ uuid, food, ingredients,imgSrc });
            } catch (error) {
                imgSrc = '';
            }
        }
        return details;
    }

    saveResults(results) {
        // 存储结果到文件
        fs.writeFileSync('public/temp/menu.json', JSON.stringify(results.menuText, null, 2));
        fs.writeFileSync('public/temp/menuDetails.json', JSON.stringify(results.menuDetails, null, 2));
    }

}

module.exports = MenuScraper;