"use strict";
{
    function fun(input) {
        if (typeof input === "string") {
            return input.length;
        }
        else {
            return input * input;
        }
    }
    console.log(fun("shifgneis"));
}
