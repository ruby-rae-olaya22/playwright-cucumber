import { expect, type Locator, type Page } from '@playwright/test';
import BrowserManager from '../support/browser';

export class GoogleHomePage {
    readonly page: Page;
    readonly searchBox: Locator;

    constructor(page?: Page) {
        this.page = page ?? BrowserManager.getPage();
        this.searchBox = this.page.locator('textarea[name="q"]');
    }

    async navigate() {
        await this.page.goto('https://www.google.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    }

    async search(searchText: string) {
        await this.searchBox.waitFor({ state: 'visible', timeout: 60000 });
        await this.searchBox.fill(searchText);
    }

    async pressEnter() {
        await this.page.keyboard.press('Enter');
    }

    async verifyResults(searchText: string) {
        await this.page.waitForSelector('#search', { timeout: 60000 });
        const results = await this.page.locator('body').innerText();
        expect(results.toLowerCase()).toContain(searchText.toLowerCase());
    }
}