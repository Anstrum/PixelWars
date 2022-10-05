// import { WebSocket } from "../../../node_modules/ws"
const socket = new WebSocket("ws://localhost:8888");

socket.addEventListener("open", () => {
    console.log("connected, sending message")
    socket.send(JSON.stringify({
        type: "dis coucou a tout le monde",
        content: [3, "4"]
    }));
});

//receive a message from the server
socket.addEventListener("message", ({ data }) => {
    const packet = JSON.parse(data)

    
});