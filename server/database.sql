CREATE DATABASE mealshop;

CREATE TABLE meals
(
    meal_id SERIAL PRIMARY KEY,
    img VARCHAR(100),
    description VARCHAR(255),
    price INT NOT NULL,
    rating FLOAT NOT NULL,
    occasion VARCHAR(50),
    timing VARCHAR(50)
);
