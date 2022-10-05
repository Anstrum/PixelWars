import {WebSocketServer} from "ws";


//#region Public funcs
let server = {
    port: null,
    sockets: [],
}


export const Init = (_port) => {
    server.port = _port;
    server.ws = new WebSocketServer({port:_port});
}


export const Close = () => {
    server.port = null
    sockets = []
}


export const Start = () => {
    server.ws.on("connection", (client) => {
      console.log("test")

      client.on("message", (data) => {
        const packet = JSON.parse(data);
    
        switch (packet.type) {
          case "hello from client":
            console.log("wesh ça march")
            break;
        }
      });
    })
}

/*
SERVER
import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (socket) => {
  // send a message to the client
  socket.send(JSON.stringify({
    type: "hello from server",
    content: [ 1, "2" ]
  }));

  // receive a message from the client
  socket.on("message", (data) => {
    const packet = JSON.parse(data);

    switch (packet.type) {
      case "hello from client":
        // ...
        break;
    }
  });
});
*/


/*
CLIENT
const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
  // send a message to the server
  socket.send(JSON.stringify({
    type: "hello from client",
    content: [ 3, "4" ]
  }));
});

// receive a message from the server
socket.addEventListener("message", ({ data }) => {
  const packet = JSON.parse(data);

  switch (packet.type) {
    case "hello from server":
      // ...
      break;
  }
});
*/