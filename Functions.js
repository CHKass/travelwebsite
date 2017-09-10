/** basic code */

console.log("My name is John Kass and my best color is yellow.");
console.log("My name is Jane Floe and my best color is blue.");

/** more organised and less repetitive code */

function person(name, bestColor) {
	console.log("My name is " + name + " and my best color is " + bestColor + ".");
}

person("John Kass", "yellow");
person("Jane Floe", "blue");

/** even more organised and even less repetitive code */

function person(name, bestColor) {
	console.log("My name is " + name + " and my best color is " + bestColor + ".");
}

var johnName = "John Kass";
var johnBestColor = "yellow";

person(johnName, johnBestColor);
person("Jane Floe", "blue");

/** Creating an 'object' for John */

function person(name, bestColor) {
	console.log("My name is " + name + " and my best color is " + bestColor + ".");
}

var john = {
	name: "John Kass",
	bestColor: "yellow"
}

person(john.name, john.bestColor);
person("Jane Floe", "blue");

/** Creating an 'function' within the 'object' for John */

var john = {
	name: "John Kass",
	bestColor: "yellow",
	greet: function() {
		console.log("My name is " + john.name + " and my best color is " + john.bestColor + ".");
	}
}

john.greet();

/** Creating an 'constructor function' for John, Jane and Chris */

function Person(fullName, bestColor) {
	this.name = fullName;
	this.color = bestColor;
	this.greet = function() {
		console.log("My name is " + this.name + " and my best color is " + this.color + ".");
	}
}

/** The 'constructor function' code above is now well ordered and complete and 
	could be stored in its own 'Webpack' file out-of-sight and out-of-mind */

/** Squeaky clean 'object' code below can be added to, or deleted from, as and when required */

var john = new Person("John Kass", "yellow");
john.greet();

var jane = new Person("Jane Floe", "blue");
jane.greet();

var chris = new Person("Chris Kent", "rich red");
chris.greet();



