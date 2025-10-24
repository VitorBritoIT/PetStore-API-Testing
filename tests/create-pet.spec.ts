import { test, expect, request } from '@playwright/test';


test('Create PET', async () => {
    const petId = 881995;

    const apiContext = await request.newContext();
    const response = await apiContext.post('https://petstore.swagger.io/v2/pet', {
        data: {
            "id": `${petId}`,
            "category": {
                "id": 0,
                "name": "Vitor Dachshund"
            },
            "name": "Vitor Dachshund",
            "photoUrls": [
                "https://ezydog.com.au/cdn/shop/articles/2_6fdc89ee-d1d4-495a-b37a-9a1ef4e0e3af.jpg?v=1750134347&width=681"
            ],
            "tags": [
                {
                    "id": 95,
                    "name": "Vitor Dachshund"
                }
            ],
            "status": "available"
        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe('Vitor Dachshund');
    
    console.log(`PET created with ID ${petId}`);
});