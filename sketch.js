///the tree and the boy must be created with sprites. so remove the boy class and tree classes ..B.
///actually for the project to be perfect you need to give the box class a circle shape....anyhow you 
///can submit the project

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var tree1, g1, boy1, stone1, slingshot1;
var stone1

function preload(){
  treeImg=loadImage("tree.png");
  boyImg=loadImage("boy.png");     ///loaded the images of tree and boy
}
function setup() {
  createCanvas(2304,1005);
  engine = Engine.create();
  world = engine.world;

  ///tree and boy sprites
  tree =createSprite(800,370,20,20)
  tree.addImage(treeImg)
  tree.scale=0.5
  boy1=createSprite(500,500,100,300);
  boy1.addImage(boyImg);
  boy1.scale=0.1
  g1 = new ground(1000,600,2000,90);


  ///changed the positions of mango to suit for small screens
  box1 = new box(800,200,30,50);
  box2 = new box(700,250,30,50);
  box3 = new box(900,300,30,50);   
  box4 = new box(800,400,30,50);
  box5 = new box(700,200,30,50);
  box6 = new box(750,280,30,50);
  box7 = new box(850,400,30,50);
  box8 = new box(650,300,30,50);
  box9 = new box(750,100,30,50);
  box10 = new box(800,150,30,50);

 // tree1 = new tree(1800,505,200,700);

 // boy1 = new boy(500,500,100,300);

  stone1 = new stone(500,430,70,70);

  slingShot1 = new slingshot(stone1.body,{x:450,y:445});  
  console.log("sneha");
  console.log("jalan");
 
}

function draw() {
  background(255,255,255);
 
  Engine.update(engine);
  drawSprites();   ////to darwSprites of boy and tree
  g1.display();
 // tree1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();       
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();


 //boy1.display();
  slingShot1.display();  
  stone1.display();
  
  detectCollision(stone1,box1);
  detectCollision(stone1,box2);
  detectCollision(stone1,box3);
   detectCollision(stone1,box4);    ///calling of function to detect collision between the stone and mangoes
  detectCollision(stone1,box5);
  detectCollision(stone1,box6);
  detectCollision(stone1,box7);
  detectCollision(stone1,box8);
 detectCollision(stone1,box9);
 detectCollision(stone1,box10);

}

function mouseDragged(){
	Matter.Body.setPosition (stone1.body,{x:mouseX,y:mouseY})
    

}

function mouseReleased(){
slingShot1.fly ();
}


//function to recognise the touching of stone and mangoes and make them fall
function detectCollision(l,m)
{
      var distance=dist(l.body.position.x,  l.body.position.y,  m.body.position.x,  m.body.position.y)
      if(distance<=l.width/2+m.width/2||distance<l.height/2+m.width/2)
      {
        Matter.Body.setStatic(m.body,false)
      }
}
