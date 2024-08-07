import {chromium,expect,test} from "@playwright/test";
import { TIMEOUT } from "dns";

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
//await page.waitForTimeout(10000);

//click App launcher
await page.click("[title='App Launcher']");

//click View All link
await page.click("[aria-label='View All Applications']");

//Enter value in App launcher search
await page.fill("//input[@class='slds-input']","Service",{timeout:10000});

//click on Service link
await page.locator("//mark[text()='Service']").first().click();
await page.waitForTimeout(5000);

//cick on Cases dropdown
await page.click("//a[@title='Cases']/following-sibling::one-app-nav-bar-item-dropdown");
//0r "//a[@title='Cases']+ * a  --->to go toimmediate sibling

//click new case
await page.click("//span[text()='New Case']");

//click search contacts and click new contact
await page.getByPlaceholder("Search Contacts...").click();
await page.click("//span[text()='New Contact']");

//click and select salutation 
await page.click("//button[@name='salutation']");
await page.click("//span[text()='Ms.']");

//enter firstname,lastname
await page.getByPlaceholder("First Name").fill("Sangee");
await page.getByPlaceholder("Last Name").fill("Sanju");

//click save
await page.locator("//button[@name='SaveEdit']").nth(1).click();

//check if first and last name of alert msg is correctly displayed
let contverify=await page.locator("//div[contains(@id,'toastDescription')]/span/a/div").innerText();
console.log(contverify);
expect(contverify).toContain("Ms. Sangee Sanju");

//check if contact created alert is displayed
//let contactCreateAlert = page.locator("//div[@role='alert' and @data-key='success']");
let contactCreateAlert = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
await expect(contactCreateAlert).toBeVisible();

//print the alertmsg
let contactCreateMsg = await contactCreateAlert.innerText();
console.log(contactCreateMsg);

//close the alert msg box
await page.click("//lightning-icon[@class='slds-icon-utility-close slds-icon_container']/span/lightning-primitive-icon");

// Click Search Accounts input field in Account Name and click on the New Account link
await page.getByPlaceholder("Search Accounts...").click();
await page.click("//span[text()='New Account']");

//enter acc name , acc num and rating-hot and save
await page.fill("//input[@name='Name']",'Sangeetha');
await page.fill("//input[@name='AccountNumber']",'1234ADF');
await page.click("//button[@aria-label='Rating']");
await page.click("//span[text()='Hot']");

await page.locator("//button[@class='slds-button slds-button_brand']").nth(1).click();
await page.waitForTimeout(5000);
//check if Account created alert is displayed
let AccountCreateAlert = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
await expect(AccountCreateAlert).toBeVisible();

await page.waitForLoadState("load");

//print the alertmsg
let AccountCreateMsg = await AccountCreateAlert.innerText();
console.log(AccountCreateMsg);

//Select status as New
await page.click("//button[@data-value='New']");
await page.locator("//span[text()='New']").nth(1).click(); //if xpath is (//span[text()='New'])[2]

//select priority as High
await page.click("//button[@aria-label='Priority']");
await page.click("//span[text()='High']");

//select case origin as email
await page.click("//button[@aria-label='Case Origin']");
await page.click("//span[text()='Email']");

//enter subject and description under Description Information and click save
await page.fill("//input[@name='Subject']",'Product Return Request');
await page.fill("//label[text()='Description']/following-sibling::div/textarea",'Requesting a return for a defective product');
await page.click("//button[text()='Save']");

//Verify if the case is created
let CaseCreateAlert= page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
await expect(CaseCreateAlert).toBeVisible();

let CaseCreateAlertMsg=await CaseCreateAlert.innerText();
console.log(CaseCreateAlertMsg);

//Edit status under Details section -change new to escalated-save
await page.locator("//span[text()='Edit Status']/preceding-sibling::span").click();
await page.click("//button[@aria-label='Status']");
await page.click("//span[@title='Escalated']"),{TIMEOUT:5000};
await page.click("//button[text()='Save']");

//Share an Update input field and click on the Share button
await page.click("//span[text()='Share an update...']");
await page.waitForTimeout(10000);
//await page.locator("//div[@class='slds-rich-text-editor__textarea slds-grid ql-container']").click();
//await page.click("//div[@data-placeholder='Share an update...']");
await page.fill("//div[@data-placeholder='Share an update...']//p[1]", 'New case to escalated case');
page.waitForTimeout(15000);

await page.click("//button[contains(text(),'Share')]");
await page.waitForTimeout(10000);

//check shared content is updated under All updates categpry
let sharedUpdate = page.locator("//div[contains(@class,'feedBodyInner Desktop oneApp')]/p/span");
let sharedText = await sharedUpdate.innerText();
await expect(sharedUpdate).toBeVisible();
console.log(sharedText);

//click on Dropdown and choose the Like on Chatter
await page.locator("//button[contains(@class,'slds-button slds-button_icon-border')]//lightning-primitive-icon").nth(2).click();
await page.click("//span[text()='Like on Chatter']");
let PostAlert= page.locator("//div[@class='forceVisualMessageQueue']/div/div");
let PostAlertMsg=await PostAlert.innerText();
console.log(PostAlertMsg);
await expect(PostAlert).toContainText("Post was liked.");




})










