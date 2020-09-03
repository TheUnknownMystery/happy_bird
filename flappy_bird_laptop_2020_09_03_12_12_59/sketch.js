var land,player,bird,small_pipe,big_pipe,pipe_img_1,pipe_img_2,group_pipe,group_pipe_2,large_pipe,large_pipe_img,gp_1,gp_2,symbol,symbo_imgcloud,cloudimg,sound,background;

var gameState="start",score=0
function preload(){
bird=loadImage("9.gif");  
pipe_img_1=loadImage("gf.png");
large_pipe_img=loadImage("Sprite-0005-export.png")

symbol_img=loadImage("videogame (1).png")
cloudimg=loadImage("Sprite-0001-1.png")
sound=loadSound("die.mp3")
sound_1=loadSound("jump.mp3")


  
  
                  } 
function setup() {
  
  createCanvas(400,500);
  
  land_1();
  player_1();
  small_pipe1();
  large_pipe1();
  symbol_1();
  cloud_1();
  
  gp_1=new Group();
  gp_2=new Group();
}

function draw() {
  
  
  
  player.setCollider("circle",20,0,30);
  
  large_pipe.setCollider("rectangle",-40,-100,200,500);
  
  small_pipe.setCollider("rectangle",-3,14,20,70);
  background("lightblue");
   
  textFont("roman")
  
  textSize(20)
  
  text("score:"+score,310,30)
//infinite(@11)  
  if(land.x > 0){
 land.x=30   
    
    
                 }

   if(player.y < 0){
 player.velocityY=0          
                      }

player.velocityY=player.velocityY+0.8

  
 
  
if (player.isTouching(land)){
player.velocityY=0 
player.lifetime=0
gameState="end"
sound.play();
  
  
}
  
if (player.isTouching(large_pipe)){
player.velocityY=0 
player.lifetime=0  
gameState="end" 
sound.play();
  
  
}
  
  if (player.isTouching(small_pipe)){
player.velocityY=0
  sound.play();
player.lifetime=0 
gameState="end" 

  
}
  
  if(World.frameCount%40===0){
   score=score+1
    
    
    
     
  }
  
  if(World.frameCount%60===0){
    small_pipe1();
                             }
  
  if(World.frameCount%70===0){
    
    large_pipe1();
    
                             }
  if(World.frameCount%70===0){
    
    cloud_1();
       
                             }
if(keyDown("space")){
 player.velocityY=-8 
sound_1.play();
                      }
    symbol.visible=false;  
      
  
if(gameState==="play"){
  
    
    
  }
  
  else if(gameState==="end"){
  score=0  
  if ( keyDown("space")) {
     
     end_1();
     
     }
    
    fill("yellow")
    textSize(30);
    text("gameover",50,300);
    
    symbol.visible=true;
    
    
    
    
                            }
  
  if(player.x > 500){
    gameState="end"
    
    
  }
  
  player.depth=cloud.depth
  
  player.depth=player.depth+1
   
var random_num=Math.round(random(1,6))

switch (random_num){
    
  case 1:
  small_pipe.addImage(pipe_img_1)
  break;
  
  case 2:
  large_pipe.addImage(large_pipe_img);
    break;
    
    case 3:
    
    large_pipe.addImage(large_pipe_img);
    
    break;
    
    case 4:
    
    small_pipe.addImage(pipe_img_1);
    
    break;
    
    case 5:
    
    large_pipe.addImage(large_pipe_img)
    
    break;
    
    case 6:
    
    large_pipe.addImage(large_pipe_img);
    
}
  
player.collide(large_pipe);
  
player.collide(small_pipe);
  
drawSprites();
}

function land_1(){ 
land = createSprite(300,458,800,30);
land.velocityX=-(6+(score/100))
  
  
  
               }

function player_1(){

player = createSprite(40,280,20,20);
player.addImage(bird);
player.scale=0.5
  
  
  
                }

function small_pipe1(){

small_pipe=createSprite(200,398,30,30);

small_pipe.addImage(pipe_img_1);

small_pipe.velocityX=-(6+(score/10))

                      }

function large_pipe1(){

large_pipe=createSprite(200,60,10,10);
large_pipe.addImage(large_pipe_img);
 
large_pipe.scale=0.2
large_pipe.velocityX=-(6+(score/10))
                     }

function symbol_1(){

symbol=createSprite(200,300 ,10,10)  
symbol.addImage(symbol_img); 
symbol.scale=0.1
  
  
  
  
}

function end_1(){
gameState="play"
player_1();  
  
  
  
  
}

function cloud_1(){
cloud=createSprite(100,100,100,100)  
cloud.addImage(cloudimg) 
cloud.velocityX=-4  
  
  
  
  
}