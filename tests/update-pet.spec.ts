import { test, expect, request } from '@playwright/test';

test('Update existing PET', async () => {
    
    const petID = 881995;
    const apiContext = await request.newContext();
    const response = await apiContext.put('https://petstore.swagger.io/v2/pet', {
        data: {
            "id": `${petID}`,
            "category": {
                "id": 0,
                "name": "Vitor Caramelo"
            },
            "name": "Vitor Caramelo",
            "photoUrls": [
                "https://www.petz.com.br/blog/wp-content/uploads/2020/01/vira-lata-caramelo.jpg"
            ],
            "tags": [
                {
                    "id": 95,
                    "name": "Vitor Caramelo"
                }
            ],
            "status": "sold"
        }
    });

    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet.status).toBe('sold');
});