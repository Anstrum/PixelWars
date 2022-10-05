import { WebSocketServer } from "ws";

//#region Public funcs
let server = {
	port: null,
	clients: [],
}

export const Init = (_port) => {
	server.port = _port;
	server.ws = new WebSocketServer({ port: _port });
	server.clients = []
}

export const Close = () => {
	server.port = null
	server.clients = []
}

export const Start = () => {
	server.ws.on("connection", (client) => {
		console.log("new client registered")
		server.clients.push(client)

		client.on("message", (data) => {
			const packet = JSON.parse(data);

			switch (packet.type) {
				case "dis coucou a tout le monde":
					data = JSON.stringify({
						type: "coucou",
						content: ["coucou", "coucou"]
					});
					server.clients.forEach(client => {
						client.send(data)
					});
				break;
			}
		});
	})
}