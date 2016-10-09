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

console.log("================== Object.defineProperty ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");
acceptParams(Object.defineProperty, ['string', 'prop', 'string'], "Object.defineProperty(string, string, string)");
acceptParams(Object.defineProperty, [void 0, 'prop', 'string'], "Object.defineProperty(undefined, string, string)");
acceptParams(Object.defineProperty, [1, 'prop', 'string'], "Object.defineProperty(number, string, string)");
acceptParams(Object.defineProperty, [null, 'prop', 'string'], "Object.defineProperty(null, string, string)");

acceptParams(Object.defineProperty, [{}, 'prop', 'string'], "Object.defineProperty(object, string, string)");
acceptParams(Object.defineProperty, [{}, 'prop', void 0], "Object.defineProperty(object, string, undefined)");
acceptParams(Object.defineProperty, [{}, 'prop', 1], "Object.defineProperty(object, string, number)");
acceptParams(Object.defineProperty, [{}, 'prop', null], "Object.defineProperty(object, string, null)");

acceptParams(Object.defineProperty, [{}, 'prop', {
	set: function() {}
}], "Object.defineProperty(object, string, {set: function() {})");
acceptParams(Object.defineProperty, [{}, 'prop', {
	get: function() {}
}], "Object.defineProperty(object, string, {get: function() {})");



console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

var r = acceptParams(Object.defineProperty, [{}, 'prop', {
	a: 'test'
}], "Object.defineProperty(object, 'prop', {a: 'test'})");
console.log("     " + r.toSource());
var r1 = acceptParams(Object.defineProperty, [{}, 'prop', {
	value: 'test'
}], "Object.defineProperty(object, 'prop', {value: 'test'})");
console.log("     " + r1.toSource());

var r2 = acceptParams(Object.defineProperty, [
	[1, 2, 3, 4, 5], 'prop', {
		value: 'test'
	}
], "Object.defineProperty(array, 'prop', {value: 'test'})");
console.log("     " + r2.prop);

var r3 = acceptParams(Object.defineProperty, [function() {}, 'prop', {
	value: 'test'
}], "Object.defineProperty(function, 'prop', {value: 'test'})");
console.log("     " + r3.prop);

var r4 = acceptParams(Object.defineProperty, [new Date(), 'prop', {
	value: 'test'
}], "Object.defineProperty(date, 'prop', {value: 'test'})");
console.log("     " + r4.prop);

/*var r5 = acceptParams(Object.defineProperty, [new File(), 'prop', {
	value: 'test'
}], "Object.defineProperty(file, 'prop', {value: 'test'})");
console.log("     " + r5.prop);*/
console.log("");