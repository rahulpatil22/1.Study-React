var Product = /** @class */ (function () {
    function Product(t, d, a) {
        this.title = t;
        this.details = d;
        this.amount = a;
    }
    return Product;
}());
var pOne = new Product('Samsung', 'Something New', 200);
var pTwo = new Product('Nokia', 'Connecting People', 300);
var pThree = new Product('Motorola', 'Hello Moto', 400);
var products = [];
products.push(pOne);
products.push(pTwo);
products.push(pThree);
//console.log(products);
var wrap = document.querySelector(".wrap");
window.addEventListener("DOMContentLoaded", function () {
    var displayProducts = products.map(function (item) {
        return "<div class=\"card\">\n         <div class=\"container\">\n                    <h2>".concat(item.title, " </h2>\n                    <h3>Price:").concat(item.amount, "</h3>\n                    <p>").concat(item.details, "</p>\n                    </div>\n\n                        </div>");
    });
    //console.log(displayMenu);
    var displayProductItem = displayProducts.join("");
    wrap.innerHTML = displayProductItem;
});
