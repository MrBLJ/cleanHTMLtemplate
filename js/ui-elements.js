var AnimatedButtons = (function() {

	var button = document.querySelector( '#myButton' );

	button.addEventListener( 'click', function( event ) {
		classie.add( button, 'active' );
		setTimeout(function(){ classie.add( button, 'loading' ) }, 500);
		setTimeout(function(){ classie.add( button, 'done' ) }, 2000);
	});


})();