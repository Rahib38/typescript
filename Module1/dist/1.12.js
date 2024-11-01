"use strict";
{
    // unknown types
    var searchName = function (value) {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("there is nothing to search");
        }
    };
    searchName(null);
    //   unknown typeof
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertSpeed = (value * 1000) / 3600;
            console.log("the speed is ".concat(convertSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(" "), result = _a[0], unit = _a[1];
            var convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertSpeed);
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond("1000");
    // never
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError("mushkil se error hogaya");
}
