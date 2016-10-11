$(document).ready(function() {
	
	$('.slider2').click(function(){
		event.preventDefault();
		$('#partOne').hide();
		$('#partTwo').show();
	});

	$('.slider1').click(function(){
		event.preventDefault();
		$('#partTwo').hide();
		$('#partOne').show();
	});

	$('#burger').click(
		function(){
		$('#mobile-nav').slideToggle();
	});
 
});