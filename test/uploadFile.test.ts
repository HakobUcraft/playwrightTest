import { chromium } from 'playwright'

describe('Upload file', () => {
    const filePath0 = './filePath';
    const filePath1 = './filePath';
    test("Upload files using set input fiels", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.setInputFiels("xpath", [filePath0,filePath1])
    })
})