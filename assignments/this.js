/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If none of the other rules apply, the this keyword defaults to the window object unless you are in strict mode.
 * 2. Implicit = automatic and only applies to objects with methods.
 * 3. Using the new keyword constructs a new object and 'this' points to it.
 * 4. Explicit you use call, apply or bind to point to a certain value.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function dog() {
	console.log(this.woof);
}
dog();
const woof = "bark";

// Principle 2

// code example for Implicit Binding
let myDog = {
	name: "Rover",
	sound: "bark",
	dog: function() {
		console.log(this.sound);
	}
};
myDog.dog();

// Principle 3

// code example for New Binding
function Pet(attributes) {
	(this.newName = attributes.name),
		(this.newFood = attributes.food),
		console.log(this);
}
Pet.prototype.eat = function() {
	return `${this.newName} eats ${this.newFood}`;
};
const petOne = new Pet({
	name: "Barf",
	food: "dog food"
});
const petTwo = new Pet({
	name: "Scarlett",
	food: "steak"
});

console.log(petOne.eat());
console.log(petTwo.eat());

// Principle 4

// code example for Explicit Binding
function cat() {
	console.log(this.food);
}
let myCat = {
	name: "Fluffy",
	food: "mice"
};

cat.call(myCat);
