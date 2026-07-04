import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import BrowserManager from '../support/browser';

setDefaultTimeout(60000);

Before(async () => {
    await BrowserManager.launch();
});

After(async () => {
    await BrowserManager.close();
});