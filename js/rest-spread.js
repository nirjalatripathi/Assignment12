//Q.1.Rest Operator with Arrays
const numbers= [5,6,7,8];
const [first, ...rest]=numbers;
console.log(first);
console.log(rest);

//Q.2.Rest Operator in Functions
function countArguments(...args) {
    return args.length;
}
console.log ("Total arguments:", countArguments(2,4,5,6));

//Q.3.Spread Operator with Arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const merged=[...arr1, ...arr2];
console.log(merged);

//Q.4. Copying an Array
const originalArray= [5,6,7];
let copiedArray=[...originalArray];
copiedArray.push (8);
console.log (originalArray);
console.log(copiedArray);

//Q.5. Spread Operator with Objects
let properties={
    name:"Nirjala",
    age: 19
};
let newProperties={
    ...properties,
    Faculty:"CSIT"
};
console.log(newProperties);
