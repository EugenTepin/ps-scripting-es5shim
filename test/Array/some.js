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
	return (currentValue < 0);
};

console.log("================== Array.prototype.some ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.some, ["string"], "Array.prototype.some(string)", testArray);
acceptParams(Array.prototype.some, [void 0], "Array.prototype.some(undefined)", testArray);
acceptParams(Array.prototype.some, [1], "Array.prototype.some(number)", testArray);
//acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", null);
//acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", void 0);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.some, [callback], "Array.prototype.some(callback)", testArray);
console.log(r);
console.log(testArray);

console.log("");