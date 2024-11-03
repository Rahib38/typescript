"use strict";
{
    let anything;
    anything = "next level web development";
    anything = 225;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    console.log(result1);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
