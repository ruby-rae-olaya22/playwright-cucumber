import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import BrowserManager from '../support/browser';

Given('I am on the Google homepage', async () => {
    const page = BrowserManager.getPage();
    await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
});

When('I search for {string} into the search box', async function (searchText: string) {
    const page = BrowserManager.getPage();
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.waitFor({ state: 'visible', timeout: 60000 });
    await searchBox.fill(searchText);
});

When('I click the search button', async function () {
    const page = BrowserManager.getPage();
    await page.keyboard.press('Enter');
});

Then('I should see results related to {string}', async function (searchText: string) {
    const page = BrowserManager.getPage();
    await page.waitForSelector('#search', { timeout: 60000 });

    const results = await page.locator('body').innerText();
    expect(results.toLowerCase()).toContain(searchText.toLowerCase());
});