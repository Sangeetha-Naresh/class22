const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var e,w;
var ground,ball;

function setup()
{
  createCanvas(600,600);

  e=Engine.create();
  w=e.world;

  var ground_options=
  {
    isStatic: true
  }
  ground=Bodies.rectangle(300,580,300,50,ground_options);
  World.add(w,ground);


  var ball_options=
  {
    restitution: 1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(w,ball);
  console.log(ball);
  //console.log(ground.position.y);
}

function draw() 
{
  background(0);  

  Engine.update(e);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}