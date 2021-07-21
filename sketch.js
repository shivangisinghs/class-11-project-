var ship, shipImage;
var sea, invisibleSea ,seaImage;

function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png");

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(800,400);
  
  ship = createSprite(50,160,20,50);
  ship.velocityX = -2
  ship.addAnimation("sailing",shipImage);
  ship.scale = 0.5;
  
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.velocityX=-4;

  invisibleSea = createSprite(200,190,400,20);
  invisibleSea.visible = false;
}

function draw() {
  background(220);
 
  if(sea.x <= 0){
    sea.x = sea.width/2;
  }

  ship.collide = invisibleSea
  drawSprites();
}