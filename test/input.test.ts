import { Browser, BrowserContext, chromium, Page } from "playwright"

describe("Learn how to handle input fields", () => {
    let browser: Browser;
    let conetext: BrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })
        conetext = await browser.newContext();
        page = await conetext.newPage();
        page.goto('https://springbuilder.frontjet.com/')
    })

    test('Eneter sign-up credentials', async () => {
        await page.click('text="Sign Up"');
        const username = await page.$("#usernaem");
        username?.type("test by hakob");
    })
})