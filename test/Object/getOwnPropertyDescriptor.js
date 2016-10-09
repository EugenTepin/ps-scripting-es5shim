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

console.log("================== Object.getOwnPropertyDescriptor ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.getOwnPropertyDescriptor, ["string", 'prop'], "Object.getOwnPropertyDescriptor(string, prop)");
acceptParams(Object.getOwnPropertyDescriptor, [void 0, 'prop'], "Object.getOwnPropertyDescriptor(undefined, prop)");
acceptParams(Object.getOwnPropertyDescriptor, [1, 'prop'], "Object.getOwnPropertyDescriptor(number, prop)");
acceptParams(Object.getOwnPropertyDescriptor, [null, 'prop'], "Object.getOwnPropertyDescriptor(null, prop)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r1 = acceptParams(Object.getOwnPropertyDescriptor, [{}, 'prop'], "Object.getOwnPropertyDescriptor({}, string)");
console.log("     " + r1);
var r2 = acceptParams(Object.getOwnPropertyDescriptor, [{}, void 0], "Object.getOwnPropertyDescriptor({}, undefined)");
console.log("     " + r2);
var r3 = acceptParams(Object.getOwnPropertyDescriptor, [{}, 1], "Object.getOwnPropertyDescriptor({}, number)");
console.log("     " + r3);
var r4 = acceptParams(Object.getOwnPropertyDescriptor, [{}, null], "Object.getOwnPropertyDescriptor({}, null)");
console.log("     " + r4);

var r5 = acceptParams(Object.getOwnPropertyDescriptor, [{
	a: 1
}, 'a'], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
console.log("     " + r5.toSource());
console.log("");