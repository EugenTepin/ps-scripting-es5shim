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

var result = [];
var callback = function(currentValue, index, array) {
	result.push(Math.abs(currentValue));
};

console.log("================== Array.prototype.forEach ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.forEach, ["string"], "Array.prototype.forEach(string)", testArray);
acceptParams(Array.prototype.forEach, [void 0], "Array.prototype.forEach(undefined)", testArray);
acceptParams(Array.prototype.forEach, [1], "Array.prototype.forEach(number)", testArray);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.forEach, [callback], "Array.prototype.forEach(callback)", testArray);
console.log(result);
console.log(testArray);

console.log("");