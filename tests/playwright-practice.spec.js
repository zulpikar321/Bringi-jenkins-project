import { test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test("Youtube Search @youtube", async ({ page }) => {
  // Navigate to https://www.youtube.com
  await page.goto("https://www.youtube.com");

  // pause for 2 seconds
   await page.waitForTimeout(2000);

   const searchBox = page.locator("//input[@id='search']");

   await searchBox.click();
   //searchBox.type ("Cydeo");
   await searchBox.fill("Cydeo");

   //await page.waitForTimeout(2000);

   await searchBox.press("Enter");

   //await page.waitForTimeout(2000);

   const firstVideo = page.locator("(//a[@id='video-title'])[1]");
   await firstVideo.click();

   await page.waitForTimeout(4000);
   
   page.close()
  //browser.close()


});