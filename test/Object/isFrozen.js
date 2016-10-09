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

console.log("================== Object.isFrozen ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.isFrozen, ["string"], "Object.isFrozen(string)");
acceptParams(Object.isFrozen, [void 0], "Object.isFrozen(undefined)");
acceptParams(Object.isFrozen, [1], "Object.isFrozen(number)");
acceptParams(Object.isFrozen, [null], "Object.isFrozen(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r1 = acceptParams(Object.isFrozen, [{}], "Object.isFrozen(object)");
console.log("     " + r1);

var r2 = acceptParams(Object.isFrozen, [
	[1, 2, 3, 4, 5]
], "Object.isFrozen(array)");
console.log("     " + r2);

var r3 = acceptParams(Object.isFrozen, [function() {}], "Object.isFrozen(function)");
console.log("     " + r3);
var r4 = acceptParams(Object.isFrozen, [new Date()], "Object.isFrozen(date)");
console.log("     " + r4);
/*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
console.log("     " + r5);
var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
console.log("     " + r6);*/
console.log("");