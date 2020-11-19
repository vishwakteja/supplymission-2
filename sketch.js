var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var wall1, wall2, wall3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1=createSprite(400, 440, 200, 20)
    wall1.shapeColor="red"

	wall2=createSprite(500, 400, 20, 100)
    wall2.shapeColor="red"

    wall3=createSprite(300, 400, 20, 100)
    wall3.shapeColor="red"





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  wall1 = Bodies.rectangle(400, 440, 200, 20, {isStatic:true})
 World.add(world, wall1)
  World.add(world, wall1)
	
  Engine.run(engine);
  wall2 = Bodies.rectangle(500, 400, 200, 200, {isStatic:true})
   World.add(world, wall1)
	
	wall3 = Bodies.rectangle(500, 400, 200, 20, {isStatic:true})
	wall3.shapeColor="red"
	 World.add(world, wall3)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 




  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
    
  }
}



