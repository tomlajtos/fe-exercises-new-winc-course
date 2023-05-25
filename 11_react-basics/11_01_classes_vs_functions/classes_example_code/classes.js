class Animal {
  constructor(species, legs, name) {
    this.species = species;
    this.legs = legs;
    this.name = name;
  }

  identify() {
    console.log(`This animal is a ${this.species}, and has ${this.legs} legs.`);
  }
  fetch() {
    console.log(`I am a ${this.species} and I don't want to fetch!`);
  }

  call = (name) =>
    name === this.name
      ? console.log(`Yes, this is ${this.name}...`)
      : console.log(`I don't know no ${name}.`);
}

class Dog extends Animal {
  constructor(name) {
    super("dog", 4, name); // a dog has 4 legs
  }

  bark() {
    console.log("Woof!");
  }
  fetch(item) {
    console.log(
      `I'm fetching the friggin ${item}, because I'm a friggin ${this.species}...`
    );
  }
}

class Cat extends Animal {
  constructor(name) {
    super("cat", 4, name);
  }
  call(name) {
    name === this.name
      ? console.log(
          `Was that someone calling my name? Well, I don't give a rat's ass...`
        )
      : console.log(`I wish the dumbass yelling names would f-off...`);
  }
}

const human = new Animal("human", 2, "Sheldon");
human.identify();

const dog = new Dog("Cucu");
dog.bark();
console.log(dog.name, "legs:", dog.legs);
console.log(human.name, "legs:", human.legs);
dog.identify();
dog.fetch("stick");
human.fetch();

dog.fetch = function (item) {
  console.log(
    `I'm fetching the friggin ${item}, because I'm a friggin ${this.species}...`
  );
};

dog.fetch("ball");
dog.call("Snoopie");
human.call("Jimbo");

dog.call("Cucu");
human.call("Sheldon");

const dog2 = new Dog("Cookie");
dog2.call("Cookie");

const cat = new Cat("Francois");
console.log(cat);
cat.call("Francois");
cat.call = function (name) {
  name === this.name
    ? console.log(
        `Was that someone calling my name? Well, I don't give a rat's ass...`
      )
    : console.log(`I wish the dumbass yelling names would  f-off...`);
};
cat.call("Francois");
cat.call("Miss Marple");
console.log(cat, dog);
