/*var util = require("util");
function Base() {
	this.name = "base";
	this.base = 1991;
	this.sayHello = function() {
		console.log("Hello" + this.name);
	};
}

Base.prototype.showName = function() {
	console.log(this.name);
};

function sub() {
	this.name = 'sub';
}

util.inherits(sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new sub();
objSub.showName();
// objSub.sayHello();//仅继承原型中的方法，不继承构造函数内部的属性和方法
console.log(objSub);*/


/*var util = require("util");
function Person() {
	this.name = "byvoid";
	this.toString = function() {
		return this.name;
	};
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true,2,true));*/

/*var util = require("util");
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));*/

/*var util = require("util");
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp("another regexp")));
console.log(util.isRegExp({}));*/

/*var util = require("util");
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));*/

var util = require("util");
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({}));
