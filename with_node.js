var Chop = require('./chop');

var Human = Chop.extend({ //instance members
	name : "John Doe",
	constructor : function (name) {
		if(name) this.name = name;
		Human.incrementCounter();
	},
	hello : function () {
		console.log("Hello i am ", this.name);
	}
},{ //class members
	counter : 0,
	getCounter : function () { return Human.counter; },
	incrementCounter : function () { Human.counter+=1; }
});

var Hero = Human.extend({
	constructor : function (name, nickName) {
		Hero.__super__.constructor.call(this, name);
		this.nickName = nickName;

	},
	hello : function () {
		Hero.__super__.hello.call(this);
		console.log("My Hero name is", this.nickName);
	}
});

var john = new Human();
var bob = new Human("Bob Morane");

john.hello();
bob.hello();

console.log(Human.getCounter(), " Humans");

var clark = new Hero("Clark Kent", "Super Man");
console.log(Human.getCounter(), " Humans");
clark.hello();