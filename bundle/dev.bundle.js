/******/ (function(e) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var t = {};
    /******/
    /******/
    // The require function
    /******/
    function o(r) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (t[r]) /******/
        return t[r].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var n = t[r] = {
            /******/
            exports: {},
            /******/
            id: r,
            /******/
            loaded: false
        };
        /******/
        /******/
        // Execute the module function
        /******/
        e[r].call(n.exports, n, n.exports, o);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        n.loaded = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return n.exports;
    }
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    o.m = e;
    /******/
    /******/
    // expose the module cache
    /******/
    o.c = t;
    /******/
    /******/
    // __webpack_public_path__
    /******/
    o.p = "";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return o(0);
})([ /* 0 */
/***/
function(e, t, o) {
    e.exports = o(1);
}, /* 1 */
/***/
function(e, t, o) {
    o(2);
    o(3);
    o(4);
    o(5);
    o(6);
    o(7);
    o(8);
    o(9);
    o(10);
    o(11);
    o(12);
    o(13);
    o(15);
    o(16);
    o(17);
    o(18);
    o(19);
    o(20);
    o(21);
    o(22);
    o(23);
    o(24);
    o(25);
    o(26);
}, /* 2 */
/***/
function(e, t) {}, /* 3 */
/***/
function(e, t) {}, /* 4 */
/***/
function(e, t) {}, /* 5 */
/***/
function(e, t) {}, /* 6 */
/***/
function(e, t) {}, /* 7 */
/***/
function(e, t) {}, /* 8 */
/***/
function(e, t) {}, /* 9 */
/***/
function(e, t) {}, /* 10 */
/***/
function(e, t) {}, /* 11 */
/***/
function(e, t) {}, /* 12 */
/***/
function(e, t) {}, /* 13 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.create ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.create, [ "string" ], "Object.create(string)");
    r(Object.create, [ void 0 ], "Object.create(undefined)");
    r(Object.create, [ 1 ], "Object.create(number)");
    n.log("");
    r(Object.create, [ {}, {
        a: "string"
    } ], "Object.create(object, {a : string})");
    r(Object.create, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.create(object, {a : {set : function}})");
    r(Object.create, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.create(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.create, [ {} ], "Object.create(object)");
    var c = r(Object.create, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.create(object,  {a : {value : 125}})");
    n.log("     " + c.toSource());
    r(Object.create, [ [ 1, 2, 3, 4, 5 ] ], "Object.create(array)");
    r(Object.create, [ function() {} ], "Object.create(function)");
    r(Object.create, [ new Date() ], "Object.create(date)");
    r(Object.create, [ null ], "Object.create(null)");
    /*acceptParams(Object.create, [new File()], "Object.create(File)");
	acceptParams(Object.create, [new Folder()], "Object.create(Folder)");*/
    n.log("");
}, /* 14 */
/***/
function(e, t) {
    if ($.writeln !== void 0) {
        var o = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var o = window.console;
    }
    e.exports.acceptParams = function(e, t, r) {
        var n;
        try {
            n = e.apply(null, t);
            var c = true;
        } catch (i) {
            var c = false;
        }
        if (c) {
            o.log(r + " [OK]");
        } else {
            o.log(r + " [Error]");
        }
        return n;
    };
}, /* 15 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.defineProperties ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.defineProperties, [ "string", {} ], "Object.defineProperties(string, object)");
    r(Object.defineProperties, [ void 0, {} ], "Object.defineProperties(undefined, object)");
    r(Object.defineProperties, [ 1, {} ], "Object.defineProperties(number, object)");
    r(Object.defineProperties, [ null, {} ], "Object.defineProperties(null, object)");
    r(Object.defineProperties, [ {} ], "Object.defineProperties(object)");
    r(Object.defineProperties, [ [ 1, 2, 3, 4, 5 ], 1 ], "Object.defineProperties(array, number)");
    r(Object.defineProperties, [ function() {}, "test" ], "Object.defineProperties(function, string)");
    r(Object.defineProperties, [ new Date(), null ], "Object.defineProperties(date, null)");
    n.log("");
    r(Object.defineProperties, [ {}, {
        a: "string"
    } ], "Object.defineProperties(object, {a : string})");
    r(Object.defineProperties, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.defineProperties(object, {a : {set : function}})");
    r(Object.defineProperties, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.defineProperties(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.defineProperties, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.defineProperties(object,  {a : {value : 125}})");
    n.log("     " + c.toSource());
    /*acceptParams(Object.defineProperties, [new File(),{}], "Object.defineProperties(File, object)");
	acceptParams(Object.defineProperties, [new Folder(),{}], "Object.defineProperties(Folder, object)");*/
    n.log("");
}, /* 16 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.defineProperty ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.defineProperty, [ "string", "prop", "string" ], "Object.defineProperty(string, string, string)");
    r(Object.defineProperty, [ void 0, "prop", "string" ], "Object.defineProperty(undefined, string, string)");
    r(Object.defineProperty, [ 1, "prop", "string" ], "Object.defineProperty(number, string, string)");
    r(Object.defineProperty, [ null, "prop", "string" ], "Object.defineProperty(null, string, string)");
    r(Object.defineProperty, [ {}, "prop", "string" ], "Object.defineProperty(object, string, string)");
    r(Object.defineProperty, [ {}, "prop", void 0 ], "Object.defineProperty(object, string, undefined)");
    r(Object.defineProperty, [ {}, "prop", 1 ], "Object.defineProperty(object, string, number)");
    r(Object.defineProperty, [ {}, "prop", null ], "Object.defineProperty(object, string, null)");
    r(Object.defineProperty, [ {}, "prop", {
        set: function() {}
    } ], "Object.defineProperty(object, string, {set: function() {})");
    r(Object.defineProperty, [ {}, "prop", {
        get: function() {}
    } ], "Object.defineProperty(object, string, {get: function() {})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.defineProperty, [ {}, "prop", {
        a: "test"
    } ], "Object.defineProperty(object, 'prop', {a: 'test'})");
    n.log("     " + c.toSource());
    var i = r(Object.defineProperty, [ {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(object, 'prop', {value: 'test'})");
    n.log("     " + i.toSource());
    var l = r(Object.defineProperty, [ [ 1, 2, 3, 4, 5 ], "prop", {
        value: "test"
    } ], "Object.defineProperty(array, 'prop', {value: 'test'})");
    n.log("     " + l.prop);
    var s = r(Object.defineProperty, [ function() {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(function, 'prop', {value: 'test'})");
    n.log("     " + s.prop);
    var b = r(Object.defineProperty, [ new Date(), "prop", {
        value: "test"
    } ], "Object.defineProperty(date, 'prop', {value: 'test'})");
    n.log("     " + b.prop);
    /*var r5 = acceptParams(Object.defineProperty, [new File(), 'prop', {
		value: 'test'
	}], "Object.defineProperty(file, 'prop', {value: 'test'})");
	console.log("     " + r5.prop);*/
    n.log("");
}, /* 17 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.freeze ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.freeze, [ "string" ], "Object.freeze(string)");
    r(Object.freeze, [ void 0 ], "Object.freeze(undefined)");
    r(Object.freeze, [ 1 ], "Object.freeze(number)");
    r(Object.freeze, [ null ], "Object.freeze(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.freeze, [ {} ], "Object.freeze(object)");
    r(Object.freeze, [ [ 1, 2, 3, 4, 5 ] ], "Object.freeze(array)");
    r(Object.freeze, [ function() {} ], "Object.freeze(function)");
    r(Object.freeze, [ new Date() ], "Object.freeze(date)");
    //acceptParams(Object.freeze, [new File()], "Object.freeze(File)");
    //acceptParams(Object.freeze, [new Folder()], "Object.freeze(Folder)");
    n.log("");
}, /* 18 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.getOwnPropertyDescriptor ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.getOwnPropertyDescriptor, [ "string", "prop" ], "Object.getOwnPropertyDescriptor(string, prop)");
    r(Object.getOwnPropertyDescriptor, [ void 0, "prop" ], "Object.getOwnPropertyDescriptor(undefined, prop)");
    r(Object.getOwnPropertyDescriptor, [ 1, "prop" ], "Object.getOwnPropertyDescriptor(number, prop)");
    r(Object.getOwnPropertyDescriptor, [ null, "prop" ], "Object.getOwnPropertyDescriptor(null, prop)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.getOwnPropertyDescriptor, [ {}, "prop" ], "Object.getOwnPropertyDescriptor({}, string)");
    n.log("     " + c);
    var i = r(Object.getOwnPropertyDescriptor, [ {}, void 0 ], "Object.getOwnPropertyDescriptor({}, undefined)");
    n.log("     " + i);
    var l = r(Object.getOwnPropertyDescriptor, [ {}, 1 ], "Object.getOwnPropertyDescriptor({}, number)");
    n.log("     " + l);
    var s = r(Object.getOwnPropertyDescriptor, [ {}, null ], "Object.getOwnPropertyDescriptor({}, null)");
    n.log("     " + s);
    var b = r(Object.getOwnPropertyDescriptor, [ {
        a: 1
    }, "a" ], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
    n.log("     " + b.toSource());
    n.log("");
}, /* 19 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.getOwnPropertyNames ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.getOwnPropertyNames, [ "string" ], "Object.getOwnPropertyNames(string)");
    r(Object.getOwnPropertyNames, [ void 0 ], "Object.getOwnPropertyNames(undefined)");
    r(Object.getOwnPropertyNames, [ 1 ], "Object.getOwnPropertyNames(number)");
    r(Object.getOwnPropertyNames, [ null ], "Object.getOwnPropertyNames(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.getOwnPropertyNames, [ {} ], "Object.getOwnPropertyNames(object)");
    r(Object.getOwnPropertyNames, [ [ 1, 2, 3, 4, 5 ] ], "Object.getOwnPropertyNames(array)");
    r(Object.getOwnPropertyNames, [ function() {} ], "Object.getOwnPropertyNames(function)");
    r(Object.getOwnPropertyNames, [ new Date() ], "Object.getOwnPropertyNames(date)");
    //acceptParams(Object.getOwnPropertyNames, [new File()], "Object.getOwnPropertyNames(File)");
    //acceptParams(Object.getOwnPropertyNames, [new Folder()], "Object.getOwnPropertyNames(Folder)");
    var c = r(Object.getOwnPropertyNames, [ Math ], "Object.getOwnPropertyNames(Math)");
    n.log("     " + c);
    n.log("");
}, /* 20 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.getPrototypeOf ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.getPrototypeOf, [ "string" ], "Object.getPrototypeOf(string)");
    r(Object.getPrototypeOf, [ void 0 ], "Object.getPrototypeOf(undefined)");
    r(Object.getPrototypeOf, [ 1 ], "Object.getPrototypeOf(number)");
    r(Object.getPrototypeOf, [ null ], "Object.getPrototypeOf(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.getPrototypeOf, [ {} ], "Object.getPrototypeOf(object)");
    r(Object.getPrototypeOf, [ [ 1, 2, 3, 4, 5 ] ], "Object.getPrototypeOf(array)");
    r(Object.getPrototypeOf, [ function() {} ], "Object.getPrototypeOf(function)");
    r(Object.getPrototypeOf, [ new Date() ], "Object.getPrototypeOf(date)");
    /*acceptParams(Object.getPrototypeOf, [new File()], "Object.getPrototypeOf(File)");
	acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	
	var r = acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	console.log("     " + r);*/
    n.log("");
}, /* 21 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.isExtensible ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.isExtensible, [ "string" ], "Object.isExtensible(string)");
    r(Object.isExtensible, [ void 0 ], "Object.isExtensible(undefined)");
    r(Object.isExtensible, [ 1 ], "Object.isExtensible(number)");
    r(Object.isExtensible, [ null ], "Object.isExtensible(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.isExtensible, [ {} ], "Object.isExtensible(object)");
    n.log("     " + c);
    var i = r(Object.isExtensible, [ [ 1, 2, 3, 4, 5 ] ], "Object.isExtensible(array)");
    n.log("     " + i);
    var l = r(Object.isExtensible, [ function() {} ], "Object.isExtensible(function)");
    n.log("     " + l);
    var s = r(Object.isExtensible, [ new Date() ], "Object.isExtensible(date)");
    n.log("     " + s);
    /*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 22 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.isFrozen ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.isFrozen, [ "string" ], "Object.isFrozen(string)");
    r(Object.isFrozen, [ void 0 ], "Object.isFrozen(undefined)");
    r(Object.isFrozen, [ 1 ], "Object.isFrozen(number)");
    r(Object.isFrozen, [ null ], "Object.isFrozen(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.isFrozen, [ {} ], "Object.isFrozen(object)");
    n.log("     " + c);
    var i = r(Object.isFrozen, [ [ 1, 2, 3, 4, 5 ] ], "Object.isFrozen(array)");
    n.log("     " + i);
    var l = r(Object.isFrozen, [ function() {} ], "Object.isFrozen(function)");
    n.log("     " + l);
    var s = r(Object.isFrozen, [ new Date() ], "Object.isFrozen(date)");
    n.log("     " + s);
    /*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 23 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.isSealed ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.isSealed, [ "string" ], "Object.isSealed(string)");
    r(Object.isSealed, [ void 0 ], "Object.isSealed(undefined)");
    r(Object.isSealed, [ 1 ], "Object.isSealed(number)");
    r(Object.isSealed, [ null ], "Object.isSealed(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var c = r(Object.isSealed, [ {} ], "Object.isSealed(object)");
    n.log("     " + c);
    var i = r(Object.isSealed, [ [ 1, 2, 3, 4, 5 ] ], "Object.isSealed(array)");
    n.log("     " + i);
    var l = r(Object.isSealed, [ function() {} ], "Object.isSealed(function)");
    n.log("     " + l);
    var s = r(Object.isSealed, [ new Date() ], "Object.isSealed(date)");
    n.log("     " + s);
    /*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 24 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.keys ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.keys, [ "string" ], "Object.keys(string)");
    r(Object.keys, [ void 0 ], "Object.keys(undefined)");
    r(Object.keys, [ 1 ], "Object.keys(number)");
    r(Object.keys, [ null ], "Object.keys(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.keys, [ {} ], "Object.keys(object)");
    r(Object.keys, [ [ 1, 2, 3, 4, 5 ] ], "Object.keys(array)");
    r(Object.keys, [ function() {} ], "Object.keys(function)");
    r(Object.keys, [ new Date() ], "Object.keys(date)");
    //acceptParams(Object.keys, [new File()], "Object.keys(File)");
    //acceptParams(Object.keys, [new Folder()], "Object.keys(Folder)");
    var c = r(Object.keys, [ {
        a: 1,
        b: 2
    } ], "Object.keys({a:1,b:2})");
    n.log("     " + c);
    n.log("");
}, /* 25 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.preventExtensions ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.preventExtensions, [ "string" ], "Object.preventExtensions(string)");
    r(Object.preventExtensions, [ void 0 ], "Object.preventExtensions(undefined)");
    r(Object.preventExtensions, [ 1 ], "Object.preventExtensions(number)");
    r(Object.preventExtensions, [ null ], "Object.preventExtensions(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.preventExtensions, [ {} ], "Object.preventExtensions(object)");
    r(Object.preventExtensions, [ [ 1, 2, 3, 4, 5 ] ], "Object.preventExtensions(array)");
    r(Object.preventExtensions, [ function() {} ], "Object.preventExtensions(function)");
    r(Object.preventExtensions, [ new Date() ], "Object.preventExtensions(date)");
    //acceptParams(Object.preventExtensions, [new File()], "Object.preventExtensions(File)");
    //acceptParams(Object.preventExtensions, [new Folder()], "Object.preventExtensions(Folder)");
    n.log("");
}, /* 26 */
/***/
function(e, t, o) {
    var r = o(14).acceptParams;
    if ($.writeln !== void 0) {
        var n = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var n = window.console;
    }
    n.log("================== Object.seal ==================");
    n.log("");
    n.log("+++++++ The following should produce Error. +++++++");
    n.log("");
    r(Object.seal, [ "string" ], "Object.seal(string)");
    r(Object.seal, [ void 0 ], "Object.seal(undefined)");
    r(Object.seal, [ 1 ], "Object.seal(number)");
    r(Object.seal, [ null ], "Object.seal(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    r(Object.seal, [ {} ], "Object.seal(object)");
    r(Object.seal, [ [ 1, 2, 3, 4, 5 ] ], "Object.seal(array)");
    r(Object.seal, [ function() {} ], "Object.seal(function)");
    r(Object.seal, [ new Date() ], "Object.seal(date)");
    //acceptParams(Object.seal, [new File()], "Object.seal(File)");
    //acceptParams(Object.seal, [new Folder()], "Object.seal(Folder)");
    n.log("");
} ]);