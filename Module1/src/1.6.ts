const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArray);

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addition = add(20, 30);
console.log(addition);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const sum = addArrow(50, 75);
console.log(sum);
