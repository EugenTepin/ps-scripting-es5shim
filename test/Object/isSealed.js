var acceptParams = require('../helper.js').acceptParams;
if ($.writeln !== void 0) {
	var console = {
		log: function(obj) {
			$.writeln(obj);
		}
	};
} else {
	var console = window.console;
}

console.log("================== Object.isSealed ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.isSealed, ["string"], "Object.isSealed(string)");
acceptParams(Object.isSealed, [void 0], "Object.isSealed(undefined)");
acceptParams(Object.isSealed, [1], "Object.isSealed(number)");
acceptParams(Object.isSealed, [null], "Object.isSealed(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r1 = acceptParams(Object.isSealed, [{}], "Object.isSealed(object)");
console.log("     " + r1);

var r2 = acceptParams(Object.isSealed, [
	[1, 2, 3, 4, 5]
], "Object.isSealed(array)");
console.log("     " + r2);

var r3 = acceptParams(Object.isSealed, [function() {}], "Object.isSealed(function)");
console.log("     " + r3);
var r4 = acceptParams(Object.isSealed, [new Date()], "Object.isSealed(date)");
console.log("     " + r4);
/*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
console.log("     " + r5);
var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
console.log("     " + r6);*/
console.log("");