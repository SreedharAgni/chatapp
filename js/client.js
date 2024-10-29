const socket = io('http://localhost:8000')

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');
const messagecontainer= document.querySelector(".container")

const name = prompt("enter your name to join");
socket.emit('new-user-joined', name);