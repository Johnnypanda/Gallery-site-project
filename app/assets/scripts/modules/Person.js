function Person(fullName, favColor){
	this.name = fullName;
	this.color = favColor;
	this.greet = function() {
		console.log("Hello, " + this.name + "!");
	}
}


module.exports = Person;

