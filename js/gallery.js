var AnimatedGallery = (function() {

	var gallery = document.querySelector( '.gallery' );
	var galleryIndex = 0;


	function init() {

		document.querySelector( '.navigation-buttons' ).children[0].addEventListener( 'click', function( event ) {
			this.parentNode.parentNode.style.backgroundColor = "blue";
		}, false );

		document.querySelector( '.navigation-buttons' ).children[1].addEventListener( 'click', function( event ) {
			this.parentNode.parentNode.style.backgroundColor = "green";
		}, false );
	}

	function changeindex() {
	
	}

	init();

})();