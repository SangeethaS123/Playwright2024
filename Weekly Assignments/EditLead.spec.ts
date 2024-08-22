import { chromium, expect, test } from "@playwright/test";
import { deprecate } from "util";

test(`EditLead in LeafTaps`, async ({ page }) => {

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

     //click Find lead
     await page.click('//a[text()="Find Leads"]');

     //Enter name in Findby tab
     await page.fill("(//input[@name='firstName'])[3]",'Sangee');

     //click on find leads button
     await page.click("//button[text()='Find Leads']");

     //click on first resulting Lead
     await page.locator(".x-grid3-td-partyId.x-grid3-cell-first a").first().click();
     //another xpath =//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']/div/a

     //click Edit 
     await page.click("//a[text()='Edit']");

     //Edit  Company name, Annual Revenue, Department, Description
     await page.fill("#updateLeadForm_companyName",'ICICI');
     await page.fill("#updateLeadForm_annualRevenue",'50000');
     await page.fill("#updateLeadForm_departmentName",'Automation');
     await page.fill("#updateLeadForm_description",'Playwright');
     await page.click("//input[@value='Update']");

     //Verify edited fields(Company name, Annual Revenue, Dept name and Description)
    const CName_Edit= (await page.locator("#viewLead_companyName_sp").innerText()).split(" ");
    console.log(CName_Edit[0]);
    expect(CName_Edit[0]).toContain("ICICI");

    console.log(`Annual Revenue: ${await page.locator("#viewLead_annualRevenue_sp").innerText()}`);
    expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText("$50,000.00");

    const DeptName_Edit = await page.locator("#viewLead_departmentName_sp").innerText();
    console.log(DeptName_Edit);
    expect(DeptName_Edit).toContain("Automation");

    const Descript_Edit = await page.locator("#viewLead_description_sp").innerText();
    console.log(Descript_Edit);
    expect(Descript_Edit).toContain("Playwright");

    

     //Enter page title
     console.log(`Title of Edit page is : ${await page.title()}`);
  


})