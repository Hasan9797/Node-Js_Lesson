const Server = require('./server');

const eventOne = new Server();

eventOne.on('message:', (method, url) => {
	console.log(`server method ${method}, url: ${url}`);
}); // habarlarni eshituvchi method

eventOne.port("GET", "google.com")
