function closerOnClick(){
	document.getElementById("aboutme").style.opacity = "0";
}

function aboutbuttonOnClick(){
	document.getElementById("aboutme").style.opacity ="1";
}

function hover(element){
	document.getElementById("socialdispanel").style.visibility = "visible";
	document.getElementById(element).style.opacity = "1";
}

function unhover(element){
	document.getElementById(element).style.opacity = "0";
	document.getElementById("socialdispanel").style.visibility = "collapse";
}