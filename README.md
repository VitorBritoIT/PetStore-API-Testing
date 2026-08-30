Este repositório documenta a implementação de uma suíte de testes automatizados de API REST utilizando **Playwright com TypeScript**, cobrindo todo o ciclo de vida (CRUD) do recurso `/pet` da [Petstore](https://petstore.swagger.io/).

---

🎯 Objetivo & Foco do Projeto

Validação funcional e de integridade dos endpoints da entidade `/pet`, garantindo o correto envio de payloads em formato JSON, persistência de dados, atualização de status, buscas por parâmetros/ID e remoção de registros.

🔹 Destaques Técnicos do Código
- **API Testing com Playwright:** Utilização do módulo `@playwright/test` com context nativo (`request.newContext()`) para execução de chamadas HTTP assíncronas.
- **Ciclo Completo (CRUD):** Implementação dos métodos **POST**, **GET**, **PUT** e **DELETE**.
- **Query Params & Path Params:** Uso de parâmetros de rota (`/pet/{petId}`) e filtros por query string (`/pet/findByStatus?status=available`).
- **Validações & Asserções:**
  - Status codes HTTP (`200 OK`).
  - Parsing de resposta com `.json()`.
  - Validação de propriedades de payload (`name`, `status`, correspondência de ID).
  - Uso de métodos de array (`find()`) para validação de integridade em coleções de objetos.

---

🧪 Suíte de Testes Implementada

| Arquivo de Teste | Método HTTP | Rota / Endpoint | Descrição da Validação |
| :--- | :--- | :--- | :--- |
| `create-pet.spec.ts` | `POST` | `/v2/pet` | Cadastra um novo pet com ID fixo (`881995`), categoria e status `available`. Valida status 200 e nome retornado. |
| `find-pet-by.id.spec.ts` | `GET` | `/v2/pet/{petId}` | Consulta o pet pelo ID e valida o status 200 e correspondência do nome cadastrado. |
| `find-pet-by-status.spec.ts` | `GET` | `/v2/pet/findByStatus` | Consulta lista de pets por query param (`status=available`) e filtra o pet alvo garantindo sua presença e status. |
| `update-pet.spec.ts` | `PUT` | `/v2/pet` | Atualiza os dados do pet (alterando nome para *Vitor Caramelo* e status para `sold`), validando a resposta do payload. |
| `delete-pet.spec.ts` | `DELETE` | `/v2/pet/{petId}` | Remove o registro do pet por ID e valida status 200 de sucesso na exclusão. |

---

📁 Estrutura do Repositório

```
PetStore-API-Testing/
├── tests/
│   ├── create-pet.spec.ts          # Teste de criação de Pet (POST)
│   ├── find-pet-by.id.spec.ts      # Consulta de Pet por Path Param (GET)
│   ├── find-pet-by-status.spec.ts  # Consulta com Query Params (GET)
│   ├── update-pet.spec.ts          # Atualização de cadastro e status (PUT)
│   └── delete-pet.spec.ts          # Exclusão de registro (DELETE)
├── playwright.config.ts            # Configurações de execução do Playwright
├── package.json                    # Dependências e scripts de execução
└── README.md                       # Documentação do projeto
