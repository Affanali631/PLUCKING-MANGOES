const Constraint= Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage,boy,boyImage,ground,m1,m2,m3,m4,stone;
function preload()
{
    boyImage=loadImage("boy.png")
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(500,650,800,30)
	tree=createSprite(800,450)
	tree.addImage(treeImage)
	tree.scale=0.3

	m1=new Mango(800,400,50)
	m2=new Mango(750,310,50)
	m3=new Mango(660,400,50)
	m4=new Mango(900,400,50)

	stone=new Stone(150,150,50)
	
	Engine.run(engine);
  
	boy=createSprite(200,595,50,50)
	boy.addImage(boyImage)
	boy.scale=0.1

	chain = new SlingShot(stone.body,{x:150,y:530});
}


function draw() {
  rectMode(CENTER);
  background("gray");
  ground.display();
  boy.display();
  tree.display();
  drawSprites();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  chain.display();
  detectcollision(stone,m1);
  detectcollision(stone,m2);
  detectcollision(stone,m3);
  detectcollision(stone,m4);
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  chain.fly()
}
function detectcollision(lstone,lmango)
{
   mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstone.body.position

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
      Matter.Body.setStatic(lmango.body,false);
   }  
}