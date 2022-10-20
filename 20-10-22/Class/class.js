var App = /** @class */ (function () {
    function App(name) {
        this.name = "Rahul Patil";
        this.name = name;
    }
    App.prototype.getName = function () {
        console.warn(this.name);
        return this.name;
    };
    return App;
}());
var a1 = new App("rupesh pail");
console.warn(a1.getName());
