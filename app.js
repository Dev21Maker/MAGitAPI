const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());
async function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
// const puppeteerCacheDir = process.env.PUPPETEER_CACHE_DIR || path.join(require('os').homedir(), '.cache', 'puppeteer');
const chromeDir = "/home/runner/work/MAGitAPI/MAGitAPI/chrome/linux-116.0.5793.0/chrome-linux64/chrome";//`${puppeteerCasheDir}/chrome/win64-116.0.5793.0/chrome-win64/chrome.exe`;
(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: chromeDir
    })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    await page.setViewport({ width: 1280, height: 800 })
    // GO TO AUTH PAGE
    await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=pl&ifkv=AaSxoQynLHFT41XvnHO0qMUa-Ige-Jj1b7Z0AUcdxumtdX0V6vPvaM4Uon7xhCuYfrxeI2duqrNj3g&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2062953204%3A1716543779572040&ddm=0", {
      waitUntil: "networkidle2",
    })
    await page.waitForSelector("#identifierId")
    await delay(200)
    await page.type("#identifierId", "dev21maker@gmail.com")

    await page.waitForSelector("#identifierNext > div > button > div.VfPpkd-RLmnJb") 
    

    await delay(200)
    await page.click("#identifierNext > div > button > div.VfPpkd-RLmnJb")

    await page.waitForNavigation()

    await delay(1000)
    await page.screenshot({path: "screenshot.png"})
    
    await page.waitForSelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
    await delay(200)
    await page.type("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input", "nQrev60.rekam")

    await page.waitForSelector("#passwordNext > div > button > div.VfPpkd-RLmnJb")
    await delay(200)
    await page.click("#passwordNext > div > button > div.VfPpkd-RLmnJb")

    await page.waitForNavigation()

    await page.screenshot({path: "screenshot.png"})

    await broser.close()

  } catch (e) {
    console.log(e);
    process.exit(1);
  } 
})();
