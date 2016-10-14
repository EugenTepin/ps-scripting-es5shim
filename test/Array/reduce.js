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

var callback = function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
};

console.log("================== Array.prototype.reduce ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.reduce, ["string"], "Array.prototype.reduce(string)", testArray);
acceptParams(Array.prototype.reduce, [void 0], "Array.prototype.reduce(undefined)", testArray);
acceptParams(Array.prototype.reduce, [1], "Array.prototype.reduce(number)", testArray);
//acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", null);
//acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", void 0);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.reduce, [callback], "Array.prototype.reduce(callback)", testArray);
console.log(r);
console.log(testArray);

var r1 = acceptParams(Array.prototype.reduce, [callback, 24], "Array.prototype.reduce(callback,24)", testArray);
console.log(r1);
console.log(testArray);

console.log("");