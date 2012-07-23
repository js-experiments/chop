/*
	chop.js
	Backbone flavour
*/

(function(){
	// root : Save a reference to the global object (`window` in the browser, `global`
	// on the server).
	var root = this
	,	Chop;
	
	// The top-level namespace. All public chop classes and modules will
	// be attached to this. Exported for both CommonJS and the browser.
	if (typeof exports !== 'undefined') {
		Chop = exports;
	} else {
		Chop = root.Chop = {};
	}
	
	Chop.VERSION = '0.0.1';
	
	Chop.inherits = function (parent, protoProps, staticProps) {
		var child
			, ctor = function(){}
			, merge = function (destination, source) {
				for (var prop in source) {
					destination[prop] = source[prop];
				}
		};
		//constructor ....
		if (protoProps && protoProps.hasOwnProperty('constructor')) {
		  child = protoProps.constructor;
		} else {
		  child = function(){ parent.apply(this, arguments); };
		}
	
		//inherits from parent
		merge(child, parent);
	
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();
	
		//instance properties
		if(protoProps) merge(child.prototype, protoProps);
	
		//static properties
		if(staticProps) merge(child, staticProps);
	
		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;
	
		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;
	
		return child
	
	};
	Chop.extend = function (protoProps, staticProps) {
		var child = Chop.inherits(this, protoProps, staticProps);
		child.extend = this.extend;
		return child;
	};
	
	
}).call(this);