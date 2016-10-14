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


console.log("================== String.prototype.trim ==================");
console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
console.log("");