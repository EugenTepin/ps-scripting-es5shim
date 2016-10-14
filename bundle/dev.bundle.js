/******/ (function(e) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var r = {};
    /******/
    /******/
    // The require function
    /******/
    function t(o) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (r[o]) /******/
        return r[o].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var n = r[o] = {
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
        e[o].call(n.exports, n, n.exports, t);
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
    t.m = e;
    /******/
    /******/
    // expose the module cache
    /******/
    t.c = r;
    /******/
    /******/
    // __webpack_public_path__
    /******/
    t.p = "";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return t(0);
})([ /* 0 */
/***/
function(e, r, t) {
    e.exports = t(1);
}, /* 1 */
/***/
function(e, r, t) {
    t(53);
    t(2);
    t(4);
    t(5);
    t(6);
    t(7);
    t(8);
    t(9);
    t(10);
    t(11);
    t(12);
    t(13);
    t(14);
    t(15);
    t(16);
    t(17);
    t(18);
    t(19);
    t(20);
    t(21);
    t(22);
    t(23);
    t(24);
    t(25);
    t(26);
}, /* 2 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t) {
        return typeof e === "number";
    };
    l.log("================== Array.prototype.every ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.every, [ "string" ], "Array.prototype.every(string)", n);
    o(Array.prototype.every, [ void 0 ], "Array.prototype.every(undefined)", n);
    o(Array.prototype.every, [ 1 ], "Array.prototype.every(number)", n);
    o(Array.prototype.every, i, "Array.prototype.every(callback)", null);
    o(Array.prototype.every, i, "Array.prototype.every(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.every, [ i ], "Array.prototype.every(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 3 */
/***/
function(e, r) {
    if ($.writeln !== void 0) {
        var t = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var t = window.console;
    }
    e.exports.acceptParams = function(e, r, o, n) {
        var l;
        try {
            l = e.apply(n, r);
            var i = true;
        } catch (c) {
            var i = false;
        }
        if (i) {
            t.log(o + " [OK]");
        } else {
            t.log(o + " [Error]");
        }
        return l;
    };
    /*Test Data*/
    e.exports.testArray = [ -100, 55, 0, 95, 0, 43, -145, 3, 9, 16 ];
}, /* 4 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t) {
        return e > 0;
    };
    l.log("================== Array.prototype.filter ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.filter, [ "string" ], "Array.prototype.filter(string)", n);
    o(Array.prototype.filter, [ void 0 ], "Array.prototype.filter(undefined)", n);
    o(Array.prototype.filter, [ 1 ], "Array.prototype.filter(number)", n);
    o(Array.prototype.filter, i, "Array.prototype.filter(callback)", null);
    o(Array.prototype.filter, i, "Array.prototype.filter(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.filter, [ i ], "Array.prototype.filter(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 5 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = [];
    var c = function(e, r, t) {
        i.push(Math.abs(e));
    };
    l.log("================== Array.prototype.forEach ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.forEach, [ "string" ], "Array.prototype.forEach(string)", n);
    o(Array.prototype.forEach, [ void 0 ], "Array.prototype.forEach(undefined)", n);
    o(Array.prototype.forEach, [ 1 ], "Array.prototype.forEach(number)", n);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var a = o(Array.prototype.forEach, [ c ], "Array.prototype.forEach(callback)", n);
    l.log(i);
    l.log(n);
    l.log("");
}, /* 6 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    l.log("================== Array.prototype.indexOf ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	
	acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> null", null);
	acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> undefined", void 0);
	console.log("");*/
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var i = o(Array.prototype.indexOf, [ 0 ], "Array.prototype.indexOf(0) this -> testArray", n);
    l.log(i);
    var c = o(Array.prototype.indexOf, [ 0, 3 ], "Array.prototype.indexOf(0,3) this -> testArray", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 7 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    l.log("================== Array.isArray ==================");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var i = o(Array.isArray, [ "string" ], "Array.isArray(string)");
    l.log(i);
    var c = o(Array.isArray, [ void 0 ], "Array.isArray(undefined)");
    l.log(c);
    var a = o(Array.isArray, [ 1 ], "Array.isArray(number)");
    l.log(a);
    var s = o(Array.isArray, [ null ], "Array.isArray(null)");
    l.log(s);
    var g = o(Array.isArray, [ function() {} ], "Array.isArray(function)");
    l.log(g);
    var p = o(Array.isArray, [ {} ], "Array.isArray(object)");
    l.log(p);
    var b = o(Array.isArray, [ n ], "Array.isArray(testArray)");
    l.log(b);
    l.log("");
}, /* 8 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    l.log("================== Array.prototype.lastIndexOf ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	
	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> null", null);
	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> undefined", void 0);
	console.log("");*/
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var i = o(Array.prototype.lastIndexOf, [ 0 ], "Array.prototype.lastIndexOf(0) this -> testArray", n);
    l.log(i);
    var c = o(Array.prototype.lastIndexOf, [ 0, 3 ], "Array.prototype.lastIndexOf(0,3) this -> testArray", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 9 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t) {
        return -Math.abs(e);
    };
    l.log("================== Array.prototype.map ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.map, [ "string" ], "Array.prototype.map(string)", n);
    o(Array.prototype.map, [ void 0 ], "Array.prototype.map(undefined)", n);
    o(Array.prototype.map, [ 1 ], "Array.prototype.map(number)", n);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.map, [ i ], "Array.prototype.map(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 10 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t, o) {
        return e + r;
    };
    l.log("================== Array.prototype.reduce ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.reduce, [ "string" ], "Array.prototype.reduce(string)", n);
    o(Array.prototype.reduce, [ void 0 ], "Array.prototype.reduce(undefined)", n);
    o(Array.prototype.reduce, [ 1 ], "Array.prototype.reduce(number)", n);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", null);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.reduce, [ i ], "Array.prototype.reduce(callback)", n);
    l.log(c);
    l.log(n);
    var a = o(Array.prototype.reduce, [ i, 24 ], "Array.prototype.reduce(callback,24)", n);
    l.log(a);
    l.log(n);
    l.log("");
}, /* 11 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t, o) {
        return e + r;
    };
    l.log("================== Array.prototype.reduceRight ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.reduceRight, [ "string" ], "Array.prototype.reduceRight(string)", n);
    o(Array.prototype.reduceRight, [ void 0 ], "Array.prototype.reduceRight(undefined)", n);
    o(Array.prototype.reduceRight, [ 1 ], "Array.prototype.reduceRight(number)", n);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", null);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.reduceRight, [ i ], "Array.prototype.reduceRight(callback)", n);
    l.log(c);
    l.log(n);
    var a = o(Array.prototype.reduceRight, [ i, 24 ], "Array.prototype.reduceRight(callback,24)", n);
    l.log(a);
    l.log(n);
    l.log("");
}, /* 12 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, t) {
        return e < 0;
    };
    l.log("================== Array.prototype.some ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    o(Array.prototype.some, [ "string" ], "Array.prototype.some(string)", n);
    o(Array.prototype.some, [ void 0 ], "Array.prototype.some(undefined)", n);
    o(Array.prototype.some, [ 1 ], "Array.prototype.some(number)", n);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", null);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = o(Array.prototype.some, [ i ], "Array.prototype.some(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 13 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    l.log("================== Function.prototype.bind ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	acceptParams(Function.prototype.bind, ["string"], "Function.prototype.bind(string)", testArray);
	acceptParams(Function.prototype.bind, [void 0], "Function.prototype.bind(undefined)", testArray);
	acceptParams(Function.prototype.bind, [1], "Function.prototype.bind(number)", testArray);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", null);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", void 0);
	console.log("");*/
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var e = {
        x: 81,
        getX: function() {
            return this.x;
        }
    };
    l.log(e.getX());
    // 81
    var i = e.getX;
    // 9, поскольку в этом случае this ссылается на глобальный объект
    l.log(i());
    // создаём новую функцию с this, привязанным к module
    var c = i.bind(e);
    l.log(c());
    // 81
    l.log("");
}, /* 14 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.create, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.create(object,  {a : {value : 125}})");
    n.log("     " + l.toSource());
    o(Object.create, [ [ 1, 2, 3, 4, 5 ] ], "Object.create(array)");
    o(Object.create, [ function() {} ], "Object.create(function)");
    o(Object.create, [ new Date() ], "Object.create(date)");
    o(Object.create, [ null ], "Object.create(null)");
    /*acceptParams(Object.create, [new File()], "Object.create(File)");
	acceptParams(Object.create, [new Folder()], "Object.create(Folder)");*/
    n.log("");
}, /* 15 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.defineProperties, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.defineProperties(object,  {a : {value : 125}})");
    n.log("     " + l.toSource());
    /*acceptParams(Object.defineProperties, [new File(),{}], "Object.defineProperties(File, object)");
	acceptParams(Object.defineProperties, [new Folder(),{}], "Object.defineProperties(Folder, object)");*/
    n.log("");
}, /* 16 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.defineProperty, [ {}, "prop", {
        a: "test"
    } ], "Object.defineProperty(object, 'prop', {a: 'test'})");
    n.log("     " + l.toSource());
    var i = o(Object.defineProperty, [ {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(object, 'prop', {value: 'test'})");
    n.log("     " + i.toSource());
    var c = o(Object.defineProperty, [ [ 1, 2, 3, 4, 5 ], "prop", {
        value: "test"
    } ], "Object.defineProperty(array, 'prop', {value: 'test'})");
    n.log("     " + c.prop);
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
function(e, r, t) {
    var o = t(3).acceptParams;
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
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.getOwnPropertyDescriptor, [ {}, "prop" ], "Object.getOwnPropertyDescriptor({}, string)");
    n.log("     " + l);
    var i = o(Object.getOwnPropertyDescriptor, [ {}, void 0 ], "Object.getOwnPropertyDescriptor({}, undefined)");
    n.log("     " + i);
    var c = o(Object.getOwnPropertyDescriptor, [ {}, 1 ], "Object.getOwnPropertyDescriptor({}, number)");
    n.log("     " + c);
    var a = o(Object.getOwnPropertyDescriptor, [ {}, null ], "Object.getOwnPropertyDescriptor({}, null)");
    n.log("     " + a);
    var s = o(Object.getOwnPropertyDescriptor, [ {
        a: 1
    }, "a" ], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
    n.log("     " + s.toSource());
    n.log("");
}, /* 19 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.getOwnPropertyNames, [ Math ], "Object.getOwnPropertyNames(Math)");
    n.log("     " + l);
    n.log("");
}, /* 20 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.isExtensible, [ {} ], "Object.isExtensible(object)");
    n.log("     " + l);
    var i = o(Object.isExtensible, [ [ 1, 2, 3, 4, 5 ] ], "Object.isExtensible(array)");
    n.log("     " + i);
    var c = o(Object.isExtensible, [ function() {} ], "Object.isExtensible(function)");
    n.log("     " + c);
    var a = o(Object.isExtensible, [ new Date() ], "Object.isExtensible(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 22 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.isFrozen, [ {} ], "Object.isFrozen(object)");
    n.log("     " + l);
    var i = o(Object.isFrozen, [ [ 1, 2, 3, 4, 5 ] ], "Object.isFrozen(array)");
    n.log("     " + i);
    var c = o(Object.isFrozen, [ function() {} ], "Object.isFrozen(function)");
    n.log("     " + c);
    var a = o(Object.isFrozen, [ new Date() ], "Object.isFrozen(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 23 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.isSealed, [ {} ], "Object.isSealed(object)");
    n.log("     " + l);
    var i = o(Object.isSealed, [ [ 1, 2, 3, 4, 5 ] ], "Object.isSealed(array)");
    n.log("     " + i);
    var c = o(Object.isSealed, [ function() {} ], "Object.isSealed(function)");
    n.log("     " + c);
    var a = o(Object.isSealed, [ new Date() ], "Object.isSealed(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 24 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
    var l = o(Object.keys, [ {
        a: 1,
        b: 2
    } ], "Object.keys({a:1,b:2})");
    n.log("     " + l);
    n.log("");
}, /* 25 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
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
function(e, r, t) {
    var o = t(3).acceptParams;
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
, /* 28 */
, /* 29 */
, /* 30 */
, /* 31 */
, /* 32 */
, /* 33 */
, /* 34 */
, /* 35 */
, /* 36 */
, /* 37 */
, /* 38 */
, /* 39 */
, /* 40 */
, /* 41 */
, /* 42 */
, /* 43 */
, /* 44 */
, /* 45 */
, /* 46 */
, /* 47 */
, /* 48 */
, /* 49 */
, /* 50 */
, /* 51 */
, /* 52 */
, /* 53 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    l.log("================== String.prototype.trim ==================");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var i = "   foo  ";
    l.log(i.trim());
    // 'foo'
    l.log("");
} ]);