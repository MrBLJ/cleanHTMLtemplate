function getOffsetRect(elem) {
    // Get the enclosing parent
    var box = elem.getBoundingClientRect()
    
    var body = document.body
    var docElem = document.documentElement
    
    // Calculate page scroll
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    
    // Get the shift (IE fix)
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    
    // Get coordinates in whole document
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    
    return { top: Math.round(top), left: Math.round(left) }
}

// For Old Browsers
function getOffsetSum(elem) {
  var top=0, left=0

  while(elem) {
    top = top + parseInt(elem.offsetTop)
    left = left + parseInt(elem.offsetLeft)
    elem = elem.offsetParent        
  }
   
  return {top: top, left: left}
}

// Combined methods
function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem)
    } else { // IE I hate you
        return getOffsetSum(elem)
    }
}

// A little bit of animation for other titles
var Animatetitles = (function() {

	var docElem = document.documentElement,
		titles = document.querySelectorAll(".sectionTitle"),
		didScroll = false;

	function scrollPage() {

		[].forEach.call(titles, function(div) {
			var sy = Math.max(0,scrollY());
			var titlePosition = getOffset(div).top;
			defaultIndicator = Math.min(1, Math.max(0,(titlePosition-50-sy)/200));
			delayIndicator = Math.min(1, Math.max(0,(titlePosition-sy)/200));
			if (sy>=titlePosition/2) { div.children[0].style.margin = (defaultIndicator*15).toString() + "px auto";};
			
			// Separator margins
			div.children[2].style.margin = (15*defaultIndicator).toString() + "px auto";
			div.children[2].children[0].style.width = 60*delayIndicator.toString() + "px";
			div.children[2].children[1].style.width = 60*delayIndicator.toString() + "px";

			div.children[3].style.opacity = defaultIndicator;

		});
		

		// Line width

		didScroll = false;
	}

	// Listen to the page !
	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 5 );
			}
		}, false );
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollPage;
	}

	init();

})();

var FadeElements = (function() {
	var docElem = document.documentElement,
		elements = document.querySelectorAll(".fadeOnScroll"),
		didScroll = false;

	function scrollPage() {

		[].forEach.call(elements, function(div) {
			var sy = Math.max(0,scrollY());
			var elementPosition = getOffset(div).top;
			defaultIndicator = Math.min(1, Math.max(0,(elementPosition-600-sy)/200));
			
			// Separator margins
			div.style.opacity = 1 - defaultIndicator;

		});
		

		// Line width

		didScroll = false;
	}

	// Listen to the page !
	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 5 );
			}
		}, false );
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();


})();