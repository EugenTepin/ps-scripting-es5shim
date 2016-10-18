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
    t(28);
    e.exports = t(1);
}, /* 1 */
/***/
function(e, r, t) {
    if ($.writeln !== void 0) {
        var o = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var o = window.console;
    }
    o.log($.os);
    try {
        o.log(app.name + " " + app.build);
    } catch (n) {
        o.log(app.name + " " + app.version);
    }
    //console.log(app.name + ' ' + app.build || app.version);
    o.log("Javascript version " + $.version);
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
    t(27);
}, /* 2 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    i.log("================== String.prototype.trim ==================");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var l = "   foo  ";
    i.log(l.trim());
    // 'foo'
    i.log("");
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
        var i;
        try {
            i = e.apply(n, r);
            var l = true;
        } catch (c) {
            var l = false;
        }
        if (l) {
            t.log(o + " [OK]");
        } else {
            t.log(o + " [Error]");
        }
        return i;
    };
    /*Test Data*/
    e.exports.testArray = [ -100, 55, 0, 95, 0, 43, -145, 3, 9, 16 ];
}, /* 4 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t) {
        return typeof e === "number";
    };
    i.log("================== Array.prototype.every ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.every, [ "string" ], "Array.prototype.every(string)", n);
    o(Array.prototype.every, [ void 0 ], "Array.prototype.every(undefined)", n);
    o(Array.prototype.every, [ 1 ], "Array.prototype.every(number)", n);
    o(Array.prototype.every, l, "Array.prototype.every(callback)", null);
    o(Array.prototype.every, l, "Array.prototype.every(callback)", void 0);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.every, [ l ], "Array.prototype.every(callback)", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 5 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t) {
        return e > 0;
    };
    i.log("================== Array.prototype.filter ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.filter, [ "string" ], "Array.prototype.filter(string)", n);
    o(Array.prototype.filter, [ void 0 ], "Array.prototype.filter(undefined)", n);
    o(Array.prototype.filter, [ 1 ], "Array.prototype.filter(number)", n);
    o(Array.prototype.filter, l, "Array.prototype.filter(callback)", null);
    o(Array.prototype.filter, l, "Array.prototype.filter(callback)", void 0);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.filter, [ l ], "Array.prototype.filter(callback)", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 6 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = [];
    var c = function(e, r, t) {
        l.push(Math.abs(e));
    };
    i.log("================== Array.prototype.forEach ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.forEach, [ "string" ], "Array.prototype.forEach(string)", n);
    o(Array.prototype.forEach, [ void 0 ], "Array.prototype.forEach(undefined)", n);
    o(Array.prototype.forEach, [ 1 ], "Array.prototype.forEach(number)", n);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var a = o(Array.prototype.forEach, [ c ], "Array.prototype.forEach(callback)", n);
    i.log(l);
    i.log(n);
    i.log("");
}, /* 7 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    i.log("================== Array.prototype.indexOf ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	
	acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> null", null);
	acceptParams(Array.prototype.indexOf, [0], "Array.prototype.indexOf(0) this -> undefined", void 0);
	console.log("");*/
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var l = o(Array.prototype.indexOf, [ 0 ], "Array.prototype.indexOf(0) this -> testArray", n);
    i.log(l);
    var c = o(Array.prototype.indexOf, [ 0, 3 ], "Array.prototype.indexOf(0,3) this -> testArray", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 8 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    i.log("================== Array.isArray ==================");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var l = o(Array.isArray, [ "string" ], "Array.isArray(string)");
    i.log(l);
    var c = o(Array.isArray, [ void 0 ], "Array.isArray(undefined)");
    i.log(c);
    var a = o(Array.isArray, [ 1 ], "Array.isArray(number)");
    i.log(a);
    var p = o(Array.isArray, [ null ], "Array.isArray(null)");
    i.log(p);
    var s = o(Array.isArray, [ function() {} ], "Array.isArray(function)");
    i.log(s);
    var f = o(Array.isArray, [ {} ], "Array.isArray(object)");
    i.log(f);
    var g = o(Array.isArray, [ n ], "Array.isArray(testArray)");
    i.log(g);
    i.log("");
}, /* 9 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    i.log("================== Array.prototype.lastIndexOf ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	
	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> null", null);
	acceptParams(Array.prototype.lastIndexOf, [0], "Array.prototype.lastIndexOf(0) this -> undefined", void 0);
	console.log("");*/
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var l = o(Array.prototype.lastIndexOf, [ 0 ], "Array.prototype.lastIndexOf(0) this -> testArray", n);
    i.log(l);
    var c = o(Array.prototype.lastIndexOf, [ 0, 3 ], "Array.prototype.lastIndexOf(0,3) this -> testArray", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 10 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t) {
        return -Math.abs(e);
    };
    i.log("================== Array.prototype.map ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.map, [ "string" ], "Array.prototype.map(string)", n);
    o(Array.prototype.map, [ void 0 ], "Array.prototype.map(undefined)", n);
    o(Array.prototype.map, [ 1 ], "Array.prototype.map(number)", n);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.map, [ l ], "Array.prototype.map(callback)", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 11 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t, o) {
        return e + r;
    };
    i.log("================== Array.prototype.reduce ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.reduce, [ "string" ], "Array.prototype.reduce(string)", n);
    o(Array.prototype.reduce, [ void 0 ], "Array.prototype.reduce(undefined)", n);
    o(Array.prototype.reduce, [ 1 ], "Array.prototype.reduce(number)", n);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", null);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", void 0);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.reduce, [ l ], "Array.prototype.reduce(callback)", n);
    i.log(c);
    i.log(n);
    var a = o(Array.prototype.reduce, [ l, 24 ], "Array.prototype.reduce(callback,24)", n);
    i.log(a);
    i.log(n);
    i.log("");
}, /* 12 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t, o) {
        return e + r;
    };
    i.log("================== Array.prototype.reduceRight ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.reduceRight, [ "string" ], "Array.prototype.reduceRight(string)", n);
    o(Array.prototype.reduceRight, [ void 0 ], "Array.prototype.reduceRight(undefined)", n);
    o(Array.prototype.reduceRight, [ 1 ], "Array.prototype.reduceRight(number)", n);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", null);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", void 0);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.reduceRight, [ l ], "Array.prototype.reduceRight(callback)", n);
    i.log(c);
    i.log(n);
    var a = o(Array.prototype.reduceRight, [ l, 24 ], "Array.prototype.reduceRight(callback,24)", n);
    i.log(a);
    i.log(n);
    i.log("");
}, /* 13 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    var l = function(e, r, t) {
        return e < 0;
    };
    i.log("================== Array.prototype.some ==================");
    i.log("");
    i.log("+++++++ The following should produce Error. +++++++");
    i.log("");
    o(Array.prototype.some, [ "string" ], "Array.prototype.some(string)", n);
    o(Array.prototype.some, [ void 0 ], "Array.prototype.some(undefined)", n);
    o(Array.prototype.some, [ 1 ], "Array.prototype.some(number)", n);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", null);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", void 0);
    i.log("");
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var c = o(Array.prototype.some, [ l ], "Array.prototype.some(callback)", n);
    i.log(c);
    i.log(n);
    i.log("");
}, /* 14 */
/***/
function(e, r, t) {
    var o = t(3).acceptParams;
    var n = t(3).testArray;
    if ($.writeln !== void 0) {
        var i = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var i = window.console;
    }
    i.log("================== Function.prototype.bind ==================");
    /*console.log("");
	console.log("+++++++ The following should produce Error. +++++++");
	console.log("");
	
	acceptParams(Function.prototype.bind, ["string"], "Function.prototype.bind(string)", testArray);
	acceptParams(Function.prototype.bind, [void 0], "Function.prototype.bind(undefined)", testArray);
	acceptParams(Function.prototype.bind, [1], "Function.prototype.bind(number)", testArray);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", null);
	acceptParams(Function.prototype.bind, callback, "Function.prototype.bind(callback)", void 0);
	console.log("");*/
    i.log("");
    i.log("+++++++ The following should be OK. +++++++");
    i.log("");
    var e = {
        x: 81,
        getX: function() {
            return this.x;
        }
    };
    i.log(e.getX());
    // 81
    var l = e.getX;
    // 9, поскольку в этом случае this ссылается на глобальный объект
    i.log(l());
    // создаём новую функцию с this, привязанным к module
    var c = l.bind(e);
    i.log(c());
    // 81
    i.log("");
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
    var l = o(Object.defineProperty, [ {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(object, 'prop', {value: 'test'})");
    n.log("     " + l.toSource());
    var c = o(Object.defineProperty, [ [ 1, 2, 3, 4, 5 ], "prop", {
        value: "test"
    } ], "Object.defineProperty(array, 'prop', {value: 'test'})");
    n.log("     " + c.prop);
    var a = o(Object.defineProperty, [ function() {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(function, 'prop', {value: 'test'})");
    n.log("     " + a.prop);
    var p = o(Object.defineProperty, [ new Date(), "prop", {
        value: "test"
    } ], "Object.defineProperty(date, 'prop', {value: 'test'})");
    n.log("     " + p.prop);
    /*var r5 = acceptParams(Object.defineProperty, [new File(), 'prop', {
		value: 'test'
	}], "Object.defineProperty(file, 'prop', {value: 'test'})");
	console.log("     " + r5.prop);*/
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
    var l = o(Object.getOwnPropertyDescriptor, [ {}, void 0 ], "Object.getOwnPropertyDescriptor({}, undefined)");
    n.log("     " + l);
    var c = o(Object.getOwnPropertyDescriptor, [ {}, 1 ], "Object.getOwnPropertyDescriptor({}, number)");
    n.log("     " + c);
    var a = o(Object.getOwnPropertyDescriptor, [ {}, null ], "Object.getOwnPropertyDescriptor({}, null)");
    n.log("     " + a);
    var p = o(Object.getOwnPropertyDescriptor, [ {
        a: 1
    }, "a" ], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
    n.log("     " + p.toSource());
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
    var l = o(Object.isExtensible, [ [ 1, 2, 3, 4, 5 ] ], "Object.isExtensible(array)");
    n.log("     " + l);
    var c = o(Object.isExtensible, [ function() {} ], "Object.isExtensible(function)");
    n.log("     " + c);
    var a = o(Object.isExtensible, [ new Date() ], "Object.isExtensible(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
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
    var l = o(Object.isFrozen, [ [ 1, 2, 3, 4, 5 ] ], "Object.isFrozen(array)");
    n.log("     " + l);
    var c = o(Object.isFrozen, [ function() {} ], "Object.isFrozen(function)");
    n.log("     " + c);
    var a = o(Object.isFrozen, [ new Date() ], "Object.isFrozen(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
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
    var l = o(Object.isSealed, [ [ 1, 2, 3, 4, 5 ] ], "Object.isSealed(array)");
    n.log("     " + l);
    var c = o(Object.isSealed, [ function() {} ], "Object.isSealed(function)");
    n.log("     " + c);
    var a = o(Object.isSealed, [ new Date() ], "Object.isSealed(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
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
}, /* 27 */
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
}, /* 28 */
/***/
function(e, r, t) {
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
    t(29);
    t(30);
    t(31);
    t(32);
    t(33);
    t(34);
    t(35);
    t(36);
    t(37);
    t(38);
    t(39);
    t(40);
    t(41);
    t(42);
    t(43);
    t(44);
    t(45);
    t(46);
    t(47);
    t(48);
    t(49);
    t(50);
    t(51);
    t(52);
    t(53);
}, /* 29 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	*/
    if (!String.prototype.trim) {
        // Вырезаем BOM и неразрывный пробел
        String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
    }
}, /* 30 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
    if (!Array.prototype.every) {
        Array.prototype.every = function(e, r) {
            var t, o;
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
            t = arguments.length > 1 ? r : void 0;
            // 6. Let k be 0.
            o = 0;
            // 7. Repeat, while k < len
            while (o < i) {
                var l;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (o in n) {
                    // i. Let kValue be the result of calling the Get internal method
                    //    of O with argument Pk.
                    l = n[o];
                    // ii. Let testResult be the result of calling the Call internal method
                    //     of callback with T as the this value and argument list 
                    //     containing kValue, k, and O.
                    var c = e.call(t, l, o, n);
                    // iii. If ToBoolean(testResult) is false, return false.
                    if (!c) {
                        return false;
                    }
                }
                o++;
            }
            return true;
        };
    }
}, /* 31 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.filter called on null or undefined");
            }
            var t = Object(this);
            var o = t.length >>> 0;
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var n = [];
            var i = arguments.length > 1 ? r : void 0;
            for (var l = 0; l < o; l++) {
                if (l in t) {
                    var c = t[l];
                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (e.call(i, c, l, t)) {
                        n.push(c);
                    }
                }
            }
            return n;
        };
    }
}, /* 32 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.io/#x15.4.4.18
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.forEach called on null or undefined");
            }
            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var t = Object(this);
            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var o = t.length >>> 0;
            // 4. If isCallable(callback) is false, throw a TypeError exception. 
            // See: http://es5.github.com/#x9.11
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            var n = arguments.length > 1 ? r : void 0;
            // 6. Let k be 0
            //k = 0;
            // 7. Repeat, while k < len
            for (var i = 0; i < o; i++) {
                var l;
                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c
                // c. If kPresent is true, then
                if (i in t) {
                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    l = t[i];
                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    e.call(n, l, i, t);
                }
            }
        };
    }
}, /* 33 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.14
    // Reference: http://es5.github.io/#x15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(e, r) {
            // 1. Let o be the result of calling ToObject passing
            //    the this value as the argument.
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.indexOf called on null or undefined");
            }
            var t;
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
            var i = +r || 0;
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
            t = Math.max(i >= 0 ? i : n - Math.abs(i), 0);
            // 9. Repeat, while k < len
            while (t < n) {
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
                if (t in o && o[t] === e) {
                    return t;
                }
                t++;
            }
            return -1;
        };
    }
}, /* 34 */
/***/
function(e, r) {
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
}, /* 35 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.15
    // Reference: http://es5.github.io/#x15.4.4.15
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");
            }
            var t, o, n = Object(this), i = n.length >>> 0;
            if (i === 0) {
                return -1;
            }
            t = i - 1;
            if (arguments.length > 1) {
                t = Number(arguments[1]);
                if (t != t) {
                    t = 0;
                } else if (t != 0 && t != Infinity && t != -Infinity) {
                    t = (t > 0 || -1) * Math.floor(Math.abs(t));
                }
            }
            for (o = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); o >= 0; o--) {
                if (o in n && n[o] === e) {
                    return o;
                }
            }
            return -1;
        };
    }
}, /* 36 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.19
    // Reference: http://es5.github.io/#x15.4.4.19
    if (!Array.prototype.map) {
        Array.prototype.map = function(e, r) {
            var t, o, n;
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.map called on null or undefined");
            }
            // 1. Let O be the result of calling ToObject passing the |this| 
            //    value as the argument.
            var i = Object(this);
            // 2. Let lenValue be the result of calling the Get internal 
            //    method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var l = i.length >>> 0;
            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            t = arguments.length > 1 ? r : void 0;
            // 6. Let A be a new array created as if by the expression new Array(len) 
            //    where Array is the standard built-in constructor with that name and 
            //    len is the value of len.
            o = new Array(l);
            for (var n = 0; n < l; n++) {
                var c, a;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (n in i) {
                    // i. Let kValue be the result of calling the Get internal 
                    //    method of O with argument Pk.
                    c = i[n];
                    // ii. Let mappedValue be the result of calling the Call internal 
                    //     method of callback with T as the this value and argument 
                    //     list containing kValue, k, and O.
                    a = e.call(t, c, n, i);
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
}, /* 37 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var t = Object(this), o = t.length >>> 0, n = 0, i;
            if (arguments.length > 1) {
                i = r;
            } else {
                while (n < o && !(n in t)) {
                    n++;
                }
                if (n >= o) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = t[n++];
            }
            for (;n < o; n++) {
                if (n in t) {
                    i = e(i, t[n], n, t);
                }
            }
            return i;
        };
    }
}, /* 38 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: http://es5.github.io/#x15.4.4.22
    if (!Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.reduceRight called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var t = Object(this), o = t.length >>> 0, n = o - 1, i;
            if (arguments.length > 1) {
                i = r;
            } else {
                while (n >= 0 && !(n in t)) {
                    n--;
                }
                if (n < 0) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = t[n--];
            }
            for (;n >= 0; n--) {
                if (n in t) {
                    i = e(i, t[n], n, t);
                }
            }
            return i;
        };
    }
}, /* 39 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.17
    // Reference: http://es5.github.io/#x15.4.4.17
    if (!Array.prototype.some) {
        Array.prototype.some = function(e, r) {
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.some called on null or undefined");
            }
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var t = Object(this);
            var o = t.length >>> 0;
            var n = arguments.length > 1 ? r : void 0;
            for (var i = 0; i < o; i++) {
                if (i in t && e.call(n, t[i], i, t)) {
                    return true;
                }
            }
            return false;
        };
    }
}, /* 40 */
/***/
function(e, r) {
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
            var r = Array.prototype.slice.call(arguments, 1), t = this, o = function() {}, n = function() {
                return t.apply(this instanceof o ? this : e, r.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) {
                // Function.prototype doesn't have a prototype property
                o.prototype = this.prototype;
            }
            n.prototype = new o();
            return n;
        };
    }
}, /* 41 */
/***/
function(e, r) {
    if (!Object.create) {
        // Production steps of ECMA-262, Edition 5, 15.2.3.5
        // Reference: http://es5.github.io/#x15.2.3.5
        Object.create = function() {
            // To save on memory, use a shared constructor
            function e() {}
            // make a safe reference to Object.prototype.hasOwnProperty
            var r = Object.prototype.hasOwnProperty;
            return function(t) {
                // 1. If Type(O) is not Object or Null throw a TypeError exception.
                if (Object(t) !== t && t !== null) {
                    throw TypeError("Object prototype may only be an Object or null");
                }
                // 2. Let obj be the result of creating a new object as if by the
                //    expression new Object() where Object is the standard built-in
                //    constructor with that name
                // 3. Set the [[Prototype]] internal property of obj to O.
                e.prototype = t;
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
                        if (r.call(n, i)) {
                            var l = n[i];
                            if (Object(l) !== l) {
                                throw TypeError(i + "must be an object");
                            }
                            if ("get" in l || "set" in l) {
                                throw new TypeError("getters & setters can not be defined on this javascript engine");
                            }
                            if ("value" in l) {
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
}, /* 42 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
	*/
    if (!Object.defineProperties) {
        Object.defineProperties = function(e, r) {
            function t(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }
            function o(e) {
                if (Object(e) !== e) {
                    throw new TypeError("Descriptor can only be an Object.");
                }
                var r = {};
                if (t(e, "enumerable")) {
                    r.enumerable = !!e.enumerable;
                }
                if (t(e, "configurable")) {
                    r.configurable = !!e.configurable;
                }
                if (t(e, "value")) {
                    r.value = e.value;
                }
                if (t(e, "writable")) {
                    r.writable = !!e.writable;
                }
                if (t(e, "get")) {
                    throw new TypeError("getters & setters can not be defined on this javascript engine");
                }
                if (t(e, "set")) {
                    throw new TypeError("getters & setters can not be defined on this javascript engine");
                }
                return r;
            }
            if (Object(e) !== e) {
                throw new TypeError("Object.defineProperties can only be called on Objects.");
            }
            if (Object(r) !== r) {
                throw new TypeError("Properties can only be an Object.");
            }
            var n = Object(r);
            for (propName in n) {
                if (hasOwnProperty.call(n, propName)) {
                    var i = o(n[propName]);
                    e[propName] = i.value;
                }
            }
            return e;
        };
    }
}, /* 43 */
/***/
function(e, r) {
    if (!Object.defineProperty) {
        Object.defineProperty = function t(e, r, o) {
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
                e[r] = o.value;
            }
            return e;
        };
    }
}, /* 44 */
/***/
function(e, r) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.9
    // http://es5.github.com/#x15.2.3.9
    if (!Object.freeze) {
        Object.freeze = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.freeze can only be called on Objects.");
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return e;
        };
    }
}, /* 45 */
/***/
function(e, r) {
    if (!Object.getOwnPropertyDescriptor) {
        Object.getOwnPropertyDescriptor = function t(e, r) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");
            }
            var t;
            if (!Object.prototype.hasOwnProperty.call(e, r)) {
                return t;
            }
            t = {
                enumerable: Object.prototype.propertyIsEnumerable.call(e, r),
                configurable: true
            };
            t.value = e[r];
            var o = e.reflect.find(r).type;
            t.writable = o === "readwrite";
            return t;
        };
    }
}, /* 46 */
/***/
function(e, r) {
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");
            }
            var r = e.reflect.properties;
            var t = e.reflect.methods;
            var o = t.concat(r);
            var n = [];
            for (var i = 0; i < o.length; i++) {
                n.push(o[i].name);
            }
            return n;
        };
    }
}, /* 47 */
/***/
function(e, r) {
    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getPrototypeOf can only be called on Objects.");
            }
            return e.__proto__;
        };
    }
}, /* 48 */
/***/
function(e, r) {
    // ES5 15.2.3.13
    // http://es5.github.com/#x15.2.3.13
    if (!Object.isExtensible) {
        Object.isExtensible = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isExtensible can only be called on Objects.");
            }
            return true;
        };
    }
}, /* 49 */
/***/
function(e, r) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.12
    // http://es5.github.com/#x15.2.3.12
    if (!Object.isFrozen) {
        Object.isFrozen = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isFrozen can only be called on Objects.");
            }
            return false;
        };
    }
}, /* 50 */
/***/
function(e, r) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.11
    // http://es5.github.com/#x15.2.3.11
    if (!Object.isSealed) {
        Object.isSealed = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isSealed can only be called on Objects.");
            }
            return false;
        };
    }
}, /* 51 */
/***/
function(e, r) {
    /*
	Original taken from
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill
	
	Ther is no EnumBug in Photoshop scripting environment, so i cut unused code.
	*/
    if (!Object.keys) {
        Object.keys = function() {
            var e = Object.prototype.hasOwnProperty;
            return function(r) {
                if (Object(r) !== r) {
                    throw new TypeError("Object.keys can only be called on Objects.");
                }
                var t = [], o, n;
                for (o in r) {
                    if (e.call(r, o)) {
                        t.push(o);
                    }
                }
                return t;
            };
        }();
    }
}, /* 52 */
/***/
function(e, r) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.10
    // http://es5.github.com/#x15.2.3.10
    if (!Object.preventExtensions) {
        Object.preventExtensions = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.preventExtensions can only be called on Objects.");
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return e;
        };
    }
}, /* 53 */
/***/
function(e, r) {
    /*
	https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
	*/
    // ES5 15.2.3.8
    // http://es5.github.com/#x15.2.3.8
    if (!Object.seal) {
        Object.seal = function t(e) {
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