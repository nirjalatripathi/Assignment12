 //Q.1.  slice()
let numbersArray = [1, 2, 3, 4];

let slicedArray = numbersArray.slice(1, 4);

console.log("Original:", numbersArray);
console.log("Sliced:", slicedArray);

//Q.2. concat()
const a=[4,5];
const b=[6,7];
const combined=a.concat(b);
console.log("Value of A: ", a);
console.log("Value of B:", b);
console.log ("Combined values:", combined);


//Q.3. join()
let values=["cat", "rabbit","mouse"];
console.log(values.join(","));
console.log(values.join("_"));