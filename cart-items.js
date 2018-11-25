"use strict";

const express = require("express");
const cartItems = express.Router();
const pool = require("./connection/pg-connection-pool.js");

cartItems.get("/cart-items", (req, res) => {
    pool.query("select * from shoppingcart order by id").then((result) => {
        res.json(result.rows);
    });
});

cartItems.delete("/cart-items/:id", (req, res) => {
    pool.query("delete from shoppingcart where id=$1::int", [req.params.id]).then(() => {
        pool.query("select * from shoppingcart  order by id").then((result) => {
            res.json(result.rows);
        });
    });
});

cartItems.post("/cart-items", (req, res) => {
    pool.query("insert into shoppingcart(product, price, quantity) values($1::text, $2::int, $3::int);", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("select * from shoppingcart order by id").then((result) => {
            res.json(result.rows);
        });
    });
});

cartItems.put("/cart-items/:id", (req, res) => {
    pool.query("update shoppingcart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
        pool.query("select * from shoppingcart  order by id").then((result) => {
            res.json(result.rows);
        });
    });
});

module.exports = cartItems;

