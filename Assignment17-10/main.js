var brand = ['Samsung', 'Motorola', 'Nokia', 'Apple'];
var model = ['S22', 'G82', 'N8', '14'];
var users = brand.map(function (brand) {
    return {
        brand: brand,
        model: model
    };
});
console.log(users);
