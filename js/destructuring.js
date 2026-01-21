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

//Q.5. Renaming Variables
const {name: firstName, course: subjectCourse}= student;
console.log(firstName);

//Q.6. Nested Destructuring
const students={
    fullname:"Nirjala Tripathi",
    marks: {
        NM: 45,
        DSA:50,
    },
practical:{
    NM: 20,
    DSA: 30,
}
};
const {fullname}= students;
const{
    practical:{NM}
} = students;
console.log(NM);

//Q.7. Function Parameter Destructuring
function showStudent({ name, age }) {
  console.log("Name:", name);
  console.log("Age:", age);
}

showStudent(student);

