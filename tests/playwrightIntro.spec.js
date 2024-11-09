import {test} from 'playwright/test';

test("Simple Playwright Automation Test01 @google", async ({page}) => {

    await page.goto('https://www.google.com');

    await page.waitForTimeout(3000);

    

/*
<textarea class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Search" value="" 
jsaction="paste:puy29d;" aria-label="Search" 
aria-autocomplete="both" aria-expanded="true" 
aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" data-ved="0ahUKEwjgxNz3iaSJAxXEJkQIHSLtJNQQ39UDCAY" 
aria-activedescendant="" style=""></textarea>


*/

});

test("Simple Playwright Automation Test02", async ({page}) => {

    await page.goto('https://www.youtube.com');

});