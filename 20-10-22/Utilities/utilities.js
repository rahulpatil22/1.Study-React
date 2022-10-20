var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
var nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
var bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
var bob = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
var value = true; // a string cannot be used here since Exclude removed it from the type.
