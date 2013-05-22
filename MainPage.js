function circleover(str){
	document.getElementById(str).style.width = "19em";
	document.getElementById(str).style.height = "19em";
	document.getElementById(str).style.marginTop = "1em";
	if (str == 'kim'){
		document.getElementById(str).style.marginTop = "1em";
		document.getElementById('bo').style.marginTop = "3em";
	}
	else
		document.getElementById(str).style.marginTop = "3em";
	document.getElementById(str + 'img').style.marginTop = "2em";
	document.getElementById(str + 'img').style.webkitTransform = "rotateY(180deg)";
	document.getElementById(str + 'img').style.transform = "rotateY(180deg)";
	document.getElementById(str + 'img').style.mozTransform = "rotateY(180deg)";
	document.getElementById(str + 'img').style.oTransform = "rotateY(180deg)";
	document.getElementById(str + 'img').style.msTransform = "rotateY(180deg)";
	document.getElementById(str + 'name').style.opacity = "1";
	document.getElementById(str + 'dis').style.opacity = "1";
	document.getElementById(str).style.cursor = "pointer";
}

function circleout(str){
	document.getElementById(str).style.width = "15em";
	document.getElementById(str).style.height = "15em";
	document.getElementById(str).style.marginTop = "3em";
	if (str == 'kim'){
		document.getElementById(str).style.marginTop = "3em";
		document.getElementById('bo').style.marginTop = "5em";
	}
	else
		document.getElementById(str).style.marginTop = "5em";	
	document.getElementById(str + 'img').style.marginTop = "0em";
	document.getElementById(str + 'img').style.webkitTransform = "rotateY(0deg)";
	document.getElementById(str + 'img').style.transform = "rotateY(0deg)";
	document.getElementById(str + 'img').style.mozTransform = "rotateY(0deg)";
	document.getElementById(str + 'img').style.oTransform = "rotateY(0deg)";
	document.getElementById(str + 'img').style.msTransform = "rotateY(0deg)";
	document.getElementById(str + 'name').style.opacity = "0";
	document.getElementById(str + 'dis').style.opacity = "0";
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	