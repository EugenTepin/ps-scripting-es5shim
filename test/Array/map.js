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
	return (-Math.abs(currentValue));
};

console.log("================== Array.prototype.map ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.map, ["string"], "Array.prototype.map(string)", testArray);
acceptParams(Array.prototype.map, [void 0], "Array.prototype.map(undefined)", testArray);
acceptParams(Array.prototype.map, [1], "Array.prototype.map(number)", testArray);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.map, [callback], "Array.prototype.map(callback)", testArray);
console.log(r);
console.log(testArray);

console.log("");