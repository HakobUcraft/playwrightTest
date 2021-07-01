import { chromium } from "playwright";

describe("Firts launch browser by playwright", () => {
    test('Open publick mode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();   
        await page.goto('https://springbuilder.frontjet.com/');
        await browser.close()
    })
}) 