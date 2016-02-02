// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.Speech = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
	//                            vvvvvvvv
	var pluginProto = cr.plugins_.Speech.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	
		this.command="jump";
		this.patt = null;
		this.timer = null;
		this.timerValue = 10;
		this.stopButtonClicked = false;
		this.final_transcript = '';
		this.interim_transcript = '';
		this.recognizing = false;
		this.ignore_onend;
		this.start_timestamp;
		this.recognition = null;
		
		// any other properties you need, e.g...
		// this.myValue = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		var self = this;
		
		if (!('webkitSpeechRecognition' in window)) {
			console.log("Web Speech API is not supported by this browser.");
		} else {
			self.recognition = new webkitSpeechRecognition();
			self.recognition.continuous = true;
			self.recognition.interimResults = true;

			self.recognition.onstart = function() {
				console.log("onstart");
				self.recognizing = true;
				console.log("Speak now.");
			};

			self.recognition.onerror = function(event) {
				console.log("onerror");
				if (event.error == 'no-speech') {
					console.log("No speech was detected. You may need to adjust your microphone settings.");
					self.ignore_onend = true;
				}
				if (event.error == 'audio-capture') {
					console.log("No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.")
					self.ignore_onend = true;
				}
				if (event.error == 'not-allowed') {
					if (event.timeStamp - self.start_timestamp < 100) {
						console.log("Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream");
					} else {
						console.log("Permission to use microphone was denied.");
					}
					self.ignore_onend = true;
				}
			};

			self.recognition.onend = function() {
				console.log("onend");
				self.recognizing = false;
				
				if (self.stopButtonClicked){
					self.stopButtonClicked = false;
					return;
				}	
				self.recognition.start();
				if (self.ignore_onend) {
				  return;
				}
				if (!self.final_transcript) {
				  console.log("Click on the microphone icon and begin speaking.");
				  return;
				}
			  };

			self.recognition.onresult = function(event) {
				self.interim_transcript = '';
				for (var i = event.resultIndex; i < event.results.length; ++i) {
				  if (event.results[i].isFinal) {
					self.final_transcript += event.results[i][0].transcript;
				  } else {
					self.interim_transcript += event.results[i][0].transcript;
				  }
				}
			//	console.log("final_transcript = " + self.final_transcript);
				console.log("interim_transcript = " + self.interim_transcript);
				// Fixes not reconizing the lowercase first.
				// fixes not reconizing it as part of a sentence
				// Still has problem with being part of a word
				// Some words it does not reconize such as "woo"
				if (self.patt.test(self.interim_transcript.toLowerCase())){
					console.log("Recognized command.");
					self.runtime.trigger(cr.plugins_.Speech.prototype.cnds.OnCommand, this);
				}
			  };
		}
		
		
		// Automatically Start
		if (!self.recognizing){
			self.patt = new RegExp(self.command.toLowerCase());
			self.final_transcript = '';
			self.recognition.lang = 'en-US';
			self.recognition.start();
			self.ignore_onend = false;
			console.log("Click the Allow button above to enable your microphone.");
			self.start_timestamp = Date.now();
			// Fixes Recognition getting stuck.
			self.timer = setInterval(function() {
				console.log("restarting recognizer");
				self.recognition.stop();
			}, self.timerValue * 1000);
		 }
		
		
		
		// note the object is sealed after this call; ensure any properties you'll ever need are set on the object
		// e.g...
		// this.myValue = 0;
	};
	
	// called whenever an instance is destroyed
	// note the runtime may keep the object after this call for recycling; be sure
	// to release/recycle/reset any references to other objects in this function.
	instanceProto.onDestroy = function ()
	{
		var self = this;
		
		self.stopButtonClicked = true;
		clearInterval(timer);
		if (self.recognizing) {
			self.recognition.stop();
		return;
	}
		
		
	};
	
	// called when saving the full state of the game
	instanceProto.saveToJSON = function ()
	{
		// return a Javascript object containing information about your object's state
		// note you MUST use double-quote syntax (e.g. "property": value) to prevent
		// Closure Compiler renaming and breaking the save format
		return {
			// e.g.
			//"myValue": this.myValue
		};
	};
	
	// called when loading the full state of the game
	instanceProto.loadFromJSON = function (o)
	{
		// load from the state previously saved by saveToJSON
		// 'o' provides the same object that you saved, e.g.
		// this.myValue = o["myValue"];
		// note you MUST use double-quote syntax (e.g. o["property"]) to prevent
		// Closure Compiler renaming and breaking the save format
	};
	
	// only called if a layout object - draw to a canvas 2D context
	instanceProto.draw = function(ctx)
	{
	};
	
	// only called if a layout object in WebGL mode - draw to the WebGL context
	// 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
	// directory or just copy what other plugins do.
	instanceProto.drawGL = function (glw)
	{
	};
	
	// The comments around these functions ensure they are removed when exporting, since the
	// debugger code is no longer relevant after publishing.
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
		// Append to propsections any debugger sections you want to appear.
		// Each section is an object with two members: "title" and "properties".
		// "properties" is an array of individual debugger properties to display
		// with their name and value, and some other optional settings.
		propsections.push({
			"title": "My debugger section",
			"properties": [
				// Each property entry can use the following values:
				// "name" (required): name of the property (must be unique within this section)
				// "value" (required): a boolean, number or string for the value
				// "html" (optional, default false): set to true to interpret the name and value
				//									 as HTML strings rather than simple plain text
				// "readonly" (optional, default false): set to true to disable editing the property
				
				// Example:
				// {"name": "My property", "value": this.myValue}
			]
		});
	};
	
	instanceProto.onDebugValueEdited = function (header, name, value)
	{
		// Called when a non-readonly property has been edited in the debugger. Usually you only
		// will need 'name' (the property name) and 'value', but you can also use 'header' (the
		// header title for the section) to distinguish properties with the same name.
		if (name === "My property")
			this.myProperty = value;
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	
	Cnds.prototype.OnCommand = function(command)
	{
		return true;
	};

	// the example condition
	Cnds.prototype.MyCondition = function (myparam)
	{
		// return true if number is positive
		return myparam >= 0;
	};
	
	// ... other conditions here ...
	
	pluginProto.cnds = new Cnds();
	
	//////////////////////////////////////
	// Actions
	function Acts() {};

	// the example action
	Acts.prototype.MyAction = function (myparam)
	{
		// alert the message
		alert(myparam);
	};
	
	// ... other actions here ...
	
	pluginProto.acts = new Acts();
	
	//////////////////////////////////////
	// Expressions
	function Exps() {};
	
	// the example expression
	Exps.prototype.MyExpression = function (ret)	// 'ret' must always be the first parameter - always return the expression's result through it!
	{
		ret.set_int(1337);				// return our value
		// ret.set_float(0.5);			// for returning floats
		// ret.set_string("Hello");		// for ef_return_string
		// ret.set_any("woo");			// for ef_return_any, accepts either a number or string
	};
	
	// ... other expressions here ...
	
	pluginProto.exps = new Exps();

}());