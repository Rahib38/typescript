"use strict";
{
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({
        id: 21,
        name: "sona",
    });
    const createGenericTuple = (param1, param2) => {
        return [param1, param2];
    };
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "mr x",
        email: "x@gmail.com",
        devType: "nlwd",
    });
    const student2 = addCourseToStudent({
        name: "mr y",
        email: "y@gmail.com",
        handWatch: "Apple Watch",
    });
}
