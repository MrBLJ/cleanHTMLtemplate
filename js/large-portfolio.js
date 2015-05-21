var AnimatedPortfolioLarge = (function() {

	var portfolioLarge = document.querySelector( '.large-portfolio-container' );

	function init() {

		if (portfolioLarge.children.length) {
		    var children = portfolioLarge.children;
		    for (var i = 0; i < children.length; i++) {

		        portfolioLarge.children[i].addEventListener( 'mouseover', function( event ) {
					classie.add(this.parentNode, "focused");
					classie.add(this, "item-focused");
				}, false );

				portfolioLarge.children[i].addEventListener( 'mouseout', function( event ) {
					classie.remove(this.parentNode, "focused");
					classie.remove(this, "item-focused");
				}, false );
		    }
		}
	}

	init();

})();