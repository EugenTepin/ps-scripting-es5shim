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
    function r(n) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (t[n]) /******/
        return t[n].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var o = t[n] = {
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
        e[n].call(o.exports, o, o.exports, r);
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
    r(1);
    e.exports = r(29);
}, /* 1 */
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
	• Object.setPrototypeOf 	 [done]
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
	
	JSON
	• JSON.stringify
	• JSON.parse
	
	*/
    r(2);
    r(3);
    r(14);
}, /* 2 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill
	
	WARNING! Bound functions used as constructors NOT supported by this polyfill!
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Bound_functions_used_as_constructors
	*/
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(e) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var t = Array.prototype.slice.call(arguments, 1), r = this, n = function() {}, o = function() {
                return r.apply(this instanceof n ? this : e, t.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) {
                // Function.prototype doesn't have a prototype property
                n.prototype = this.prototype;
            }
            o.prototype = new n();
            return o;
        };
    }
}, /* 3 */
/***/
function(e, t, r) {
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
}, /* 4 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	*/
    if (!Array.prototype.every) {
        Array.prototype.every = function(e, t) {
            "use strict";
            var r, n;
            if (this == null) {
                throw new TypeError("this is null or not defined");
            }
            // 1. Let O be the result of calling ToObject passing the this 
            //    value as the argument.
            var o = Object(this);
            // 2. Let lenValue be the result of calling the Get internal method
            //    of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var i = o.length >>> 0;
            // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
            if (typeof e !== "function") {
                throw new TypeError();
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 1) {
                r = t;
            }
            // 6. Let k be 0.
            n = 0;
            // 7. Repeat, while k < len
            while (n < i) {
                var f;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (n in o) {
                    // i. Let kValue be the result of calling the Get internal method
                    //    of O with argument Pk.
                    f = o[n];
                    // ii. Let testResult be the result of calling the Call internal method
                    //     of callbackfn with T as the this value and argument list 
                    //     containing kValue, k, and O.
                    var c = e.call(r, f, n, o);
                    // iii. If ToBoolean(testResult) is false, return false.
                    if (!c) {
                        return false;
                    }
                }
                n++;
            }
            return true;
        };
    }
}, /* 5 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(e) {
            "use strict";
            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var t = Object(this);
            var r = t.length >>> 0;
            if (typeof e !== "function") {
                throw new TypeError();
            }
            var n = [];
            var o = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < r; i++) {
                if (i in t) {
                    var f = t[i];
                    // NOTE: Technically this should Object.defineProperty at
                    //       the next index, as push can be affected by
                    //       properties on Object.prototype and Array.prototype.
                    //       But that method's new, and collisions should be
                    //       rare, so use the more-compatible alternative.
                    if (e.call(o, f, i, t)) {
                        n.push(f);
                    }
                }
            }
            return n;
        };
    }
}, /* 6 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.18
    // Reference: http://es5.github.io/#x15.4.4.18
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(e, t) {
            var r, n;
            if (this === null) {
                throw new TypeError(" this is null or not defined");
            }
            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var o = Object(this);
            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var i = o.length >>> 0;
            // 4. If isCallable(callback) is false, throw a TypeError exception. 
            // See: http://es5.github.com/#x9.11
            if (typeof e !== "function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            if (arguments.length > 1) {
                r = t;
            }
            // 6. Let k be 0
            n = 0;
            // 7. Repeat, while k < len
            while (n < i) {
                var f;
                // a. Let Pk be ToString(k).
                //    This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //    internal method of O with argument Pk.
                //    This step can be combined with c
                // c. If kPresent is true, then
                if (n in o) {
                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    f = o[n];
                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    e.call(r, f, n, o);
                }
                // d. Increase k by 1.
                n++;
            }
        };
    }
}, /* 7 */
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
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
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
            var i = +t || 0;
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
            r = Math.max(i >= 0 ? i : o - Math.abs(i), 0);
            // 9. Repeat, while k < len
            while (r < o) {
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
                if (r in n && n[r] === e) {
                    return r;
                }
                r++;
            }
            return -1;
        };
    }
}, /* 8 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	*/
    if (!Array.isArray) {
        Array.isArray = function(e) {
            return Object.prototype.toString.call(e) === "[object Array]";
        };
    }
}, /* 9 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.15
    // Reference: http://es5.github.io/#x15.4.4.15
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(e) {
            "use strict";
            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var t, r, n = Object(this), o = n.length >>> 0;
            if (o === 0) {
                return -1;
            }
            t = o - 1;
            if (arguments.length > 1) {
                t = Number(arguments[1]);
                if (t != t) {
                    t = 0;
                } else if (t != 0 && t != 1 / 0 && t != -(1 / 0)) {
                    t = (t > 0 || -1) * Math.floor(Math.abs(t));
                }
            }
            for (r = t >= 0 ? Math.min(t, o - 1) : o - Math.abs(t); r >= 0; r--) {
                if (r in n && n[r] === e) {
                    return r;
                }
            }
            return -1;
        };
    }
}, /* 10 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.19
    // Reference: http://es5.github.io/#x15.4.4.19
    if (!Array.prototype.map) {
        Array.prototype.map = function(e, t) {
            var r, n, o;
            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }
            // 1. Let O be the result of calling ToObject passing the |this| 
            //    value as the argument.
            var i = Object(this);
            // 2. Let lenValue be the result of calling the Get internal 
            //    method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var f = i.length >>> 0;
            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof e !== "function") {
                throw new TypeError(e + " is not a function");
            }
            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 1) {
                r = t;
            }
            // 6. Let A be a new array created as if by the expression new Array(len) 
            //    where Array is the standard built-in constructor with that name and 
            //    len is the value of len.
            n = new Array(f);
            // 7. Let k be 0
            o = 0;
            // 8. Repeat, while k < len
            while (o < f) {
                var c, a;
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal 
                //    method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (o in i) {
                    // i. Let kValue be the result of calling the Get internal 
                    //    method of O with argument Pk.
                    c = i[o];
                    // ii. Let mappedValue be the result of calling the Call internal 
                    //     method of callback with T as the this value and argument 
                    //     list containing kValue, k, and O.
                    a = e.call(r, c, o, i);
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
                    n[o] = a;
                }
                // d. Increase k by 1.
                o++;
            }
            // 9. return A
            return n;
        };
    }
}, /* 11 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(e) {
            "use strict";
            if (this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (typeof e !== "function") {
                throw new TypeError(e + " is not a function");
            }
            var t = Object(this), r = t.length >>> 0, n = 0, o;
            if (arguments.length == 2) {
                o = arguments[1];
            } else {
                while (n < r && !(n in t)) {
                    n++;
                }
                if (n >= r) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                o = t[n++];
            }
            for (;n < r; n++) {
                if (n in t) {
                    o = e(o, t[n], n, t);
                }
            }
            return o;
        };
    }
}, /* 12 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: http://es5.github.io/#x15.4.4.22
    if ("function" !== typeof Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function(e) {
            "use strict";
            if (null === this || "undefined" === typeof this) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if ("function" !== typeof e) {
                throw new TypeError(e + " is not a function");
            }
            var t = Object(this), r = t.length >>> 0, n = r - 1, o;
            if (arguments.length >= 2) {
                o = arguments[1];
            } else {
                while (n >= 0 && !(n in t)) {
                    n--;
                }
                if (n < 0) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                o = t[n--];
            }
            for (;n >= 0; n--) {
                if (n in t) {
                    o = e(o, t[n], n, t);
                }
            }
            return o;
        };
    }
}, /* 13 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	*/
    // Production steps of ECMA-262, Edition 5, 15.4.4.17
    // Reference: http://es5.github.io/#x15.4.4.17
    if (!Array.prototype.some) {
        Array.prototype.some = function(e) {
            "use strict";
            if (this == null) {
                throw new TypeError("Array.prototype.some called on null or undefined");
            }
            if (typeof e !== "function") {
                throw new TypeError();
            }
            var t = Object(this);
            var r = t.length >>> 0;
            var n = arguments.length >= 2 ? arguments[1] : void 0;
            for (var o = 0; o < r; o++) {
                if (o in t && e.call(n, t[o], o, t)) {
                    return true;
                }
            }
            return false;
        };
    }
}, /* 14 */
/***/
function(e, t, r) {
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
    r(27);
    r(28);
}, /* 15 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
	*/
    if (!Object.create) {
        Object.create = function(e) {
            var t = function() {};
            return function(r, n) {
                if (r !== Object(r) && r !== null) {
                    throw TypeError("Argument must be an object, or null");
                }
                t.prototype = r || {};
                var o = new t();
                t.prototype = null;
                if (n !== e) {
                    Object.defineProperties(o, n);
                }
                // to imitate the case of Object.create(null)
                if (r === null) {
                    o.__proto__ = null;
                }
                return o;
            };
        }();
    }
}, /* 16 */
/***/
function(e, t) {
    /*
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#Polyfill
	*/
    if (!Object.defineProperties) {
        function r(e, t) {
            function r(e) {
                function t(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                function r(e) {
                    // NB: modify as necessary if other values than functions are callable.
                    return typeof e === "function";
                }
                if (typeof e !== "object" || e === null) throw new TypeError("bad desc");
                var n = {};
                if (t(e, "enumerable")) n.enumerable = !!e.enumerable;
                if (t(e, "configurable")) n.configurable = !!e.configurable;
                if (t(e, "value")) n.value = e.value;
                if (t(e, "writable")) n.writable = !!e.writable;
                if (t(e, "get")) {
                    var o = e.get;
                    if (!r(o) && typeof o !== "undefined") throw new TypeError("bad get");
                    n.get = o;
                }
                if (t(e, "set")) {
                    var i = e.set;
                    if (!r(i) && typeof i !== "undefined") throw new TypeError("bad set");
                    n.set = i;
                }
                if (("get" in n || "set" in n) && ("value" in n || "writable" in n)) throw new TypeError("identity-confused descriptor");
                return n;
            }
            if (typeof e !== "object" || e === null) throw new TypeError("bad obj");
            t = Object(t);
            var n = Object.keys(t);
            var o = [];
            for (var i = 0; i < n.length; i++) o.push([ n[i], r(t[n[i]]) ]);
            for (var i = 0; i < o.length; i++) Object.defineProperty(e, o[i][0], o[i][1]);
            return e;
        }
        Object.defineProperties = r;
    }
}, /* 17 */
/***/
function(e, t) {
    if (!Object.defineProperty) {
        Object.defineProperty = function r(e, t, n) {
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
                // can't implement these features; allow false but not true
                if ("writable" in n && !n.writable || "enumerable" in n && !n.enumerable || "configurable" in n && !n.configurable) {
                    throw new RangeError("This implementation of Object.defineProperty does not support configurable, enumerable, or writable properties SET to FALSE.");
                }
                e[t] = n.value;
                return e;
            }
        };
    }
}, /* 18 */
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
}, /* 19 */
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
            var n = e.reflect.find(t).type;
            r.writable = n === "readwrite";
            return r;
        };
    }
}, /* 20 */
/***/
function(e, t) {
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function r(e) {
            var t = e.reflect.properties;
            var r = [];
            for (var n = 0; n < t.length; n++) {
                r.push(t[n].name);
            }
            return r;
        };
    }
}, /* 21 */
/***/
function(e, t) {
    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function(e) {
            return e.__proto__;
        };
    }
}, /* 22 */
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
}, /* 23 */
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
}, /* 24 */
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
}, /* 25 */
/***/
function(e, t) {
    /*
	Original taken from
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill
	
	Ther is no EnumBug in Photoshop scripting environment, so i cut unused code.
	*/
    if (!Object.keys) {
        Object.keys = function() {
            "use strict";
            var e = Object.prototype.hasOwnProperty;
            return function(t) {
                if (typeof t !== "object" && (typeof t !== "function" || t === null)) {
                    throw new TypeError("Object.keys called on non-object");
                }
                var r = [], n, o;
                for (n in t) {
                    if (e.call(t, n)) {
                        r.push(n);
                    }
                }
                return r;
            };
        }();
    }
}, /* 26 */
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
}, /* 27 */
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
}, /* 28 */
/***/
function(e, t) {
    if (!Object.setPrototypeOf) {
        Object.setPrototypeOf = function(e, t) {
            e.__proto__ = t;
            return e;
        };
    }
}, /* 29 */
/***/
function(e, t) {
    /*
	Tests are here.
	
	*/
    var r = {};
    r.log = function(e) {
        $.writeln(e);
    };
    function n(e, t, n) {
        r.log("a[" + t + "] = " + e);
    }
    // Notice that index 2 is skipped since there is no item at
    // that position in the array.
    [ 2, 5, , 9 ].forEach(n);
} ]);