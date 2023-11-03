This App is developed with the modules express, moment-timezone, morgan, sequelize, @babel/polyfill, pg pg hstore, winston.
The construction and initialization commands are available in the development and/or production environment thanks to @babel/polyfill.
-	npm run build
-	npm run dev
-	npm run start
LINK REPOSITORY GITHUB: https://github.com/andresrestrepozapata21/inventary_test.git
For the purposes of this test, I send the endpoint URLs as if I were in a development environment, it is worth clarifying that everything is configured.
![Alt text](image.png)
ENDPOINTS
Below are the instructions on how to consult each endpoint by making the call from a wizard, in this case postman, specifying the user's role and general information. The positive results of the endpoints are exposed but there is validation of errors.
-	User Register:
URL : http://localhost:3000/api/users
JSON REQ: 
{
    "first_name_user": "Diego",
    "last_name_user": "Arbelaez",
    "phone_number_user": "3133103302",
    "email_user": "diego@gmail.com",
    "password_user": "12345",
    "flag_rol_user": 1
}

METHOD: POST
JSON RES:
{
    "message": "User registed successfully",
    "data": {
        "id_user": 6,
        "first_name_user": "Diego",
        "last_name_user": "Arbelaez",
        "phone_number_user": "3133103302",
        "email_user": "diego@gmail.com",
        "password_user": "12345",
        "flag_rol_user": 1,
        "date_created_user": "2023-11-03T08:08:56.000Z",
        "last_login_user": null
    }
}

-------------------------------------------------------------------------------------------------------------------------
-	User Login:
URL : http://localhost:3000/api/login
JSON REQ: 
{
    "email_user": "andres@gmail.com",
    "password_user": "12345"
}

METHOD: POST
JSON RES:
{
    "message": "Successful login",
    "data": [
        {
            "id_user": 1,
            "email_user": "andres@gmail.com",
            "flag_rol_user": 2,
            "last_login_user": "2023-11-03T03:08:56.000Z"
        }
    ]
}


MANAGER:
-	Get All Users:
URL : http://localhost:3000/api/users
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": [
        {
            "id_user": 2,
            "first_name_user": "Carolina",
            "last_name_user": "Guillen",
            "phone_number_user": "3133103302",
            "email_user": "caro@gmail.com",
            "password_user": "12345",
            "last_login_user": null,
            "date_created_user": "2023-11-03T01:47:15.000Z",
            "flag_rol_user": 2
        },
        {
            "id_user": 3,
            "first_name_user": "Diego",
            "last_name_user": "Arbelaez",
            "phone_number_user": "3133103302",
            "email_user": "diego@gmail.com",
            "password_user": "12345",
            "last_login_user": null,
            "date_created_user": "2023-11-03T01:47:15.000Z",
            "flag_rol_user": 1
        },
…
-------------------------------------------------------------------------------------------------------------------------

-	Get All Products:
URL : http://localhost:3000/api/products
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": [
        {
            "id_product": 1,
            "lot_name_product": "lot 1",
            "name_product": "product 1",
            "price_product": 100,
            "quantity_available_product": 10,
            "date_in_product": "2023-11-02T19:09:09.000Z",
            "date_created_product": "2023-11-03T01:47:15.000Z"
        },
        {
            "id_product": 2,
            "lot_name_product": "lot 2",
            "name_product": "product 2",
            "price_product": 200,
            "quantity_available_product": 10,
            "date_in_product": "2023-11-02T19:09:09.000Z",
            "date_created_product": "2023-11-03T01:47:15.000Z"
        },
…

-------------------------------------------------------------------------------------------------------------------------

-	Get a Products:
URL : http://localhost:3000/api/products/4
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": {
        "id_product": 4,
        "lot_name_product": "lot 4",
        "name_product": "product 4",
        "price_product": 400,
        "quantity_available_product": 10,
        "date_in_product": "2023-11-02T19:09:09.000Z",
        "date_created_product": "2023-11-03T01:47:15.000Z"
    }
}

-------------------------------------------------------------------------------------------------------------------------

-	Get all pruchases:
URL : http://localhost:3000/api/purchases/all
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": [
        {
            "id_purchase": 2,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T03:18:10.000Z",
            "user": {
                "id_user": 2,
                "first_name_user": "Carolina",
                "last_name_user": "Guillen",
                "phone_number_user": "3133103302",
                "email_user": "caro@gmail.com"
            },
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 3,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot 1",
                        "name_product": "product 1",
                        "price_product": 100
                    }
                },
                {
                    "id_purchasesdetail": 4,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                }
            ]
        },
        {
            "id_purchase": 3,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T03:18:10.000Z",
            "user": {
                "id_user": 1,
                "first_name_user": "Andres",
                "last_name_user": "Restrepo",
                "phone_number_user": "3186337855",
                "email_user": "andres@gmail.com"
            },
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 5,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot 1",
                        "name_product": "product 1",
                        "price_product": 100
                    }
                },
                {
                    "id_purchasesdetail": 6,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                }
            ]
        },
        {
            "id_purchase": 1,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T02:39:11.000Z",
            "user": {
                "id_user": 1,
                "first_name_user": "Andres",
                "last_name_user": "Restrepo",
                "phone_number_user": "3186337855",
                "email_user": "andres@gmail.com"
            },
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 1,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot 1",
                        "name_product": "product 1",
                        "price_product": 100
                    }
                },
                {
                    "id_purchasesdetail": 2,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                }
            ]
        }
    ]
}


