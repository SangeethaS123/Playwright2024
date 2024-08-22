import {chromium,expect,test} from "@playwright/test";

test(`SalesForce New Account Creation`, async ({page}) => {

    page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("sanju@testleaf.com");
    await page.getByLabel("Password").fill("Kivisha@123");
    await page.click("#Login");
    await page.waitForTimeout(5000);

    //verify title and url of the page using assertions
    const title1 = await page.title()
    console.log(`Title of page is : ${title1}`);
    expect(page).toHaveTitle("Home | Salesforce");

    const url1=page.url()
    console.log(`URL of the page is : ${url1}`);
    expect(page).toHaveURL("https://testleafcom12-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    //click AppLauncher using class locator
    await page.click(".appLauncher button");
    

    //click viewAll using getByText
    await page.getByText("View All").click();

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder\
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    // Click Service using index based XPath
    await page.click("(//div[@class='slds-app-launcher__tile-body slds-truncate']/div/a)[1]");

    //Click Accounts using attribute based CSS selector
    await page.click("[title='Accounts']");

    //Click New button
    await page.click("//div[@title='New']");

    let name ="Sangeetha";
    //Enter Account name using attribute based CSS selector
    await page.locator("input[name='Name']").fill(name);

    // Click Save button using XPath
    await page.click("//button[text()='Save']");

    //Verify the toast message displayed
    expect(page.locator(".toastMessage")).toContainText(`Account ${name} was created`);



    
    




})