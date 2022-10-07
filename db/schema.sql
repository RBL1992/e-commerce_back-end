DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL NOT NULL,
  stock INT NOT NULL,
 category_id INT,
 FOREIGN KEY (category_id)
 REFERENCES category(id)
);

CREATE TABLE tag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255)
);

CREATE TABLE productTag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  tag_id INT,
  FOREIGN KEY (product_id)
 REFERENCES product(id)
 ON DELETE SET NULL,
 FOREIGN KEY (tag_id)
 REFERENCES tag(id)
 ON DELETE SET NULL
);