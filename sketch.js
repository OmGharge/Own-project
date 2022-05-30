
var sprite1;
var sprite1Img;
var gunSound;
var gunReload;
function preload(){
  //loading the images
  
 sprite1Img = loadImage("..//Sprites/soldier.png");
 gunSound = loadSound("..//machine gun firing sound.mp3")
 gunReload = loadSound("..//Gun reload sound.mp3");
  
}

function setup() {
  createCanvas(800,400);
  gunSound.loop();
  
  gunReload.play();
  
  sprite1 = createSprite(750,250);
  sprite1.addImage('boy',sprite1Img);
  sprite1.scale = 0.5;
    
   if(keyDown("space")){
    gunSound.play();

   }



} 

function draw() {
  



  drawSprites();
  
}


