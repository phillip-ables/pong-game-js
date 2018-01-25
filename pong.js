//bit hard coded
//set up a vector class to hold x pos and y _lastPos
class Vec
{
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }
}

//drawRect along so I want to generalize that
class Rect
{
  //the variables it takes are extended from the other variables into these variables
  constructor(w, h){
    //all objects have a position
    //position is a vector
    this.pos = new Vec;
    //use w and h for x and y because this actually is width and height
    this.size = new Vec(w, h);
  }
}

//ball drawRect class
//extend and super
class Ball extends Rect
{
  constructor(){
    //all balls are a rec and have speed
    super(10, 10);
    this.vel = new Vec;
  }
}

//we have a black rectangle canvas
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

//we can use this ball as a basis for painting the ball
const ball = new Ball;

//animate the balls
//update function that takes time
function update(dt){
  // updates the balls position
  //position of ball is relative to the change in velocity
  this.ball.pos.x += ball.vel.x * dt;
  this.ball.pos.y += ball.vel.y * dt

  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  //drawl Ball
  context.fillStyle = "#fff";
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}
