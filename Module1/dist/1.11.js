"use strict";
var _a, _b;
{
    var age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //   ternary
    var idAdult = age >= 18 ? "Adult" : "Not adult";
    console.log(idAdult);
    //   nullish
    var isAuthenticate = "";
    var result1 = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
    var result2 = isAuthenticate ? isAuthenticate : "Guest";
    console.log({ result1: result1 }, { result2: result2 });
    var user = {
        name: "Nadim",
        address: {
            city: "Feni",
            road: "Awesome road",
            presentaddress: "Feni town",
        },
    };
    var premanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.premanentAddress) !== null && _b !== void 0 ? _b : "No permanetAddress";
    console.log(premanentAddress);
}
