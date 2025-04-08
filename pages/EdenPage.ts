// pages/GooglePage.ts
import { Page, Locator } from '@playwright/test';

export class EdenPage {
    public page: Page;
    // public searchInput: Locator;
    // public resultStats: Locator;
    public logoPage: Locator;
    public priceList: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.searchInput = page.locator('//*[@id="APjFqb"]');
        // this.resultStats = page.locator('#result-stats');
        this.logoPage = page.locator('#logo');
        this.priceList = page.locator('#menu-item-6068').getByRole('link', { name: 'Cenovnik' })
    }

    async openPricelist() {
        await this.priceList.click();
    }

    // async searchAndWaitForResults(query: string) {
    //     await this.search(query);
    //     await this.resultStats.waitFor();
    // }

    // async getSearchInputValue(): Promise<string> {
    //     return await this.searchInput.inputValue();
    // }

    // async switchToImages() {
    //     await this.page.locator('a[aria-label="Images"]').click();
    // }
}