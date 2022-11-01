"use strict";
exports.__esModule = true;
var EmailValidator_1 = require("./EmailValidator");
var email = 'john.doe@typescripttutorial.net';
var validator = new EmailValidator_1.EmailValidator();
var result = validator.isValid(email);
console.log(result);
