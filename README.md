#Chop ?

I <3 Backbone object model [https://gist.github.com/2287018](https://gist.github.com/2287018), but sometimes i need it without Backbone. Then i've created **Chop**, an object model Backbone-flavored.

**I've cribbed the Backbone object model** ;)

#How to ?

##Class , constructor & static members

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

##Inheritance & super

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

##Use it with html

	<script src="chop.js"></script>

##Run it

	var john = new Human();
	var bob = new Human("Bob Morane");

	john.hello();
	bob.hello();

	console.log(Human.getCounter(), " Humans");

	var clark = new Hero("Clark Kent", "Super Man");
	console.log(Human.getCounter(), " Humans");
	clark.hello();

###Result

	Hello i am  John Doe
	Hello i am  Bob Morane
	2 ' Humans'
	3 ' Humans'
	Hello i am  Clark Kent
	My Hero name is Super Man

##Use it with NodeJS

	var Chop = require('./chop');



