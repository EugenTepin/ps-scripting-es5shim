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


console.log("================== Array.isArray ==================");
console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");
var r1 = acceptParams(Array.isArray, ["string"], "Array.isArray(string)");
console.log(r1);
var r2 = acceptParams(Array.isArray, [void 0], "Array.isArray(undefined)");
console.log(r2);
var r3 = acceptParams(Array.isArray, [1], "Array.isArray(number)");
console.log(r3);
var r4 = acceptParams(Array.isArray, [null], "Array.isArray(null)");
console.log(r4);
var r5 = acceptParams(Array.isArray, [function() {}], "Array.isArray(function)");
console.log(r5);
var r6 = acceptParams(Array.isArray, [{}], "Array.isArray(object)");
console.log(r6);
var r7 = acceptParams(Array.isArray, [testArray], "Array.isArray(testArray)");
console.log(r7);


console.log("");