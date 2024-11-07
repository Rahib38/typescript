"use strict";
{
    function describeAdmin(user) {
        return `hey am ${user.name}.my email address${user.email}${user.adminLevel1}`;
    }
    const admin = {
        name: "solim",
        email: "a@gmail.com",
        adminLevel1: 3,
    };
    console.log(describeAdmin(admin));
}
