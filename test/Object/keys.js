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

console.log("================== Object.keys ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.keys, ["string"], "Object.keys(string)");
acceptParams(Object.keys, [void 0], "Object.keys(undefined)");
acceptParams(Object.keys, [1], "Object.keys(number)");
acceptParams(Object.keys, [null], "Object.keys(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.keys, [{}], "Object.keys(object)");
acceptParams(Object.keys, [
	[1, 2, 3, 4, 5]
], "Object.keys(array)");
acceptParams(Object.keys, [function() {}], "Object.keys(function)");
acceptParams(Object.keys, [new Date()], "Object.keys(date)");
//acceptParams(Object.keys, [new File()], "Object.keys(File)");
//acceptParams(Object.keys, [new Folder()], "Object.keys(Folder)");

var r = acceptParams(Object.keys, [{
	a: 1,
	b: 2
}], "Object.keys({a:1,b:2})");
console.log("     " + r);
console.log("");