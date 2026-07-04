import { After, Before, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

setDefaultTimeout(60000);

let browser: Browser;
let page: Page;

Before(async () => {
    browser = await chromium.launch(); //browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
});

After(async () => {
    if (browser) {
        await browser.close();
    }
});

Given('I am on the Google homepage', async () => {
    await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
});

When('I search for {string} into the search box', async function (searchText: string) {
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.waitFor({ state: 'visible', timeout: 60000 });
    await searchBox.fill(searchText);
});

When('I click the search button', async function () {
    await page.keyboard.press('Enter');
});

Then('I should see results related to {string}', async function (searchText: string) {
    await page.waitForSelector('#search', { timeout: 60000 });

    const results = await page.locator('body').innerText();
    expect(results.toLowerCase()).toContain(searchText.toLowerCase());
});