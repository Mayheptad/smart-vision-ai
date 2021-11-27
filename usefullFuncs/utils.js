



exports.validateEmail = function(email) {
 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}

exports.validateName = function(name){
if(name.length < 2) {
return false //'field cannot be empty and must be greater than 1;
}

if(name[0] === '' || name[0] === ' '){
	return false//' field must begin with valid character and cannot begin with space'
}

return true;
}

exports.validatePassword = function(password){
if(password.length < 2) 
return false //'field cannot be empty and must be greater than 1;

return true;
}

