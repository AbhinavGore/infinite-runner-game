var bg , bgImg
var ghost,ghostImg
var obs,obsimg,obsGroup
var edges
var gameOver

function preload(){
bgImg=loadImage('download.jpg')
ghostImg=loadImage('ghost.png')
obsimg=loadImage('obs.png')
gameOver=loadImage('gameOver.png')

}

function setup() {
edges=createEdgeSprites()
 createCanvas(1200,600)


 bg=createSprite(4000,300)
 bg.addImage(bgImg)

 ghost=createSprite(50,350)
 ghost.addImage(ghostImg)
 ghost.scale=0.12
 obsGroup=new Group()

}

function draw() {
 background(0)
 ghost.debug=true
 
   if(gameState===PLAY){ 
   
 console.log(frameCount)
 bg.velocityX=-3
 if(bg.x<-3000){
    bg.x=4000
 }

 if(keyDown(UP_ARROW)){
    ghost.y=ghost.y-5
 }
 if(keyDown(DOWN_ARROW)){
    ghost.y=ghost.y+5
 }
 ghost.bounceOff(edges);

 if(obsGroup.isTouching(ghost)){
    ghost.destroy()
} 

if(ghost.isTouching(obstacles)){
   gameState = END;
   player1.velocityY = 0;
   player1.addImage('gameOver.png');
  }


 obstacles()
 drawSprites()
}
}
function obstacles(){
if(frameCount%180===0){
    obs=createSprite(1200,random(100,500))
    obs.addImage(obsimg)
    obs.scale=0.15
    obs.velocityX=-3
    obs.lifetime=600
    obsGroup.add(obs)


}
}
function gameOver(){ 
ghost.setCollider("rectangle",0,0,40,40,50);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
}