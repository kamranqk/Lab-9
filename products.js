//LAB 9-DATA STORAGE: PRODUCTS PAGE

//NOW THAT WE HAVE STORED DATA ON ONE PAGE, WE CAN ACCESS IT FROM ANY PAGE ON THIS WEBSITE.
window.onload = function(){
	
//GET ELEMENTS USED FOR OUTPUT
	var userNameOut = document.getElementById("inName");//get element by its id and assign it to userNameOut
	var userColorOut = document.getElementById("inColor");//get element by its id and assign it to userColorOut
	var bg = document.getElementsByTagName("body")[0]; // assign the background color to the variable bg
	var userOut = document.getElementById("newMsgBox"); //get element by its id and assign it delInfo
		 
//GET VALUES FROM LOCAL STORAGE

	var userName = localStorage.getItem("nameIn"); // get value from local storage and assign it to userName
	var userColor = localStorage.getItem("inColor"); // get value from local storage and assign it to userColor

	
//CREATE OUTPUT WITH VALUES

	if (userName !== null){ // check for null condition
       userOut.innerHTML = "Welcome " + userName + "!";  // if not null concatenate the user name to welcome
	} 
	if (userColor !== null){
       bg.style.background = userColor; // change the background according to user choice
	}

}//end onload