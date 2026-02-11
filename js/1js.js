console.log("Hello World!");
console.log("fuckkkkkkk");
// variable in js
let name = "John Doe";
console.log(name);
const age = 30;
// age = 31; // This line would cause an error because age is a constant
console.log(age);


// Data types in js
let Name ="mosh";// variable name is case sensitive 
let height = 5.9;   //number variable
let isStudent = true; //boolean variable
let address; //undefined variable
console.log(address); // prints undefined
let nullVar = null; //null variable
console.log(nullVar); // prints null



//object
let person = {
    name: "John",
    age: 30,
};
//dot notation to access object properties
person.name = "Jane";// Modifying the name property of the person object

person["name"] = "mary"; // Modifying the name property of the person object using bracket notation
console.log(person);


//array
let selectcolour = ["red", "green", "blue"]; //array variable
console.log(selectcolour);
console.log(selectcolour[0]); // Accessing the first element of the array
selectcolour[3] = "yellow"; // Setting the fourth element of the array to "yellow"
console.log(selectcolour);
 

//function
//performing a task
function greet(name, lastname) {
    console.log("hello " + name + " " + lastname);
};
greet('jhon');
greet('marry', 'smith');
//calculating a value
function square(num){
    return num*num;
};
let num = square(2);
console.log(num);

console.log(square(3)); // directly logging the result of the function call, 2 fn call
