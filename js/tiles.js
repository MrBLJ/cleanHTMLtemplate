var AnimatedTiles = (function() {

	var tiles = document.querySelectorAll(".tile");

	[].forEach.call(tiles, function(div) {
		div.children[0].addEventListener( 'click', function() {
			classie.add( this.parentNode, "active");
			classie.add( this.parentNode, "deployed");
		}, false);

		div.children[2].addEventListener( 'click', function() {
			classie.remove( this.parentNode, "active");
			classie.remove( this.parentNode, "deployed");
		}, false);
	});

})();