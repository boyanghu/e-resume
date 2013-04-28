//Initializing the Google Drive Functionality
















//Initiaize Table

var tablecontents = "";


// list of images 
var listofimg = new Array();
listofimg[0] = "http://i.imgur.com/5upqhuih.jpg";
listofimg[1] = "http://i.imgur.com/UwZW5nFh.jpg";
listofimg[2] = "http://i.imgur.com/yUT1ijth.jpg";
listofimg[3] = "http://i.imgur.com/LCxpdc7h.jpg";
listofimg[4] = "http://i.imgur.com/8HslWLf.jpg";
listofimg[5] = "http://i.imgur.com/wGhSyvp.jpg";
listofimg[6] = "http://i.imgur.com/MsQYiND.jpg";
listofimg[7] = "http://i.imgur.com/6eWIATn.jpg";
listofimg[8] = "http://i.imgur.com/6gtlnPr.jpg";
listofimg[9] = "http://i.imgur.com/VHNsujJ.jpg";
listofimg[10] = "http://i.imgur.com/JQY4cLo.jpg";
listofimg[11] = "http://i.imgur.com/cSas7hO.jpg";
listofimg[12] = "http://i.imgur.com/bkKpL2y.jpg";
listofimg[13] = "http://i.imgur.com/6aIyBSa.jpg";
listofimg[14] = "http://i.imgur.com/rvm8f5yh.jpg";
listofimg[15] = "http://i.imgur.com/OMap1lzh.jpg";
listofimg[16] = "http://i.imgur.com/BtjILCah.jpg";
listofimg[17] = "http://i.imgur.com/WwCE31lh.jpg";
listofimg[18] = "http://i.imgur.com/eUq2f24h.jpg";
var listofimglength = listofimg.length; 
 


function displayImg(){


	for (var i = 0; i < listofimglength; i ++)
	{
		tablecontents += "<tr class = tablerows>";
		tablecontents += "<td class = tablecolns>" + createImg(listofimg[i]) + "</td>";
		i++;
		tablecontents += "<td class = tablecolns>" + createImg(listofimg[i]) + "</td>";
		i++;
		tablecontents += "<td class = tablecolns>" + createImg(listofimg[i]) + "</td>";
		tablecontents += "</tr>";
	}
	document.getElementById("tablespace").innerHTML = tablecontents;
}



function createImg(ImgUrl)
{
  var returnImg = "";
  returnImg += "<div class = 'tableimg'> <img src = '" + ImgUrl +"' > </div>";
  return returnImg;
}























