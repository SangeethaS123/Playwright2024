import { chromium, expect, test } from "@playwright/test";
import { log } from "console";

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


    await page.click('.smallSubmit');
    await page.waitForTimeout(5000);
    
    //Assertions
    //Verify company Name,,FirstName, LastName
   
    const cName=(await page.locator('#viewLead_companyName_sp').innerText()).split(" ");
    expect(cName[0]).toContain("TCS");
    console.log(cName[0]);

    
    const fName = await page.locator("#viewLead_firstName_sp").innerText();
    console.log(fName);
    expect(fName).toMatch("Sangee");
    
    
    const LName = await page.locator("#viewLead_lastName_sp").innerText();
    console.log(LName);
    await(expect(page.locator("#viewLead_lastName_sp"))).toHaveText("Selva");

    
    //Get the page title
    console.log(`Title of page is : ${await page.title()}`);
    
    



})