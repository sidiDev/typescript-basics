// Boolean
let isLoad:boolean = true;

console.log(isLoad) // The output: true

// Number
let num:number = 5;

console.log(num) // The output: 5

// String
let str:string = "Hello world";

console.log(str) // The output: Hello world

// Array
let list:number[] = [1, 2, 3];

console.log(list) // The output: [1, 2, 3]

// Any
let anyType:any = 2;
anyType = [1, 2, 3]
anyType = "String"

console.log(anyType); // The output: String

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

console.log(u) // The output: undefined

// Tuple
let arrTuple:[boolean, string, number] = [true, "John", 1]

console.log(arrTuple);

// Union
let unionVar:number | string;
unionVar = "Hello world"

console.log(unionVar);
