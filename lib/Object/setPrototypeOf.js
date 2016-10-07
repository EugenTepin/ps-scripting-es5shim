// допускается null в качестве аргумента
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function(obj, proto) {

    if (obj === void 0 || obj === null) {
      throw new TypeError('Object.setPrototypeOf called on null or undefined');
    }
	  obj.__proto__ = proto;
	  return obj; 
	}
}
 