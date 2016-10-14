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

console.log("================== Array.prototype.reduceRight ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Array.prototype.reduceRight, ["string"], "Array.prototype.reduceRight(string)", testArray);
acceptParams(Array.prototype.reduceRight, [void 0], "Array.prototype.reduceRight(undefined)", testArray);
acceptParams(Array.prototype.reduceRight, [1], "Array.prototype.reduceRight(number)", testArray);
//acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", null);
//acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", void 0);
console.log("");

console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Array.prototype.reduceRight, [callback], "Array.prototype.reduceRight(callback)", testArray);
console.log(r);
console.log(testArray);

var r1 = acceptParams(Array.prototype.reduceRight, [callback, 24], "Array.prototype.reduceRight(callback,24)", testArray);
console.log(r1);
console.log(testArray);

console.log("");