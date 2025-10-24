import { test, expect, request } from '@playwright/test';


test('Delete existing PET', async () => {
    const petID = 881995;

    const apiContext = await request.newContext();
    const response = await apiContext.delete(`https://petstore.swagger.io/v2/pet/${petID}`);
    
    expect(response.status()).toBe(200);

    console.log(`The PET with ID ${petID} has been removed.`)
});