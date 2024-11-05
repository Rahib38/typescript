"use strict";
{
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("German Sheprd Bhai", "Dog", "Ghew Ghew");
    console.log(dog);
}
