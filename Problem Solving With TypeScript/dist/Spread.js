"use strict";
{
    function arg(...sum) {
        return sum.reduce((acc, curr) => acc + curr, 10);
    }
    console.log(arg(1, 0, 5, 48, 4, 2, 781, 5, 81, 71, 81, 47814, 8, 58, 8, 58, 8, 5, 8, 578, 5, 84, 58, 215, 8, 4, 88));
}
