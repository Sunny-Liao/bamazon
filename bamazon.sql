DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Circulator Cooker', 'kitchen', 97.98, 431);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Vide Cooker', 'kitchen', 96.99, 591);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Key Finder,', 'electronics', 25.79, 163);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Apple IPad Pro,', 'Apple Products', 1067.82, 79);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Silicone Tea Infuser,', 'kitchen', 16.94, 1543);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Bluetooth Keyboard,', 'electronics', 47.99, 483);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Smart OLED TV,', 'electronics', 2796.99, 191);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Touchscreen Watch,', 'jewelry', 165, 132);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('XBox Controller,', 'video games', 46.99, 681);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Amazon Alexa,', 'electronics', 179, 1239);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('ION Robot Vacuum,', 'electronics', 258.37, 834);

SELECT * FROM products;
