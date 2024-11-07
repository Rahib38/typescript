"use strict";
{
    function handleError(message) {
        throw new Error(message);
    }
    try {
        handleError("something went wrong!");
    }
    catch (error) {
        console.error(error);
    }
}
