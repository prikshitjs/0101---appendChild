let form=document.querySelector('form');
let formdata = []
form.addEventListener('submit', (getUserData)=>{
	getUserData.preventDefault();

	console.log(getUserData.target.username);
	let userdata = getUserData.target.username;

	for (var i = userdata.length - 1; i >= 0; i--) {
		console.log(userdata[i].value);
		formdata.push(userdata[i].value);
	}
	console.log(formdata);
})