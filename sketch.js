var path,pathimage
var boy,boyimage
var leftb, rightb
var edges
function preload(){
  //pre-load images
  pathimage = loadImage("path.png")
  boyimage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathimage)
  boy = createSprite(200,350)
  boy.addAnimation("running",boyimage)
  boy.scale = 0.09
  leftb = createSprite(0,0,100,800)
  rightb = createSprite(400,0,100,800)
  leftb.visible = false
  rightb.visible = false
  edges = createEdgeSprites()
}

function draw() {
  background(0);
  boy.x = World.mouseX
  path.velocityY = 3
  if(path.y > 400){
    path.y = height/2
  }
  boy.collide(edges[3])
  boy.collide(leftb)
  boy.collide(rightb)
  drawSprites()


}
