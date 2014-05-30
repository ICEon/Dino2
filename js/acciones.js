// JavaScript Document
	$(document).ready(function(e){

    $('#logo img').tap(function(e){	
	 $("#roar")[0].play();
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');

});//click 

    $('#vista img').tap(function(e){	
		
	 $.mobile.navigate( "demo.html" );
	});
	
	$('#B_Rex').tap(function (e) {
 	 $.mobile.navigate( "#Rex" );
	});
});//ready
