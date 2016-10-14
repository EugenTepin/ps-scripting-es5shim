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


console.log("================== Array.prototype.indexOf ==================");
/*console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");


acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> null", null);
acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> undefined", void 0);
console.log("");*/


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r1 = acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> testArray", testArray);
console.log(r1);
var r2 = acceptParams(Array.prototype.indexOf, [0, 3], "Array.prototype.indexOf(0,3) this -> testArray", testArray);
console.log(r2);
console.log(testArray);
console.log("");