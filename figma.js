const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://google.com/');

    const xpath = await page.evaluate(() => {
      // Function to generate XPath for an element relative to its parent
      const getXPath = (element) => {
        if (!element || !element.tagName) return '';
        const index = [...element.parentElement.children].indexOf(element) + 1;
        return `/${element.tagName.toLowerCase()}[${index}]`;
      };
  
      // Target the element you're interested in
      const element = document.querySelector('body');
  
      // Get XPath for the target element relative to its parent
      return getXPath(element);
    });
  
    console.log('XPath:', xpath);
    
    // page.goto("https://www.figma.com/login?is_not_gen_0=true")

    // await page.waitForSelector("#email")
    // delay(200)
    // await page.type("#email", "dev21maker@gmail.com")

    // await page.waitForSelector("#current-password")
    // delay(200)
    // await page.type("#current-password", "nQrev60.amgif")

    // await page.waitForSelector("#auth-view-page > button.auth_view--brandButton--Le4wb.auth_view--brandButtonBase--RAO-j.auth_branding--brand--WeCuU.auth_view--fullWidth--ffDfw.sign_in_and_up--primaryWideButton--ajva0.auth_view--primaryWideButton--ES6JN.auth_view--wideButton--Db9su.auth_view--fullWidth--ffDfw")
    // delay(200)
    // await page.click("#auth-view-page > button.auth_view--brandButton--Le4wb.auth_view--brandButtonBase--RAO-j.auth_branding--brand--WeCuU.auth_view--fullWidth--ffDfw.sign_in_and_up--primaryWideButton--ajva0.auth_view--primaryWideButton--ES6JN.auth_view--wideButton--Db9su.auth_view--fullWidth--ffDfw")

    // await navigationPromise

    // await page.waitForSelector("#react-page > div > div > div > div:nth-child(1) > div > div.cx_flex--2hUIC.cx_flexRow--QnXvr.cx_flexGrow1--JL8fV > div.file_browser_layout--fileBrowserPageViewContainer--SLy8l > div.cx_sticky--ZI6UI.cx_top0--3QxCF.cx_colorBg--XYMUF.cx_zIndexTopBar--UtkO7 > div > span > div > div > button.basic_form--btn--FSrmp.ellipsis--ellipsis--Tjyfa.text--fontPos11--2LvXf.text--_fontBase--QdLsd.cx_flex--2hUIC.cx_itemsCenter--4Ybl3.cx_justifyCenter--HMVRW.toolbar_action--hideOnMobile--nG2oh.file_browser_page_view--newDesignFileButton--55uaa.basic_form--primaryBtn--AU7Gy.basic_form--btn--FSrmp.ellipsis--ellipsis--Tjyfa.text--fontPos11--2LvXf.text--_fontBase--QdLsd")
    // delay(200)

    // await page.click("#react-page > div > div > div > div:nth-child(1) > div > div.cx_flex--2hUIC.cx_flexRow--QnXvr.cx_flexGrow1--JL8fV > div.file_browser_layout--fileBrowserPageViewContainer--SLy8l > div.cx_sticky--ZI6UI.cx_top0--3QxCF.cx_colorBg--XYMUF.cx_zIndexTopBar--UtkO7 > div > span > div > div > button.basic_form--btn--FSrmp.ellipsis--ellipsis--Tjyfa.text--fontPos11--2LvXf.text--_fontBase--QdLsd.cx_flex--2hUIC.cx_itemsCenter--4Ybl3.cx_justifyCenter--HMVRW.toolbar_action--hideOnMobile--nG2oh.file_browser_page_view--newDesignFileButton--55uaa.basic_form--primaryBtn--AU7Gy.basic_form--btn--FSrmp.ellipsis--ellipsis--Tjyfa.text--fontPos11--2LvXf.text--_fontBase--QdLsd")

    // await navigationPromise

  
    await browser.close();
    
})();
