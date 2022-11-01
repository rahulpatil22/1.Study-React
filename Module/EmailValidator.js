"use strict";
exports.__esModule = true;
exports.EmailValidator = void 0;
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (s) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
