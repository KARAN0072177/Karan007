class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        console.log(`${this.name} is a ${this.type}`);
    }
}

let dog = new Animal("Rex", "dog");
dog.describe();  // Rex is a dog