const Event = require('events');

class Server extends Event {
	port(method, url) {
		console.log(this.emit('message:', method, url));
	}
}

module.exports = Server;
