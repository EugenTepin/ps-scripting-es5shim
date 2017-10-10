var acceptParams = require('../helper.js').acceptParams;
if ($.writeln !== void 0) {
    var console = {
        log: function(obj) {
            $.writeln(obj);
        }
    };
} else {
    var console = window.console;
}

console.log("================== Object.getOwnPropertyNames ==================");
console.log("");
console.log("+++++++ The following should produce Error. +++++++");
console.log("");

acceptParams(Object.getOwnPropertyNames, ["string"], "Object.getOwnPropertyNames(string)");
acceptParams(Object.getOwnPropertyNames, [void 0], "Object.getOwnPropertyNames(undefined)");
acceptParams(Object.getOwnPropertyNames, [1], "Object.getOwnPropertyNames(number)");
acceptParams(Object.getOwnPropertyNames, [null], "Object.getOwnPropertyNames(null)");


console.log("");
console.log("+++++++ The following should be OK. +++++++");
console.log("");

acceptParams(Object.getOwnPropertyNames, [{ a: 1 }], "Object.getOwnPropertyNames(object)");
acceptParams(Object.getOwnPropertyNames, [
    [1, 2, 3, 4, 5]
], "Object.getOwnPropertyNames(array)");
acceptParams(Object.getOwnPropertyNames, [function() {}], "Object.getOwnPropertyNames(function)");
acceptParams(Object.getOwnPropertyNames, [new Date()], "Object.getOwnPropertyNames(date)");
//acceptParams(Object.getOwnPropertyNames, [new File()], "Object.getOwnPropertyNames(File)");
//acceptParams(Object.getOwnPropertyNames, [new Folder()], "Object.getOwnPropertyNames(Folder)");

var r = acceptParams(Object.getOwnPropertyNames, [Math], "Object.getOwnPropertyNames(Math)");
console.log("     " + r);
console.log("");