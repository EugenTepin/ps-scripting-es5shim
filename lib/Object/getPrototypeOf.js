if (!Object.getPrototypeOf) {
  Object.getPrototypeOf = function(obj){
    if (Object(object) !== object) {
        throw new TypeError('Object.getPrototypeOf can only be called on Objects.');
    }
    return obj.__proto__;
  }
}