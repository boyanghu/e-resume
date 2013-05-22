function closerOnClick(){
	document.getElementById("aboutme").style.opacity = "0";
}

function aboutbuttonOnClick(){
	document.getElementById("aboutme").style.opacity ="1";
}

function hover(element){
	document.getElementById(element).style.opacity = "1";
	document.getElementById("socialdispanel").style.zIndex = "100";
}

function unhover(element){
	document.getElementById(element).style.opacity = "0";
	document.getElementById("socialdispanel").style.zIndex = "0";
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


/*page 2*/

function dishover(id){
	document.getElementById(id).style.opacity = "1";

}


function disunhover(id){
	document.getElementById(id).style.opacity = "0";

}

function webclick(){
	allclear();
	document.getElementById("skills").style.height = "62.3em";
	document.getElementById("htmltitle").style.opacity = "1";
	document.getElementById("htmldis").style.opacity = "1";
	document.getElementById("uxtitle").style.opacity = "1";
	document.getElementById("uxdis").style.opacity = "1";
	document.getElementById("gwttitle").style.opacity = "1";
	document.getElementById("gwtdis").style.opacity = "1";
}
function mobileclick(){
	allclear();
	document.getElementById("skills").style.height = "62.3em";
	document.getElementById("androidtitle").style.opacity = "1";
	document.getElementById("androiddis").style.opacity = "1";
	document.getElementById("wp8title").style.opacity = "1";
	document.getElementById("wpdis").style.opacity = "1";
	document.getElementById("html5title").style.opacity = "1";
	document.getElementById("html5dis").style.opacity = "1";
}
function otherclick(){
	allclear();
	document.getElementById("skills").style.height = "62.3em";
	document.getElementById("systemstitle").style.opacity = "1";
	document.getElementById("systemsdis").style.opacity = "1";
	document.getElementById("svntitle").style.opacity = "1";
	document.getElementById("svndis").style.opacity = "1";
	document.getElementById("hobbiestitle").style.opacity = "1";
	document.getElementById("hobbiesdis").style.opacity = "1";
}

function allclear(){
	document.getElementById("htmltitle").style.opacity = "0";
	document.getElementById("htmldis").style.opacity = "0";
	document.getElementById("uxtitle").style.opacity = "0";
	document.getElementById("uxdis").style.opacity = "0";
	document.getElementById("gwttitle").style.opacity = "0";
	document.getElementById("gwtdis").style.opacity = "0";
	document.getElementById("androidtitle").style.opacity = "0";
	document.getElementById("androiddis").style.opacity = "0";
	document.getElementById("wp8title").style.opacity = "0";
	document.getElementById("wpdis").style.opacity = "0";
	document.getElementById("html5title").style.opacity = "0";
	document.getElementById("html5dis").style.opacity = "0";
	document.getElementById("systemstitle").style.opacity = "0";
	document.getElementById("systemsdis").style.opacity = "0";
	document.getElementById("svntitle").style.opacity = "0";
	document.getElementById("svndis").style.opacity = "0";
	document.getElementById("hobbiestitle").style.opacity = "0";
	document.getElementById("hobbiesdis").style.opacity = "0";
	

}