function err () {
	throw new Error('Something bad happened');
}

try{
	err();
}catch(e) {
	console.log('Error occured');
}