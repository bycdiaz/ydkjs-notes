class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  yearsOld() {
    return this.age
  }

  isNamed() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(details) {
    super(
      details.age,
      details.name,
    )
    this.species = details.species
  }

  isA() {
    return this.species;
  }
}

const spike = new Dog({
  age: 12, 
  name: "Spike", 
  species: "Dog"
});

console.log(`${spike.isNamed()} is a ${spike.yearsOld()} year old ${spike.isA()}.`);

class Cat extends Animal {
  constructor(details) {
    super(
      details.age,
      details.name,
    )
    this.species = details.species
  }

  isA() {
    return this.species;
  }
}

const mittens = new Cat({
  age: 2, 
  name: "Mittens", 
  species: "Cat"
});

console.log(`${mittens.isNamed()} is a ${mittens.yearsOld()} year old ${mittens.isA()}.`);