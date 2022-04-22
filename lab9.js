//LAB 9-DATA STORAGE: INDEX PAGE
alert("home");//DELETE AFTER CONFIRMING CONNECTION
//######## LESSON 9: RETRIEVING DATA #########
//NOW THAT WE HAVE STORED DATA ON ONE PAGE, WE CAN ACCESS IT FROM ANY PAGE ON THIS WEBSITE.
window.onload = function(){
	
//GET ELEMENTS USED FOR OUTPUT

	var userOut = document.getElementById("newMsgBox");

//GET VALUES FROM COOKIES/LOCAL STORAGE

	var userName = localStorage.getItem("nameIn");
	var userColor = localStorage.getItem("inColor");

//CREATE OUTPUT WITH VALUES


if (userName !== null) {
		userOut.innerHTML = " " +userName;
	}
	
}//end onload
