const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
async function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
// Use the stealth plugin
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  // Your puppeteer code here
  await page.waitForSelector("#L2AGLb > div");
  await delay(200);
  await page.click("#L2AGLb > div");

  await page.waitForSelector("#gb > div > div.gb_Ud > a");
  await delay(200);
  await page.click("#gb > div > div.gb_Ud > a");

  
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
