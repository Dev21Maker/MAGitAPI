const puppeteer = require('puppeteer');

async function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

(async () => {
      const browser = await puppeteer.launch({
          headless: false,
      })
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 })
      try {
          await page.goto('https://app.dhiwise.com/signin/', {
              waitUntil: "networkidle2",
          });
                           
          const loginButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div/div/div[2]/form/div[1]/div/div/input')
          await delay(200)
          loginButton.type(process.env.LOGIN)
      
          const passwordButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div/div/div[2]/form/div[2]/div/div/input')
          await delay(200)
          passwordButton.type(process.env.DHI_PASSWORD)
      
          const fowardButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div/div/div[2]/form/div[4]/button')
          await delay(200)
          fowardButton.click() 
      
          await page.waitForNetworkIdle()
      
          const createMobileAppButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]')
          await delay(200)
          await createMobileAppButton.click()
      
          const startBuildingButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div/div[1]/div')
          await delay(200)
          await startBuildingButton.click() 
      
          const buildWithFlutterButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div[1]/div[2]/div[1]/div/div[2]/div/div[1]')
          await delay(200)
          await buildWithFlutterButton.click()
      
          const figmaUrlButton = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div[1]/div[2]/div[1]/div/div[5]/div/div/input')
          await delay(200)
          await figmaUrlButton.type('')
      } catch(e) {
          console.log(e);
          await page.screenshot({path: 'screenshot.png'})  
          process.exit(1);
     }
})();
