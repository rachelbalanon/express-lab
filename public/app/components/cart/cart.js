"use strict";

const cart = {
    template:`
    <button class="get-btn" ng-click="$ctrl.getAllItems();">Get Items</button>
    <section class="cart-container">
    <section class="item-container" ng-repeat="item in $ctrl.cartItems">
    <p>{{item.product}}</p>
    <p>{{item.price}}</p>
    <p>{{item.quantity}}</p>
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