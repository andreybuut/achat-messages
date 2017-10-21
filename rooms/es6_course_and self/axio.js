const axios = new require("axios");

axios.get("http://127.0.0.1:8000/room")
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
