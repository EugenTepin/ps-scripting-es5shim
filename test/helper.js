if ($.writeln !== void 0) {
	var console = {
		log: function(obj) {
			$.writeln(obj);
		}
	};
} else {
	var console = window.console;
}



module.exports.acceptParams = function(func, params, name) {
	var output;
	try {
		output = func.apply(null, params);
		var result = true;
	} catch (e) {
		var result = false;
	}
	if (result) {
		console.log(name + " [OK]");
	} else {
		console.log(name + " [Error]");
	}
	return output;
}


/*Test Data*/
//var testArrayDigits = [-100, 55, 0, 95, 0, 43, -145, 3, 9, 16];