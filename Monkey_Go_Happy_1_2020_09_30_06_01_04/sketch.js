
var monkey , monkey_running, monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  monkeyImage = loadImage("sprite_5.png");
 
}



function setup() {
createCanvas(500,400);

monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;


ground = createSprite(400,350,1000,10);
ground.velocityX = -4;
ground.x = ground.width/2;
//console.log(ground.x);

invisibleGround = createSprite(200,350,400,10);
invisibleGround.visible = false;

score = 0;







//monkey.debug = true
//monkey.setCollider("circle",0,0,40);

FoodGroup = createGroup();
obstaclesGroup = createGroup();

}


function draw() {
background("white");

stroke("black");
text(score, 500,50);
text.visible = true;

if (ground.x < 0){
ground.x = ground.width/2;
}

if(keyDown("space")&& monkey.y >= 314) {
monkey.velocityY = -14;
}

monkey.velocityY = monkey.velocityY + 0.8

monkey.collide(invisibleGround);
console.log(monkey.y);


if(obstaclesGroup.isTouching(monkey)){
obstacle.velocityX = 0
ground.velocityX = 0
banana.velocityY= 0
banana.lifetime = 1
monkey.velocityY = 0;
text("Game Over", 250, 200);
obstacle.lifetime = 1000


}

monkey.depth = monkey.depth+1

if(FoodGroup.isTouching(monkey)){
banana.destroy();
score = score + 2;



}



spawnFoods();
spawnObstacles();

drawSprites();
}

function spawnObstacles(){
if (frameCount % 100 === 0){
obstacle = createSprite(400,325,20,20);
obstacle.addImage(obstacleImage);
obstacle.velocityX = -4
obstacle.scale = 0.1
obstacle.lifetime = 120
obstaclesGroup.add(obstacle)
}
}

function spawnFoods(){
if (frameCount % 80 === 0){
banana = createSprite(400,20,20,20);
banana.x = Math.round(random(80, 200));   
banana.addImage(bananaImage);
banana.velocityY = 4
banana.scale = 0.1
banana.lifetime = 100
FoodGroup.collide(invisibleGround);
FoodGroup.add(banana)


}
}










