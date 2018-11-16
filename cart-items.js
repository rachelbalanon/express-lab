"use strict";

const express = require("express");
const cartItems = express.Router();

const items = [
    { 
        id: 0,
        product: "Avocado",
        price: 2.50,
        quantity: 2
    
    },
    { 
        id: 1,
        product: "Mango",
        price: 1,
        quantity: 1
    
    },
    { 
        id: 2,
        product: "Bacon",
        price: 4,
        quantity: 1
    
    },
];

cartItems.get("/cart-items", (req, res) => {
    res.send(items);
});

module.exports = cartItems;

