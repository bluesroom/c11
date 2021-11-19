//declare all the variables
var trex ,trex_running;
var ground;
//used to load files before setup function 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}
//s used to set the initial environment properties
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50); 
 trex.addAnimation("running",trex_running); 
 //adding scale to resize sprite
 trex.scale = 0.5;
 trex.x=50;
 ground = createSprite(200,180,400,20);
}
//used to execute the codes inside the block until the program is stopped
function draw(){
  background("white")
  if (keyDown("space")) {
    trex.velocityY=-10;
    
  }
  //adding gravity
  trex.velocityY=trex.velocityY+0.5;
  //stop trex from falling down
  trex.collide(ground);
drawSprites();
}
