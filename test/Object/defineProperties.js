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

console.log("================== Object.defineProperties ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.defineProperties, ["string", {}], "Object.defineProperties(string, object)");
acceptParams(Object.defineProperties, [void 0, {}], "Object.defineProperties(undefined, object)");
acceptParams(Object.defineProperties, [1, {}], "Object.defineProperties(number, object)");
acceptParams(Object.defineProperties, [null, {}], "Object.defineProperties(null, object)");
acceptParams(Object.defineProperties, [{}], "Object.defineProperties(object)");
acceptParams(Object.defineProperties, [
	[1, 2, 3, 4, 5], 1
], "Object.defineProperties(array, number)");
acceptParams(Object.defineProperties, [function() {}, 'test'], "Object.defineProperties(function, string)");
acceptParams(Object.defineProperties, [new Date(), null], "Object.defineProperties(date, null)");
console.log("");

acceptParams(Object.defineProperties, [{}, {
	a: "string"
}], "Object.defineProperties(object, {a : string})");

acceptParams(Object.defineProperties, [{}, {
	a: {
		set: function() {}
	}
}], "Object.defineProperties(object, {a : {set : function}})");

acceptParams(Object.defineProperties, [{}, {
	a: {
		get: function() {}
	}
}], "Object.defineProperties(object, {a : {get : function}})");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");


var r = acceptParams(Object.defineProperties, [{}, {
	a: {
		value: 125
	}
}], "Object.defineProperties(object,  {a : {value : 125}})");
console.log("     " + r.toSource());


/*acceptParams(Object.defineProperties, [new File(),{}], "Object.defineProperties(File, object)");
acceptParams(Object.defineProperties, [new Folder(),{}], "Object.defineProperties(Folder, object)");*/
console.log("");