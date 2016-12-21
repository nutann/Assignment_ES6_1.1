function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = function (arr) {
 return arr.map((character) =>{
 return this.name + character;
 });
};


var foo = ["friend1", "friend2", "friend3"];
var [one, two, three] = foo;
console.log(one);

( () =>{ var food = 'Meow Mix';console.log(food);  })() ;
 