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

console.log("================== Object.isExtensible ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.isExtensible, ["string"], "Object.isExtensible(string)");
acceptParams(Object.isExtensible, [void 0], "Object.isExtensible(undefined)");
acceptParams(Object.isExtensible, [1], "Object.isExtensible(number)");
acceptParams(Object.isExtensible, [null], "Object.isExtensible(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r1 = acceptParams(Object.isExtensible, [{}], "Object.isExtensible(object)");
console.log("     " + r1);

var r2 = acceptParams(Object.isExtensible, [
	[1, 2, 3, 4, 5]
], "Object.isExtensible(array)");
console.log("     " + r2);

var r3 = acceptParams(Object.isExtensible, [function() {}], "Object.isExtensible(function)");
console.log("     " + r3);
var r4 = acceptParams(Object.isExtensible, [new Date()], "Object.isExtensible(date)");
console.log("     " + r4);
/*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
console.log("     " + r5);
var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
console.log("     " + r6);*/
console.log("");