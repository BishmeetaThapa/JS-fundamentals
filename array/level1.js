//1.Create an array of 5 numbers and print it.
Arr=[1,2,3,4,5]
console.log(Arr)

//2.Create an array of strings containing 5 of your favorite fruits and print the first and last item.

let Fruits=["apple","banana","orange","mango","litchi"]
console.log(Fruits[0]);
console.log(Fruits[Fruits.length-1])

//3.Add a new element to the end of an array using push().
Fruits.push("hello");
console.log(Fruits);

//4.Remove the last element of an array using pop().
Fruits.pop();
console.log(Fruits);

//5.Add a new element to the beginning of an array using unshift().
Fruits.unshift("elephant");
console.log(Fruits);

//6.Remove the first element of an array using shift().
Fruits.shift()
console.log(Fruits)

//7.Find the length of an array.

console.log(Fruits.length);


//8.Change the second element of an array.
Fruits[1]=("cat");
console.log(Fruits)

//9.Check if a specific element exists in an array using includes().

console.log(Fruits.includes("cat"));

//10.Find the index of a specific element using indexOf().
 let index=Fruits.indexOf("mango")
 console.log(index)

 console.log(Fruits.indexOf("apple"))

 //11.Replace a value at a specific index in an array.
   Fruits[2]=("dog")
   console.log(Fruits)

   //12.Slice a portion of an array using slice().
       const citrus=  Fruits.slice(3)  
       console.log(citrus)                

    //13.Convert a string "a,b,c,d" into an array using split().
     let str=("a,b,c,d")
     let string=str.split(",")
     console.log(string)

     //14.Combine two arrays using concat().
     let arr1=["h","i","r","t"]
     let arr2=["a","b","c","d"]
     let merged=arr1.concat(arr2)
     console.log(merged)