import { chromium, expect, test } from "@playwright/test";

test(`CreateLead in LeafTaps`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //enter username
    await page.getByLabel("Username").fill("Demosalesmanager");

    //enter password
    await page.fill("#password", 'crmsfa');

    //click login
    await page.click('.decorativeSubmit');

    //click crmsfa link in homepage
    await page.click("//a[contains(text(),'CRM')]");

    //click Leads
    await page.locator("//a[text()='Leads']").click();

    //click create Lead
    await page.click("//a[text()='Create Lead']");

    //enter Lead details
    await page.fill("#createLeadForm_companyName", 'TCS');
    await page.fill('#createLeadForm_firstName','Sangee');
    await page.fill('#createLeadForm_lastName','Selva');
    await page.fill('#createLeadForm_personalTitle','Mrs');
    await page.fill('#createLeadForm_generalProfTitle','Manager');
    await page.fill('#createLeadForm_annualRevenue','10000');
    await page.fill('#createLeadForm_departmentName','Testing');
    await page.fill('#createLeadForm_primaryPhoneNumber','9876543210');
   

    await page.waitForTimeout(5000);
    //const cName=await page.locator('#createLeadForm_companyName').innerText();
    //Verify the company name, first name, last name and the status 
   // await expect(page.locator('#createLeadForm_companyName')).toHaveText('TCS'); 

    await page.click('.smallSubmit');
    await page.waitForTimeout(5000);
    
    //Get the page title
    const title =await page.title();
    console.log(`Title of page is : ${title}`);
    //await expect(page).toHaveTitle(/View Lead/);
    






})