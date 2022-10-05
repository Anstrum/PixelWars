// import { WebSocket } from "../../../node_modules/ws"
const socket = new WebSocket("ws://localhost:8888");

socket.addEventListener("open", () => {
    console.log("connected, asking user list")
    socket.send( JSON.stringify( {
        type: "get-client-list",
        content: []
    }))
});

//receive a message from the server
socket.addEventListener("message", ({ data }) => {
    const packet = JSON.parse(data)

    switch(packet.type) {
        case "send-client-list":
            showClientList(packet.content)
        break;
    }
});


const showClientList = (names) => {
    console.log("there is the list of clients: ")
    names.forEach(name => {
        console.log(name)
    });
}