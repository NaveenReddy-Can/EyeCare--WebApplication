$(document).ready(function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		
	if ( state ) {
		$( "#colorTrans" ).animate({
		backgroundColor: "#2471A3",
		}, 1000 );
	} 
	else {
		$( "#colorTrans" ).animate({
		backgroundColor: "#000",
		}, 1000 );
	}
	state = !state;
	});
});