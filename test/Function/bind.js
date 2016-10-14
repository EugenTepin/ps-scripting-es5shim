var acceptParams = require('../helper.js').acceptParams;
var testArray = require('../helper.js').testArray;

if ($.writeln !== void 0) {
	var console = {
		log: function(obj) {
			$.writeln(obj);
		}
	};
} else {
	var console = window.console;
}



console.log("================== Function.prototype.bind ==================");
/*console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Function.prototype.bind, ["string"], "Function.prototype.bind(string)", testArray);
acceptParams(Function.prototype.bind, [void 0], "Function.prototype.bind(undefined)", testArray);
acceptParams(Function.prototype.bind, [1], "Function.prototype.bind(number)", testArray);
acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", null);
acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", void 0);
console.log("");*/

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var module = {
	x: 81,
	getX: function() {
		return this.x;
	}
};

console.log(module.getX()); // 81

var getX = module.getX;
// 9, поскольку в этом случае this ссылается на глобальный объект
console.log(getX());
// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind(module);
console.log(boundGetX()); // 81

console.log("");