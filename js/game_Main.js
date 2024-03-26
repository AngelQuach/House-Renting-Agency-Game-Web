//get the button elements
var startButton = document.getElementById("StButton");
var moreInfoButton = document.getElementById("MIButton");

//introduce sound effects
var clickSound = new Audio('clickSound.m4a');
var bgSound = new Audio('bgMusic.m4a');

//add actionListeners to the buttons
startButton.addEventListener('click', function(){
	clickSound.play();
	bgSound.play();
	//redirect to the game page
	//window.location.href = 'game.html';
});

moreInfoButton.addEventListener('click', function(){
	clickSound.play();
	//shows the author information
	window.location.href = 'authorInfo.html';
});
