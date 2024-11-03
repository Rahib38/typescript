"use strict";
{
    var anything = void 0;
    anything = "next level web development";
    anything = 225;
    anything;
    var kgToGm = function (value) {
        if (typeof value === "string") {
            var convertedValue = parseFloat(value) * 1000;
            return "The converted value is : ".concat(convertedValue);
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    var result1 = kgToGm(1000);
    console.log(result1);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
