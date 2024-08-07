/* Launch Chromium in non-headless mode
- Create a new browser context.
- Open a new page within the browser context.
- Load the url https://login.salesforce.com/
- Use your Salesforce credentials that you’ve created
Requirements:
- Enter the username.
- Enter the password.
- Click the Login button.
- Wait for 10 seconds
- Print the page title and the current url of the page
- Close the browser */



import {chromium,test} from "@playwright/test";

test(`SalesForce Login by launching the browser`, async () => {

//Create a browser instance
const browser = await chromium.launch({headless: false, channel: "chrome"});

//Create the browser context
const browserContext = await browser.newContext();

//Create a new page
const page = await browserContext.newPage();

//Load the url
await page.goto("https://login.salesforce.com/");

await page.waitForTimeout(5000);

//enter username
await page.locator("#username").fill("sanju@testleaf.com");

//enter password
await page.locator("#password").fill("Kivisha@123");

//click on login button
await page.locator("#Login").click();
await page.waitForTimeout(10000);

//get url of the page
const url= page.url();
console.log(`URL of the page is : ${url}`);

//get title of the page
const title = await page.title();
console.log(`Title of the page is : ${title}`);

await page.waitForTimeout(5000);

//Gracefully clearing the resources
//Close the page
await page.close();

//Close the browser context 
await browserContext.close();

//Close the browser
await browser.close();

})