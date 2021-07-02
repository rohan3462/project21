
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var rightground;
var leftground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false,
		restitution:0.3,
		density:1.2
	}

	//Create the Bodies Here.
   ground= new Ground(300,890,100,20);
   World.add(world,ground);

   rightground=new rightGround(600,895,20,100);
   World.add(world,rightground);

	leftground=new leftGround(700,895,20,100);
	World.add(world,leftground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,100,20);
  rect(rightground.position.x,ground.position.y,20,100);
  rect(leftground.position.x,leftground.position.y,20,100);

  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
	
}

