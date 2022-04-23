//LAB 9-DATA STORAGE: INDEX PAGE

//NOW THAT WE HAVE STORED DATA ON ONE PAGE, WE CAN ACCESS IT FROM ANY PAGE ON THIS WEBSITE.
window.onload = function(){
	
//GET ELEMENTS USED FOR OUTPUT
	var userNameOut = document.getElementById("inName");//get element by its id and assign it to userNameOut
    var userColorOut = document.getElementById("inColor");//get element by its id and assign it to userColorOut
	var userOut = document.getElementById("newMsgBox"); //get element by its id and assign it delInfo
    var infoForm  = document.forms.infoForm; // asign the form value to the variable infoForm 
	var bg = document.getElementsByTagName("body")[0]; // assign the background color to the variable bg
	var delInfo = document.getElementById("btnDel"); // get element by its id and assign it delInfo
    
    infoForm.onsubmit = processForm; // Call function processForm, when user click to save
	delInfo.onclick = function(){
		localStorage.clear(); // clear local storage
		location.reload(); // change the color to default on reload
	};
	
	 
//GET VALUES FROM LOCAL STORAGE
// validated data here
	var userName = localStorage.getItem("nameIn"); // get value from local storage and assign it to userName
	var userColor = localStorage.getItem("inColor"); // get value from local storage and assign it to userColor
	if (userName !== null){ // check for null condition
       userOut.innerHTML = "Welcome, " + userName;  // if not null concatenate the user name to welcome
	} 
	if (userColor !== null){
       bg.style.background = userColor; // change the background according to user choice
	}
	
//CREATE OUTPUT WITH VALUES

function processForm() {

localStorage.setItem("nameIn", userNameOut.value); 	 // set value from local storage for user name
localStorage.setItem("inColor", userColorOut.value); // set value from local storage for user color
userOut.innerHTML = "Welcome, " + userNameOut.value;//  concatenate the user name to welcome
bg.style.background = userColorOut.value; // change the background according to user choice
return false; // stop form to submit
}

}//end onload
