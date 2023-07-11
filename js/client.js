const socket = io('http://localhost:8000');
const form = document.getElementById('send-container')
const messageInput =document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")


const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}



const name1 =prompt("Hi alian, Enter your name to join the group");
socket.emit('new-user-joined',name1);
socket.on('user-joined',data =>{
    append(`${name1} joined the chat`,'right')
})