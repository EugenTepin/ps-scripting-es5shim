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
require('./lib/String/trim.js')

require('./lib/Array/every.js')
require('./lib/Array/filter.js')
require('./lib/Array/forEach.js')
require('./lib/Array/indexOf.js')
require('./lib/Array/isArray.js')
require('./lib/Array/lastIndexOf.js')
require('./lib/Array/map.js')
require('./lib/Array/reduce.js')
require('./lib/Array/reduceRight.js')
require('./lib/Array/some.js')

require('./lib/Function/bind.js')

require('./lib/Object/create.js');
require('./lib/Object/defineProperties.js');
require('./lib/Object/defineProperty.js');
require('./lib/Object/freeze.js');
require('./lib/Object/getOwnPropertyDescriptor.js');
require('./lib/Object/getOwnPropertyNames.js');
require('./lib/Object/getPrototypeOf.js');
require('./lib/Object/isExtensible.js');
require('./lib/Object/isFrozen.js');
require('./lib/Object/isSealed.js');
require('./lib/Object/keys.js');
require('./lib/Object/preventExtensions.js');
require('./lib/Object/seal.js');