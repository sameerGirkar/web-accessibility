# Web-accessibility
## Tab: 
* Tab 0: focusable bu default
* Tab -1: focusable only by JS of mouse
* Tab positive number: focusable by default.
	higher the number priority to focus.

## Screen readers:
### Alt Attributes:
* <img alt=“describe the image to show the text when image is not loaded”  src=“abc.jsg”/>
* Alt text will also be read by screen readers
* Upper case text will be read by character by character.
* if you don’t want to show alt text the at least add the empty alt attributes because it won’t show anything on image else then name of the image will be displayed on the screen.
* Alt attributes are also used for image search

### Hide from screen readers
* display : node
* visibility :hidden
* <input hidden /> 

### Hidden for user but show to screen readers
* .screenreader {
	position: absolute;
	left: -10000px;
	with: 1px;
	height: 1px;
	overflow: hidden;
}
 
