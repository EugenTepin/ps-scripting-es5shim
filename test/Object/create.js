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


console.log("================== Object.create ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.create, ["string"], "Object.create(string)");
acceptParams(Object.create, [void 0], "Object.create(undefined)");
acceptParams(Object.create, [1], "Object.create(number)");
console.log("");

acceptParams(Object.create, [{}, {
	a: "string"
}], "Object.create(object, {a : string})");

acceptParams(Object.create, [{}, {
	a: {
		set: function() {}
	}
}], "Object.create(object, {a : {set : function}})");

acceptParams(Object.create, [{}, {
	a: {
		get: function() {}
	}
}], "Object.create(object, {a : {get : function}})");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.create, [{}], "Object.create(object)");
var r = acceptParams(Object.create, [{}, {
	a: {
		value: 125
	}
}], "Object.create(object,  {a : {value : 125}})");
console.log("     " + r.toSource());

acceptParams(Object.create, [
	[1, 2, 3, 4, 5]
], "Object.create(array)");
acceptParams(Object.create, [function() {}], "Object.create(function)");
acceptParams(Object.create, [new Date()], "Object.create(date)");
acceptParams(Object.create, [null], "Object.create(null)");
/*acceptParams(Object.create, [new File()], "Object.create(File)");
acceptParams(Object.create, [new Folder()], "Object.create(Folder)");*/
console.log("");