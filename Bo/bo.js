function closerOnClick(){
	document.getElementById("aboutme").style.opacity = "0";
}

function aboutbuttonOnClick(){
	document.getElementById("aboutme").style.opacity ="1";
}

function hover(element){
	document.getElementById(element).style.opacity = "1";
}

function unhover(element){
	document.getElementById(element).style.opacity = "0";
}

function facebookOnClick(){
	document.getElementById("facebookpanel").style.visibility = "visible";
	document.getElementById("facebookpanel").style.width = "50%";
	document.getElementById("fbcloser").style.visibility = "visible";
}

function fpcloserOnClick(){
	document.getElementById("fbcloser").style.visibility = "collapse";
	document.getElementById("facebookpanel").style.visibility = "collapse";
	document.getElementById("facebookpanel").style.width = "0%";
}

function twitterOnClick(){
	document.getElementById("twitterpanel").style.visibility = "visible";
	document.getElementById("twitterpanel").style.width = "50%";
	document.getElementById("tcloser").style.visibility = "visible";
}

function tcloserOnClick(){
	document.getElementById("tcloser").style.visibility = "collapse";
	document.getElementById("twitterpanel").style.visibility = "collapse";
	document.getElementById("twitterpanel").style.width = "0%";
}

function mailOnClick(){
	document.getElementById("mailpanel").style.visibility = "visible";
	document.getElementById("mailpanel").style.width = "50%";
	document.getElementById("mcloser").style.visibility = "visible";
}

function mcloserOnClick(){
	document.getElementById("mcloser").style.visibility = "collapse";
	document.getElementById("mailpanel").style.visibility = "collapse";
	document.getElementById("mailpanel").style.width = "0%";
}