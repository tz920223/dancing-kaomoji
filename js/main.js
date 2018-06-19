// Global variables
var buttonOn = 0;
var myVar;

// Functions to start & stop the party
function StartParty(soundobj) {	
	myVar = setInterval(switchColors, 100);

	PlaySound(soundobj);

}

function StopParty(soundobj) {
	document.getElementById("party-header").innerHTML="(・_・)";

	clearInterval(myVar);

	// Clear button style
	document.getElementById("party-button").style.color="#000";
	document.getElementById("party-button").style.background="#fff";

	// Clear header style
	document.getElementById("party-header").style.color = "#000";

	StopSound(soundobj);
}

function switchColors() {
	if(buttonOn == 0) {
		document.getElementById("party-header").innerHTML="(ﾉﾟ▽ﾟ)ﾉ";
		document.getElementById("party-header").style.color = "#6FFF00";
		buttonOn = 1;
		switchColors();
	} else if (buttonOn == 1) { 
		document.getElementById("party-header").style.color = "#FF00FF";
		buttonOn = 2;
		switchColors();
	} else if (buttonOn == 2) { 
		document.getElementById("party-header").innerHTML="ヾ(ﾟ∀ﾟゞ)";
		document.getElementById("party-header").style.color = "#FFFF00";
		buttonOn = 3;
		switchColors();
	} else if (buttonOn == 3) { 

		document.getElementById("party-header").style.color = "#4D4DFF";
		buttonOn = 4;
		switchColors();
	} else if (buttonOn == 4) { 
		document.getElementById("party-header").innerHTML="(ﾉﾟ▽ﾟ)ﾉ";
		document.getElementById("party-header").style.color = "##FE0001";
		buttonOn = 5;
		switchColors();
	} else if (buttonOn == 5) { 

		document.getElementById("party-header").style.color = "#FF4105";
		buttonOn = 6;
		switchColors();
	} else if (buttonOn == 6) { 
		document.getElementById("party-header").innerHTML="ヾ(ﾟ∀ﾟゞ)";
		document.getElementById("party-header").style.color = "#993CF3";
		buttonOn = 0;
		switchColors();
	} 

	buttonOn = !buttonOn;
}

// Sound functions
// Reference from http://jsfiddle.net/PsyWolf/W3XdA/8/
function PlaySound(soundobj) {
	var thissound=document.getElementById(soundobj);
	thissound.play();
}

function StopSound(soundobj) {
	var thissound=document.getElementById(soundobj);
	thissound.pause();
	thissound.currentTime=0;
}