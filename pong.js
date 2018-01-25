//bit hard coded
//set up a vector class to hold x pos and y _lastPos
class vector
{
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }
}
//drawRect along so I want to generalize that


//we have a black rectangle canvas
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

//drawl Ball
context.fillStyle = "#fff";
context.fillRect(0, 0, 10, 10);
