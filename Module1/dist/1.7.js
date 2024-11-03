"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var greetfriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
greetfriends("abdul", "habul");
var bros1 = ["nadim", "nadim", "mamun"];
var bros2 = ["Rohim", "korim", "mujahid"];
bros1.push.apply(bros1, bros2);
console.log(bros1);
var mentor1 = {
    node: "korim",
    express: "rohim",
};
var mentor2 = {
    prisma: "shahin",
    react: "mir",
};
var mentorList = __assign(__assign({}, mentor1), mentor2);
console.log(mentorList);
