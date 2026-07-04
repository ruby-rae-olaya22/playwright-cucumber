import { Given, When, Then } from '@cucumber/cucumber';
import { GoogleHomePage } from '../pages/google_homepage';

Given('I am on the Google homepage', async function (this: any) {
    const googleHomePage = new GoogleHomePage(this.page);
    await googleHomePage.navigate();
});

When('I search for {string} into the search box', async function (this: any, searchText: string) {
    const googleHomePage = new GoogleHomePage(this.page);
    await googleHomePage.search(searchText);
});

When('I click the search button', async function (this: any) {
    const googleHomePage = new GoogleHomePage(this.page);
    await googleHomePage.pressEnter();
});

Then('I should see results related to {string}', async function (this: any, searchText: string) {
    const googleHomePage = new GoogleHomePage(this.page);
    await googleHomePage.verifyResults(searchText);
});