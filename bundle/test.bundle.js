/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log($.os);
	try {
		console.log(app.name + ' ' + app.build);
	} catch (e) {
		console.log(app.name + ' ' + app.version);
	}
	//console.log(app.name + ' ' + app.build || app.version);
	console.log('Javascript version ' + $.version);


	__webpack_require__(2)

	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)
	__webpack_require__(7)
	__webpack_require__(8)
	__webpack_require__(9)
	__webpack_require__(10)
	__webpack_require__(11)
	__webpack_require__(12)
	__webpack_require__(13)

	__webpack_require__(14)

	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	if ($.writeln !== void 0) {
	    var console = {
	        log: function(obj) {
	            $.writeln(obj);
	        }
	    };
	} else {
	    var console = window.console;
	}



	module.exports.acceptParams = function(func, params, name, thisParam) {
	    var output;
	    try {
	        output = func.apply(thisParam, params);
	        var result = true;
	    } catch (e) {
	        var result = false;
	        console.log("         " + e);
	    }
	    if (result) {
	        console.log(name + " [OK]");
	    } else {
	        console.log(name + " [Error]");
	    }
	    return output;
	}


	/*Test Data*/
	module.exports.testArray = [-100, 55, 0, 95, 0, 43, -145, 3, 9, 16];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var callback = function(currentValue, index, array) {
		return (typeof currentValue === 'number');
	};

	console.log("================== Array.prototype.every ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.every, ["string"], "Array.prototype.every(string)", testArray);
	acceptParams(Array.prototype.every, [void 0], "Array.prototype.every(undefined)", testArray);
	acceptParams(Array.prototype.every, [1], "Array.prototype.every(number)", testArray);
	acceptParams(Array.prototype.every, callback, "Array.prototype.every(callback)", null);
	acceptParams(Array.prototype.every, callback, "Array.prototype.every(callback)", void 0);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.every, [callback], "Array.prototype.every(callback)", testArray);
	console.log(r);
	console.log(testArray);

	console.log("");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var callback = function(currentValue, index, array) {
		return (currentValue > 0);
	};

	console.log("================== Array.prototype.filter ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.filter, ["string"], "Array.prototype.filter(string)", testArray);
	acceptParams(Array.prototype.filter, [void 0], "Array.prototype.filter(undefined)", testArray);
	acceptParams(Array.prototype.filter, [1], "Array.prototype.filter(number)", testArray);
	acceptParams(Array.prototype.filter, callback, "Array.prototype.filter(callback)", null);
	acceptParams(Array.prototype.filter, callback, "Array.prototype.filter(callback)", void 0);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.filter, [callback], "Array.prototype.filter(callback)", testArray);
	console.log(r);
	console.log(testArray);

	console.log("");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var result = [];
	var callback = function(currentValue, index, array) {
		result.push(Math.abs(currentValue));
	};

	console.log("================== Array.prototype.forEach ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.forEach, ["string"], "Array.prototype.forEach(string)", testArray);
	acceptParams(Array.prototype.forEach, [void 0], "Array.prototype.forEach(undefined)", testArray);
	acceptParams(Array.prototype.forEach, [1], "Array.prototype.forEach(number)", testArray);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.forEach, [callback], "Array.prototype.forEach(callback)", testArray);
	console.log(result);
	console.log(testArray);

	console.log("");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}


	console.log("================== Array.isArray ==================");
	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");
	var r1 = acceptParams(Array.isArray, ["string"], "Array.isArray(string)");
	console.log(r1);
	var r2 = acceptParams(Array.isArray, [void 0], "Array.isArray(undefined)");
	console.log(r2);
	var r3 = acceptParams(Array.isArray, [1], "Array.isArray(number)");
	console.log(r3);
	var r4 = acceptParams(Array.isArray, [null], "Array.isArray(null)");
	console.log(r4);
	var r5 = acceptParams(Array.isArray, [function() {}], "Array.isArray(function)");
	console.log(r5);
	var r6 = acceptParams(Array.isArray, [{}], "Array.isArray(object)");
	console.log(r6);
	var r7 = acceptParams(Array.isArray, [testArray], "Array.isArray(testArray)");
	console.log(r7);


	console.log("");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}


	console.log("================== Array.prototype.lastIndexOf ==================");
	/*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");


	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> null", null);
	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> undefined", void 0);
	console.log("");*/


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r1 = acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> testArray", testArray);
	console.log(r1);
	var r2 = acceptParams(Array.prototype.lastIndexOf, [0, 3], "Array.prototype.lastIndexOf(0,3) this -> testArray", testArray);
	console.log(r2);

	console.log(testArray);
	console.log("");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}


	var callback = function(currentValue, index, array) {
		return (-Math.abs(currentValue));
	};

	console.log("================== Array.prototype.map ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.map, ["string"], "Array.prototype.map(string)", testArray);
	acceptParams(Array.prototype.map, [void 0], "Array.prototype.map(undefined)", testArray);
	acceptParams(Array.prototype.map, [1], "Array.prototype.map(number)", testArray);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.map, [callback], "Array.prototype.map(callback)", testArray);
	console.log(r);
	console.log(testArray);

	console.log("");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var callback = function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	};

	console.log("================== Array.prototype.reduce ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.reduce, ["string"], "Array.prototype.reduce(string)", testArray);
	acceptParams(Array.prototype.reduce, [void 0], "Array.prototype.reduce(undefined)", testArray);
	acceptParams(Array.prototype.reduce, [1], "Array.prototype.reduce(number)", testArray);
	//acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", null);
	//acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", void 0);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.reduce, [callback], "Array.prototype.reduce(callback)", testArray);
	console.log(r);
	console.log(testArray);

	var r1 = acceptParams(Array.prototype.reduce, [callback, 24], "Array.prototype.reduce(callback,24)", testArray);
	console.log(r1);
	console.log(testArray);

	console.log("");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var callback = function(previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	};

	console.log("================== Array.prototype.reduceRight ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.reduceRight, ["string"], "Array.prototype.reduceRight(string)", testArray);
	acceptParams(Array.prototype.reduceRight, [void 0], "Array.prototype.reduceRight(undefined)", testArray);
	acceptParams(Array.prototype.reduceRight, [1], "Array.prototype.reduceRight(number)", testArray);
	//acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", null);
	//acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", void 0);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.reduceRight, [callback], "Array.prototype.reduceRight(callback)", testArray);
	console.log(r);
	console.log(testArray);

	var r1 = acceptParams(Array.prototype.reduceRight, [callback, 24], "Array.prototype.reduceRight(callback,24)", testArray);
	console.log(r1);
	console.log(testArray);

	console.log("");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	var callback = function(currentValue, index, array) {
		return (currentValue < 0);
	};

	console.log("================== Array.prototype.some ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Array.prototype.some, ["string"], "Array.prototype.some(string)", testArray);
	acceptParams(Array.prototype.some, [void 0], "Array.prototype.some(undefined)", testArray);
	acceptParams(Array.prototype.some, [1], "Array.prototype.some(number)", testArray);
	//acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", null);
	//acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", void 0);
	console.log("");

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r = acceptParams(Array.prototype.some, [callback], "Array.prototype.some(callback)", testArray);
	console.log(r);
	console.log(testArray);

	console.log("");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	var testArray = __webpack_require__(3).testArray;

	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}



	console.log("================== Function.prototype.bind ==================");
	/*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Function.prototype.bind, ["string"], "Function.prototype.bind(string)", testArray);
	acceptParams(Function.prototype.bind, [void 0], "Function.prototype.bind(undefined)", testArray);
	acceptParams(Function.prototype.bind, [1], "Function.prototype.bind(number)", testArray);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", null);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", void 0);
	console.log("");*/

	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var module = {
		x: 81,
		getX: function() {
			return this.x;
		}
	};

	console.log(module.getX()); // 81

	var getX = module.getX;
	// 9, поскольку в этом случае this ссылается на глобальный объект
	console.log(getX());
	// создаём новую функцию с this, привязанным к module
	var boundGetX = getX.bind(module);
	console.log(boundGetX()); // 81

	console.log("");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
	    var console = {
	        log: function(obj) {
	            $.writeln(obj);
	        }
	    };
	} else {
	    var console = window.console;
	}

	console.log("================== Object.getOwnPropertyNames ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.getOwnPropertyNames, ["string"], "Object.getOwnPropertyNames(string)");
	acceptParams(Object.getOwnPropertyNames, [void 0], "Object.getOwnPropertyNames(undefined)");
	acceptParams(Object.getOwnPropertyNames, [1], "Object.getOwnPropertyNames(number)");
	acceptParams(Object.getOwnPropertyNames, [null], "Object.getOwnPropertyNames(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	acceptParams(Object.getOwnPropertyNames, [{ a: 1 }], "Object.getOwnPropertyNames(object)");
	acceptParams(Object.getOwnPropertyNames, [
	    [1, 2, 3, 4, 5]
	], "Object.getOwnPropertyNames(array)");
	acceptParams(Object.getOwnPropertyNames, [function() {}], "Object.getOwnPropertyNames(function)");
	acceptParams(Object.getOwnPropertyNames, [new Date()], "Object.getOwnPropertyNames(date)");
	//acceptParams(Object.getOwnPropertyNames, [new File()], "Object.getOwnPropertyNames(File)");
	//acceptParams(Object.getOwnPropertyNames, [new Folder()], "Object.getOwnPropertyNames(Folder)");

	var r = acceptParams(Object.getOwnPropertyNames, [Math], "Object.getOwnPropertyNames(Math)");
	console.log("     " + r);
	console.log("");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log("================== Object.getPrototypeOf ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.getPrototypeOf, ["string"], "Object.getPrototypeOf(string)");
	acceptParams(Object.getPrototypeOf, [void 0], "Object.getPrototypeOf(undefined)");
	acceptParams(Object.getPrototypeOf, [1], "Object.getPrototypeOf(number)");
	acceptParams(Object.getPrototypeOf, [null], "Object.getPrototypeOf(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	acceptParams(Object.getPrototypeOf, [{}], "Object.getPrototypeOf(object)");
	acceptParams(Object.getPrototypeOf, [
		[1, 2, 3, 4, 5]
	], "Object.getPrototypeOf(array)");
	acceptParams(Object.getPrototypeOf, [function() {}], "Object.getPrototypeOf(function)");
	acceptParams(Object.getPrototypeOf, [new Date()], "Object.getPrototypeOf(date)");
	/*acceptParams(Object.getPrototypeOf, [new File()], "Object.getPrototypeOf(File)");
	acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");

	var r = acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	console.log("     " + r);*/
	console.log("");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log("================== Object.isExtensible ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.isExtensible, ["string"], "Object.isExtensible(string)");
	acceptParams(Object.isExtensible, [void 0], "Object.isExtensible(undefined)");
	acceptParams(Object.isExtensible, [1], "Object.isExtensible(number)");
	acceptParams(Object.isExtensible, [null], "Object.isExtensible(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r1 = acceptParams(Object.isExtensible, [{}], "Object.isExtensible(object)");
	console.log("     " + r1);

	var r2 = acceptParams(Object.isExtensible, [
		[1, 2, 3, 4, 5]
	], "Object.isExtensible(array)");
	console.log("     " + r2);

	var r3 = acceptParams(Object.isExtensible, [function() {}], "Object.isExtensible(function)");
	console.log("     " + r3);
	var r4 = acceptParams(Object.isExtensible, [new Date()], "Object.isExtensible(date)");
	console.log("     " + r4);
	/*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
	console.log("     " + r6);*/
	console.log("");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log("================== Object.isFrozen ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.isFrozen, ["string"], "Object.isFrozen(string)");
	acceptParams(Object.isFrozen, [void 0], "Object.isFrozen(undefined)");
	acceptParams(Object.isFrozen, [1], "Object.isFrozen(number)");
	acceptParams(Object.isFrozen, [null], "Object.isFrozen(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r1 = acceptParams(Object.isFrozen, [{}], "Object.isFrozen(object)");
	console.log("     " + r1);

	var r2 = acceptParams(Object.isFrozen, [
		[1, 2, 3, 4, 5]
	], "Object.isFrozen(array)");
	console.log("     " + r2);

	var r3 = acceptParams(Object.isFrozen, [function() {}], "Object.isFrozen(function)");
	console.log("     " + r3);
	var r4 = acceptParams(Object.isFrozen, [new Date()], "Object.isFrozen(date)");
	console.log("     " + r4);
	/*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
	console.log("     " + r6);*/
	console.log("");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log("================== Object.isSealed ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.isSealed, ["string"], "Object.isSealed(string)");
	acceptParams(Object.isSealed, [void 0], "Object.isSealed(undefined)");
	acceptParams(Object.isSealed, [1], "Object.isSealed(number)");
	acceptParams(Object.isSealed, [null], "Object.isSealed(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	var r1 = acceptParams(Object.isSealed, [{}], "Object.isSealed(object)");
	console.log("     " + r1);

	var r2 = acceptParams(Object.isSealed, [
		[1, 2, 3, 4, 5]
	], "Object.isSealed(array)");
	console.log("     " + r2);

	var r3 = acceptParams(Object.isSealed, [function() {}], "Object.isSealed(function)");
	console.log("     " + r3);
	var r4 = acceptParams(Object.isSealed, [new Date()], "Object.isSealed(date)");
	console.log("     " + r4);
	/*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
	console.log("");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
	if ($.writeln !== void 0) {
		var console = {
			log: function(obj) {
				$.writeln(obj);
			}
		};
	} else {
		var console = window.console;
	}

	console.log("================== Object.preventExtensions ==================");
	console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");

	acceptParams(Object.preventExtensions, ["string"], "Object.preventExtensions(string)");
	acceptParams(Object.preventExtensions, [void 0], "Object.preventExtensions(undefined)");
	acceptParams(Object.preventExtensions, [1], "Object.preventExtensions(number)");
	acceptParams(Object.preventExtensions, [null], "Object.preventExtensions(null)");


	console.log("");
	console.log("+++++++ The following should be OK. +++++++");
	console.log("");

	acceptParams(Object.preventExtensions, [{}], "Object.preventExtensions(object)");
	acceptParams(Object.preventExtensions, [
		[1, 2, 3, 4, 5]
	], "Object.preventExtensions(array)");
	acceptParams(Object.preventExtensions, [function() {}], "Object.preventExtensions(function)");
	acceptParams(Object.preventExtensions, [new Date()], "Object.preventExtensions(date)");
	//acceptParams(Object.preventExtensions, [new File()], "Object.preventExtensions(File)");
	//acceptParams(Object.preventExtensions, [new Folder()], "Object.preventExtensions(Folder)");
	console.log("");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var acceptParams = __webpack_require__(3).acceptParams;
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

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*
	TODO
	1) Make a list with functionality that need to patch [done]
	2) Get "blueprints" of these methods [done]
	3) Rewrite methods with Photoshop javascript environment and "blueprints" licences in mind

	Function
	• Function.bind [done]

	Object
	• Object.defineProperty [done]
	• Object.getOwnPropertyDescriptor [done]
	• Object.defineProperties 	 [done]
	• Object.create			  	 [done]
	• Object.getOwnPropertyNames [done]
	• Object.getPrototypeOf		 [done]
	• Object.preventExtensions   [done]
	• Object.isExtensible		 [done]
	• Object.seal 				 [done]
	• Object.isSealed(obj)		 [done]
	• Object.freeze 			 [done]
	• Object.isFrozen(obj)		 [done]
	• Object.keys 				 [done]

	Array
	• Array.isArray					[done]
	• Array.prototype.indexOf 		[done]
	• Array.prototype.lastIndexOf	[done]
	• Array.prototype.every 		[done]
	• Array.prototype.some			[done]
	• Array.prototype.forEach		[done]
	• Array.prototype.map			[done]
	• Array.prototype.filter		[done]
	• Array.prototype.reduce 		[done]
	• Array.prototype.reduceRight	[done]


	String
	• String.prototype.trim	

	Other
	• console.log
	• window



	*/
	__webpack_require__(29)

	__webpack_require__(30)
	__webpack_require__(31)
	__webpack_require__(32)
	__webpack_require__(33)
	__webpack_require__(34)
	__webpack_require__(35)
	__webpack_require__(36)
	__webpack_require__(37)
	__webpack_require__(38)
	__webpack_require__(39)

	__webpack_require__(40)

	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);

/***/ },
/* 29 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	*/
	if (!String.prototype.trim) {
		// Вырезаем BOM и неразрывный пробел
		String.prototype.trim = function() {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		};
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
	if (!Array.prototype.every) {
	  Array.prototype.every = function(callback, thisArg) {
	    var T, k;

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.every called on null or undefined');
	    }

	    // 1. Let O be the result of calling ToObject passing the this 
	    //    value as the argument.
	    var O = Object(this);

	    // 2. Let lenValue be the result of calling the Get internal method
	    //    of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;

	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    T = (arguments.length > 1) ? thisArg : void 0;

	    // 6. Let k be 0.
	    k = 0;

	    // 7. Repeat, while k < len
	    while (k < len) {

	      var kValue;

	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal 
	      //    method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {

	        // i. Let kValue be the result of calling the Get internal method
	        //    of O with argument Pk.
	        kValue = O[k];

	        // ii. Let testResult be the result of calling the Call internal method
	        //     of callback with T as the this value and argument list 
	        //     containing kValue, k, and O.
	        var testResult = callback.call(T, kValue, k, O);

	        // iii. If ToBoolean(testResult) is false, return false.
	        if (!testResult) {
	          return false;
	        }
	      }
	      k++;
	    }
	    return true;
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
	if (!Array.prototype.filter) {
	  Array.prototype.filter = function(callback, thisArg) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.filter called on null or undefined');
	    }

	    var t = Object(this);
	    var len = t.length >>> 0;

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var res = [];

	    var T = (arguments.length > 1) ? thisArg : void 0;
	    
	    for (var i = 0; i < len; i++) {
	      if (i in t) {
	        var val = t[i];

	        // NOTE: Technically this should Object.defineProperty at
	        //       the next index, as push can be affected by
	        //       properties on Object.prototype and Array.prototype.
	        //       But that method's new, and collisions should be
	        //       rare, so use the more-compatible alternative.
	        if (callback.call(T, val, i, t)) {
	          res.push(val);
	        }
	      }
	    }

	    return res;
	  };
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.18
	// Reference: http://es5.github.io/#x15.4.4.18
	if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function(callback, thisArg) {


	        if (this === void 0 || this === null) {
	            throw new TypeError('Array.prototype.forEach called on null or undefined');
	        }

	        // 1. Let O be the result of calling toObject() passing the
	        // |this| value as the argument.
	        var O = Object(this);

	        // 2. Let lenValue be the result of calling the Get() internal
	        // method of O with the argument "length".
	        // 3. Let len be toUint32(lenValue).
	        var len = O.length >>> 0;

	        // 4. If isCallable(callback) is false, throw a TypeError exception. 
	        // See: http://es5.github.com/#x9.11
	        if (callback.__class__ !== 'Function') {
	            throw new TypeError(callback + ' is not a function');
	        }

	        // 5. If thisArg was supplied, let T be thisArg; else let
	        // T be undefined.
	        var T = (arguments.length > 1) ? thisArg : void 0;


	        // 6. Let k be 0
	        //k = 0;

	        // 7. Repeat, while k < len
	        for (var k = 0; k < len; k++) {
	            var kValue;
	            // a. Let Pk be ToString(k).
	            //    This is implicit for LHS operands of the in operator
	            // b. Let kPresent be the result of calling the HasProperty
	            //    internal method of O with argument Pk.
	            //    This step can be combined with c
	            // c. If kPresent is true, then
	            if (k in O) {
	                // i. Let kValue be the result of calling the Get internal
	                // method of O with argument Pk.
	                kValue = O[k];
	                // ii. Call the Call internal method of callback with T as
	                // the this value and argument list containing kValue, k, and O.
	                callback.call(T, kValue, k, O);
	            }
	        }
	        // 8. return undefined
	    }
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.14
	// Reference: http://es5.github.io/#x15.4.4.14
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function(searchElement, fromIndex) {


	    // 1. Let o be the result of calling ToObject passing
	    //    the this value as the argument.
	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.indexOf called on null or undefined');
	    }

	    var k;
	    var o = Object(this);

	    // 2. Let lenValue be the result of calling the Get
	    //    internal method of o with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = o.length >>> 0;

	    // 4. If len is 0, return -1.
	    if (len === 0) {
	      return -1;
	    }

	    // 5. If argument fromIndex was passed let n be
	    //    ToInteger(fromIndex); else let n be 0.
	    var n = +fromIndex || 0;

	    if (Math.abs(n) === Infinity) {
	      n = 0;
	    }

	    // 6. If n >= len, return -1.
	    if (n >= len) {
	      return -1;
	    }

	    // 7. If n >= 0, then Let k be n.
	    // 8. Else, n<0, Let k be len - abs(n).
	    //    If k is less than 0, then let k be 0.
	    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

	    // 9. Repeat, while k < len
	    while (k < len) {
	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the
	      //    HasProperty internal method of o with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      //    i.  Let elementK be the result of calling the Get
	      //        internal method of o with the argument ToString(k).
	      //   ii.  Let same be the result of applying the
	      //        Strict Equality Comparison Algorithm to
	      //        searchElement and elementK.
	      //  iii.  If same is true, return k.
	      if (k in o && o[k] === searchElement) {
	        return k;
	      }
	      k++;
	    }
	    return -1;
	  };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	*/
	if (!Array.isArray) {
	  Array.isArray = function(arg) {

	    if (arg === void 0 || arg === null) {
	      return false;
	    }
	  	return (arg.__class__ === 'Array');
	  };
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.15
	// Reference: http://es5.github.io/#x15.4.4.15
	if (!Array.prototype.lastIndexOf) {
	  Array.prototype.lastIndexOf = function(searchElement, fromIndex) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.lastIndexOf called on null or undefined');
	    }

	    var n, k,
	      t = Object(this),
	      len = t.length >>> 0;
	    if (len === 0) {
	      return -1;
	    }

	    n = len - 1;
	    if (arguments.length > 1) {
	      n = Number(arguments[1]);
	      if (n != n) {
	        n = 0;
	      }
	      else if (n != 0 && n != Infinity && n != -Infinity) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	      }
	    }

	    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
	      if (k in t && t[k] === searchElement) {
	        return k;
	      }
	    }
	    return -1;
	  };
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.19
	// Reference: http://es5.github.io/#x15.4.4.19
	if (!Array.prototype.map) {

	  Array.prototype.map = function(callback, thisArg) {

	    var T, A, k;

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.map called on null or undefined');
	    }

	    // 1. Let O be the result of calling ToObject passing the |this| 
	    //    value as the argument.
	    var O = Object(this);

	    // 2. Let lenValue be the result of calling the Get internal 
	    //    method of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;

	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    // See: http://es5.github.com/#x9.11
	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    T = (arguments.length > 1) ? thisArg : void 0;

	    // 6. Let A be a new array created as if by the expression new Array(len) 
	    //    where Array is the standard built-in constructor with that name and 
	    //    len is the value of len.
	    A = new Array(len);

	    for (var k = 0; k < len; k++) {

	      var kValue, mappedValue;

	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal 
	      //    method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {

	        // i. Let kValue be the result of calling the Get internal 
	        //    method of O with argument Pk.
	        kValue = O[k];

	        // ii. Let mappedValue be the result of calling the Call internal 
	        //     method of callback with T as the this value and argument 
	        //     list containing kValue, k, and O.
	        mappedValue = callback.call(T, kValue, k, O);

	        // iii. Call the DefineOwnProperty internal method of A with arguments
	        // Pk, Property Descriptor
	        // { Value: mappedValue,
	        //   Writable: true,
	        //   Enumerable: true,
	        //   Configurable: true },
	        // and false.

	        // In browsers that support Object.defineProperty, use the following:
	        // Object.defineProperty(A, k, {
	        //   value: mappedValue,
	        //   writable: true,
	        //   enumerable: true,
	        //   configurable: true
	        // });

	        // For best browser support, use the following:
	        A[k] = mappedValue;
	      }
	    }
	    // 9. return A
	    return A;
	  };
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.21
	// Reference: http://es5.github.io/#x15.4.4.21
	if (!Array.prototype.reduce) {
	  Array.prototype.reduce = function(callback, initialValue) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.reduce called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this), len = t.length >>> 0, k = 0, value;

	    if (arguments.length > 1) 
	      {
	        value = initialValue;
	      } 
	    else 
	      {
	        while (k < len && !(k in t)) {
	          k++; 
	        }
	        if (k >= len) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        value = t[k++];
	      }

	    for (; k < len; k++) {
	      if (k in t) {
	        value = callback(value, t[k], k, t);
	      }
	    }
	    return value;
	  };
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.22
	// Reference: http://es5.github.io/#x15.4.4.22
	if (!Array.prototype.reduceRight) {
	  Array.prototype.reduceRight = function(callback, initialValue) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
	    if (arguments.length > 1) 
	      {
	        value = initialValue;
	      } 
	    else 
	      {
	        while (k >= 0 && !(k in t)) {
	          k--;
	        }
	        if (k < 0) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        value = t[k--];
	      }
	      
	    for (; k >= 0; k--) {
	      if (k in t) {
	        value = callback(value, t[k], k, t);
	      }
	    }
	    return value;
	  };
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	*/
	// Production steps of ECMA-262, Edition 5, 15.4.4.17
	// Reference: http://es5.github.io/#x15.4.4.17
	if (!Array.prototype.some) {
	  Array.prototype.some = function(callback, thisArg) {

	    if (this === void 0 || this === null) {
	      throw new TypeError('Array.prototype.some called on null or undefined');
	    }

	    if (callback.__class__ !== 'Function') {
	      throw new TypeError(callback + ' is not a function');
	    }

	    var t = Object(this);
	    var len = t.length >>> 0;

	    var T = arguments.length > 1 ? thisArg : void 0;
	    for (var i = 0; i < len; i++) {
	      if (i in t && callback.call(T, t[i], i, t)) {
	        return true;
	      }
	    }

	    return false;
	  };
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

	WARNING! Bound functions used as constructors NOT supported by this polyfill!
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors
	*/
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    if (this.__class__ !== 'Function') {
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	    if (this.prototype) {
	      // Function.prototype doesn't have a prototype property
	      fNOP.prototype = this.prototype; 
	    }
	    fBound.prototype = new fNOP();

	    return fBound;
	  };
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	if (!Object.create) {
	  // Production steps of ECMA-262, Edition 5, 15.2.3.5
	  // Reference: http://es5.github.io/#x15.2.3.5
	  Object.create = (function() {
	    // To save on memory, use a shared constructor
	    function Temp() {}

	    // make a safe reference to Object.prototype.hasOwnProperty
	    var hasOwn = Object.prototype.hasOwnProperty;

	    return function(O) {
	      // 1. If Type(O) is not Object or Null throw a TypeError exception.
	      if (Object(O) !== O && O !== null) {
	        throw TypeError('Object prototype may only be an Object or null');
	      }

	      // 2. Let obj be the result of creating a new object as if by the
	      //    expression new Object() where Object is the standard built-in
	      //    constructor with that name
	      // 3. Set the [[Prototype]] internal property of obj to O.
	      Temp.prototype = O;
	      var obj = new Temp();
	      Temp.prototype = null; // Let's not keep a stray reference to O...

	      // 4. If the argument Properties is present and not undefined, add
	      //    own properties to obj as if by calling the standard built-in
	      //    function Object.defineProperties with arguments obj and
	      //    Properties.
	      if (arguments.length > 1) {
	        // Object.defineProperties does ToObject on its first argument.
	        var Properties = Object(arguments[1]);
	        for (var prop in Properties) {
	          if (hasOwn.call(Properties, prop)) {
	            var descriptor = Properties[prop];
	            if (Object(descriptor) !== descriptor) {
	              throw TypeError(prop + 'must be an object');
	            }
	            if ('get' in descriptor || 'set' in descriptor) {
	              throw new TypeError('getters & setters can not be defined on this javascript engine');
	            }
	            if ('value' in descriptor) {
	              obj[prop] = Properties[prop];
	            }

	          }
	        }
	      }

	      // 5. Return obj
	      return obj;
	    };
	  })();
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	/*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
	*/
	if (!Object.defineProperties) {

	  Object.defineProperties = function(object, props) {

	    function hasProperty(obj, prop) {
	      return Object.prototype.hasOwnProperty.call(obj, prop);
	    }

	    function convertToDescriptor(desc) {

	      if (Object(desc) !== desc) {
	        throw new TypeError('Descriptor can only be an Object.');
	      }


	      var d = {};

	      if (hasProperty(desc, "enumerable")) {
	        d.enumerable = !!desc.enumerable;
	      }

	      if (hasProperty(desc, "configurable")) {
	        d.configurable = !!desc.configurable;
	      }

	      if (hasProperty(desc, "value")) {
	        d.value = desc.value;
	      }

	      if (hasProperty(desc, "writable")) {
	        d.writable = !!desc.writable;
	      }

	      if (hasProperty(desc, "get")) {
	        throw new TypeError('getters & setters can not be defined on this javascript engine');
	      }

	      if (hasProperty(desc, "set")) {
	        throw new TypeError('getters & setters can not be defined on this javascript engine');
	      }

	      return d;
	    }

	    if (Object(object) !== object) {
	      throw new TypeError('Object.defineProperties can only be called on Objects.');
	    }

	    if (Object(props) !== props) {
	      throw new TypeError('Properties can only be an Object.');
	    }

	    var properties = Object(props);
	    for (propName in properties) {
	      if (hasOwnProperty.call(properties, propName)) {
	        var descr = convertToDescriptor(properties[propName]);
	        object[propName] = descr.value;
	      }
	    }
	    return object;
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	if (!Object.defineProperty) {

	    Object.defineProperty = function defineProperty(object, property, descriptor) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.defineProperty can only be called on Objects.');
	        }

	        if (Object(descriptor) !== descriptor) {
	            throw new TypeError('Property description can only be an Object.');
	        }

	        if ('get' in descriptor || 'set' in descriptor) {
	            throw new TypeError('getters & setters can not be defined on this javascript engine');
	        }
	        // If it's a data property.
	        if ('value' in descriptor) {
	            // fail silently if 'writable', 'enumerable', or 'configurable'
	            // are requested but not supported
	            // can't implement these features; allow true but not false
	            /* if ( 
	                     ('writable' in descriptor && !descriptor.writable) ||
	                     ('enumerable' in descriptor && !descriptor.enumerable) ||
	                     ('configurable' in descriptor && !descriptor.configurable)
	                 )
	                     {
	                         throw new RangeError('This implementation of Object.defineProperty does not support configurable, enumerable, or writable properties SET to FALSE.');
	                     }*/


	            object[property] = descriptor.value;
	        }
	        return object;
	    }
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.9
	// http://es5.github.com/#x15.2.3.9
	if (!Object.freeze) {
	    Object.freeze = function freeze(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.freeze can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	if (!Object.getOwnPropertyDescriptor) {

	    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.getOwnPropertyDescriptor can only be called on Objects.');
	        }

	        var descriptor;
	        if (!Object.prototype.hasOwnProperty.call(object, property)) {
	            return descriptor;
	        }

	        descriptor = {
	            enumerable: Object.prototype.propertyIsEnumerable.call(object, property),
	            configurable: true
	        };

	        descriptor.value = object[property];

	        var psPropertyType = object.reflect.find(property).type;
	        descriptor.writable = !(psPropertyType === "readonly");

	        return descriptor;
	    }
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	if (!Object.getOwnPropertyNames) {
	    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.getOwnPropertyNames can only be called on Objects.');
	        }
	        var names = [];
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	        for (var prop in object) {
	            if (hasOwnProperty.call(object, prop)) {
	                names.push(prop);
	            }
	        }
	        var properties = object.reflect.properties;
	        var methods = object.reflect.methods;
	        var all = methods.concat(properties);
	        for (var i = 0; i < all.length; i++) {
	            var prop = all[i].name;
	            if (hasOwnProperty.call(object, prop) && !(propertyIsEnumerable.call(object, prop))) {
	                names.push(prop);
	            }
	        }
	        return names;
	    };
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	if (!Object.getPrototypeOf) {
		Object.getPrototypeOf = function(object) {
			if (Object(object) !== object) {
				throw new TypeError('Object.getPrototypeOf can only be called on Objects.');
			}
			return object.__proto__;
		}
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	// ES5 15.2.3.13
	// http://es5.github.com/#x15.2.3.13
	if (!Object.isExtensible) {
	    Object.isExtensible = function isExtensible(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isExtensible can only be called on Objects.');
	        }
	        return true;
	    };
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.12
	// http://es5.github.com/#x15.2.3.12
	if (!Object.isFrozen) {
	    Object.isFrozen = function isFrozen(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isFrozen can only be called on Objects.');
	        }
	        return false;
	    };
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.11
	// http://es5.github.com/#x15.2.3.11
	if (!Object.isSealed) {
	    Object.isSealed = function isSealed(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.isSealed can only be called on Objects.');
	        }
	        return false;
	    };
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	if (!Object.keys) {
	    Object.keys = function(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.keys can only be called on Objects.');
	        }
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var result = [];
	        for (var prop in object) {
	            if (hasOwnProperty.call(object, prop)) {
	                result.push(prop);
	            }
	        }
	        return result;
	    };
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.10
	// http://es5.github.com/#x15.2.3.10
	if (!Object.preventExtensions) {
	    Object.preventExtensions = function preventExtensions(object) {

	        if (Object(object) !== object) {
	            throw new TypeError('Object.preventExtensions can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	/*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
	// ES5 15.2.3.8
	// http://es5.github.com/#x15.2.3.8
	if (!Object.seal) {
	    Object.seal = function seal(object) {
	        if (Object(object) !== object) {
	            throw new TypeError('Object.seal can only be called on Objects.');
	        }
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}

/***/ }
/******/ ]);