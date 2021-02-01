const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var PGround,ground;
var sling;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    polygon = new Polygon(200,300,50,50);
    sling = new Sling(polygon.body,{x:200,y:300});
    PGround = new Ground(750,450,350,25);
    ground = new Ground (800,650,1600,10);
    block1 = new Box(675,415,40,40);
    block2 = new Box(720,415,40,40);
    block3 = new Box(765,415,40,40);
    block4 = new Box(810,415,40,40);
    block5 = new Box(700,372,40,40);
    block6 = new Box(743,372,40,40);
    block7 = new Box(785,372,40,40);
    block8 = new Box(720,330,40,40);
    block9 = new Box(765,330,40,40);
    block10 = new Box(740,286,40,40);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  polygon.display();
  sling.display();
  PGround.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  sling.fly();
  
}