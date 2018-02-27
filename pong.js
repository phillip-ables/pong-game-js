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
  //scalfolding special getters
  get left()
  {
    return this.pos.x - this.size.x /2;
  }
  get right()
  {
    return this.pos.x + this.size.x/2;
  }
  get top()
  {
    return this.pos.y + this.size.y/2;
  }
  get bottom()
  {
    return this.pos.y - this.size.y/2;
  }
}

//wrap this all in a class
class Pong
{
  constructor(canvas)
  {
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
    //initialize the ball within the class
    //we can use this ball as a basis for painting the ball
    this.ball = new Ball;
    this.ball.vel.x = 150;
    this.ball.vel.y = 150;
    //request animation frame is a function that takes a callback and then calls the call back for the next time the browsers ready to draw
    //gives you elapsed time since the page was loaded
    let lastTime;
    //because we need to save this function in here we cant use a classic javascript function
    const callback (millis) => {
      if (lastTime) {
        this.update((millis - lastTime) / 1000);
      }
      lastTime = millis;
      requestAnimationFrame(callback);
    };
    callback();
  }
  //animate the balls
  //update function that takes time
  update(dt){
    // updates the balls position
    //position of ball is relative to the change in velocity
    this.ball.pos.x += this.ball.vel.x * dt;
    this.ball.pos.y += this.ball.vel.y * dt;

    //metagate ball bouncing
    //check if ball touches any corners of the screen
    if(this.ball.left < 0 || this.ball.right > this._canvas.width) {
      this.ball.vel.x = -this.ball.vel.x;
    }
    if(this.ball.bottom < 0 || this.ball.top > this._canvas.height) {
      this.ball.vel.y = -ball.vel.y;
    }
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    //drawl Ball
    this.context.fillStyle = "#fff";
    this.context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
  }
}
//we have a black rectangle canvas
const canvas = document.getElementById('pong');
const pong = new Pong(canvas);
