import { test, expect, request } from '@playwright/test';

test('Find specific PET status by ID', async () => {
  const petStatus = "available";
  const petId = 881995;

  const apiContext = await request.newContext();
  const response = await apiContext.get('https://petstore.swagger.io/v2/pet/findByStatus', {
    params: { status: petStatus }
  });

  expect(response.status()).toBe(200);

  const pets = await response.json();
  const pet = pets.find((p: any) => p.id === petId);

  expect(pet).toBeTruthy();
  expect(pet.status).toBe('available');

  console.log(`The pet ${petId} has ${pet.status} status.`);
});
