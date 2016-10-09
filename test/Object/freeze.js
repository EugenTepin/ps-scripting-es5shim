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

console.log("================== Object.freeze ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.freeze, ["string"], "Object.freeze(string)");
acceptParams(Object.freeze, [void 0], "Object.freeze(undefined)");
acceptParams(Object.freeze, [1], "Object.freeze(number)");
acceptParams(Object.freeze, [null], "Object.freeze(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.freeze, [{}], "Object.freeze(object)");
acceptParams(Object.freeze, [
	[1, 2, 3, 4, 5]
], "Object.freeze(array)");
acceptParams(Object.freeze, [function() {}], "Object.freeze(function)");
acceptParams(Object.freeze, [new Date()], "Object.freeze(date)");
//acceptParams(Object.freeze, [new File()], "Object.freeze(File)");
//acceptParams(Object.freeze, [new Folder()], "Object.freeze(Folder)");
console.log("");