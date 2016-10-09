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

console.log("================== Object.preventExtensions ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.preventExtensions, ["string"], "Object.preventExtensions(string)");
acceptParams(Object.preventExtensions, [void 0], "Object.preventExtensions(undefined)");
acceptParams(Object.preventExtensions, [1], "Object.preventExtensions(number)");
acceptParams(Object.preventExtensions, [null], "Object.preventExtensions(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.preventExtensions, [{}], "Object.preventExtensions(object)");
acceptParams(Object.preventExtensions, [
	[1, 2, 3, 4, 5]
], "Object.preventExtensions(array)");
acceptParams(Object.preventExtensions, [function() {}], "Object.preventExtensions(function)");
acceptParams(Object.preventExtensions, [new Date()], "Object.preventExtensions(date)");
//acceptParams(Object.preventExtensions, [new File()], "Object.preventExtensions(File)");
//acceptParams(Object.preventExtensions, [new Folder()], "Object.preventExtensions(Folder)");
console.log("");