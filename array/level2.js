//Loop through array

//Print all numbers:
const nums = [10, 20, 30, 40, 50];
nums.forEach(num=>console.log(num));

//Create a new array where each number is doubled:
const arr=[2,4,6,8];
const newArray=arr.map(num=>num*2);
console.log(newArray)

//filter even numbers
const num=[1, 2, 3, 4, 5, 6];
const even=num.filter(num=> num%2===0);
console.log(even)

//. Filter names longer than 4 letters
names=["Ram", "Sita", "Gopal", "Hari", "Krishna"]
const fil=names.filter(name => name.length <=4);
console.log(fil);

//Add 10 to numbers greater than 20
const numbers=[10,20,30,25,9];
const greater=numbers.filter(num => num>20)
.map(num=>num+10)
console.log(greater)

//. Get square of odd numbers.
const int=[1,2,3,4,5]
const square=int.filter(num=>num%2)
.map(num=>num**2);
console.log(square)