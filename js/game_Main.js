//get the button elements
var startButton = document.getElementById("StButton");
var moreInfoButton = document.getElementById("MIButton");

//introduce sound effects
var clickSound = new Audio('clickSound.m4a');
var bgSound = new Audio('bgMusic.m4a');

//introduce userChoice state variable: 1-ST button pushed, 0-MI button pushed
var userChoice;

//add EventListener to the buttons
startButton.addEventListener('click', function(){
	clickSound.play();
	//bgSound.play();
	userChoice = 1;
});
moreInfoButton.addEventListener('click', function(){
	clickSound.play();
	userChoice = 0;
});

//add EventListeners to the audio
clickSound.addEventListener('ended', function(){
	if(userChoice == 0){
		//shows the author information
		window.location.href = 'authorInfo.html';
	}
	//redirect to the game page
	else{
		window.location.href = 'game.html';
	}
});
