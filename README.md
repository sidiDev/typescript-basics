## Classes

TypeScript is object oriented JavaScript. TypeScript supports object-oriented programming features like classes, interfaces, etc. A class in terms of OOP is a blueprint for creating objects.

A class definition can include the following −

Fields − A field is any variable declared in a class. Fields represent data pertaining to objects

Constructors − Responsible for allocating memory for the objects of the class

Functions − Functions represent actions an object can take. They are also at times referred to as methods

Let's see an example

```ts
class Car {

    name:string
    type:string
    price: number

    constructor(name:string, type:string, price:number) {
        this.name = name
        this.type = type
        this.price = price
    }

    getInfo() {
        return {
            name: this.name,
            type: this.type,
            price: `${this.price} USD`
        }
    }
}

const myCar = new Car("Turbo", "Toyota", 20000)

console.log(myCar.getInfo());
```

Output

```bash
{ name: 'Turbo', type: 'Toyota', price: '20000 USD' }
```

You can learn more about classes from the [official website](https://www.typescriptlang.org/docs/handbook/2/classes.html)
