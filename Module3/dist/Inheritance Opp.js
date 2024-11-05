"use strict";
{
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }
    class student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
    }
    const teacher = new Teacher("mr. babor", 40, "sonapur", "professor");
    console.log(teacher);
}
