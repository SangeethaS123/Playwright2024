/* Create a script using Playwright to interact with buttons on the LeafGround "Button" page, 
asserting their properties and behaviors like visibility, disablement status, position, and color 
change on actions */

import { test, expect } from "@playwright/test"
import exp from "constants";

test(`Test to click buttons`, async ({ page }) => {

    await page.goto("https://leafground.com/button.xhtml");
    await page.locator(".card").filter({ hasText: "Click and Confirm title." }).locator("button").click();
    await page.waitForLoadState('load', { timeout: 10000 });


    //VERIFY title and url of page
    const title = await page.title();
    console.log(`Title : ${title}`);
    expect(title).toContain("Dashboard");

    const url = page.url();
    console.log(`URL of the page: ${url}`);
    expect(url).toContain("dashboard");

    await page.goBack();

    //Disable button
    let button2 = page.locator("button[disabled]");
    expect(button2).toBeDisabled();

    //img button
    let card3 = page.locator(".card").filter({ hasText: 'Click Image Button and Click on any hidden button' })
        .getByRole("button", { name: "Image" });
    card3.click();

    await expect(page.locator(".ui-connected-overlay-enter-done >div>img")).toBeVisible();

    //Round buttons
    let card4 = page.locator(".card").filter({ hasText: "How many rounded buttons are there?" })
        .locator("button");
    expect(await card4.count()).toEqual(4);

}

)