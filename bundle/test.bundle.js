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
    function r(o) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (t[o]) /******/
        return t[o].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var n = t[o] = {
            /******/
            exports: {},
            /******/
            id: o,
            /******/
            loaded: false
        };
        /******/
        /******/
        // Execute the module function
        /******/
        e[o].call(n.exports, n, n.exports, r);
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
    r.m = e;
    /******/
    /******/
    // expose the module cache
    /******/
    r.c = t;
    /******/
    /******/
    // __webpack_public_path__
    /******/
    r.p = "";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return r(0);
})([ /* 0 */
/***/
function(e, t, r) {
    r(27);
    e.exports = r(1);
}, /* 1 */
/***/
function(e, t, r) {
    r(2);
    r(3);
    r(4);
    r(5);
    r(6);
    r(7);
    r(8);
    r(9);
    r(10);
    r(11);
    r(12);
    r(13);
    r(15);
    r(16);
    r(17);
    r(18);
    r(19);
    r(20);
    r(21);
    r(22);
    r(23);
    r(24);
    r(25);
    r(26);
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
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.create, [ "string" ], "Object.create(string)");
    o(Object.create, [ void 0 ], "Object.create(undefined)");
    o(Object.create, [ 1 ], "Object.create(number)");
    n.log("");
    o(Object.create, [ {}, {
        a: "string"
    } ], "Object.create(object, {a : string})");
    o(Object.create, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.create(object, {a : {set : function}})");
    o(Object.create, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.create(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.create, [ {} ], "Object.create(object)");
    var i = o(Object.create, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.create(object,  {a : {value : 125}})");
    n.log("     " + i.toSource());
    o(Object.create, [ [ 1, 2, 3, 4, 5 ] ], "Object.create(array)");
    o(Object.create, [ function() {} ], "Object.create(function)");
    o(Object.create, [ new Date() ], "Object.create(date)");
    o(Object.create, [ null ], "Object.create(null)");
    /*acceptParams(Object.create, [new File()], "Object.create(File)");
	acceptParams(Object.create, [new Folder()], "Object.create(Folder)");*/
    n.log("");
}, /* 14 */
/***/
function(e, t) {
    if ($.writeln !== void 0) {
        var r = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var r = window.console;
    }
    e.exports.acceptParams = function(e, t, o) {
        var n;
        try {
            n = e.apply(null, t);
            var i = true;
        } catch (c) {
            var i = false;
        }
        if (i) {
            r.log(o + " [OK]");
        } else {
            r.log(o + " [Error]");
        }
        return n;
    };
}, /* 15 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.defineProperties, [ "string", {} ], "Object.defineProperties(string, object)");
    o(Object.defineProperties, [ void 0, {} ], "Object.defineProperties(undefined, object)");
    o(Object.defineProperties, [ 1, {} ], "Object.defineProperties(number, object)");
    o(Object.defineProperties, [ null, {} ], "Object.defineProperties(null, object)");
    o(Object.defineProperties, [ {} ], "Object.defineProperties(object)");
    o(Object.defineProperties, [ [ 1, 2, 3, 4, 5 ], 1 ], "Object.defineProperties(array, number)");
    o(Object.defineProperties, [ function() {}, "test" ], "Object.defineProperties(function, string)");
    o(Object.defineProperties, [ new Date(), null ], "Object.defineProperties(date, null)");
    n.log("");
    o(Object.defineProperties, [ {}, {
        a: "string"
    } ], "Object.defineProperties(object, {a : string})");
    o(Object.defineProperties, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.defineProperties(object, {a : {set : function}})");
    o(Object.defineProperties, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.defineProperties(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.defineProperties, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.defineProperties(object,  {a : {value : 125}})");
    n.log("     " + i.toSource());
    /*acceptParams(Object.defineProperties, [new File(),{}], "Object.defineProperties(File, object)");
	acceptParams(Object.defineProperties, [new Folder(),{}], "Object.defineProperties(Folder, object)");*/
    n.log("");
}, /* 16 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.defineProperty, [ "string", "prop", "string" ], "Object.defineProperty(string, string, string)");
    o(Object.defineProperty, [ void 0, "prop", "string" ], "Object.defineProperty(undefined, string, string)");
    o(Object.defineProperty, [ 1, "prop", "string" ], "Object.defineProperty(number, string, string)");
    o(Object.defineProperty, [ null, "prop", "string" ], "Object.defineProperty(null, string, string)");
    o(Object.defineProperty, [ {}, "prop", "string" ], "Object.defineProperty(object, string, string)");
    o(Object.defineProperty, [ {}, "prop", void 0 ], "Object.defineProperty(object, string, undefined)");
    o(Object.defineProperty, [ {}, "prop", 1 ], "Object.defineProperty(object, string, number)");
    o(Object.defineProperty, [ {}, "prop", null ], "Object.defineProperty(object, string, null)");
    o(Object.defineProperty, [ {}, "prop", {
        set: function() {}
    } ], "Object.defineProperty(object, string, {set: function() {})");
    o(Object.defineProperty, [ {}, "prop", {
        get: function() {}
    } ], "Object.defineProperty(object, string, {get: function() {})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.defineProperty, [ {}, "prop", {
        a: "test"
    } ], "Object.defineProperty(object, 'prop', {a: 'test'})");
    n.log("     " + i.toSource());
    var c = o(Object.defineProperty, [ {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(object, 'prop', {value: 'test'})");
    n.log("     " + c.toSource());
    var l = o(Object.defineProperty, [ [ 1, 2, 3, 4, 5 ], "prop", {
        value: "test"
    } ], "Object.defineProperty(array, 'prop', {value: 'test'})");
    n.log("     " + l.prop);
    var a = o(Object.defineProperty, [ function() {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(function, 'prop', {value: 'test'})");
    n.log("     " + a.prop);
    var s = o(Object.defineProperty, [ new Date(), "prop", {
        value: "test"
    } ], "Object.defineProperty(date, 'prop', {value: 'test'})");
    n.log("     " + s.prop);
    /*var r5 = acceptParams(Object.defineProperty, [new File(), 'prop', {
		value: 'test'
	}], "Object.defineProperty(file, 'prop', {value: 'test'})");
	console.log("     " + r5.prop);*/
    n.log("");
}, /* 17 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.freeze, [ "string" ], "Object.freeze(string)");
    o(Object.freeze, [ void 0 ], "Object.freeze(undefined)");
    o(Object.freeze, [ 1 ], "Object.freeze(number)");
    o(Object.freeze, [ null ], "Object.freeze(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.freeze, [ {} ], "Object.freeze(object)");
    o(Object.freeze, [ [ 1, 2, 3, 4, 5 ] ], "Object.freeze(array)");
    o(Object.freeze, [ function() {} ], "Object.freeze(function)");
    o(Object.freeze, [ new Date() ], "Object.freeze(date)");
    //acceptParams(Object.freeze, [new File()], "Object.freeze(File)");
    //acceptParams(Object.freeze, [new Folder()], "Object.freeze(Folder)");
    n.log("");
}, /* 18 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.getOwnPropertyDescriptor, [ "string", "prop" ], "Object.getOwnPropertyDescriptor(string, prop)");
    o(Object.getOwnPropertyDescriptor, [ void 0, "prop" ], "Object.getOwnPropertyDescriptor(undefined, prop)");
    o(Object.getOwnPropertyDescriptor, [ 1, "prop" ], "Object.getOwnPropertyDescriptor(number, prop)");
    o(Object.getOwnPropertyDescriptor, [ null, "prop" ], "Object.getOwnPropertyDescriptor(null, prop)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.getOwnPropertyDescriptor, [ {}, "prop" ], "Object.getOwnPropertyDescriptor({}, string)");
    n.log("     " + i);
    var c = o(Object.getOwnPropertyDescriptor, [ {}, void 0 ], "Object.getOwnPropertyDescriptor({}, undefined)");
    n.log("     " + c);
    var l = o(Object.getOwnPropertyDescriptor, [ {}, 1 ], "Object.getOwnPropertyDescriptor({}, number)");
    n.log("     " + l);
    var a = o(Object.getOwnPropertyDescriptor, [ {}, null ], "Object.getOwnPropertyDescriptor({}, null)");
    n.log("     " + a);
    var s = o(Object.getOwnPropertyDescriptor, [ {
        a: 1
    }, "a" ], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
    n.log("     " + s.toSource());
    n.log("");
}, /* 19 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.getOwnPropertyNames, [ "string" ], "Object.getOwnPropertyNames(string)");
    o(Object.getOwnPropertyNames, [ void 0 ], "Object.getOwnPropertyNames(undefined)");
    o(Object.getOwnPropertyNames, [ 1 ], "Object.getOwnPropertyNames(number)");
    o(Object.getOwnPropertyNames, [ null ], "Object.getOwnPropertyNames(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.getOwnPropertyNames, [ {} ], "Object.getOwnPropertyNames(object)");
    o(Object.getOwnPropertyNames, [ [ 1, 2, 3, 4, 5 ] ], "Object.getOwnPropertyNames(array)");
    o(Object.getOwnPropertyNames, [ function() {} ], "Object.getOwnPropertyNames(function)");
    o(Object.getOwnPropertyNames, [ new Date() ], "Object.getOwnPropertyNames(date)");
    //acceptParams(Object.getOwnPropertyNames, [new File()], "Object.getOwnPropertyNames(File)");
    //acceptParams(Object.getOwnPropertyNames, [new Folder()], "Object.getOwnPropertyNames(Folder)");
    var i = o(Object.getOwnPropertyNames, [ Math ], "Object.getOwnPropertyNames(Math)");
    n.log("     " + i);
    n.log("");
}, /* 20 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.getPrototypeOf, [ "string" ], "Object.getPrototypeOf(string)");
    o(Object.getPrototypeOf, [ void 0 ], "Object.getPrototypeOf(undefined)");
    o(Object.getPrototypeOf, [ 1 ], "Object.getPrototypeOf(number)");
    o(Object.getPrototypeOf, [ null ], "Object.getPrototypeOf(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.getPrototypeOf, [ {} ], "Object.getPrototypeOf(object)");
    o(Object.getPrototypeOf, [ [ 1, 2, 3, 4, 5 ] ], "Object.getPrototypeOf(array)");
    o(Object.getPrototypeOf, [ function() {} ], "Object.getPrototypeOf(function)");
    o(Object.getPrototypeOf, [ new Date() ], "Object.getPrototypeOf(date)");
    /*acceptParams(Object.getPrototypeOf, [new File()], "Object.getPrototypeOf(File)");
	acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	
	var r = acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	console.log("     " + r);*/
    n.log("");
}, /* 21 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.isExtensible, [ "string" ], "Object.isExtensible(string)");
    o(Object.isExtensible, [ void 0 ], "Object.isExtensible(undefined)");
    o(Object.isExtensible, [ 1 ], "Object.isExtensible(number)");
    o(Object.isExtensible, [ null ], "Object.isExtensible(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.isExtensible, [ {} ], "Object.isExtensible(object)");
    n.log("     " + i);
    var c = o(Object.isExtensible, [ [ 1, 2, 3, 4, 5 ] ], "Object.isExtensible(array)");
    n.log("     " + c);
    var l = o(Object.isExtensible, [ function() {} ], "Object.isExtensible(function)");
    n.log("     " + l);
    var a = o(Object.isExtensible, [ new Date() ], "Object.isExtensible(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 22 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.isFrozen, [ "string" ], "Object.isFrozen(string)");
    o(Object.isFrozen, [ void 0 ], "Object.isFrozen(undefined)");
    o(Object.isFrozen, [ 1 ], "Object.isFrozen(number)");
    o(Object.isFrozen, [ null ], "Object.isFrozen(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.isFrozen, [ {} ], "Object.isFrozen(object)");
    n.log("     " + i);
    var c = o(Object.isFrozen, [ [ 1, 2, 3, 4, 5 ] ], "Object.isFrozen(array)");
    n.log("     " + c);
    var l = o(Object.isFrozen, [ function() {} ], "Object.isFrozen(function)");
    n.log("     " + l);
    var a = o(Object.isFrozen, [ new Date() ], "Object.isFrozen(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 23 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.isSealed, [ "string" ], "Object.isSealed(string)");
    o(Object.isSealed, [ void 0 ], "Object.isSealed(undefined)");
    o(Object.isSealed, [ 1 ], "Object.isSealed(number)");
    o(Object.isSealed, [ null ], "Object.isSealed(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var i = o(Object.isSealed, [ {} ], "Object.isSealed(object)");
    n.log("     " + i);
    var c = o(Object.isSealed, [ [ 1, 2, 3, 4, 5 ] ], "Object.isSealed(array)");
    n.log("     " + c);
    var l = o(Object.isSealed, [ function() {} ], "Object.isSealed(function)");
    n.log("     " + l);
    var a = o(Object.isSealed, [ new Date() ], "Object.isSealed(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 24 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.keys, [ "string" ], "Object.keys(string)");
    o(Object.keys, [ void 0 ], "Object.keys(undefined)");
    o(Object.keys, [ 1 ], "Object.keys(number)");
    o(Object.keys, [ null ], "Object.keys(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.keys, [ {} ], "Object.keys(object)");
    o(Object.keys, [ [ 1, 2, 3, 4, 5 ] ], "Object.keys(array)");
    o(Object.keys, [ function() {} ], "Object.keys(function)");
    o(Object.keys, [ new Date() ], "Object.keys(date)");
    //acceptParams(Object.keys, [new File()], "Object.keys(File)");
    //acceptParams(Object.keys, [new Folder()], "Object.keys(Folder)");
    var i = o(Object.keys, [ {
        a: 1,
        b: 2
    } ], "Object.keys({a:1,b:2})");
    n.log("     " + i);
    n.log("");
}, /* 25 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.preventExtensions, [ "string" ], "Object.preventExtensions(string)");
    o(Object.preventExtensions, [ void 0 ], "Object.preventExtensions(undefined)");
    o(Object.preventExtensions, [ 1 ], "Object.preventExtensions(number)");
    o(Object.preventExtensions, [ null ], "Object.preventExtensions(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.preventExtensions, [ {} ], "Object.preventExtensions(object)");
    o(Object.preventExtensions, [ [ 1, 2, 3, 4, 5 ] ], "Object.preventExtensions(array)");
    o(Object.preventExtensions, [ function() {} ], "Object.preventExtensions(function)");
    o(Object.preventExtensions, [ new Date() ], "Object.preventExtensions(date)");
    //acceptParams(Object.preventExtensions, [new File()], "Object.preventExtensions(File)");
    //acceptParams(Object.preventExtensions, [new Folder()], "Object.preventExtensions(Folder)");
    n.log("");
}, /* 26 */
/***/
function(e, t, r) {
    var o = r(14).acceptParams;
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
    o(Object.seal, [ "string" ], "Object.seal(string)");
    o(Object.seal, [ void 0 ], "Object.seal(undefined)");
    o(Object.seal, [ 1 ], "Object.seal(number)");
    o(Object.seal, [ null ], "Object.seal(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    o(Object.seal, [ {} ], "Object.seal(object)");
    o(Object.seal, [ [ 1, 2, 3, 4, 5 ] ], "Object.seal(array)");
    o(Object.seal, [ function() {} ], "Object.seal(function)");
    o(Object.seal, [ new Date() ], "Object.seal(date)");
    //acceptParams(Object.seal, [new File()], "Object.seal(File)");
    //acceptParams(Object.seal, [new Folder()], "Object.seal(Folder)");
    n.log("");
}, /* 27 */
/***/
function(e, t, r) {
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
    r(28);
    r(29);
    r(30);
    r(31);
    r(32);
    r(33);
    r(34);
    r(35);
    r(36);
    r(37);
    r(38);
    r(39);
    r(40);
    r(41);
    r(42);
    r(43);
    r(44);
    r(45);
    r(46);
    r(47);
    r(48);
    r(49);
    r(50);
    r(51);
}, /* 28 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
    if (!Array.prototype.every) {
        Array.prototype.every = function(e, t) {
            var r, o;
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.every called on null or undefined");
            }
            // 1. Let O be the result of calling ToObject passing the this 
            //    value as the argument.
            var n = Object(this);
            // 2. Let lenValue be the result of calling the Get internal method
            //    of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var i = n.length >>> 0;
            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            r = arguments.length > 1 ? t : void 0;
            // 6. Let k be 0.
            o = 0;
            // 7. Repeat, while k < len
            while (o < i) {
                var c;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (o in n) {
                    // i. Let kValue be the result of calling the Get internal method
                    //    of O with argument Pk.
                    c = n[o];
                    // ii. Let testResult be the result of calling the Call internal method
                    //     of callback with T as the this value and argument list 
                    //     containing kValue, k, and O.
                    var l = e.call(r, c, o, n);
                    // iii. If ToBoolean(testResult) is false, return false.
                    if (!l) {
                        return false;
                    }
                }
                o++;
            }
            return true;
        };
    }
}, /* 29 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.filter called on null or undefined");
            }
            var r = Object(this);
            var o = r.length >>> 0;
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var n = [];
            var i = arguments.length > 1 ? t : void 0;
            for (var c = 0; c < o; c++) {
                if (c in r) {
                    var l = r[c];
                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (e.call(i, l, c, r)) {
                        n.push(l);
                    }
                }
            }
            return n;
        };
    }
}, /* 30 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.io/#x15.4.4.18
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.forEach called on null or undefined");
            }
            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var r = Object(this);
            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var o = r.length >>> 0;
            // 4. If isCallable(callback) is false, throw a TypeError exception. 
            // See: http://es5.github.com/#x9.11
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            var n = arguments.length > 1 ? t : void 0;
            // 6. Let k be 0
            i = 0;
            // 7. Repeat, while k < len
            for (var i = 0; i < o; i++) {
                var c;
                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c
                // c. If kPresent is true, then
                if (i in r) {
                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    c = r[i];
                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    e.call(n, c, i, r);
                }
            }
        };
    }
}, /* 31 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.14
    // Reference: http://es5.github.io/#x15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(e, t) {
            var r;
            // 1. Let o be the result of calling ToObject passing
            //    the this value as the argument.
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.indexOf called on null or undefined");
            }
            var o = Object(this);
            // 2. Let lenValue be the result of calling the Get
            //    internal method of o with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var n = o.length >>> 0;
            // 4. If len is 0, return -1.
            if (n === 0) {
                return -1;
            }
            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var i = +t || 0;
            if (Math.abs(i) === Infinity) {
                i = 0;
            }
            // 6. If n >= len, return -1.
            if (i >= n) {
                return -1;
            }
            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            r = Math.max(i >= 0 ? i : n - Math.abs(i), 0);
            // 9. Repeat, while k < len
            while (r < n) {
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
                if (r in o && o[r] === e) {
                    return r;
                }
                r++;
            }
            return -1;
        };
    }
}, /* 32 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	*/
    if (!Array.isArray) {
        Array.isArray = function(e) {
            if (e === void 0 || e === null) {
                return false;
            }
            return e.__class__ === "Array";
        };
    }
}, /* 33 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.15
    // Reference: http://es5.github.io/#x15.4.4.15
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");
            }
            var r, o, n = Object(this), i = n.length >>> 0;
            if (i === 0) {
                return -1;
            }
            r = i - 1;
            if (arguments.length > 1) {
                r = Number(arguments[1]);
                if (r != r) {
                    r = 0;
                } else if (r != 0 && r != Infinity && r != -Infinity) {
                    r = (r > 0 || -1) * Math.floor(Math.abs(r));
                }
            }
            for (o = r >= 0 ? Math.min(r, i - 1) : i - Math.abs(r); o >= 0; o--) {
                if (o in n && n[o] === e) {
                    return o;
                }
            }
            return -1;
        };
    }
}, /* 34 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.19
    // Reference: http://es5.github.io/#x15.4.4.19
    if (!Array.prototype.map) {
        Array.prototype.map = function(e, t) {
            var r, o, n;
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.map called on null or undefined");
            }
            // 1. Let O be the result of calling ToObject passing the |this| 
            //    value as the argument.
            var i = Object(this);
            // 2. Let lenValue be the result of calling the Get internal 
            //    method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var c = i.length >>> 0;
            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            r = arguments.length > 1 ? t : void 0;
            // 6. Let A be a new array created as if by the expression new Array(len) 
            //    where Array is the standard built-in constructor with that name and 
            //    len is the value of len.
            o = new Array(c);
            for (var n = 0; n < c; n++) {
                var l, a;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (n in i) {
                    // i. Let kValue be the result of calling the Get internal 
                    //    method of O with argument Pk.
                    l = i[n];
                    // ii. Let mappedValue be the result of calling the Call internal 
                    //     method of callback with T as the this value and argument 
                    //     list containing kValue, k, and O.
                    a = e.call(r, l, n, i);
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
                    o[n] = a;
                }
            }
            // 9. return A
            return o;
        };
    }
}, /* 35 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var r = Object(this), o = r.length >>> 0, n = 0, i;
            if (arguments.length > 1) {
                i = t;
            } else {
                while (n < o && !(n in r)) {
                    n++;
                }
                if (n >= o) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = r[n++];
            }
            for (;n < o; n++) {
                if (n in r) {
                    i = e(i, r[n], n, r);
                }
            }
            return i;
        };
    }
}, /* 36 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: http://es5.github.io/#x15.4.4.22
    if (!Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.reduceRight called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var r = Object(this), o = r.length >>> 0, n = o - 1, i;
            if (arguments.length > 1) {
                i = t;
            } else {
                while (n >= 0 && !(n in r)) {
                    n--;
                }
                if (n < 0) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = r[n--];
            }
            for (;n >= 0; n--) {
                if (n in r) {
                    i = e(i, r[n], n, r);
                }
            }
            return i;
        };
    }
}, /* 37 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.17
    // Reference: http://es5.github.io/#x15.4.4.17
    if (!Array.prototype.some) {
        Array.prototype.some = function(e, t) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.some called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var r = Object(this);
            var o = r.length >>> 0;
            var n = arguments.length > 1 ? t : void 0;
            for (var i = 0; i < o; i++) {
                if (i in r && e.call(n, r[i], i, r)) {
                    return true;
                }
            }
            return false;
        };
    }
}, /* 38 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill
	
	WARNING! Bound functions used as constructors NOT supported by this polyfill!
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors
	*/
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(e) {
            if (this.__class__ !== "Function") {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var t = Array.prototype.slice.call(arguments, 1), r = this, o = function() {}, n = function() {
                return r.apply(this instanceof o ? this : e, t.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) {
                // Function.prototype doesn't have a prototype property
                o.prototype = this.prototype;
            }
            n.prototype = new o();
            return n;
        };
    }
}, /* 39 */
/***/
function(e, t) {
    if (!Object.create) {
        // Production steps of ECMA-262, Edition 5, 15.2.3.5
        // Reference: http://es5.github.io/#x15.2.3.5
        Object.create = function() {
            // To save on memory, use a shared constructor
            function e() {}
            // make a safe reference to Object.prototype.hasOwnProperty
            var t = Object.prototype.hasOwnProperty;
            return function(r) {
                // 1. If Type(O) is not Object or Null throw a TypeError exception.
                if (Object(r) !== r && r !== null) {
                    throw TypeError("Object prototype may only be an Object or null");
                }
                // 2. Let obj be the result of creating a new object as if by the
                //    expression new Object() where Object is the standard built-in
                //    constructor with that name
                // 3. Set the [[Prototype]] internal property of obj to O.
                e.prototype = r;
                var o = new e();
                e.prototype = null;
                // Let's not keep a stray reference to O...
                // 4. If the argument Properties is present and not undefined, add
                //    own properties to obj as if by calling the standard built-in
                //    function Object.defineProperties with arguments obj and
                //    Properties.
                if (arguments.length > 1) {
                    // Object.defineProperties does ToObject on its first argument.
                    var n = Object(arguments[1]);
                    for (var i in n) {
                        if (t.call(n, i)) {
                            var c = n[i];
                            if (Object(c) !== c) {
                                throw TypeError(i + "must be an object");
                            }
                            if ("get" in c || "set" in c) {
                                throw new TypeError("getters & setters can not be defined on this javascript engine");
                            }
                            if ("value" in c) {
                                o[i] = n[i];
                            }
                        }
                    }
                }
                // 5. Return obj
                return o;
            };
        }();
    }
}, /* 40 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
	*/
    if (!Object.defineProperties) {
        Object.defineProperties = function(e, t) {
            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            function o(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Descriptor can only be an Object.");
                }
                var t = {};
                if (r(e, "enumerable")) {
                    t.enumerable = !!e.enumerable;
                }
                if (r(e, "configurable")) {
                    t.configurable = !!e.configurable;
                }
                if (r(e, "value")) {
                    t.value = e.value;
                }
                if (r(e, "writable")) {
                    t.writable = !!e.writable;
                }
                if (r(e, "get")) {
                    throw new TypeError("getters & setters can not be defined on this javascript engine");
                }
                if (r(e, "set")) {
                    throw new TypeError("getters & setters can not be defined on this javascript engine");
                }
                return t;
            }
            if (Object(e) !== e) {
                throw new TypeError("Object.defineProperties can only be called on Objects.");
            }
            if (Object(t) !== t) {
                throw new TypeError("Properties can only be an Object.");
            }
            var n = Object(t);
            for (propName in n) {
                if (hasOwnProperty.call(n, propName)) {
                    var i = o(n[propName]);
                    e[propName] = i.value;
                }
            }
            return e;
        };
    }
}, /* 41 */
/***/
function(e, t) {
    if (!Object.defineProperty) {
        Object.defineProperty = function r(e, t, o) {
            if (Object(e) !== e) {
                throw new TypeError("Object.defineProperty can only be called on Objects.");
            }
            if (Object(o) !== o) {
                throw new TypeError("Property description can only be an Object.");
            }
            if ("get" in o || "set" in o) {
                throw new TypeError("getters & setters can not be defined on this javascript engine");
            }
            // If it's a data property.
            if ("value" in o) {
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
                e[t] = o.value;
            }
            return e;
        };
    }
}, /* 42 */
/***/
function(e, t) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.9
    // http://es5.github.com/#x15.2.3.9
    if (!Object.freeze) {
        Object.freeze = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.freeze can only be called on Objects.");
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return e;
        };
    }
}, /* 43 */
/***/
function(e, t) {
    if (!Object.getOwnPropertyDescriptor) {
        Object.getOwnPropertyDescriptor = function r(e, t) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");
            }
            var r;
            if (!Object.prototype.hasOwnProperty.call(e, t)) {
                return r;
            }
            r = {
                enumerable: Object.prototype.propertyIsEnumerable.call(e, t),
                configurable: true
            };
            r.value = e[t];
            var o = e.reflect.find(t).type;
            r.writable = o === "readwrite";
            return r;
        };
    }
}, /* 44 */
/***/
function(e, t) {
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");
            }
            var t = e.reflect.properties;
            var r = e.reflect.methods;
            var o = r.concat(t);
            var n = [];
            for (var i = 0; i < o.length; i++) {
                n.push(o[i].name);
            }
            return n;
        };
    }
}, /* 45 */
/***/
function(e, t) {
    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getPrototypeOf can only be called on Objects.");
            }
            return e.__proto__;
        };
    }
}, /* 46 */
/***/
function(e, t) {
    // ES5 15.2.3.13
    // http://es5.github.com/#x15.2.3.13
    if (!Object.isExtensible) {
        Object.isExtensible = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isExtensible can only be called on Objects.");
            }
            return true;
        };
    }
}, /* 47 */
/***/
function(e, t) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.12
    // http://es5.github.com/#x15.2.3.12
    if (!Object.isFrozen) {
        Object.isFrozen = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isFrozen can only be called on Objects.");
            }
            return false;
        };
    }
}, /* 48 */
/***/
function(e, t) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.11
    // http://es5.github.com/#x15.2.3.11
    if (!Object.isSealed) {
        Object.isSealed = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isSealed can only be called on Objects.");
            }
            return false;
        };
    }
}, /* 49 */
/***/
function(e, t) {
    /*
	Original taken from
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill
	
	Ther is no EnumBug in Photoshop scripting environment, so i cut unused code.
	*/
    if (!Object.keys) {
        Object.keys = function() {
            var e = Object.prototype.hasOwnProperty;
            return function(t) {
                if (Object(t) !== t) {
                    throw new TypeError("Object.keys can only be called on Objects.");
                }
                var r = [], o, n;
                for (o in t) {
                    if (e.call(t, o)) {
                        r.push(o);
                    }
                }
                return r;
            };
        }();
    }
}, /* 50 */
/***/
function(e, t) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.10
    // http://es5.github.com/#x15.2.3.10
    if (!Object.preventExtensions) {
        Object.preventExtensions = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.preventExtensions can only be called on Objects.");
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return e;
        };
    }
}, /* 51 */
/***/
function(e, t) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.8
    // http://es5.github.com/#x15.2.3.8
    if (!Object.seal) {
        Object.seal = function r(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.seal can only be called on Objects.");
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return e;
        };
    }
} ]);