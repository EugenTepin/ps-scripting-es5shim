/*
Tests are here.

*/
var console = {};
console.log = function(obj){
	$.writeln(obj);
}

/*
Example taken from:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array. (If you launch this script in Photoshop CS6 
// you will see that it prints a[2] = undefined in console)
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9