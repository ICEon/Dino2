// JavaScript Document
	$(document).ready(function(e){

    $('#logo img').tap(function(e){	

var myaudio = new Media('/audio/roar.mp3');
function playStream() {
  try {
   //alert ("ffff");

    myaudio.id = 'playerMyAdio';
    myaudio.play();
  } catch (e) {
    alert('no audio support!');
  } 
}


//	 $("#roar")[0].load(e);
	// $("#roar")[0].play();
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
