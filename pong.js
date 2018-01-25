
//we have a black rectangle canvas
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

//drawl Ball
context.fillStyle = "#fff";
context.fillRect(0, 0, 10, 10);
