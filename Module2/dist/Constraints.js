"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: "mr x",
        email: "x@gmail.com",
        devType: "nlwd",
    });
    const student2 = addCourseToStudent({
        id: 223,
        name: "mr y",
        email: "y@gmail.com",
        handWatch: "Apple Watch",
    });
    const student3 = addCourseToStudent({
        id: 224,
        name: "mr z",
        email: "z@gmail.com",
        emni: "emni",
    });
}
