// JavaScript Document

// Initialize the counter for the page
var counter = 0;

// Define the onClick properties for the image
window.onload = function() {
	document.getElementById('fatCatImg').addEventListener(
		'click',
		function() {
			playMusic();
			counter++;
		},
		false);
}

// Create the audio file
var song = new Audio('../audio/04 Happy.mp3');

// Play/pause the music on mouse click
function playMusic() {
	if (counter % 2 == 0)
		song.play();
	else
		song.pause();	
}

// Animate the cat image on mouseHover
$(document).ready(function() {
    $('img').animate({
		opacity:.5
	});
	$('img').hover(function(){
		$(this).stop().animate({
			opacity:1
		});
	}, function(){
		$(this).stop().animate({
			opacity:.5
		});
	});
});
