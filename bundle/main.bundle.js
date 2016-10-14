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
    function t(n) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (r[n]) /******/
        return r[n].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var o = r[n] = {
            /******/
            exports: {},
            /******/
            id: n,
            /******/
            loaded: false
        };
        /******/
        /******/
        // Execute the module function
        /******/
        e[n].call(o.exports, o, o.exports, t);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        o.loaded = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return o.exports;
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
    e.exports = t(27);
}, /* 1 */
, /* 2 */
, /* 3 */
, /* 4 */
, /* 5 */
, /* 6 */
, /* 7 */
, /* 8 */
, /* 9 */
, /* 10 */
, /* 11 */
, /* 12 */
, /* 13 */
, /* 14 */
, /* 15 */
, /* 16 */
, /* 17 */
, /* 18 */
, /* 19 */
, /* 20 */
, /* 21 */
, /* 22 */
, /* 23 */
, /* 24 */
, /* 25 */
, /* 26 */
, /* 27 */
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
    t(52);
    t(28);
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
}, /* 28 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
    if (!Array.prototype.every) {
        Array.prototype.every = function(e, r) {
            var t, n;
            if (this === void 0 || this === null) {
                throw new TypeError("Array.prototype.every called on null or undefined");
            }
            // 1. Let O be the result of calling ToObject passing the this 
            //    value as the argument.
            var o = Object(this);
            // 2. Let lenValue be the result of calling the Get internal method
            //    of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var i = o.length >>> 0;
            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            t = arguments.length > 1 ? r : void 0;
            // 6. Let k be 0.
            n = 0;
            // 7. Repeat, while k < len
            while (n < i) {
                var c;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (n in o) {
                    // i. Let kValue be the result of calling the Get internal method
                    //    of O with argument Pk.
                    c = o[n];
                    // ii. Let testResult be the result of calling the Call internal method
                    //     of callback with T as the this value and argument list 
                    //     containing kValue, k, and O.
                    var a = e.call(t, c, n, o);
                    // iii. If ToBoolean(testResult) is false, return false.
                    if (!a) {
                        return false;
                    }
                }
                n++;
            }
            return true;
        };
    }
}, /* 29 */
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
            var n = t.length >>> 0;
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            var o = [];
            var i = arguments.length > 1 ? r : void 0;
            for (var c = 0; c < n; c++) {
                if (c in t) {
                    var a = t[c];
                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (e.call(i, a, c, t)) {
                        o.push(a);
                    }
                }
            }
            return o;
        };
    }
}, /* 30 */
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
            var n = t.length >>> 0;
            // 4. If isCallable(callback) is false, throw a TypeError exception. 
            // See: http://es5.github.com/#x9.11
            if (e.__class__ !== "Function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            var o = arguments.length > 1 ? r : void 0;
            // 6. Let k be 0
            //k = 0;
            // 7. Repeat, while k < len
            for (var i = 0; i < n; i++) {
                var c;
                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c
                // c. If kPresent is true, then
                if (i in t) {
                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    c = t[i];
                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    e.call(o, c, i, t);
                }
            }
        };
    }
}, /* 31 */
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
            var n = Object(this);
            // 2. Let lenValue be the result of calling the Get
            //    internal method of o with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var o = n.length >>> 0;
            // 4. If len is 0, return -1.
            if (o === 0) {
                return -1;
            }
            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var i = +r || 0;
            if (Math.abs(i) === Infinity) {
                i = 0;
            }
            // 6. If n >= len, return -1.
            if (i >= o) {
                return -1;
            }
            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            t = Math.max(i >= 0 ? i : o - Math.abs(i), 0);
            // 9. Repeat, while k < len
            while (t < o) {
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
                if (t in n && n[t] === e) {
                    return t;
                }
                t++;
            }
            return -1;
        };
    }
}, /* 32 */
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
}, /* 33 */
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
            var t, n, o = Object(this), i = o.length >>> 0;
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
            for (n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--) {
                if (n in o && o[n] === e) {
                    return n;
                }
            }
            return -1;
        };
    }
}, /* 34 */
/***/
function(e, r) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.19
    // Reference: http://es5.github.io/#x15.4.4.19
    if (!Array.prototype.map) {
        Array.prototype.map = function(e, r) {
            var t, n, o;
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
            t = arguments.length > 1 ? r : void 0;
            // 6. Let A be a new array created as if by the expression new Array(len) 
            //    where Array is the standard built-in constructor with that name and 
            //    len is the value of len.
            n = new Array(c);
            for (var o = 0; o < c; o++) {
                var a, f;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (o in i) {
                    // i. Let kValue be the result of calling the Get internal 
                    //    method of O with argument Pk.
                    a = i[o];
                    // ii. Let mappedValue be the result of calling the Call internal 
                    //     method of callback with T as the this value and argument 
                    //     list containing kValue, k, and O.
                    f = e.call(t, a, o, i);
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
                    n[o] = f;
                }
            }
            // 9. return A
            return n;
        };
    }
}, /* 35 */
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
            var t = Object(this), n = t.length >>> 0, o = 0, i;
            if (arguments.length > 1) {
                i = r;
            } else {
                while (o < n && !(o in t)) {
                    o++;
                }
                if (o >= n) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = t[o++];
            }
            for (;o < n; o++) {
                if (o in t) {
                    i = e(i, t[o], o, t);
                }
            }
            return i;
        };
    }
}, /* 36 */
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
            var t = Object(this), n = t.length >>> 0, o = n - 1, i;
            if (arguments.length > 1) {
                i = r;
            } else {
                while (o >= 0 && !(o in t)) {
                    o--;
                }
                if (o < 0) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                i = t[o--];
            }
            for (;o >= 0; o--) {
                if (o in t) {
                    i = e(i, t[o], o, t);
                }
            }
            return i;
        };
    }
}, /* 37 */
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
            var n = t.length >>> 0;
            var o = arguments.length > 1 ? r : void 0;
            for (var i = 0; i < n; i++) {
                if (i in t && e.call(o, t[i], i, t)) {
                    return true;
                }
            }
            return false;
        };
    }
}, /* 38 */
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
            var r = Array.prototype.slice.call(arguments, 1), t = this, n = function() {}, o = function() {
                return t.apply(this instanceof n ? this : e, r.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) {
                // Function.prototype doesn't have a prototype property
                n.prototype = this.prototype;
            }
            o.prototype = new n();
            return o;
        };
    }
}, /* 39 */
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
                var n = new e();
                e.prototype = null;
                // Let's not keep a stray reference to O...
                // 4. If the argument Properties is present and not undefined, add
                //    own properties to obj as if by calling the standard built-in
                //    function Object.defineProperties with arguments obj and
                //    Properties.
                if (arguments.length > 1) {
                    // Object.defineProperties does ToObject on its first argument.
                    var o = Object(arguments[1]);
                    for (var i in o) {
                        if (r.call(o, i)) {
                            var c = o[i];
                            if (Object(c) !== c) {
                                throw TypeError(i + "must be an object");
                            }
                            if ("get" in c || "set" in c) {
                                throw new TypeError("getters & setters can not be defined on this javascript engine");
                            }
                            if ("value" in c) {
                                n[i] = o[i];
                            }
                        }
                    }
                }
                // 5. Return obj
                return n;
            };
        }();
    }
}, /* 40 */
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
            function n(e) {
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
            var o = Object(r);
            for (propName in o) {
                if (hasOwnProperty.call(o, propName)) {
                    var i = n(o[propName]);
                    e[propName] = i.value;
                }
            }
            return e;
        };
    }
}, /* 41 */
/***/
function(e, r) {
    if (!Object.defineProperty) {
        Object.defineProperty = function t(e, r, n) {
            if (Object(e) !== e) {
                throw new TypeError("Object.defineProperty can only be called on Objects.");
            }
            if (Object(n) !== n) {
                throw new TypeError("Property description can only be an Object.");
            }
            if ("get" in n || "set" in n) {
                throw new TypeError("getters & setters can not be defined on this javascript engine");
            }
            // If it's a data property.
            if ("value" in n) {
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
                e[r] = n.value;
            }
            return e;
        };
    }
}, /* 42 */
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
}, /* 43 */
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
            var n = e.reflect.find(r).type;
            t.writable = n === "readwrite";
            return t;
        };
    }
}, /* 44 */
/***/
function(e, r) {
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function t(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");
            }
            var r = e.reflect.properties;
            var t = e.reflect.methods;
            var n = t.concat(r);
            var o = [];
            for (var i = 0; i < n.length; i++) {
                o.push(n[i].name);
            }
            return o;
        };
    }
}, /* 45 */
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
}, /* 46 */
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
}, /* 47 */
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
}, /* 48 */
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
}, /* 49 */
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
                var t = [], n, o;
                for (n in r) {
                    if (e.call(r, n)) {
                        t.push(n);
                    }
                }
                return t;
            };
        }();
    }
}, /* 50 */
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
}, /* 51 */
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
}, /* 52 */
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
} ]);