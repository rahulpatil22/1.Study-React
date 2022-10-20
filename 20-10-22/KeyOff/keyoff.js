//When used on an object type with explicit keys, keyof creates a union type with those keys.
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
