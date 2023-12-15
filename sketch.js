//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

var bg;
var berry, berryIMG, berry_options;
var berryGroup;
var bird, birdIMG;
var score = 0;

function preload(){
bg = loadImage('background.jpg');
birdIMG = loadImage('BirdImage.png');
berryIMG  = loadImage('berry.png');
}

function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;

  bird_options = {
    isStatic: false
  }

  bird = Bodies.circle(450,225,450, bird_options);

  berryGroup = new Group;
}


function draw() 
{
  Engine.update(engine);
image(birdIMG, bird.position.x, bird.position.y);

if(keyDown(37)){
  bird.position.x = bird.position.x-4;
}
 
if(keyDown(39)){
  bird.position.x = bird.position.x+4;
}

if (keyDown(38)){
  bird.position.y = bird.position.y-4;
}
           
if(keyDown(40)){
  bird.position.y = bird.position.y+4;
}

if(collide(bird, berry) == true){
  console.log("it works");
}

   

 
 
  image(bg,0,0,width, height);   
  
  spawnBerries();
  drawSprites();
  image(birdIMG, bird.position.x, bird.position.y);
 


}
 

function spawnBerries(){

if(frameCount % 100 === 0){
  berry = createSprite(Math.round(random(900)), (Math.round(random(400))));
  berryGroup.add(berry);
  berry.addImage(berryIMG);
  berry.scale=0.4;
  berry.velocityY = 3;
  
}

}


function collide(body,sprite){
  if(body!=null){
    var d = dist(body.position.x, body.position.y , sprite.x , sprite.y);
    if(d<=80){
      berry.destroy(berry);
      bird = null;
      return true;
    }
    else{
      return false;
    } 
  }
}