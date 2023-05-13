class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
     // this.name = name;
     // this.species = species;
     // this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Shepard", "dog", "bark");
dog.makeSound();
const cat = new Animal("Siamese", "cat", "meow");
cat.makeSound();
