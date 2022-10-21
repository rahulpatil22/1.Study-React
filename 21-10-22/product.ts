class Product {
    title: string;
    details: string;
    amount: number;

    constructor (t:string,d:string,a:number){
        this.title =t;
        this.details=d;
        this.amount=a;
    }
}

const pOne= new Product('Samsung','Something New',200);
const pTwo= new Product('Nokia','Connecting People',300);
const pThree= new Product('Motorola','Hello Moto',400);

let products:Product[]=[];
products.push(pOne);
products.push(pTwo);
products.push(pThree);

//console.log(products);

const wrap = document.querySelector(".wrap");

window.addEventListener("DOMContentLoaded", function () {
    let displayProducts = products.map(function (item) {
        return `<div class="card">
         <div class="container">
                    <h2>${item.title} </h2>
                    <h3>Price:${item.amount}</h3>
                    <p>${item.details}</p>
                    </div>

                        </div>`;
    });
    //console.log(displayMenu);
    let displayProductItem = displayProducts.join("");
    wrap.innerHTML = displayProductItem;
});
