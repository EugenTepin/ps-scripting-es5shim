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

console.log("================== Object.seal ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.seal, ["string"], "Object.seal(string)");
acceptParams(Object.seal, [void 0], "Object.seal(undefined)");
acceptParams(Object.seal, [1], "Object.seal(number)");
acceptParams(Object.seal, [null], "Object.seal(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.seal, [{}], "Object.seal(object)");
acceptParams(Object.seal, [
	[1, 2, 3, 4, 5]
], "Object.seal(array)");
acceptParams(Object.seal, [function() {}], "Object.seal(function)");
acceptParams(Object.seal, [new Date()], "Object.seal(date)");
//acceptParams(Object.seal, [new File()], "Object.seal(File)");
//acceptParams(Object.seal, [new Folder()], "Object.seal(Folder)");
console.log("");