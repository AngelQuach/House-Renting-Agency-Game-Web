//get the button elements
var startButton = document.getElementById("StButton");
var moreInfoButton = document.getElementById("MIButton");

//preload the sounds
clickSound.preload = "auto";
bgSound.preload = "auto";
bgSound.play();

//add actionListeners to the buttons
startButton.addEventListener('click', function(){
	console.log("Start button clicked"); //log a message for checking purpose
	clickSound.play();
});

moreInfoButton.addEventListener('click', function(){
	clickSound.play();
});
