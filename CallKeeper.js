function validEmail() {
	var email = this.value;
	var result = email.search( /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i );

	if(result === -1) {
		return false;
	} else {
		return true;
	}
}

function validPhone() {
	var phone = this.value;
	var result = phone.search( /\+?\d[\d\(\)\ -]{4,15}\d/ );

	if(result === -1) {
		return false;
	} else {
		return true;
	}
}

function validName() {
	var name = this.value;
	var result = name.search( /[а-яёА-ЯЁ]+(\s+)?(-+)?/i );

	if(result === -1) {
		return false;
	} else {
		return true;
	}
}

function validURL() {
	var url = this.value;
	var result = url.search( /^(?:(?:http(?:s)?:)?\/\/)([^\/]+)/i );

	if(result === -1) {
		return false;
	} else {
		return true;
	}
}