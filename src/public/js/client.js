// import { WebSocket } from "../../../node_modules/ws"
const socket = new WebSocket("ws://localhost:8888");

socket.addEventListener("open", () => {
    console.log("connected, sending message")
    socket.send(JSON.stringify({
        type: "hello from client",
        content: [3, "4"]
    }));
});

//receive a message from the server
socket.addEventListener("message", ({ data }) => {
    console.log(data)
});