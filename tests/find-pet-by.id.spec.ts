import { test, expect, request } from '@playwright/test';


test('Find PET by ID', async () => {
    const petId = 881995;
    const apiContext = await request.newContext();
    const response = await apiContext.get(`https://petstore.swagger.io/v2/pet/${petId}`);
    
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe('Vitor Dachshund');

    console.log(`The pet ID ${petId} has been found.`);
});