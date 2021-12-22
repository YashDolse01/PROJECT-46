
var veer,theif,bodygaurd;
var veerImage,bodygaurdImage,theifImage,BG;

function preload(){

  veerImage = loadImage("veer running.gif");

theifImage = loadImage ("theif.gif")
bodygaurdImage = loadImage("bodygaurd.jpg");
BG = loadImage("background.jpg");
}



function setup() {
  createCanvas(800,400);
 

  veer=createSprite(40,200,20,20);
  veer.addImage(veerImage);
  veer.scale=0.7


 theif=createSprite(500,300,20,20);
  theif.addImage(theifImage );
  theif.scale=0.7

  bodygaurd=createSprite(200,200,20,20);
  bodygaurd.addImage(bodygaurdImage);
  bodygaurd.scale=0.2
}

function draw() {
  background(BG); 

  drawSprites();
}