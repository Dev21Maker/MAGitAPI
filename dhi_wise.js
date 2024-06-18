const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
async function evaluateElement(page) {
  try {
    const list = [31, 34, 37, 18];
    for(let i= 0; i < list.length; i++) {
      const val = await page.$(`body > div:nth-child(${list[i]}) > div > div > div > div > div > div`);
      if(val != null) {
        return list[i];
      }
    }
    return list[0];
  } catch(e) {
    console.log(e);
  }
}

async function checkIfExist(page) {
  try {
    const firstElement = await page.$$('#react-tabs-1 > div > div > div');
    if(firstElement != []) {
      return [Promise()]
    } else {
      return []
    }
  } catch (e) {
    return [];
  }

}

async function isNotExist(globalPath,page, link) {
  try {
    await page.waitForSelector("#scrollableDiv > div.pt-0\.5.h-full.flex > div > div > div.w-full.flex-shrink-0 > div > div > div.undefined > button");
    await delay(200)
    await page.click('#scrollableDiv > div.pt-0\.5.h-full.flex > div > div > div.w-full.flex-shrink-0 > div > div > div.undefined > button')

    await page.waitForSelector('#scrollableDiv > div.pt-0\.5.h-full.flex > div > div > div.w-full.flex-shrink-0 > div > div > div.undefined > div > div.overflow-auto.dropdown_wrap.undefined > div > div:nth-child(1)')
    await delay(200)
    await page.click('#scrollableDiv > div.pt-0\.5.h-full.flex > div > div > div.w-full.flex-shrink-0 > div > div > div.undefined > div > div.overflow-auto.dropdown_wrap.undefined > div > div:nth-child(1)')
    
    
    await page.waitForSelector(`${globalPath} > div > div > div > div > div.p-4.overflow-auto.flex-grow.bg-surface3.undefined > div > div.spark-select.false.dhiSelect > div > div > div > div > div.undefined.undefined.undefined.medium.dhi_select__value-container.css-1d8n9bt`)
    await delay(200)
    await page.type(`${globalPath} > div > div > div > div > div.p-4.overflow-auto.flex-grow.bg-surface3.undefined > div > div.spark-select.false.dhiSelect > div > div > div > div > div.undefined.undefined.undefined.medium.dhi_select__value-container.css-1d8n9bt`, 'Flutter')

    await page.keyboard.press('Enter')
    await page.wait(1000)

    await page.waitForSelector(`${globalPath} > div > div > div > div > div.p-4.overflow-auto.flex-grow.bg-surface3.undefined > div > div:nth-child(4) > div.form_group > div > div > input`)
    await delay(200)
    await page.type(`${globalPath} > div > div > div > div > div.p-4.overflow-auto.flex-grow.bg-surface3.undefined > div > div:nth-child(4) > div.form_group > div > div > input', link`)

    await page.waitForSelector(`${globalPath} > div > div > div > div > div.flex.flex-wrap.items-center.md\:flex-nowrap.justify-end.py-3.px-4.bg-surface2.rounded-b-3.popupFooter > button.border-1.border-dhiPrimary-700.bg-dhiPrimary-700.text-dhiWhite.hover\:bg-dhiPrimary-darkHover.hover\:border-dhiPrimary-darkHover.focus\:bg-dhiPrimary-darkHover.focus\:border-dhiPrimary-darkHover.false.rounded-3.py-5px.px-4.text-sub3.leading-6.min-h-36.focus\:outline-none.flex.items-center.relative.justify-center.font-medium`)
    await delay(200)
    await page.click(`${globalPath} > div > div > div > div > div.flex.flex-wrap.items-center.md\:flex-nowrap.justify-end.py-3.px-4.bg-surface2.rounded-b-3.popupFooter > button.border-1.border-dhiPrimary-700.bg-dhiPrimary-700.text-dhiWhite.hover\:bg-dhiPrimary-darkHover.hover\:border-dhiPrimary-darkHover.focus\:bg-dhiPrimary-darkHover.focus\:border-dhiPrimary-darkHover.false.rounded-3.py-5px.px-4.text-sub3.leading-6.min-h-36.focus\:outline-none.flex.items-center.relative.justify-center.font-medium`) 
  } catch (e) {
    console.log(e);
  }
}

