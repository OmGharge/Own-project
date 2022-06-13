
var soldier_running;
var soldier_standing;
var soldier_sitting;
var player1;
var player2;
var bullet;
var bulletImg;
var gunSound;
var gunReload;
var bg;

function preload(){
  //loading the images
 gunSound = loadSound("..//machine gun firing sound.mp3")
 soldier_running = loadAnimation("soldier1.png","soldier2.png","soldier3.png","soldier4.png");
 soldier_runningRevert = loadAnimation("..//revert/soldier1.png","..//revert/soldier2.png","..//revert/soldier3.png","..//revert/soldier4.png")
 soldier_standing = loadImage("standing soldier.png")
 soldier_standingRevert = loadImage("..//revert/standing soldier.png");
 gunReload = loadSound("..//Gun reload sound.mp3");
 bulletImg = loadImage("bullet1.png")
 bulletImgRevert = loadImage("bullet2.png");
 bg = loadImage("bg1.jpg")
 soldier_sitting = loadAnimation("soldier4.png","soldier5.png");
 soldier_sittingRevert = loadAnimation("..//revert/soldier4.png","..//revert/soldier5.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  
  player1 = createSprite(width/2-500,200);
  player1.addImage('boy',soldier_standing);
  player1.addAnimation("soldierrunning",soldier_running);
  player1.addAnimation("soldiersitting",soldier_sitting);

  player2 = createSprite(width/1-500,200);
 player2.addImage('boy',soldier_standingRevert);
  player2.addAnimation("soldierrunning",soldier_runningRevert);
 // player4.addAnimation("soldiersitting",soldier_sitting);

  
  player1.velocityX = 0;
  player1.scale = 0.3;
  player2.scale = 0.3;
  ;
    


} 

function draw() {
  background(bg);

if(keyWentDown("space")){
  
    gunSound.play();
    shootBullet1();
    player1.changeAnimation("soldierrunning",soldier_running);
 
  }
  if(keyWentDown("p")){
  
    gunSound.play();
    shootBullet2();
    player2.changeAnimation("soldierrunning",soldier_running);
 
  }

   
 // else{};
   //player1.x = mouse.x;
   if(keyDown("w")){
    player1.y=player1.y-7;
     player1.addAnimation("soldier",soldier_running);
  }

  if(keyDown("s")){
    player1.y=player1.y+7;
    player1.changeAnimation("soldiersitting",soldier_sitting);
  }
  if(keyDown("d")){
    player1.x=player1.x+7;
    //player1.addAnimation("soldier",soldier_running);
  }
  if(keyDown("a")){
    player1.x=player1.x-7;
    //player1.addAnimation("soldier",soldier_running);
  }
  if(keyDown("UP_ARROW")){
    player2.y=player2.y-7;
    // player2.addAnimation("soldier",soldier_runningRevert);
  }

  if(keyDown("DOWN_ARROW")){
    player2.y=player2.y+7;
  //  player2.changeAnimation("soldiersitting",soldier_sittingRevert);
  }
  if(keyDown("RIGHT_ARROW")){
    player2.x=player2.x+7;
    //player1.addAnimation("soldier",soldier_running);
  }
  if(keyDown("LEFT_ARROW")){
    player2.x=player.x-7;
    //player1.addAnimation("soldier",soldier_running);
  }

drawSprites();


}                                     
function shootBullet1(){
  bullet= createSprite(height/2, width/2, 50,20);
  bullet.x = player1.x+70;
  bullet.y= player1.y-18;
  bullet.addImage("bullet",bulletImg);
  bullet.scale=0.12;
  bullet.velocityX= 15;
  //bulletGroup.add(bullet);
}

function shootBullet2(){
  bullet= createSprite(height/2, width/2, 50,20);
  bullet.x = player2.x-70;
  bullet.y= player2.y-18;
  bullet.addImage("bullet",bulletImgRevert);
  bullet.scale=0.12;
  bullet.velocityX= -15;
  //bulletGroup.add(bullet);
}