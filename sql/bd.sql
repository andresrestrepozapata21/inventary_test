CREATE TABLE IF NOT EXISTS users(
    id_user integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    first_name_user text NOT NULL CHECK (first_name_user <> ''),
    last_name_user text NOT NULL CHECK (last_name_user <> ''),
    phone_number_user text NOT NULL CHECK (phone_number_user <> ''),
    email_user text NOT NULL CHECK (email_user <> ''),
    password_user text NOT NULL CHECK (password_user <> ''),
    last_login_user timestamp,
    date_created_user timestamp NOT NULL,
    flag_rol_user integer NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
    id_product integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    lot_name_product text NOT NULL CHECK (lot_name_product <> ''),
    name_product text NOT NULL CHECK (name_product <> ''),
    price_product integer NOT NULL,
    quantity_available_product integer NOT NULL,
    date_in_product timestamp NOT NULL,
    date_created_product timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS purchases(
    id_purchase integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    total_price_purchase INTEGER NOT NULL,
    date_created_purchase timestamp NOT NULL,
    fk_id_user_purchase INTEGER REFERENCES users(id_user)
);

CREATE TABLE IF NOT EXISTS purchasesDetails(
    id_purchasesdetail integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    quantity_product_purchaseDetail integer NOT NULL,
    date_created_purchaseDetailt timestamp NOT NULL,
    fk_id_purchase_purchaseDetail INTEGER REFERENCES purchases(id_purchase),
    fk_id_product_purchaseDetail INTEGER REFERENCES products(id_product)
);

