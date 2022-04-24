# TypeScript basics

One of the best and important decisions that you will make after learning JavaScript, and building some projects, is to learn Typescript, because it will really help you a lot in your work, and especially in 2022, but before jumping on Typescript, you must have at least the basics of JavaScript.

## What is TypeScript?

The definition of Typescript from the [official website](https://www.typescriptlang.org/) is:
"
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
" we can also say it's a superset of JavaScript, contains all of JavaScript, and then a bit more.

Large-scale JavaScript development can be difficult. But TypeScript makes it easier for developers to write cross-platform, application scale, JavaScript programs that run in any browser or in any host.

**There are a lot of advantages in Typescript and some of theme are:**

- Clean code
- Code scalability with “Interface oriented development”
- Types have a proven ability to enhance code quality and understandability.
- Types increase your agility when doing refactoring.
- TypeScript helps you dealing with growing teams

## Installing

Let's install the latest stable version:

```bash
npm install -g typescript
```

And to check the version:

```bash
tsc -v
```

## Usage

In this part we will learn how to run Typescript code. Since browsers don't support Typescript, we need a compiler to convert our code from Typescript => to JavaScript, for example if we create a file called index.ts, when the compiler run, index.ts file will converted to index.js, then we can import our index.js file from our HTMl file.

There are many ways to run Typescript code, so we will not explain all these ways, but you can search in google to increase your knowledge.

#### The first option:
This command will convert the file to JavaScript, but without watching the changes, which means you have to run this command everytime you make changes in your typescript file.

``` bash
tsc filename.ts
```

And to watch the changes you can use this command one time.

``` bash
tsc -w filename.ts
```

#### The second option:
You can also use ts-node to run your code, but it will not convert your typescript file to javascript, you can only see the output from the console or your command line.

``` bash
npm install -g ts-node
```

``` bash
ts-node filename.ts
```

Or you can install nodemon to watch the changes, run this command to install it.

``` bash
npm install -g nodemon
```

then

``` bash
nodemon filename.ts
```

## Let's get started

### Basic Types

TypeScript allow us to define types, or for example declaring variables with types, and using types in function declarations.

#### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.


```ts
let isLoad:boolean = true;
```

> Note: If we define a type, we can't change the value of the variable to another type, like the example below.

```ts
let isLoad:boolean = true;
isLoad = "Hello world"
```

The output will be

```bash
Type 'string' is not assignable to type 'boolean'
```

#### Number

It is used to represent both Integer as well as Floating-Point numbers

```ts
let num:number = 5;
let big:bigint = 100n;
```

In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```ts
let hex:number = 0xf00d;
let binary:number = 0b1010;
let octal:number = 0o744;
```

#### String

It is used to represent a sequence of characters

we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```ts
let str:string = "Hello world";
```

#### Any

In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking.

We can redeclare the varaible without any errors.

```ts
let anyType:any = 2;
anyType = "String"
anyType = [1, 2, 3]
```

#### Null and Undefined

Null it is used when an object does not have any value.
Undefined denotes value given to uninitialized variable.

```ts
let u:undefined = undefined;
let n:null = null;
```

#### Array

TypeScript, like JavaScript, allows you to work with arrays of values.

```ts
let listNum:number[] = [1, 2, 3];
let listStr:string[] = ["A", "B", "C"];
let listBool:boolean[] = [false, true];
```

Or you can use a generic array type, `Array<elemType>`:

```ts
let list:Array<number> = [1, 2, 3];
let list:Array<string> = ["A", "B", "C"];
let list:Array<boolean> = [false, true];
```

#### Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```ts
let arrTuple:[boolean, string, number] = [true, "John", 1] // Now everything is ok

// Redeclear the variable incorrectly
arrTuple = [false, 1, "Hello"]
```

```bash
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.
```

#### Union

The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types.

```ts
let unionVar:number | string
unionVar = "Hello world"
```

or 

```ts
let unionVar:number | string
unionVar = 2
```

Let's try to give it a boolean as a value.

```ts
let unionVar:number | string
unionVar = true
```

we get an error

```bash
Type 'boolean' is not assignable to type 'string | number'.
```

And to solve this problem we have to add boolean type.

```ts
let unionVar:number | string | boolean
unionVar = true
```

#### Enum

TypeScript enums allow us to define or declare a set of named constants i.e. a collection of related values which could either be in the form of a string or number or any other data type.

**Numeric enums**

Numeric enums store string values as numbers and they can be declared using the keyword enum.

**Example**

In this example, we will be creating a numeric enum that will store Cars information and further we will display some specific results using that enum.

```ts
enum CarName {
    Honda,
    Toyota,
    Alto,
    Swift,
}

console.log(CarName);
```

Output

```bash
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
```

As you can see enums store string values as numbers.

Let's see how to access the string values

```ts
console.log(CarName.Alto); // Output: 2
console.log(CarName.[2]) // Output: Alto
```

What if we initialize ``Honda`` with ``3``, let's try this.

```ts
enum CarName {
    Honda = 3,
    Toyota,
    Alto,
    Swift,
}

console.log(CarName);
```

Output

```bash
{
  '3': 'Honda',
  '4': 'Toyota',
  '5': 'Alto',
  '6': 'Swift',
  Honda: 3,
  Toyota: 4,
  Alto: 5,
  Swift: 6
}
```

As you can see all of the following members are auto-incremented from that point on.

**String enums**

String enums are quite similar to numeric enums, but their enum values are initialized with string values instead of numeric values. String enums have better readability than numeric enums.

**Example**

In this example, we will be creating a string enum that will store all the values in the string data type

```ts
enum fruitsName {
    Apple = "APPLE",
    Banana = "Banana",
    Mango = "Mango",
    Papaya = "Papaya"
}
console.log(fruitsName);
```

Output

```bash
{ Apple: 'APPLE', Banana: 'Banana', Mango: 'Mango', Papaya: 'Papaya' }
```

**Heterogeneous enums**

Heterogenous enums contain both numeric and string enums values. The following example will explain Heterogenous enums in a much better and clear manner

```ts
enum userDetails {
    name = "Sidi",
    age = 29,
    job = "Software engineer",
}

console.log(userDetails)
```

Output

```bash
{ 
    '29': 'age', 
    name: 'Sidi', 
    age: 29, 
    job: 'Software engineer' 
}
```

> Enums should be used whenever there is a small set of fixed values available that are closely related and further these values are known at compile time.