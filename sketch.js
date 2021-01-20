
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinimg;
function preload()
{
	
		dustbinimg=loadImage("dustbin.png")
		
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new dustbin(1050,410,20,100) 
	dustbin2 = new dustbin(1000,450,100,20) 
	dustbin3 = new dustbin(940,410,20,100)
	paper1=new paper(180,440,40)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")

	ground = Bodies.rectangle(width/2, 470, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("white");
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper1.display()
  text(mouseX+","+mouseY,mouseX,mouseY)

  image(dustbinimg,900,270,200,200)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:290,y:-350})
}
}

