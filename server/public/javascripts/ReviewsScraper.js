const playwright = require('playwright');
const fs = require('fs');

class ReviewsScraper {

    async reviewsScrape(url) {
        const browser = await playwright.chromium.launch(); // 启动一个新的 Chromium 浏览器实例
        const context = await browser.newContext();  // 创建一个新的浏览器上下文。这代表了一个浏览器会话。
        // this.context = await this.browser.newContext({
        //     userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537'
        // });
        const page = await context.newPage(); // 在当前浏览器上下文中打开一个新的页面

        await page.goto(url);
        await page.waitForTimeout(300);
        // 查看是否有 reviews
        const reviews = await page.$('a[href="#reviews"]');
        // console.log("reviews: ", reviews);
        let reviewDetails
        if (reviews) {
            // 点击 href="#reviews" 的链接
            await page.click('a[href="#reviews"]');
            reviewDetails = await this.getReviewDetails(page);
        }
        await browser.close();

        return {
            reviewDetails
        };
    }

    async getReviewDetails(page) {
        const details = [];

        const items = await page.$$('#reviews ul.list__09f24__ynIEd li');

        for (let item of items) {
            let username = await item.$eval('span', el => el.textContent);
            username = username.replace(/\s+/g, ' ').trim();
            let review
            review = await item.$eval('span.raw__09f24__T4Ezm', el => el.textContent);
            review = review.replace(/,/g, ' ').trim();

            details.push({ username, review });
        }

        return details;
    }

    saveResults(results) {
        // 存储结果到文件
        fs.writeFileSync('public/temp/review.json', JSON.stringify(results.reviewDetails, null, 2));
    }

}

module.exports = ReviewsScraper;