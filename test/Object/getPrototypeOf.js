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

console.log("================== Object.getPrototypeOf ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.getPrototypeOf, ["string"], "Object.getPrototypeOf(string)");
acceptParams(Object.getPrototypeOf, [void 0], "Object.getPrototypeOf(undefined)");
acceptParams(Object.getPrototypeOf, [1], "Object.getPrototypeOf(number)");
acceptParams(Object.getPrototypeOf, [null], "Object.getPrototypeOf(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.getPrototypeOf, [{}], "Object.getPrototypeOf(object)");
acceptParams(Object.getPrototypeOf, [
	[1, 2, 3, 4, 5]
], "Object.getPrototypeOf(array)");
acceptParams(Object.getPrototypeOf, [function() {}], "Object.getPrototypeOf(function)");
acceptParams(Object.getPrototypeOf, [new Date()], "Object.getPrototypeOf(date)");
/*acceptParams(Object.getPrototypeOf, [new File()], "Object.getPrototypeOf(File)");
acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");

var r = acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
console.log("     " + r);*/
console.log("");