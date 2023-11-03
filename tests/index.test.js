import app from '../src/app';
import request from 'supertest';

//--------------------- Users--------------------------//
// GET users /api/users
describe('GET /api/users', () => {
    //should respond with a status 200 and valid JSON
    test('should respond with a status 200 and valid JSON', async () => {
        const response = await request(app).get('/api/users').send();
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
});
// POST user /api/users
describe('POST /api/users', () => {
    describe("given a all data req", () => {
        // should respond with a status 200 and valid JSON object and containing the new user with an id user
        test('should respond with a status 200 and valid JSON object and containing the new user with an id user', async () => {
            const response = await request(app).post('/api/users').send({
                "first_name_user": "Diego",
                "last_name_user": "Arbelaez",
                "phone_number_user": "3133103302",
                "email_user": "diego@gmail.com",
                "password_user": "12345",
                "flag_rol_user": 1
            });
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(response.body.data.id_user).toBeDefined();
        });
    });
    describe("when any data is missing", () => {
        const fields = [
            {},
            {
                "first_name_user": "",
                "last_name_user": "Arbelaez",
                "phone_number_user": "3133103302",
                "email_user": "diego@gmail.com",
                "password_user": "12345",
                "flag_rol_user": 1
            },
            {
                "first_name_user": "Diego",
                "last_name_user": "",
                "phone_number_user": "3133103302",
                "email_user": "diego@gmail.com",
                "password_user": "12345",
                "flag_rol_user": 1
            },
            {
                "first_name_user": "",
                "last_name_user": "Arbelaez",
                "phone_number_user": "",
                "email_user": "diego@gmail.com",
                "password_user": "",
                "flag_rol_user": 1
            },
        ]
        for (const body of fields) {
            // should response with 400 status code
            test('should response with 400 status code', async () => {
                const response = await request(app).post('/api/users').send(body);
                expect(response.statusCode).toBe(400);
            });
        }
    });
});

//--------------------- Login--------------------------//
// POST user /api/login
describe('POST /api/login', () => {
    describe("given a all data req", () => {
        // should respond with a status 200 and valid JSON object and containing the new user with an id user
        test('should respond with a status 200 and valid JSON object and containing the new user with an id user', async () => {
            const response = await request(app).post('/api/login').send(
                {
                    "email_user": "andres@gmail.com",
                    "password_user": "12345"
                }
            );
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(response.body.data[0].id_user).toBeDefined();
        });
    });
    describe("when any data is missing", () => {
        const fields = [
            {},
            {
                "email_user": "",
                "password_user": "12345"
            },
            {
                "email_user": "andres@gmail.com",
                "password_user": ""
            }
        ]
        for (const body of fields) {
            // should response with 400 status code
            test('should response with 400 status code', async () => {
                const response = await request(app).post('/api/login').send(body);
                expect(response.statusCode).toBe(400);
            });
        }
    });
});

//--------------------- Products--------------------------//
// GET users /api/products
describe('GET /api/products', () => {
    //should respond with a status 200 and valid JSON
    test('should respond with a status 200 and valid JSON', async () => {
        const response = await request(app).get('/api/products').send();
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
    //should respond with a status 200 and valid JSON
    test('should respond with a status 200 and valid JSON', async () => {
        const response = await request(app).get('/api/products/4').send();
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
});
// POST user /api/products
describe('POST /api/products', () => {
    describe("given a all data req", () => {
        // should respond with a status 200 and valid JSON object and containing the new products with an id products
        test('should respond with a status 200 and valid JSON object and containing the new user with an id products', async () => {
            const response = await request(app).post('/api/products').send({
                "lot_name_product": "lot 6",
                "name_product": "product 6",
                "price_product": 600,
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            });
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(response.body.data.id_product).toBeDefined();
        });
    });
    describe("when any data is missing", () => {
        const fields = [
            {},
            {
                "lot_name_product": "",
                "name_product": "product 6",
                "price_product": 600,
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            },
            {
                "lot_name_product": "",
                "name_product": "",
                "price_product": 600,
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            },
            {
                "lot_name_product": "lot 6",
                "name_product": "product 6",
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            }
        ]
        for (const body of fields) {
            // should response with 400 status code
            test('should response with 400 status code', async () => {
                const response = await request(app).post('/api/products').send(body);
                expect(response.statusCode).toBe(400);
            });
        }
    });
});
// PUT user /api/products/:id_product
describe('PUT /api/products/:id_product', () => {
    describe("given a all data req", () => {
        // should respond with a status 200 and valid JSON object and containing the new products with an id products
        test('should respond with a status 200 and valid JSON object and containing the new user with an id products', async () => {
            const response = await request(app).put('/api/products/1').send({
                "lot_name_product": "lot",
                "name_product": "product",
                "price_product": 1,
                "quantity_available_product": 11,
                "date_in_product": "2023-10-03 10:09:09"
            });
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(response.body.data[0].id_product).toBeDefined();
        });
    });
    describe("when any data is missing", () => {
        const fields = [
            {},
            {
                "lot_name_product": "",
                "name_product": "product 6",
                "price_product": 600,
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            },
            {
                "lot_name_product": "",
                "name_product": "",
                "price_product": 600,
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            },
            {
                "lot_name_product": "lot 6",
                "name_product": "product 6",
                "quantity_available_product": 10,
                "date_in_product": "2023-11-02 09:09:09"
            }
        ]
        for (const body of fields) {
            // should response with 400 status code
            test('should response with 400 status code', async () => {
                const response = await request(app).put('/api/products/1').send(body);
                expect(response.statusCode).toBe(400);
            });
        }
    });
    describe("when any data is missing", () => {
        // should response with 400 status code
        test('should response with 404 status code', async () => {
            const response = await request(app).put('/api/products/').send();
            expect(response.statusCode).toBe(404);
        });
    });
});
// DELETE user /api/products/:id_product, i acknowledge status 500 is Possibly it is because the product is in the purchasing tables
describe('DELETE /api/products/:id_product', () => {
    describe("given a all data req", () => {
        // should respond with a status 200 and valid JSON object and containing the new products with an id products
        test('should respond with a status 200 and valid JSON object and containing the new user with an id products', async () => {
            const response = await request(app).delete('/api/products/3').send();
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(response.body.data[0].id_product).toBeDefined();
        });
    });
    describe("when any data is missing", () => {
        // should response with 404 status code
        test('should response with 400 status code', async () => {
            const response = await request(app).delete('/api/products/').send();
            expect(response.statusCode).toBe(404);
        });
    });
});

//--------------------- Purchases--------------------------//
// GET users /api/products
describe('GET /api/purchases/all', () => {
    describe('GET /api/purchases/all', () => {
        //should respond with a status 200 and valid JSON
        test('should respond with a status 200 and valid JSON', async () => {
            const response = await request(app).get('/api/purchases/all').send();
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    });
    describe('GET  /api/purchases/user/:fk_id_user_purchase', () => {
        //should respond with a status 200 and valid JSON
        test('should respond with a status 200 and valid JSON', async () => {
            const response = await request(app).get(' /api/purchases/user/1').send();
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
        //should respond with a status 400 and valid JSON
        test('should response with 404 status code', async () => {
            const response = await request(app).get('/api/purchases/').send();
            expect(response.statusCode).toBe(404);
        });
    });
});