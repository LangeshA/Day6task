class Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `Name: ${this.getFullName()}, Age: ${this.age}, Email: ${this.email}`;
    }
}


const person1 = new Person("Langz", "Lee", 22, "langz@yahoo.com");
const person2 = new Person("Jakson", "Durai", 25, "Jacky@yahoo.com");

console.log(person1.getDetails());
console.log(person2.getDetails());