//cool stuff
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


function mailOnClick(){
	document.getElementById("mailpanel").style.visibility = "visible";
	if(window.innerWidth > 1200)
		document.getElementById("mailpanel").style.width = "50%";
	else
		document.getElementById("mailpanel").style.width = "90%";
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

function webclick(element){
	allclear();
	if(element != '0')
		window.scroll(0,findPos(document.getElementById('skills')));
	document.getElementById("skills").style.height = "84.3em";
	document.getElementById("htmltitle").style.opacity = "1";
	document.getElementById("htmldis").style.opacity = "1";
	document.getElementById("uxtitle").style.opacity = "1";
	document.getElementById("uxdis").style.opacity = "1";
	document.getElementById("gwttitle").style.opacity = "1";
	document.getElementById("gwtdis").style.opacity = "1";
}
function mobileclick(){
	allclear();
	
	document.getElementById("skills").style.height = "84.3em";
	document.getElementById("androidtitle").style.opacity = "1";
	document.getElementById("androiddis").style.opacity = "1";
	document.getElementById("wp8title").style.opacity = "1";
	document.getElementById("wpdis").style.opacity = "1";
	document.getElementById("html5title").style.opacity = "1";
	document.getElementById("html5dis").style.opacity = "1";
	window.scroll(0,findPos(document.getElementById('skills')));
}
function otherclick(){
	allclear();
	window.scroll(0,findPos(document.getElementById('skills')));
	document.getElementById("skills").style.height = "84.3em";
	document.getElementById("systemstitle").style.opacity = "1";
	document.getElementById("systemsdis").style.opacity = "1";
	document.getElementById("svntitle").style.opacity = "1";
	document.getElementById("svndis").style.opacity = "1";
	document.getElementById("hobbiestitle").style.opacity = "1";
	document.getElementById("hobbiesdis").style.opacity = "1";
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
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


/*Experience*/
function hydratenowclick(){	
	hideexperience();
	document.getElementById("hydratenowdis").style.marginTop = "-60em";

}

function cpclick(){	
	hideexperience();
	document.getElementById("cpdis").style.marginTop = "-120em";
}
function ffclick(){	
	hideexperience();
	document.getElementById("ffdis").style.marginTop = "-180em";
}
function alarmclick(){	
	hideexperience();
	document.getElementById("alarmdis").style.marginTop = "-240em";
}
function resumeclick(){	
	hideexperience();
	document.getElementById("resumedis").style.marginTop = "-300em";
}
function hideexperience(){
	document.getElementById('experience').scrollLeft += -2000;
	document.getElementById("experience").style.overflowX = "hidden";
	document.getElementById("experiencetable").style.visibility = "hidden";
	document.getElementById("experiencetable").style.opacity = "0";
	
}

function showexperience(){	
	document.getElementById("experience").style.overflowX = "scroll";
	document.getElementById("experiencetable").style.visibility = "visible";
	document.getElementById("experiencetable").style.opacity = "1";
	document.getElementById("hydratenowdis").style.marginTop = "0em";
	document.getElementById("cpdis").style.marginTop = "0em";
	document.getElementById("ffdis").style.marginTop = "0em";
	document.getElementById("alarmdis").style.marginTop = "0em";
	document.getElementById("resumedis").style.marginTop = "0em";


}