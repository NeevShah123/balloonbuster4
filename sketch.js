

var bow , arrow, greenballoon, redballoon ,pinkballoon ,blueballoon, background, score;
var bowImage, arrowImage, greenballoonImage, redballoonImage, pinkballoonImage ,blueballoonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  var rand = Math.round(random(100,120))
  
  var score = 0;
  
  fill("black");
  
  textSize("20");
  
  text("Score :"+ score ,270,30);
  
  
  
  

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop

  

}
 


function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
var selectballoon = Math.round(random(1,4))
if(frameCount % 80===0){
  if(selectballoon===1){
    spawnredballoon();
  }else if(selectballoon===2){
    spawngreenballoon();
  }else if(selectballoon===3){
    spawnblueballoon();
  }else {
    spawnpinkballoon();
  }
}
  
  
    
    
  
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function spawnpinkballoon(){
if(frameCount%80===0){
  pinkballoon = createSprite(100,400,20,20);
  pinkballoon.addImage(pinkballoonImage);
  pinkballoon.y = Math.round(random(20,370))
  pinkballoon.scale = 1
  pinkballoon.velocityX = 5;
  
  }
}

function spawnredballoon(){
  if(frameCount%80===0){
    redballoon = createSprite(300,400,20,20);
    redballoon.addImage(redballoonImage);
    redballoon.y = Math.round(random(20,370))
    redballoon.scale = 0.1;
    redballoon.velocityX = 5;
}
}

function spawngreenballoon(){
 if(frameCount%80===0){
   greenballoon = createSprite(200,400,20,20);
   greenballoon.addImage(greenballoonImage);
   greenballoon.y = Math.round(random(20,370))
   greenballoon.scale = 0.1;
   greenballoon.velocityX = 5;
 }
}

function spawnblueballoon(){
  if(frameCount%80===0){
    blueballoon = createSprite(250,400,20,20);
    blueballoon.addImage(blueballoonImage);
    blueballoon.y = Math.round(random(20,370))
    blueballoon.scale = 0.1;
    blueballoon.velocityX = 5;
}
}

