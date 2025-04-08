import { test, expect } from '@playwright/test';
import { EdenPage } from '../pages/EdenPage';

test.describe('Eden', () => {
    let edenPage: EdenPage;

    test.beforeEach(async ({ page }) => {
        edenPage = new EdenPage(page);
        await page.goto('https://www.edenishrana.com');
    });


    test('should open homepage', async ({ page }) => {
        await expect(edenPage.logoPage).toBeVisible();
        await expect(page).toHaveURL('https://edenishrana.com');
    });

    test('should open pricelist', async ({ page }) => {
        await edenPage.openPricelist();
        await expect(page).toHaveURL('https://edenishrana.com/cenovnik/');
    });

    test('should verify pricelists show correct prices', async ({ page }) => {
        await edenPage.openPricelist();
        // await expect(page).toHaveURL('https://edenishrana.com/cenovnik/');
        const numberInputField = page.locator('#field_5pmor');


        const inputValue = await numberInputField.inputValue();

        const expectedValue = '2500';
        console.log(inputValue + 'ovo je cena koju prikazuje');
        console.log(inputValue);
    });


    // test('should navigate to images search', async ({ page }) => {
    //     await edenPage.switchToImages();
        
    //     // Verify we're on the images page
    //     await expect(page).toHaveURL(/.*tbm=isch/);
    // });

    // test('should handle empty search gracefully', async () => {
    //     // Try to search with empty string
    //     await edenPage.search('');
        
    //     // Verify we're still on Google's page
    //     await expect(edenPage.page).toHaveURL(/.*google\.com/);
    // });

    // test('demonstrates various Playwright features', async ({ page }) => {
    //     // Screenshot example
    //     await page.screenshot({ path: 'google-home.png' });

    //     // Network request handling
    //     const searchPromise = page.waitForResponse(response => 
    //         response.url().includes('search') && response.status() === 200
    //     );
        
    //     await edenPage.search('Playwright');
    //     await searchPromise;

    //     // Multiple element handling
    //     const searchResults = page.locator('#search .g');
    //     await expect(searchResults).toHaveCount(5);

    //     // Keyboard navigation
    //     await edenPage.searchInput.press('Tab');
    //     await edenPage.searchInput.press('Enter');
    // });
}); 