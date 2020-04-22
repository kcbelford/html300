// // Create the Dog class constructor
// class Dog {
// 	// Give it expected parameters
// 	constructor(name, age, breed, color) {
// 		// Set those equal to the instance
// 		this.name = name;
// 		this.age = age;
// 		this.breed = breed;
// 		this.color = color;
// 		this.energyLevel = 0;
// 		this.barkLevel = 10;
// 	}
// 	// pat method
// 	pat() {
// 		this.energyLevel++
// 		this.barkLevel--;
// 		console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy level is ${this.energyLevel} and current bark level is ${this.barkLevel}.`);
// 	}
// }
//
// // Create marty
// const marty = new Dog('Marty', 6, 'Mutt', 'Brown');
//
// // Pat him 5 times
// marty.pat();
// marty.pat();
// marty.pat();
// marty.pat();
// marty.pat();

class Character {
	constructor(name, species, weapon, affiliation) {
	this.name = name;
	this.species = species;
	this.weapon = weapon;
	this.affiliation = affiliation;
	this.energyLevel = 10;
	}

	attack() {
		this.energyLevel--;
		console.log(`This charachter's name is ${this.name}, they are a ${this.species}, their weapon of choice is ${this.weapon}, their affiliation is ${this.affiliation}, their energy level is ${this.energyLevel}`);
	}

	heal() {
		this.energyLevel++;
		console.log(`This charachter's name is ${this.name}, they are a ${this.species}, their weapon of choice is ${this.weapon}, their affiliation is ${this.affiliation}, their energy level is ${this.energyLevel}`);
	}
}

const mario = new Character('Mario', 'human', 'fireball', 'good');

mario.attack();
mario.attack();
mario.attack();
mario.attack();
mario.heal();
mario.heal();
