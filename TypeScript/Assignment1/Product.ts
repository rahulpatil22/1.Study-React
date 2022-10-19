export { };
class Product {
    id: number;
    brand: string;
    model: string;

    constructor(id: number, brand: string, model: string) {
        // const product1 = new Product('Samsung', 'S22');
        this.id = id;
        this.brand = brand;
        this.model = model;


    }

}
let Mobile: any[] = [
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
    }];

console.log(Mobile);

const content = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", function () {
    let display = Mobile.map(function (item) {
        return `<div class="content">
                    <h2>${item.brand} </h2>
                    <h3>${item.model}</h3>

                        </div>`;
    });
    console.log(display);
    let displayItem = display.join("")
    content.innerHTML = displayItem;
});


