/////////////////////////////////////////////////////////
// Effect template.  This is OpenGL ES Shading Language.
// For a quick reference, see the last two pages of the
// following URL which cover the shading language basics:
// http://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf
// (The sections on the OpenGL API itself can be ignored)

// Note: if possible don't use 'precision highp float'!  This will
// unnecessarily reduce performance on mobile devices.  Prefer to
// always specify an appropriate precision level.  As a guide, use:
// lowp - for color and alpha values returned by samplers
// mediump - for texture co-ordinates
// highp - only where increased precision is necessary to calculate the correct value

// The current texture co-ordinates (required).  Note these are normalised to [0, 1] float range, so
// (1, 1) is always the bottom right corner and (0.5, 0.5) is always the middle.
varying mediump vec2 vTex;

// The sampler to retrieve pixels from the foreground texture (required)
uniform lowp sampler2D samplerFront;

// Optional: for sampling the background.  Uncomment all three if background
// sampling is required, and set 'blends-background' to 'true' in the XML file.
//uniform lowp sampler2D samplerBack;
//uniform mediump vec2 destStart;
//uniform mediump vec2 destEnd;

// Optional parameters.  Uncomment any lines and they will automatically
// receive the correct values from the runtime.  Be sure not to accidentally
// uncomment any parameters you do not really need - doing so can reduce performance.
//uniform mediump float pixelWidth;			// width of a pixel in texture co-ordinates
//uniform mediump float pixelHeight;		// height of a pixel in texture co-ordinates
//uniform mediump float layerScale;			// scale of the current layer
//uniform mediump float seconds;			// number of seconds elapsed since start of game

// Add any custom parameters below as uniform floats, e.g.
//uniform mediump float exampleParam;
// where 'exampleParam' is specified as the 'uniform' for a parameter
// in the XML file.

// The main effect function
void main(void)
{
	// Retrieve the foreground pixel.  Note premultiplied alpha is used.
	lowp vec4 front = texture2D(samplerFront, vTex);
	
	// How to sample the background pixel if required.
	// Note if the background texture co-ordinate is changed to be different to
	// the value of 'vTex', you must set 'cross-sampling' to 'true' in the XML file
	// in order to prevent glitches appearing in background sampling.
	//lowp vec4 back = texture2D(samplerBack, mix(destStart, destEnd, vTex));
	
	// ... process some effect using front (and optionally back) ...
	
	// Output the resulting pixel
	gl_FragColor = front;
}
