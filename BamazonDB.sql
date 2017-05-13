-- CREATE DATABASE BamazonDB;

USE BamazonDB;


CREATE TABLE products
(  item_id INTEGER(11) auto_increment not null,
product_name varchar(100) not null,
department_name varchar(150) not null,
initial_bid integer(20) not null,
price integer(7) NULL,
stock_quantity integer(4) NULL,
PRIMARY KEY (item_id)); 

SELECT * FROM products;

INSERT INTO products (product_name, department_name, initial_bid, price, stock_quantity)
VALUES
("Hamilton Beach 64650 6-Speed Classic Stand Mixer", "Kitchen & Dining", "10.00", "39.96", "44"),
("Nordic Ware Platinum Collection Bundt Pan, 10-15 Cups", "Kitchen & Dining", "5.00", "28.86", "50"),
("LG Electronics OLED55B6P Flat 55-Inch 4K Ultra HD Smart OLED TV", "Television & Video", "500.00", "1223.25", "100"),
("Klipsch RP-280F Tower Speakers CH-7.1-Denon AVR-X4100W", "Television & Video", "2500.00", "4338.60", "20"),
("Priestdaddy: A Memoir (Hardcover)", "Books", "1.00", "14.16", "500"),
("Apollo 8: The Thrilling Story of the First Mission to the Moon (Hardcover)", "Books", "5.00", "20.40", "1000"),
("Nuby Octopus Hoopla Bathtime Fun Toys, Purple", "Baby & Toddler Toys", ".50", "5.96", "2000"),
("VTech Sit-to-Stand Learning Walker (Frustration Free Packaging)", "Baby & Toddler Toys", "10.00", "23.38", "200"),
("Bamazon Mecho - Black", "Mecho & Alexia", "70.00", "139.96", "100"),
("Mecho Thot (2nd Generation) - All Colors", "Mecho & Alexia", "30.00", "49.99", "100");

SELECT * FROM BamazonDB.products;