const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123456test",
    host: "localhost",
    port: 5432,
    database: "mealshop"
});

module.exports = pool