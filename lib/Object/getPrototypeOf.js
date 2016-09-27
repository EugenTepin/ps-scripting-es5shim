if (!Object.getPrototypeOf) {
  Object.getPrototypeOf = function(obj){
    return obj.__proto__;
  }
}