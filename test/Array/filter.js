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
	return (currentValue > 0);
};

console.log("================== Array.prototype.filter ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.filter, ["string"], "Array.prototype.filter(string)", testArray);
acceptParams(Array.prototype.filter, [void 0], "Array.prototype.filter(undefined)", testArray);
acceptParams(Array.prototype.filter, [1], "Array.prototype.filter(number)", testArray);
acceptParams(Array.prototype.filter, callback, "Array.prototype.filter(callback)", null);
acceptParams(Array.prototype.filter, callback, "Array.prototype.filter(callback)", void 0);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.filter, [callback], "Array.prototype.filter(callback)", testArray);
console.log(r);
console.log(testArray);

console.log("");