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

## Let's get started

In this part we will learn how to run Typescript code. Since browsers don't support Typescript, we need a compiler to convert our code from Typescript => to JavaScript, for example if we create a file called index.ts, when the compiler run, index.ts file will converted to index.js, then we can import our index.js file from our HTMl file.

There are many ways to run Typescript code, so we will not explain all these ways, but you can search in google to increase your knowledge.

#### The first option:
This command will convert the file to JavaScript, but without watching the changes, which means you have to run this command everytime you make changes in your typescript file.

``` bash
tsc filename.ts
```

and to watch the changes you can use this command one time.

``` bash
tsc -w filename.ts
```

#### The second option:
You can also use nodejs to run your code, but it will not convert your typescript file to javascript, you can only see the output from the console or your command line, by using nodejs you have to run this command everytime you make changes in your typescript file.

``` bash
node filename.ts
```

and to watch the changes you have to install nodemon, run this command to install it.

``` bash
npm install -g nodemon
```

then

``` bash
nodemon filename.ts
```