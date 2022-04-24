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

// Enum
enum CarName {
    Honda,
    Toyota,
    Alto,
    Swift,
}

console.log(CarName);

/*
    Output:

    {
    '0': 'Honda',
    '1': 'Toyota',
    '2': 'Alto',
    '3': 'Swift',
    Honda: 0,
    Toyota: 1,
    Alto: 2,
    Swift: 3
    }
*/

// Object

type User = {
    name: string,
    job: string,
    age: number,
    isAdmin: boolean
}

const user:User = {
    name: "Sidi",
    job: "Software engineer",
    age: 29,
    isAdmin: true
}

console.log(user);