var movingRec,fixedRec;
var wand,broom;

function setup(){
createCanvas(800,500)
//movingRec=createSprite(100,250,50,100)
//movingRec.shapeColor="red"

//fixedRec=createSprite(600,250,100,50)
//fixedRec.shapeColor="red"

wand=createSprite(360,100,20,20)
wand.shapeColor="brown"

broom=createSprite(200,60,20,20)
broom.shapeColor="lavender"

}
function draw(){
  background("yellow")
  wand.x=mouseX;
  wand.y=mouseY;

  if(isTouching(wand,broom)){
    console.log("stupefy")
  }

  //movingRec.x=mouseX
 // movingRec.y=mouseY
//console.log(fixedRec.x-movingRec.x)


//if(isTouching(fixedRec,movingRec)){
 // movingRec.shapeColor="green"
  //fixedRec.shapeColor="green"
 // console.log("Hurray")
//}
//else{
  //movingRec.shapeColor="red"
  //fixedRec.shapeColor="red"
//}
drawSprites();
}

