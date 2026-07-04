import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

setDefaultTimeout(60000);

class BrowserManager {
    private browser!: Browser;
    private context!: BrowserContext;
    private page!: Page;

    async launch() {
        this.browser = await chromium.launch();

        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async close() {
        if (this.context) {
            await this.context.close();
        }

        if (this.browser) {
            await this.browser.close();
        }
    }

    getBrowser(): Browser {
        return this.browser;
    }

    getContext(): BrowserContext {
        return this.context;
    }

    getPage(): Page {
        return this.page;
    }
}

const browserManager = new BrowserManager();

Before(async () => {
    await browserManager.launch();
});

After(async () => {
    await browserManager.close();
});

export default browserManager;