class Dog {
  constructor(age, name) {
    this.age = age;
    this.name = name
  }

  yearsOld() {
    return this.age
  }

  isNamed() {
    return this.name;
  }
}

const floof = new Dog(12, "Floof");
console.log(`${floof.isNamed()} is ${floof.yearsOld()} years old.`);