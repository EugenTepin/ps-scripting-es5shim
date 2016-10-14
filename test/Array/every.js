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

var callback = function(currentValue, index, array) {
	return (typeof currentValue === 'number');
};

console.log("================== Array.prototype.every ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.every, ["string"], "Array.prototype.every(string)", testArray);
acceptParams(Array.prototype.every, [void 0], "Array.prototype.every(undefined)", testArray);
acceptParams(Array.prototype.every, [1], "Array.prototype.every(number)", testArray);
acceptParams(Array.prototype.every, callback, "Array.prototype.every(callback)", null);
acceptParams(Array.prototype.every, callback, "Array.prototype.every(callback)", void 0);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.every, [callback], "Array.prototype.every(callback)", testArray);
console.log(r);
console.log(testArray);

console.log("");