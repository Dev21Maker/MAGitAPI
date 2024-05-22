const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(SteathPlugin());

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

try {
    (async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        
        await page.setViewport({width: 1280, height: 800});

        await page.goto('https://google.com');

        await page.screenshot('screenshot.png');

        await browser.close();

    });
} catch(e) {
    console.log(e);
}