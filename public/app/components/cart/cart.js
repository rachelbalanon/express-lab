"use strict";

const cart = {
    template:`
    <section class="cart-container">
    <button class="get-btn" ng-click="$ctrl.getAllItems();">Get cart Items</button>
    <section class="item-container" ng-repeat="item in $ctrl.cartItems">
    <p>Item: {{item.product}}</p>
    <p>Price: {{item.price | currency}}</p>
    <p>Qty: {{item.quantity}}</p>
    </section>
    </section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
            // console.log(response);
            vm.cartItems = response.data;
            console.log(vm.cartItems);
        });
        };
    }]
};

angular
    .module("App")
    .component("cart", cart);