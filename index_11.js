const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

const startX = 10;
const startY = 10;

const endX = 1000;
const endY = 1000;


try {
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: "C:/Users/barto/Downloads/chrome-win/chrome-win/chrome.exe"
  })
  const page = await browser.newPage()

  await page.setViewport({ width: 1280, height: 800 })
  // await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
  // await page.setViewport({ width: 375, height: 812 })

  await page.goto('https://app.uizard.io/login');

  const navigationPromise = page.waitForNavigation()

  await page.waitForSelector('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
  
  await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')

  // navigationPromise

  await page.waitForSelector('button.Buttonstyles__ButtonContainer-sc-eljay2-0.gEGpus', {visible: true})
  await delay(200)
  await page.click('button.Buttonstyles__ButtonContainer-sc-eljay2-0.gEGpus')
  // await page.waitFor(200)

  await navigationPromise
  await page.waitForSelector('input[type="email"]')
  await page.type('input[type="email"]', 'dev21maker@gmail.com')
  await page.click('#identifierNext')

  await page.waitForSelector('input[type="password"]', { visible: true })
  await page.type('input[type="password"]', 'nQrev60.rekam')

  await page.waitForSelector('#passwordNext', { visible: true })
  await page.click('#passwordNext')

  await navigationPromise

  await page.waitForSelector("#container > div > div > div > div > div.PrototypesOverviewstyles__ShortcutsContainer-sc-1wjv61p-1.fODLVY > div.CreateShortcutsstyles__Container-sc-1hw2lvc-0.fBVUCA > div > div:nth-child(3) > div > a > div > div")
  await delay(200)
  await page.click("#container > div > div > div > div > div.PrototypesOverviewstyles__ShortcutsContainer-sc-1wjv61p-1.fODLVY > div.CreateShortcutsstyles__Container-sc-1hw2lvc-0.fBVUCA > div > div:nth-child(3) > div > a > div > div")
  
  await navigationPromise

  await page.waitForSelector("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(2) > div.TextToPrototypePagestyles__TextAreaContainer-sc-1srzoig-10.fHpdU > textarea")
  await delay(200)
  await page.type("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(2) > div.TextToPrototypePagestyles__TextAreaContainer-sc-1srzoig-10.fHpdU > textarea", "Design suggest a movie for a specific mood")
  
  await page.waitForSelector("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(6)")
  await delay(200)
  await page.click("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(6)")

  await page.waitForSelector("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(3)")
  await delay(200)
  await page.click("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(3)")

  await page.waitForSelector("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(1)")
  await delay(200)
  await page.click("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div:nth-child(3) > div.TextToPrototypePagestyles__ChipsContainer-sc-1srzoig-14.jKfqXj > button:nth-child(1)")
  
  await page.waitForSelector("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.jdxuoP > button")
  await delay(200)
  await page.click("#container > div.styles__ScrollViewContent-sc-116lr37-3.dzCTtM > div.TextToPrototypePagestyles__PageContainer-sc-1srzoig-0.dNyNvX > div.TextToPrototypePagestyles__MiddleSection-sc-1srzoig-4.goKQcT > div.TextToPrototypePagestyles__MainContainer-sc-1srzoig-5.lmmFPs > div.TextToPrototypePagestyles__Section-sc-1srzoig-8.jdxuoP > button")

  await page.waitForNavigation({timeout: 300000})

  // await navigationPromise

  //Click draft
  // await page.waitForSelector("#container > div > div > div > div > div:nth-child(4) > div > div > div.PrototypeCardstyles__Container-sc-t92hsg-0.dllBGL > div.PrototypeCardstyles__Cover-sc-t92hsg-1.cKtPmB > a > div")
  // await delay(200)
  // await page.click("#container > div > div > div > div > div:nth-child(4) > div > div > div.PrototypeCardstyles__Container-sc-t92hsg-0.dllBGL > div.PrototypeCardstyles__Cover-sc-t92hsg-1.cKtPmB > a > div")

  // await navigationPromise

  //press handoff button
  await page.waitForSelector("#prototype-editor-container > div.PrototypeEditorstyles__Navbar-sc-19wpwuq-1.Dzlkq > nav > div > div.EditorNavbarstyles__BaseContainer-sc-jbcr8w-1.EditorNavbarstyles__RightContainer-sc-jbcr8w-5.jBgmcY > div.EditorNavbarstyles__BaseContainer-sc-jbcr8w-1.EditorNavbarstyles__RightActionsContainer-sc-jbcr8w-10.eCYNKq > button > div")
  await delay(200)

  await page.click("#prototype-editor-container > div.PrototypeEditorstyles__Navbar-sc-19wpwuq-1.Dzlkq > nav > div > div.EditorNavbarstyles__BaseContainer-sc-jbcr8w-1.EditorNavbarstyles__RightContainer-sc-jbcr8w-5.jBgmcY > div.EditorNavbarstyles__BaseContainer-sc-jbcr8w-1.EditorNavbarstyles__RightActionsContainer-sc-jbcr8w-10.eCYNKq > button > div")


  // Click select field
  await page.waitForSelector("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.PrototypeEditorstyles__Canvas-sc-19wpwuq-3.kTEQnI > div.PrototypeEditorstyles__CanvasLayers-sc-19wpwuq-4.gzNfHx")
  await delay(200)
  await page.click("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.PrototypeEditorstyles__Canvas-sc-19wpwuq-3.kTEQnI > div.PrototypeEditorstyles__CanvasLayers-sc-19wpwuq-4.gzNfHx")

  //Select all elements
  await page.keyboard.down('Control')
  await page.keyboard.press('A')

  await page.keyboard.up('Control')

  //Select extension
  await page.waitForSelector("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.RightControlsContentstyles__Container-sc-1ekh74n-0.kFXSuS > div > div.CanvasSidebarstyles__ViewContainer-sc-1ey6e25-0.bYNwM > div > div > div > div > div.ExportOptionsstyles__Container-sc-1n35eqo-3.hlmOXP > div > div > div.styles__Content-sc-7gdnot-3.TqlYF > div > div > div.ExportOptionsstyles__OptionsContainer-sc-1n35eqo-0.kuhoNm > div:nth-child(2) > div > div")
  await delay(200)

  await page.click("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.RightControlsContentstyles__Container-sc-1ekh74n-0.kFXSuS > div > div.CanvasSidebarstyles__ViewContainer-sc-1ey6e25-0.bYNwM > div > div > div > div > div.ExportOptionsstyles__Container-sc-1n35eqo-3.hlmOXP > div > div > div.styles__Content-sc-7gdnot-3.TqlYF > div > div > div.ExportOptionsstyles__OptionsContainer-sc-1n35eqo-0.kuhoNm > div:nth-child(2) > div > div")

  //Select SVG
  await page.waitForSelector("#floating-ui-root > div > div > div > div > div > div:nth-child(3)")
  await delay(200)

  await page.click("#floating-ui-root > div > div > div > div > div > div:nth-child(3)")

  //Press Export
  // await page.waitForSelector("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.RightControlsContentstyles__Container-sc-1ekh74n-0.kFXSuS > div > div.CanvasSidebarstyles__ViewContainer-sc-1ey6e25-0.bYNwM > div > div > div > div > div.ExportOptionsstyles__Container-sc-1n35eqo-3.hlmOXP > div > div > div.styles__Content-sc-7gdnot-3.TqlYF > div > div > div.ExportOptionsstyles__ExportButtonContainer-sc-1n35eqo-2.knGCJX > button")
  // await delay(200)

  // await page.click("#prototype-editor-container > div.PrototypeEditorstyles__Main-sc-19wpwuq-2.dVmrDU > div.RightControlsContentstyles__Container-sc-1ekh74n-0.kFXSuS > div > div.CanvasSidebarstyles__ViewContainer-sc-1ey6e25-0.bYNwM > div > div > div > div > div.ExportOptionsstyles__Container-sc-1n35eqo-3.hlmOXP > div > div > div.styles__Content-sc-7gdnot-3.TqlYF > div > div > div.ExportOptionsstyles__ExportButtonContainer-sc-1n35eqo-2.knGCJX > button")


  // await delay(180000)

  // await browser.close()

})()
} catch(e) {
  console.log(e)
}