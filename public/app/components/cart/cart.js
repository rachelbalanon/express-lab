"use strict";

const cart = {
    templateUrl: "app/components/cart/cart.html",
    controller: ["CartService", function(CartService) {
        const vm = this;

        function updateCartItems (response) {
            vm.cartItems = response.data;
        };

        CartService.getAllItems().then(updateCartItems);
        
        vm.addItem = (item) => {
            CartService.addItem(item).then(updateCartItems);
        };

        vm.removeItem = (id) => {
            CartService.removeItem(id).then(updateCartItems);
        };

        vm.updateItem = (item) => {
            CartService.updateItem(item).then(updateCartItems);
        };


    }]
};

angular
    .module("App")
    .component("cart", cart);