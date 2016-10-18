# ps-scripting-es5shim
ECMAScript 5 compatibility shims for Adobe Photoshop JavaScript engine.

**Testing Requiered! Not for production yet.**


## Installation

For production:

```
npm install ps-scripting-es5shim --production
```

## Usage
All polyfills are independant, and could be used standalone.

### Basic usage
Include full bundle in your code like this:

```
#include './node_modules/ps-scripting-es5shim/bundle/main.bundle.js'
```

If you need a specific polyfill (for example Array.forEach and Object.create):

```
#includepath './node_modules/ps-scripting-es5shim/lib'
#include './Array/forEach.js'
#include './Object/create.js'
```
### Using with webpack as bundler

content of webpack.config.js:
```
var webpack = require("webpack");

module.exports = {
  entry: {
    main: ['./polyfill.js','./index.js'], // polyfill file must be the first file
  },
  output: {
    path: __dirname + '/your_folder_for_bundles',
    filename: '[name].bundle.js',
  },


  module: {

  },
  // and you can use compression (well, almost can)
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false, 
      compress: false // must be false, because code may become so ugly that Photoshop will throw error :)
    })
  ]
};
```

content of polyfill.js:
```
//if you want to include all shims
require('ps-scripting-es5shim');

//if only specific polyfill required
require('ps-scripting-es5shim/lib/Array/forEach.js');
require('ps-scripting-es5shim/lib/Object/create.js');

```


## Array, String  and Function notes
All polyfills could be used in your code.

## Object notes
Because it is impossibule to emulate property descriptors in ES3 engine, the following functions are just a mocks and you should avoid to use them in your code if it is possible, only shim thirdparty libraries:
	
### defineProperty, defineProperties
Supports only **_data descriptor_**. **_Writable_**, **_enumerable_** and **_configurable_** properties of descriptor are ignored. If you try to define **_set_** or **_get_** propperty this methods will throw an error. 

### getOwnPropertyDescriptor
Supports only **_data descriptor_**. **_Configurable_** property of descriptor is always **TRUE**. **_Enumerable_** and  **_writable_** properties of descriptor will be always **TRUE** on user defined objects, but may vary on build in. 

### freeze, preventExtensions, seal
Only validate input parameter and return input if it is an object.

### isExtensible, isFrozen, isSealed
Validates input and returns **TRUE, FALSE, FALSE, respectively** if input parametr is an object.


**These functions you can use in your code:**

### create
Support of property descriptor is in the same level as in _**defineProperty**_. Although, you can use this function in your code like this:

```
var obj1 = {a : 1};
var obj2 = Object.create(obj1, {b : {value : 2}});
```

or like that:

```
var obj1 = {a : 1};
var obj2 = Object.create(obj1);
obj2.b = 2;
```

### getOwnPropertyNames
This function uses reflection interface, that ExtendScript provides (see JavaScript Tools Guide), to get own properties of an object (enumerable or not). But ther is no guarantee that the order of enumeration will be the same as in _for in loop_.
	
### keys
Use _for in loop_ along with _hasOwnProperty_ function to get own enumerable properties in object.

### getPrototypeOf
Use build in `__proto__` property as return value.



