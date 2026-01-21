//Rest Operator with Arrays

const numbers= [5,6,7,8];
const [first, ...rest]=numbers;
console.log(first);
console.log(rest);

//Rest Operator in Functions
function countArguments(...args) {
    return args.length;
}
console.log ("Total arguments:", countArguments(2,4,5,6));

//Spread Operator with Arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const merged=[...arr1, ...arr2];
console.log(merged);

// Copying an Array
const originalArray= [5,6,7];
let copiedArray=[...originalArray];
copiedArray.push (8);
console.log (originalArray);
console.log(copiedArray);

