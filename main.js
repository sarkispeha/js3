var isNumber = function(n) {
	var patt = new RegExp('^[0-9]*$');
	return patt.test(n);
};

var phonenum = prompt('What\'s yer digits?');

var phone1 = phonenum.substring(0,3);
var phone2 = phonenum.substring(4,7);
var phone3 = phonenum.substring(8,12);

var phoneisvalid = false;

while(phoneisvalid !== true){

	if(phonenum.charAt(3) === '-' && phonenum.charAt(7) === '-' && isNumber(phone1) && isNumber(phone2)
	&& isNumber(phone3) ) {
		alert('Thanks for entering a phone number!');
		phoneisvalid = true;
	}
	else {
		alert('C\'mon, don\'t mess with me. Enter a phone number');
		phonenum = prompt('What\'s yer digits?');
		phone1 = phonenum.substring(0,3);
		phone2 = phonenum.substring(4,7);
		phone3 = phonenum.substring(8,12);
	}
}

var bDate = prompt('What date were you born?');

var bDate1 = bDate.substring(0,2);
var bDate2 = bDate.substring(3,5);
var bDate3 = bDate.substring(6,8);

var bdateisvalid = false;

while(bdateisvalid !== true){

	if(bDate.charAt(2) === '/' && bDate.charAt(5) === '/' && isNumber(bDate1) && isNumber(bDate2) && isNumber(bDate3) ){
		alert('Thanks for entering a birthdate!');
		bdateisvalid = true;
	}else{
		alert('C\'mon, don\'t mess with me. Enter a birthdate');
		bDate = prompt('What date were you born');
		bDate1 = bDate.substring(0,2);
		bDate2 = bDate.substring(3,5);
		bDate3 = bDate.substring(6,8);
	};
}

var zipCode = prompt('What is your zip code?');
	
var zipisvalid = false;

while(zipisvalid !== true){

	if(zipCode.length === 5 && isNumber(zipCode) ){
		alert('Thanks for entering a zip!');
		zipisvalid = true;
	}else{
		alert('C\'mon, don\'t mess with me. Enter a zipcode');
		zipCode = prompt('What is your zip code?');
	};
}

var stateAbbrev = prompt('What is your two letter state abbreviation');

var stateIsValid = false;

while(stateIsValid !== true){

	if(stateAbbrev.length === 2 && stateAbbrev.toUpperCase() === stateAbbrev && isNumber(stateAbbrev) === false){
		alert('Thanks for entering a state!');
		stateIsValid = true;
	}else{
		alert('C\'mon, don\'t mess with me. Enter a state');
		stateAbbrev = prompt('What is your state abbreviation');
	};
}

var married = prompt('Can I buy you a drink?');

var marriedValid = false;

while(marriedValid !== true){

	if(married.toUpperCase() === 'YES'){
		alert('That\'s my kind of gal');
		marriedValid = true;
	}else if (married.toUpperCase() === 'NO'){
		alert('Then why you wasting my time!?');
		marriedValid = true;
	}else{
		alert('Just give me an answer.');
		married = prompt('Can I buy you a drink?');
	};

}





