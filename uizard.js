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

    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })
  
    try {
    await page.goto('https://uizard.com/login/',{
        'waitUntil' : 'networkidle2'
    })

    await delay(2000)

    await page.waitForSelector('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div:nth-child(1) > div.Inputstyles__InputContainer-sc-1qligmc-0.eKcDFc > input')
    await delay(200)
    await page.type('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div:nth-child(1) > div.Inputstyles__InputContainer-sc-1qligmc-0.eKcDFc > input', process.env.DHI_LOGIN)

    await page.waitForSelector('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div:nth-child(2) > div.LoginFormstyles__InputContainer-sc-mi4qvc-0.kepYrM > div.Inputstyles__InputContainer-sc-1qligmc-0.eKcDFc > input')
    await delay(200)
    await page.type('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div:nth-child(2) > div.LoginFormstyles__InputContainer-sc-mi4qvc-0.kepYrM > div.Inputstyles__InputContainer-sc-1qligmc-0.eKcDFc > input', process.env.UIZARD_PASSWORD)

    await page.waitForSelector('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div.FormGroupstyles__FromGroupContainer-sc-4l53rp-0.glpBey > button')
    await delay(200)
    await page.click('#app-root > div > div > div.styles__Content-sc-1uor35h-1.hzYiqf > div.AuthContent-sc-1gkngd7-0.yZLki > form > div.FormGroupstyles__FromGroupContainer-sc-4l53rp-0.glpBey > button')

    await delay(2000)  
    
    const dialog = await page.waitForSelector('xpath/html/body/div[5]/div/div[2]/div/div/div/div/div[2]/button/div/div')
    await delay(200)
    await dialog.click()
    
    await page.waitForSelector('#floating-ui-root > div > div.styles__Dialog-sc-899c79-2.kLWexQ > div > div > div > div > div.FrontPageVideoModalstyles__ButtonWrapper-sc-1r8ebc2-3.bycCel > button > div')
    await delay(200)
    await page.click('#floating-ui-root > div > div.styles__Dialog-sc-899c79-2.kLWexQ > div > div > div > div > div.FrontPageVideoModalstyles__ButtonWrapper-sc-1r8ebc2-3.bycCel > button > div')  

    await page.waitForSelector('#container > div > div > div > div > div.PrototypesOverviewstyles__ShortcutsContainer-sc-1wjv61p-1.fODLVY > div.CreateShortcutsstyles__Container-sc-1hw2lvc-0.fBVUCA > div > div:nth-child(2) > div > a > div > div')
    await delay(200)
    await page.click('#container > div > div > div > div > div.PrototypesOverviewstyles__ShortcutsContainer-sc-1wjv61p-1.fODLVY > div.CreateShortcutsstyles__Container-sc-1hw2lvc-0.fBVUCA > div > div:nth-child(2) > div > a > div > div')

    await page.waitForSelector('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.iRpCRF > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.cDfgem > div.TextToPrototypePagestyles__TextAreaContainer-sc-1srzoig-10.fHpdU > textarea')
    await delay(200)
    await page.type('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.iRpCRF > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.cDfgem > div.TextToPrototypePagestyles__TextAreaContainer-sc-1srzoig-10.fHpdU > textarea', 'Create a dating app with summer motive')

    await page.waitForSelector('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.iRpCRF > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.fxQcgh > button > div')
    await delay(200)
    await page.click('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.iRpCRF > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.fxQcgh > button > div') 

    await page.waitForSelector('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.TextToPrototypePagestyles__SecondaryContainer-sc-1srzoig-6.kbbdNm > div.TextToPrototypePagestyles__CreateCards-sc-1srzoig-22.bzekpT > div:nth-child(2)')
    await delay(200)
    await page.click('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.TextToPrototypePagestyles__SecondaryContainer-sc-1srzoig-6.kbbdNm > div.TextToPrototypePagestyles__CreateCards-sc-1srzoig-22.bzekpT > div:nth-child(2)')

    for(let i = 0; i < 3; i++ ) {
        let number =  Math.floor(Math.random() * 10) + 1;
        await page.waitForSelector(`#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.GenerateFromPromptstyles__Container-sc-i87814-0.cYclvR > div.GenerateFromPromptstyles__Section-sc-i87814-1.ghOgXx > div.GenerateFromPromptstyles__ChipsContainer-sc-i87814-6.dkdwqu > button:nth-child(${number})`)
        await delay(200)
        await page.click(`#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.GenerateFromPromptstyles__Container-sc-i87814-0.cYclvR > div.GenerateFromPromptstyles__Section-sc-i87814-1.ghOgXx > div.GenerateFromPromptstyles__ChipsContainer-sc-i87814-6.dkdwqu > button:nth-child(${number})`)
    }

    await page.waitForSelector('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.GenerateFromPromptstyles__Container-sc-i87814-0.cYclvR > div.GenerateFromPromptstyles__ButtonsContainer-sc-i87814-7.fmMOao > button.AiButtonstyles__Button-sc-1qwtllp-1.hVMjgI.GenerateFromPromptstyles__GenerateButton-sc-i87814-8.iifjcG')
    await delay(200)
    await page.click('#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.GenerateFromPromptstyles__Container-sc-i87814-0.cYclvR > div.GenerateFromPromptstyles__ButtonsContainer-sc-i87814-7.fmMOao > button.AiButtonstyles__Button-sc-1qwtllp-1.hVMjgI.GenerateFromPromptstyles__GenerateButton-sc-i87814-8.iifjcG')

    await delay(60000)
    } catch(e) {
      console.log(e)
      page.screenshot({path: 'screenshot.png'});
      process.exit(1)
    }
})();
