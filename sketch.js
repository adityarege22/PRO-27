
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;

function preload()
{
	
}

function setup() {    
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new bob(890,900);
	bobObject1= new bob(750,960);
	bobObject1= new bob(412,560);
	bobObject1= new bob(300,450);
	bobObject1= new bob(250,760);

	rope= new rope(bobObject1.body, roofObject.body, -bobDiameter*2,0);

	ropeObject1= new bob(890,900,50,50);
	ropeObject1= new bob(750,960,60,60);
    ropeObject1= new bob(412,560,70,70);
	ropeObject1= new bob(300,450,80,80);
	ropeObject1= new bob(250,760,90,90);




	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  drawSprites();
  rope();
  bobObject1();
  bobObject2();
  bobObject3();
  bobObject4();
  bobObject5();
  ropeObject1();
  ropeObject2();
  ropeObject3();
  ropeObject4();
  ropeObject5();

}



