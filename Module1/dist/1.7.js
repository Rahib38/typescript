"use strict";
var greetfriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friends)); });
};
greetfriends("abdul", "habul");
var bros1 = ["nadim", "nadim", "mamun"];
var bros2 = ["Rohim", "korim", "mujahid"];
bros1.push.apply(bros1, bros2);
console.log(bros1);
