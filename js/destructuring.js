//Q.1 Array Destructuring
//Create an array of numbers
const numbers = [1, 2, 3, 4, 5];
//Destruct first two values into seperate variables
const [first, second]= numbers;
//Print
console.log("First value:", first);
console.log("second value:", second);

//Q.2. Skipping values
const number = [1,2,3,4,5];
const [ , , third, forth, ] = number;
console.log(third);
console.log(forth);

//Q.3. Default Values
const num=[7];
const [x, y=15]= num; //Value of y (second value) doesnot exist so default value is used
console.log(x);
console.log(y);

// Q.4. Object Destructuring
const student={
    name: "Nirjala",
    age:19,
    city:"Kathmandu"
};
const {name, age, city}= student;
console.log(name, age, city);