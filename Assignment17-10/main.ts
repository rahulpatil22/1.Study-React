let brand=['Samsung','Motorola','Nokia','Apple']
let model=['S22','G82','N8','14']

interface User{
    brand:string,
    model:string
}

let users = brand.map<User>(brand =>
{
    return {
brand,
model

    };

});
console.log(users);