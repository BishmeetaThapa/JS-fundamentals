const users = [
  { name: "Ram", age: 17 },
  { name: "Sita", age: 22 },
  { name: "Hari", age: 25 }
];

//get names of users age>18.
const adult=users.filter(user=> user.age>18);
console.log(adult);
const names=adult.map(users =>users.name);
console.log(names)

//find total price.
const cart=[100,200,350,400];

const total=cart.reduce((acc,crr)=>acc+crr,0);
console.log(total);


//check if mango exists
const fruits=["apple","banana","mango"];
console.log(fruits.includes("mango"));