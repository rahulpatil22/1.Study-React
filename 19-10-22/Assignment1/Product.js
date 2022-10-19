"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(id, brand, model) {
        // const product1 = new Product('Samsung', 'S22');
        this.id = id;
        this.brand = brand;
        this.model = model;
    }
    return Product;
}());
var Mobile = [
    {
        id: 1,
        brand: 'Samsumg',
        model: 'S22'
    },
    {
        id: 2,
        brand: 'Nokia',
        model: 'N8'
    },
    {
        id: 3,
        brand: 'Apple',
        model: '14'
    },
    {
        id: 4,
        brand: 'Motorola',
        model: 'G8'
    }
];
console.log(Mobile);
var content = document.querySelector(".content");
window.addEventListener("DOMContentLoaded", function () {
    var display = Mobile.map(function (item) {
        return "<div class=\"content\">\n                    <h2>".concat(item.brand, " </h2>\n                    <h3>").concat(item.model, "</h3>\n\n                        </div>");
    });
    console.log(display);
    var displayItem = display.join("");
    content.innerHTML = displayItem;
});
