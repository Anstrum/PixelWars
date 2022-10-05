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
			messageReceived(data, client)
		});
	})
}

const messageReceived = (data, client) => {
	const packet = JSON.parse(data);

	switch (packet.type) {
		case "get-client-list":
			client.send(JSON.stringify( {
				type: "send-client-list",
				content: ["user1", "user2", "user3"]
			}))
		break;
	}
}

const sendToSocket = (data, client) => {
	client.send(JSON.parse(data))
}