-------------------------------------------------------------------------------------------------------------------------

-	To record product:
URL : http://localhost:3000/api/products
JSON REQ: 
{
    "lot_name_product": "lot 6",
    "name_product": "product 6",
    "price_product": 600,
    "quantity_available_product": 10,
    "date_in_product": "2023-11-02 09:09:09"
}

METHOD: POST
JSON RES:
{
    "message": "Product registed successfully",
    "data": {
        "id_product": 7,
        "lot_name_product": "lot 6",
        "name_product": "product 6",
        "price_product": 600,
        "quantity_available_product": 10,
        "date_in_product": "2023-11-02T19:09:09.000Z",
        "date_created_product": "2023-11-03T08:08:56.000Z"
    }
}

-------------------------------------------------------------------------------------------------------------------------

-	To update product:
URL : http://localhost:3000/api/products/1
JSON REQ: 
{
    "lot_name_product": "lot",
    "name_product": "product",
    "price_product": 1,
    "quantity_available_product": 11,
    "date_in_product": "2023-10-03 10:09:09"
}

METHOD: PULL
JSON RES:
{
    "message": "Product updated successfully",
    "data": [
        {
            "id_product": 1,
            "lot_name_product": "lot",
            "name_product": "product",
            "price_product": 1,
            "quantity_available_product": 11,
            "date_in_product": "2023-10-03T15:09:09.000Z"
        }
    ]
}

-------------------------------------------------------------------------------------------------------------------------

-	To delete product:
URL : http://localhost:3000/api/products/3
JSON REQ: 
Empty

METHOD: DELETE
JSON RES:
{
    "message": "Product deleted successfully",
    "data": 1
}

-------------------------------------------------------------------------------------------------------------------------

CUSTOMER:
-	History purchases user:
URL : http://localhost:3000/api/purchases/user/1
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": [
        {
            "id_purchase": 3,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T03:18:10.000Z",
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 5,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot",
                        "name_product": "product",
                        "price_product": 1
                    }
                },
                {
                    "id_purchasesdetail": 6,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                }
            ]
        },
        {
            "id_purchase": 1,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T02:39:11.000Z",
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 1,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot",
                        "name_product": "product",
                        "price_product": 1
                    }
                },
                {
                    "id_purchasesdetail": 2,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                }
            ]
        }
    ]
}

-------------------------------------------------------------------------------------------------------------------------

-	Purchase Invoice:
URL : http://localhost:3000/api/purchases/invoice/1
JSON REQ: 
Empty

METHOD: GET
JSON RES:
{
    "data": [
        {
            "id_purchase": 1,
            "total_price_purchase": 800,
            "date_created_purchase": "2023-11-03T02:39:11.000Z",
            "user": {
                "id_user": 1,
                "first_name_user": "Andres",
                "last_name_user": "Restrepo",
                "phone_number_user": "3186337855",
                "email_user": "andres@gmail.com"
            },
            "purchasesdetails": [
                {
                    "id_purchasesdetail": 2,
                    "quantity_product_purchasedetail": 3,
                    "product": {
                        "id_product": 2,
                        "lot_name_product": "lot 2",
                        "name_product": "product 2",
                        "price_product": 200
                    }
                },
                {
                    "id_purchasesdetail": 1,
                    "quantity_product_purchasedetail": 2,
                    "product": {
                        "id_product": 1,
                        "lot_name_product": "lot",
                        "name_product": "product",
                        "price_product": 1
                    }
                }
            ]
        }
    ]
}

-------------------------------------------------------------------------------------------------------------------------

-	To record purchase:
URL : http://localhost:3000/api/purchases
JSON REQ: 
{
  "fk_id_user_purchase": 1, 
  "total_price_purchase": 800,
  "products": [
    {
      "id_product": 1,
      "quantity_product": 2 
    },
    {
      "id_product": 2,
      "quantity_product": 3 
    }
  ]
}

METHOD: POST
JSON RES:
{
    "message": "Purchase registed successfully",
    "puchase": {
        "id_purchase": 4,
        "date_created_purchase": "2023-11-03T08:28:10.000Z",
        "total_price_purchase": 800,
        "fk_id_user_purchase": 1
    },
    "PurchaseDetail": [
        {
            "id_purchasesdetail": 7,
            "quantity_product_purchasedetail": 2,
            "date_created_purchasedetailt": "2023-11-03T08:28:10.000Z",
            "fk_id_purchase_purchasedetail": 4,
            "fk_id_product_purchasedetail": 1
        },
        {
            "id_purchasesdetail": 8,
            "quantity_product_purchasedetail": 3,
            "date_created_purchasedetailt": "2023-11-03T08:28:10.000Z",
            "fk_id_purchase_purchasedetail": 4,
            "fk_id_product_purchasedetail": 2
        }
    ]
}
