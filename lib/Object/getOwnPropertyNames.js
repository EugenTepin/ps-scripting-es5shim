if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
    	var props = object.reflect.properties;
    	var names = [];
    	for(var i = 0; i < props.length; i++)
    		{
    			names.push(props[i].name);
    		}
        return names;
    };
}