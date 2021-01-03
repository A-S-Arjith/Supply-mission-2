var helicopterIMG, helicopterSprite, packageSprite,landingzone1Sprite,landingzone2Sprite,landingzone3Sprite,packageIMG;
var packageBody,ground,landingzone1,landingzone2,landingzone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	landingzone1Sprite=createSprite(400, 640, 200, 20);
	landingzone1Sprite.shapeColor=color("red")

	landingzone2Sprite=createSprite(500, 600, 20, 100);
	landingzone2Sprite.shapeColor=color("red")

	landingzone3Sprite=createSprite(300, 600, 20, 100);
	landingzone3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	landingzone1 = Bodies.rectangle(400, 640, 200, 20, {isStatic:true} );
	 World.add(world, landingzone1);
	 
	 landingzone2 = Bodies.rectangle(500, 600, 20, 100, {isStatic:true} );
	 World.add(world, landingzone2);
	 
	 landingzone3 = Bodies.rectangle(300, 600, 20, 100,{isStatic:true} );
	 World.add(world, landingzone3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  landingzone1Sprite.x= landingzone1.position.x 
  landingzone1Sprite.y= landingzone1.position.y 

  landingzone2Sprite.x= landingzone2.position.x 
  landingzone2Sprite.y= landingzone2.position.y 

  landingzone3Sprite.x= landingzone3.position.x 
  landingzone3.Sprite= landingzone3.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



