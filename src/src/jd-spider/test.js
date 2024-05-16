import puppeteer from 'puppeteer';

// 调用 launch 跑一个浏览器实例
const browser = await puppeteer.launch({
    // headless 为 false 也就是有界面
    headless: false,

    // defaultViewport 设置 width、height 为 0 是网页内容充满整个窗口
    defaultViewport: {
        width: 0,
        height: 0
    }
});


/**
 * * 然后就是自动化的流程了：
 * 首先进入职位搜索页面，等 job-list-box 这个元素出现之后，也就是列表加载完成了。
 * 就点击城市选择按钮，选择全国。
 * 然后在输入框输入前端，点击搜索。
 */
const page = await browser.newPage();

await page.goto('https://www.zhipin.com/web/geek/job?query=前端&city=100010000');

await page.waitForSelector('.job-list-box');

// $eval 第一个参数是选择器，第二个参数是对选择出的元素做一些处理后返回
const totalPage = await page.$eval('.options-pages a:nth-last-child(2)', e => {
    return parseInt(e.textContent)
});

const allJobs = [];
// 然后，我们遍历访问每页数据，拿到每个职位的信息
for (let i = 1; i <= totalPage; i ++) {
    // 就是在 url 后再带一个 page 的参数
    await page.goto('https://www.zhipin.com/web/geek/job?query=前端&city=100010000&page=' + i);

    await page.waitForSelector('.job-list-box');

    const jobs = await page.$eval('.job-list-box', el => {
        return [...el.querySelectorAll('.job-card-wrapper')].map(item => {
            return {
                job: {
                    name: item.querySelector('.job-name').textContent,
                    area: item.querySelector('.job-area').textContent,
                    salary: item.querySelector('.salary').textContent
                },
                link: item.querySelector('a').href,
                company: {
                    name: item.querySelector('.company-name').textContent,
                }
            }
        })
    });
    allJobs.push(...jobs);
}

// 做到这一步还不够，我们要点进去这个链接，拿到 jd 的描述
// try catch 是因为有的页面可能打开会超时导致中止，这种就直接跳过好了
for (let i = 0; i< allJobs.length; i ++) {
    await page.goto(allJobs[i].link);

    try {
        await page.waitForSelector('.job-sec-text');

        const jd= await page.$eval('.job-sec-text', el => {
            return el.textContent
        });
        allJobs[i].desc = jd;

        console.log(allJobs[i]);
    } catch(e) {}
}




// const res = await page.$eval('.options-pages a:nth-last-child(2)', el => {
//     return parseInt(el.textContent)
// });

// console.log(res);

// await page.click('.city-label', {
//     delay: 500
// });

// await page.click('.city-list-hot li:first-child', {
//     delay: 500
// });

// await page.focus('.search-input-box input');

// await page.keyboard.type('前端', {
//     delay: 200
// });

// await page.click('.search-btn', {
//     delay: 1000
// });
