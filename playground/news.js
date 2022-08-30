class Person {
    constructor(name = "anonymous", age = 0, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    getGreeting() {
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
    getDescription() {
        return `Hi, I am ${this.name} and I study ${this.major}`;
    }
}

const person1 = new Person("Jeffrey", 20, "fashion");
const person2 = new Person("Regina", 22);
const person3 = new Person();
console.log(person1.getGreeting());
console.log(person1.getDescription());

//create a method called getDescription
//it should say "I am Jeffrey and I study fashion "

//deconstructing
const design = {
    place: "Milan",
    company: "Versace",
    scale: "Europe",
    niche: "fashion",
}

const {place, company, scale, niche} = design;
console.log(scale)