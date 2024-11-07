"use strict";
{
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    const text = "hello";
    const reverse = reverseString(text);
    console.log(reverse);
}
