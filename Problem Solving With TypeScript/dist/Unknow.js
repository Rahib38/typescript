"use strict";
{
    function processData(data) {
        if (typeof data === "string") {
            return data.toUpperCase;
        }
        else if (typeof data === "number") {
            return data * data;
        }
    }
    console.log(processData(10));
}
