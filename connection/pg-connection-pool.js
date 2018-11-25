"use strict";

const pg = require("pg");
const pool = {
    user: "postgres",
    password: "Ve1Uphie",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
};

module.exports = new pg.Pool(pool);