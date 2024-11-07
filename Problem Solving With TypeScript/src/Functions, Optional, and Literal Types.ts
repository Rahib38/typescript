{
  /*
    Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
* name (string)
* age (number)
* role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
    */

  function fun(name: string, age: number, role?: "admin" | "user" | "guest") {
    return `Hello ${name} Your are ${age} years old ${role}`;
  }
  const person1 = fun("nadim", 21, "admin");
  console.log(person1);
}
