import {chromium,expect,test} from "@playwright/test";
import { title } from "process";


test(`SalesForce New Account Creation`, async ({page}) => {

    page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("sanju@testleaf.com");
    await page.getByLabel("Password").fill("Kivisha@123");
    await page.click("#Login");
    await page.waitForTimeout(5000);

     //click AppLauncher using class locator
     await page.click(".appLauncher button");
    
     //click viewAll using getByText
     await page.getByText("View All").click();

    //Navigate to Dashboards
    //Enter 'Dashboard' in the App Launcher Search box using getByPlaceHolder\
    await page.getByPlaceholder("Search apps or items...").fill("Dashboards");

     // Click Dashboard using index based XPath
     await page.click("//mark[text()='Dashboards']");

     //click New Dashboard
    await page.click("//div[@title='New Dashboard']");
    await page.waitForTimeout(5000);

    const framElem= page.frameLocator("//iframe[@title='dashboard']");
    await framElem.locator("#dashboardNameInput").fill("Salesforce Automation by Sangeetha");

    await framElem.locator("#submitBtn").click();
    

     //Save and verify dashboard
    await framElem.locator("//button[text()='Save']").click();

    //await page.click("(//button[text()='Save'])[3]");
    let dashboardTitle=await framElem.locator("//label[@for='edit-dashboard-title']/following-sibling::div/div/span").innerText();
    console.log(`Title of Dashboard:${dashboardTitle}`);
    
})

let accessToken:any;
let instUrl:any;
let dashboardId:any;

test(`test to generate token`,async({request}) =>{

    const url=  "https://login.salesforce.com/services/oauth2/token";
    const clientID= "3MVG9GCMQoQ6rpzRLWSyZNDn0_bDuL7LZ1wXHyr4Pc_cH3rpeJBcl0T4tFHV9gzoVr1ZkL_dISBHukpW3VeFB";
    const clientSecret="805A3BBEECFF7F1BF54BA3BDF80A92EF125BAE5DAFBAF4849E6ACE49F3D885AE";
    const userName="sanju@testleaf.com";
    const password="Kivisha@123";
    const grantType="password";

    const generateToken = await request.post(url,
        {
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded",
                "Connection":"keep-alive"
            },

            form:{
                "grant_type":grantType,
                "client_id":clientID,
                "client_secret":clientSecret,
                "username": userName,
                "password": password

            }

        })
        const generatingTokenJSON= await generateToken.json();
        console.log(generatingTokenJSON);

    //Access Token
     accessToken=await generatingTokenJSON.access_token;
    console.log(`Access token generated:${accessToken}`);
    
    //Instance url
     instUrl= generatingTokenJSON.instance_url;
    console.log(`instance url"${instUrl}`);

        //To verify create status code
        const apiStatusCode = generateToken.status();
        console.log("status code for access token generation: "+ apiStatusCode);
        expect(apiStatusCode, "expecting api status code to be 200").toBe(200);  
        
})



test(`Test to get response for Dashboard name and ID`, async({request})=> {

    const url=`${instUrl}/services/data/v58.0/sobjects/Dashboard`;

    const getResponse = await request.get(url,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            }
        })
        //To get json response
        const respBody2= await getResponse.json();
        console.log(respBody2);

        //To verify get status code
        const apiStatusCode = getResponse.status();
        console.log("Status code to get response: "+ apiStatusCode);
        expect(apiStatusCode, "expecting api status code to be 200").toBe(200);

        //To get Dashboard ID
        dashboardId= respBody2.recentItems[0].Id;
        console.log(`Dashboard ID:${dashboardId}`);
        
        //To get Dashboard Title
        let dashboardTitle = respBody2.recentItems[0].Title;
        console.log(`Dashboard Title:${dashboardTitle}`);
        
})



test(`Test to delete dashboard ID`, async({request})=> {

    const url=`${instUrl}/services/data/v58.0/sobjects/Dashboard/${dashboardId}`;

    const delResponse = await request.delete(url,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            }
        })

      
        //To verify get status code
        const apiStatusCode = delResponse.status();
        console.log("Status code to delete response: "+ apiStatusCode);
        expect(apiStatusCode, "expecting api status code to be 204").toBe(204);
        
        })
