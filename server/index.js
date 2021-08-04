const express = require('express')
const app = express()
const cors = require("cors")
const pool = require("./db")

// middlware
app.use(cors())
app.use(express.json())

// ROUTES//

// create and insert all meal items
app.post("/create", async (req, res) => {
    try {
        const newMeal = await pool.query(
            "insert into meals (meal_id, img, description, price, rating , occasion, timing) values (8, 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg', 'fish fofos', 800, 4.50, 'house party', 'food trucks') RETURNING *;"
        )
        res.json(newMeal)
    } catch (err) {
        console.log(err.message)
    }
})

// get all meal items
app.get("/meals", async (req, res) => {
    try {
        const allMeals = await pool.query("SELECT * FROM meals");
        res.json(allMeals.rows)
    } catch (err) {
        console.log(err.message)
    }
})


// get a meal id
app.get("/meals/:id", async (req, res) => {
    try {

        console.log(req.params)
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(5000, () => {
    console.log("running")
})