async function isExist(page) {
  try {
    // OPEN FIRST ELEMENT/APP
      await page.waitForSelector("#react-tabs-1 > div > div > div")
      await delay(200)
      await page.click("#react-tabs-1 > div > div > div")

      await navigationPromise

      await delay(5000) 
      
      //CLICK BUILD APP
      const pathBuildButton = '//*[@id="root"]/div/div/div[1]/div[2]/div/button';//"#root > div > div > div.header.py-1.bg-surface2.flex.sticky.top-0.z-1000000.justify-between > div.flex.justify-center.items-center.w-4\/12 > div > button"
      await page.waitForXPath(pathBuildButton)
      const buildButton = await page.$x(pathBuildButton)
      await delay(200)
      await buildButton[0].click();

      //CLICK BUILD WITH BLOC STATE MANAGMENT
      const blocItemPath = '/html/body/div[15]/div/div/div/div/div[2]/div/div[1]/div[1]';
      await page.waitForXPath(blocItemPath)
      const blocItemButton = await page.$x(blocItemPath)
      await delay(200)
      await blocItemButton[0].click()

      //CLICK CONFIRM
      const confirmOperationBuildPath = '/html/body/div[15]/div/div/div/div/div[3]/button[2]';
      await page.waitForXPath(confirmOperationBuildPath)
      const confirmOperationBuildButton = await page.$x(confirmOperationBuildPath)
      await delay(200)
      await confirmOperationBuildButton[0].click()
      
      // CLICK SYNC OR DOWNLOAD BUTTON 
      const syncOrDownloadPath = '//*[@id="root"]/div/div/div/div/div[1]/div[2]/button';
      await page.waitForXPath(syncOrDownloadPath)
      const syncOrDownloadButton = await page.$x(syncOrDownloadPath)
      await delay(200)
      await syncOrDownloadButton[0].click()

      // CLICK DOWNLOAD
      const downloadZipPath = '/html/body/div[13]/div/div/div/div/div[2]/div/div[2]/div[2]/button';
      await page.waitForXPath(downloadZipPath);  
      const downloadZipButton = await page.$x(downloadZipPath)
      await delay(200)
      await downloadZipButton[0].click()
    } catch(e) {
      console.log(e);
    }
}

(async () => {
  try {
    const browser = await puppeteer.launch({headless: false, executablePath: "./chrome/linux-116.0.5793.0/chrome-linux64/chrome"})
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    // GO TO AUTH PAGE
    await page.goto("https://accounts.google.com/signin/v2/identifier", {
      waitUntil: "networkidle2",
    });


    // ENTER LOGIN
    await navigationPromise
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', 'dev21maker@gmail.com')
    
    // CLICK NEXT
    await page.click('#identifierNext')
  
    // ENTER PASSWORD
    await page.waitForSelector('input[type="password"]', { visible: true })
    await page.type('input[type="password"]', 'nQrev60.rekam')
      
    // CLICK NEXT (LOGIN)
    await page.waitForSelector('#passwordNext', { visible: true })
    await page.click('#passwordNext')
    
    await page.waitForNavigation({timeout: 100000})
   
    const cookies = await page.cookies()

    //GO TO DHI_WISE LOGIN PAGE
    await page.goto("https://app.dhiwise.com/signin")

    await navigationPromise
    
    //CLICK SIGN IN WITH GOOGLE
    const button_g = await page.$x('//*[@id="root"]/div/div/div/div/div/div[2]/div[1]/div[1]/form/button[1]/div/div')
    await button_g[0].click()
  
    await navigationPromise
    await delay(500)
      
    // GET GENERATED NUMBER OF CHILD
    const num = await evaluateElement(page);
    await delay(5000);
    console.log(num);
    const global_path = `body > div:nth-child(${num})`;

    // CLOSE POPUP 
    await page.waitForSelector(global_path + " > div > div > div > div > button")
    const dialog_action = await page.$$(global_path + " > div > div > div > div > button")
    console.log(dialog_action)
    await page.click(global_path + " > div > div > div > div > button")

    await delay(3000)

    await navigationPromise

    // const flag = await checkIfExist();
    // if(flag != []) {
    //   await isExist(global_path, page, 'fvdfjvbdfhbvfhdbvdf')
    // } else {
    //   await isNotExist(page)  
    // }
  } catch(e) {
    console.log(e);
  } 
})();
