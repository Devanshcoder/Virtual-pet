//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dogimg=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(400,400);
  dog.addImage(dogimg);
  dog.scale=0.5;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  fill("white");
  textSize(23);
text("press up arrow to feed the dog",50,50);
text("food left : "+foodS,400,150);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else
  {
    x=x-1;
  }
  database.ref('/').update({
  Food:x  
  })
}

