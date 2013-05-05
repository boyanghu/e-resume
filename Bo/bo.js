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
	tcloserOnClick();
	mcloserOnClick();
	document.getElementById("facebookpanel").style.visibility = "visible";
	document.getElementById("facebookpanel").style.width = "50%";
	document.getElementById("fbcloser").style.visibility = "visible";
}

function fbcloserOnClick(){
	document.getElementById("fbcloser").style.visibility = "collapse";
	document.getElementById("facebookpanel").style.visibility = "collapse";
	document.getElementById("facebookpanel").style.width = "0%";
}

function twitterOnClick(){
	fbcloserOnClick();
	mcloserOnClick();
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
	tcloserOnClick();
	fbcloserOnClick();
	document.getElementById("mailpanel").style.visibility = "visible";
	document.getElementById("mailpanel").style.width = "50%";
	document.getElementById("mcloser").style.visibility = "visible";
	document.getElementById("sendbutton").style.visibility = "visible";
}

function mcloserOnClick(){
	document.getElementById("sendbutton").style.visibility = "hidden";
	document.getElementById("mcloser").style.visibility = "hidden";
	document.getElementById("mailpanel").style.visibility = "hidden";
	document.getElementById("mailpanel").style.width = "0%";
}