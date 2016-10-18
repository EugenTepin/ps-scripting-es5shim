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
    function o(t) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (r[t]) /******/
        return r[t].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var n = r[t] = {
            /******/
            exports: {},
            /******/
            id: t,
            /******/
            loaded: false
        };
        /******/
        /******/
        // Execute the module function
        /******/
        e[t].call(n.exports, n, n.exports, o);
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
    o.c = r;
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
function(e, r, o) {
    e.exports = o(1);
}, /* 1 */
/***/
function(e, r, o) {
    if ($.writeln !== void 0) {
        var t = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var t = window.console;
    }
    t.log($.os);
    try {
        t.log(app.name + " " + app.build);
    } catch (n) {
        t.log(app.name + " " + app.version);
    }
    //console.log(app.name + ' ' + app.build || app.version);
    t.log("Javascript version " + $.version);
    o(2);
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
    o(14);
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
    o(27);
}, /* 2 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
}, /* 3 */
/***/
function(e, r) {
    if ($.writeln !== void 0) {
        var o = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var o = window.console;
    }
    e.exports.acceptParams = function(e, r, t, n) {
        var l;
        try {
            l = e.apply(n, r);
            var i = true;
        } catch (c) {
            var i = false;
        }
        if (i) {
            o.log(t + " [OK]");
        } else {
            o.log(t + " [Error]");
        }
        return l;
    };
    /*Test Data*/
    e.exports.testArray = [ -100, 55, 0, 95, 0, 43, -145, 3, 9, 16 ];
}, /* 4 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o) {
        return typeof e === "number";
    };
    l.log("================== Array.prototype.every ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.every, [ "string" ], "Array.prototype.every(string)", n);
    t(Array.prototype.every, [ void 0 ], "Array.prototype.every(undefined)", n);
    t(Array.prototype.every, [ 1 ], "Array.prototype.every(number)", n);
    t(Array.prototype.every, i, "Array.prototype.every(callback)", null);
    t(Array.prototype.every, i, "Array.prototype.every(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.every, [ i ], "Array.prototype.every(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 5 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o) {
        return e > 0;
    };
    l.log("================== Array.prototype.filter ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.filter, [ "string" ], "Array.prototype.filter(string)", n);
    t(Array.prototype.filter, [ void 0 ], "Array.prototype.filter(undefined)", n);
    t(Array.prototype.filter, [ 1 ], "Array.prototype.filter(number)", n);
    t(Array.prototype.filter, i, "Array.prototype.filter(callback)", null);
    t(Array.prototype.filter, i, "Array.prototype.filter(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.filter, [ i ], "Array.prototype.filter(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 6 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
    var c = function(e, r, o) {
        i.push(Math.abs(e));
    };
    l.log("================== Array.prototype.forEach ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.forEach, [ "string" ], "Array.prototype.forEach(string)", n);
    t(Array.prototype.forEach, [ void 0 ], "Array.prototype.forEach(undefined)", n);
    t(Array.prototype.forEach, [ 1 ], "Array.prototype.forEach(number)", n);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var a = t(Array.prototype.forEach, [ c ], "Array.prototype.forEach(callback)", n);
    l.log(i);
    l.log(n);
    l.log("");
}, /* 7 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
    var i = t(Array.prototype.indexOf, [ 0 ], "Array.prototype.indexOf(0) this -> testArray", n);
    l.log(i);
    var c = t(Array.prototype.indexOf, [ 0, 3 ], "Array.prototype.indexOf(0,3) this -> testArray", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 8 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
    var i = t(Array.isArray, [ "string" ], "Array.isArray(string)");
    l.log(i);
    var c = t(Array.isArray, [ void 0 ], "Array.isArray(undefined)");
    l.log(c);
    var a = t(Array.isArray, [ 1 ], "Array.isArray(number)");
    l.log(a);
    var s = t(Array.isArray, [ null ], "Array.isArray(null)");
    l.log(s);
    var g = t(Array.isArray, [ function() {} ], "Array.isArray(function)");
    l.log(g);
    var p = t(Array.isArray, [ {} ], "Array.isArray(object)");
    l.log(p);
    var b = t(Array.isArray, [ n ], "Array.isArray(testArray)");
    l.log(b);
    l.log("");
}, /* 9 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
    var i = t(Array.prototype.lastIndexOf, [ 0 ], "Array.prototype.lastIndexOf(0) this -> testArray", n);
    l.log(i);
    var c = t(Array.prototype.lastIndexOf, [ 0, 3 ], "Array.prototype.lastIndexOf(0,3) this -> testArray", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 10 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o) {
        return -Math.abs(e);
    };
    l.log("================== Array.prototype.map ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.map, [ "string" ], "Array.prototype.map(string)", n);
    t(Array.prototype.map, [ void 0 ], "Array.prototype.map(undefined)", n);
    t(Array.prototype.map, [ 1 ], "Array.prototype.map(number)", n);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.map, [ i ], "Array.prototype.map(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 11 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o, t) {
        return e + r;
    };
    l.log("================== Array.prototype.reduce ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.reduce, [ "string" ], "Array.prototype.reduce(string)", n);
    t(Array.prototype.reduce, [ void 0 ], "Array.prototype.reduce(undefined)", n);
    t(Array.prototype.reduce, [ 1 ], "Array.prototype.reduce(number)", n);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", null);
    //acceptParams(Array.prototype.reduce, callback, "Array.prototype.reduce(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.reduce, [ i ], "Array.prototype.reduce(callback)", n);
    l.log(c);
    l.log(n);
    var a = t(Array.prototype.reduce, [ i, 24 ], "Array.prototype.reduce(callback,24)", n);
    l.log(a);
    l.log(n);
    l.log("");
}, /* 12 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o, t) {
        return e + r;
    };
    l.log("================== Array.prototype.reduceRight ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.reduceRight, [ "string" ], "Array.prototype.reduceRight(string)", n);
    t(Array.prototype.reduceRight, [ void 0 ], "Array.prototype.reduceRight(undefined)", n);
    t(Array.prototype.reduceRight, [ 1 ], "Array.prototype.reduceRight(number)", n);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", null);
    //acceptParams(Array.prototype.reduceRight, callback, "Array.prototype.reduceRight(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.reduceRight, [ i ], "Array.prototype.reduceRight(callback)", n);
    l.log(c);
    l.log(n);
    var a = t(Array.prototype.reduceRight, [ i, 24 ], "Array.prototype.reduceRight(callback,24)", n);
    l.log(a);
    l.log(n);
    l.log("");
}, /* 13 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
    if ($.writeln !== void 0) {
        var l = {
            log: function(e) {
                $.writeln(e);
            }
        };
    } else {
        var l = window.console;
    }
    var i = function(e, r, o) {
        return e < 0;
    };
    l.log("================== Array.prototype.some ==================");
    l.log("");
    l.log("+++++++ The following should produce Error. +++++++");
    l.log("");
    t(Array.prototype.some, [ "string" ], "Array.prototype.some(string)", n);
    t(Array.prototype.some, [ void 0 ], "Array.prototype.some(undefined)", n);
    t(Array.prototype.some, [ 1 ], "Array.prototype.some(number)", n);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", null);
    //acceptParams(Array.prototype.some, callback, "Array.prototype.some(callback)", void 0);
    l.log("");
    l.log("");
    l.log("+++++++ The following should be OK. +++++++");
    l.log("");
    var c = t(Array.prototype.some, [ i ], "Array.prototype.some(callback)", n);
    l.log(c);
    l.log(n);
    l.log("");
}, /* 14 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
    var n = o(3).testArray;
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
}, /* 15 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.create, [ "string" ], "Object.create(string)");
    t(Object.create, [ void 0 ], "Object.create(undefined)");
    t(Object.create, [ 1 ], "Object.create(number)");
    n.log("");
    t(Object.create, [ {}, {
        a: "string"
    } ], "Object.create(object, {a : string})");
    t(Object.create, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.create(object, {a : {set : function}})");
    t(Object.create, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.create(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.create, [ {} ], "Object.create(object)");
    var l = t(Object.create, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.create(object,  {a : {value : 125}})");
    n.log("     " + l.toSource());
    t(Object.create, [ [ 1, 2, 3, 4, 5 ] ], "Object.create(array)");
    t(Object.create, [ function() {} ], "Object.create(function)");
    t(Object.create, [ new Date() ], "Object.create(date)");
    t(Object.create, [ null ], "Object.create(null)");
    /*acceptParams(Object.create, [new File()], "Object.create(File)");
	acceptParams(Object.create, [new Folder()], "Object.create(Folder)");*/
    n.log("");
}, /* 16 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.defineProperties, [ "string", {} ], "Object.defineProperties(string, object)");
    t(Object.defineProperties, [ void 0, {} ], "Object.defineProperties(undefined, object)");
    t(Object.defineProperties, [ 1, {} ], "Object.defineProperties(number, object)");
    t(Object.defineProperties, [ null, {} ], "Object.defineProperties(null, object)");
    t(Object.defineProperties, [ {} ], "Object.defineProperties(object)");
    t(Object.defineProperties, [ [ 1, 2, 3, 4, 5 ], 1 ], "Object.defineProperties(array, number)");
    t(Object.defineProperties, [ function() {}, "test" ], "Object.defineProperties(function, string)");
    t(Object.defineProperties, [ new Date(), null ], "Object.defineProperties(date, null)");
    n.log("");
    t(Object.defineProperties, [ {}, {
        a: "string"
    } ], "Object.defineProperties(object, {a : string})");
    t(Object.defineProperties, [ {}, {
        a: {
            set: function() {}
        }
    } ], "Object.defineProperties(object, {a : {set : function}})");
    t(Object.defineProperties, [ {}, {
        a: {
            get: function() {}
        }
    } ], "Object.defineProperties(object, {a : {get : function}})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.defineProperties, [ {}, {
        a: {
            value: 125
        }
    } ], "Object.defineProperties(object,  {a : {value : 125}})");
    n.log("     " + l.toSource());
    /*acceptParams(Object.defineProperties, [new File(),{}], "Object.defineProperties(File, object)");
	acceptParams(Object.defineProperties, [new Folder(),{}], "Object.defineProperties(Folder, object)");*/
    n.log("");
}, /* 17 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.defineProperty, [ "string", "prop", "string" ], "Object.defineProperty(string, string, string)");
    t(Object.defineProperty, [ void 0, "prop", "string" ], "Object.defineProperty(undefined, string, string)");
    t(Object.defineProperty, [ 1, "prop", "string" ], "Object.defineProperty(number, string, string)");
    t(Object.defineProperty, [ null, "prop", "string" ], "Object.defineProperty(null, string, string)");
    t(Object.defineProperty, [ {}, "prop", "string" ], "Object.defineProperty(object, string, string)");
    t(Object.defineProperty, [ {}, "prop", void 0 ], "Object.defineProperty(object, string, undefined)");
    t(Object.defineProperty, [ {}, "prop", 1 ], "Object.defineProperty(object, string, number)");
    t(Object.defineProperty, [ {}, "prop", null ], "Object.defineProperty(object, string, null)");
    t(Object.defineProperty, [ {}, "prop", {
        set: function() {}
    } ], "Object.defineProperty(object, string, {set: function() {})");
    t(Object.defineProperty, [ {}, "prop", {
        get: function() {}
    } ], "Object.defineProperty(object, string, {get: function() {})");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.defineProperty, [ {}, "prop", {
        a: "test"
    } ], "Object.defineProperty(object, 'prop', {a: 'test'})");
    n.log("     " + l.toSource());
    var i = t(Object.defineProperty, [ {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(object, 'prop', {value: 'test'})");
    n.log("     " + i.toSource());
    var c = t(Object.defineProperty, [ [ 1, 2, 3, 4, 5 ], "prop", {
        value: "test"
    } ], "Object.defineProperty(array, 'prop', {value: 'test'})");
    n.log("     " + c.prop);
    var a = t(Object.defineProperty, [ function() {}, "prop", {
        value: "test"
    } ], "Object.defineProperty(function, 'prop', {value: 'test'})");
    n.log("     " + a.prop);
    var s = t(Object.defineProperty, [ new Date(), "prop", {
        value: "test"
    } ], "Object.defineProperty(date, 'prop', {value: 'test'})");
    n.log("     " + s.prop);
    /*var r5 = acceptParams(Object.defineProperty, [new File(), 'prop', {
		value: 'test'
	}], "Object.defineProperty(file, 'prop', {value: 'test'})");
	console.log("     " + r5.prop);*/
    n.log("");
}, /* 18 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.freeze, [ "string" ], "Object.freeze(string)");
    t(Object.freeze, [ void 0 ], "Object.freeze(undefined)");
    t(Object.freeze, [ 1 ], "Object.freeze(number)");
    t(Object.freeze, [ null ], "Object.freeze(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.freeze, [ {} ], "Object.freeze(object)");
    t(Object.freeze, [ [ 1, 2, 3, 4, 5 ] ], "Object.freeze(array)");
    t(Object.freeze, [ function() {} ], "Object.freeze(function)");
    t(Object.freeze, [ new Date() ], "Object.freeze(date)");
    //acceptParams(Object.freeze, [new File()], "Object.freeze(File)");
    //acceptParams(Object.freeze, [new Folder()], "Object.freeze(Folder)");
    n.log("");
}, /* 19 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.getOwnPropertyDescriptor, [ "string", "prop" ], "Object.getOwnPropertyDescriptor(string, prop)");
    t(Object.getOwnPropertyDescriptor, [ void 0, "prop" ], "Object.getOwnPropertyDescriptor(undefined, prop)");
    t(Object.getOwnPropertyDescriptor, [ 1, "prop" ], "Object.getOwnPropertyDescriptor(number, prop)");
    t(Object.getOwnPropertyDescriptor, [ null, "prop" ], "Object.getOwnPropertyDescriptor(null, prop)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.getOwnPropertyDescriptor, [ {}, "prop" ], "Object.getOwnPropertyDescriptor({}, string)");
    n.log("     " + l);
    var i = t(Object.getOwnPropertyDescriptor, [ {}, void 0 ], "Object.getOwnPropertyDescriptor({}, undefined)");
    n.log("     " + i);
    var c = t(Object.getOwnPropertyDescriptor, [ {}, 1 ], "Object.getOwnPropertyDescriptor({}, number)");
    n.log("     " + c);
    var a = t(Object.getOwnPropertyDescriptor, [ {}, null ], "Object.getOwnPropertyDescriptor({}, null)");
    n.log("     " + a);
    var s = t(Object.getOwnPropertyDescriptor, [ {
        a: 1
    }, "a" ], "Object.getOwnPropertyDescriptor({a:1}, 'a')");
    n.log("     " + s.toSource());
    n.log("");
}, /* 20 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.getOwnPropertyNames, [ "string" ], "Object.getOwnPropertyNames(string)");
    t(Object.getOwnPropertyNames, [ void 0 ], "Object.getOwnPropertyNames(undefined)");
    t(Object.getOwnPropertyNames, [ 1 ], "Object.getOwnPropertyNames(number)");
    t(Object.getOwnPropertyNames, [ null ], "Object.getOwnPropertyNames(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.getOwnPropertyNames, [ {} ], "Object.getOwnPropertyNames(object)");
    t(Object.getOwnPropertyNames, [ [ 1, 2, 3, 4, 5 ] ], "Object.getOwnPropertyNames(array)");
    t(Object.getOwnPropertyNames, [ function() {} ], "Object.getOwnPropertyNames(function)");
    t(Object.getOwnPropertyNames, [ new Date() ], "Object.getOwnPropertyNames(date)");
    //acceptParams(Object.getOwnPropertyNames, [new File()], "Object.getOwnPropertyNames(File)");
    //acceptParams(Object.getOwnPropertyNames, [new Folder()], "Object.getOwnPropertyNames(Folder)");
    var l = t(Object.getOwnPropertyNames, [ Math ], "Object.getOwnPropertyNames(Math)");
    n.log("     " + l);
    n.log("");
}, /* 21 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.getPrototypeOf, [ "string" ], "Object.getPrototypeOf(string)");
    t(Object.getPrototypeOf, [ void 0 ], "Object.getPrototypeOf(undefined)");
    t(Object.getPrototypeOf, [ 1 ], "Object.getPrototypeOf(number)");
    t(Object.getPrototypeOf, [ null ], "Object.getPrototypeOf(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.getPrototypeOf, [ {} ], "Object.getPrototypeOf(object)");
    t(Object.getPrototypeOf, [ [ 1, 2, 3, 4, 5 ] ], "Object.getPrototypeOf(array)");
    t(Object.getPrototypeOf, [ function() {} ], "Object.getPrototypeOf(function)");
    t(Object.getPrototypeOf, [ new Date() ], "Object.getPrototypeOf(date)");
    /*acceptParams(Object.getPrototypeOf, [new File()], "Object.getPrototypeOf(File)");
	acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	
	var r = acceptParams(Object.getPrototypeOf, [new Folder()], "Object.getPrototypeOf(Folder)");
	console.log("     " + r);*/
    n.log("");
}, /* 22 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.isExtensible, [ "string" ], "Object.isExtensible(string)");
    t(Object.isExtensible, [ void 0 ], "Object.isExtensible(undefined)");
    t(Object.isExtensible, [ 1 ], "Object.isExtensible(number)");
    t(Object.isExtensible, [ null ], "Object.isExtensible(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.isExtensible, [ {} ], "Object.isExtensible(object)");
    n.log("     " + l);
    var i = t(Object.isExtensible, [ [ 1, 2, 3, 4, 5 ] ], "Object.isExtensible(array)");
    n.log("     " + i);
    var c = t(Object.isExtensible, [ function() {} ], "Object.isExtensible(function)");
    n.log("     " + c);
    var a = t(Object.isExtensible, [ new Date() ], "Object.isExtensible(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isExtensible, [new File()], "Object.isExtensible(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isExtensible, [new Folder()], "Object.isExtensible(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 23 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.isFrozen, [ "string" ], "Object.isFrozen(string)");
    t(Object.isFrozen, [ void 0 ], "Object.isFrozen(undefined)");
    t(Object.isFrozen, [ 1 ], "Object.isFrozen(number)");
    t(Object.isFrozen, [ null ], "Object.isFrozen(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.isFrozen, [ {} ], "Object.isFrozen(object)");
    n.log("     " + l);
    var i = t(Object.isFrozen, [ [ 1, 2, 3, 4, 5 ] ], "Object.isFrozen(array)");
    n.log("     " + i);
    var c = t(Object.isFrozen, [ function() {} ], "Object.isFrozen(function)");
    n.log("     " + c);
    var a = t(Object.isFrozen, [ new Date() ], "Object.isFrozen(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isFrozen, [new File()], "Object.isFrozen(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isFrozen, [new Folder()], "Object.isFrozen(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 24 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.isSealed, [ "string" ], "Object.isSealed(string)");
    t(Object.isSealed, [ void 0 ], "Object.isSealed(undefined)");
    t(Object.isSealed, [ 1 ], "Object.isSealed(number)");
    t(Object.isSealed, [ null ], "Object.isSealed(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    var l = t(Object.isSealed, [ {} ], "Object.isSealed(object)");
    n.log("     " + l);
    var i = t(Object.isSealed, [ [ 1, 2, 3, 4, 5 ] ], "Object.isSealed(array)");
    n.log("     " + i);
    var c = t(Object.isSealed, [ function() {} ], "Object.isSealed(function)");
    n.log("     " + c);
    var a = t(Object.isSealed, [ new Date() ], "Object.isSealed(date)");
    n.log("     " + a);
    /*var r5 = acceptParams(Object.isSealed, [new File()], "Object.isSealed(File)");
	console.log("     " + r5);
	var r6 = acceptParams(Object.isSealed, [new Folder()], "Object.isSealed(Folder)");
	console.log("     " + r6);*/
    n.log("");
}, /* 25 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.keys, [ "string" ], "Object.keys(string)");
    t(Object.keys, [ void 0 ], "Object.keys(undefined)");
    t(Object.keys, [ 1 ], "Object.keys(number)");
    t(Object.keys, [ null ], "Object.keys(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.keys, [ {} ], "Object.keys(object)");
    t(Object.keys, [ [ 1, 2, 3, 4, 5 ] ], "Object.keys(array)");
    t(Object.keys, [ function() {} ], "Object.keys(function)");
    t(Object.keys, [ new Date() ], "Object.keys(date)");
    //acceptParams(Object.keys, [new File()], "Object.keys(File)");
    //acceptParams(Object.keys, [new Folder()], "Object.keys(Folder)");
    var l = t(Object.keys, [ {
        a: 1,
        b: 2
    } ], "Object.keys({a:1,b:2})");
    n.log("     " + l);
    n.log("");
}, /* 26 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.preventExtensions, [ "string" ], "Object.preventExtensions(string)");
    t(Object.preventExtensions, [ void 0 ], "Object.preventExtensions(undefined)");
    t(Object.preventExtensions, [ 1 ], "Object.preventExtensions(number)");
    t(Object.preventExtensions, [ null ], "Object.preventExtensions(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.preventExtensions, [ {} ], "Object.preventExtensions(object)");
    t(Object.preventExtensions, [ [ 1, 2, 3, 4, 5 ] ], "Object.preventExtensions(array)");
    t(Object.preventExtensions, [ function() {} ], "Object.preventExtensions(function)");
    t(Object.preventExtensions, [ new Date() ], "Object.preventExtensions(date)");
    //acceptParams(Object.preventExtensions, [new File()], "Object.preventExtensions(File)");
    //acceptParams(Object.preventExtensions, [new Folder()], "Object.preventExtensions(Folder)");
    n.log("");
}, /* 27 */
/***/
function(e, r, o) {
    var t = o(3).acceptParams;
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
    t(Object.seal, [ "string" ], "Object.seal(string)");
    t(Object.seal, [ void 0 ], "Object.seal(undefined)");
    t(Object.seal, [ 1 ], "Object.seal(number)");
    t(Object.seal, [ null ], "Object.seal(null)");
    n.log("");
    n.log("+++++++ The following should be OK. +++++++");
    n.log("");
    t(Object.seal, [ {} ], "Object.seal(object)");
    t(Object.seal, [ [ 1, 2, 3, 4, 5 ] ], "Object.seal(array)");
    t(Object.seal, [ function() {} ], "Object.seal(function)");
    t(Object.seal, [ new Date() ], "Object.seal(date)");
    //acceptParams(Object.seal, [new File()], "Object.seal(File)");
    //acceptParams(Object.seal, [new Folder()], "Object.seal(Folder)");
    n.log("");
} ]);