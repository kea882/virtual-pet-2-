//Create variables here
var dog ,happyDog
var database,foods
var foodStock,

function preload()
{
  //load images here
  this.image = loadImage("happydog.png");
  this.image = loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog= createSprite()
  dog.addImage("Dog",DogImage);

  foodStock=database.ref('food')
  foodStock.on("value,readStock")
  feed=createButton("feedTheDog")
    feed.position(700,95);
    feed.mousePressed(feedDog);

    addFood=createButton("addFood");
    addFood.position(800,95);
    addFood.mousePressed(addFoods)


}


function draw() {  
  if(keyWentDown(Up_Arrow)){
    writeStock(foodS)
    Dog.addImage("happydog")


    
    Fill(225,225,254);
    textSize(15);
    if(lastFed>12){
      text("last feed :+last feed %12" + "PM,350,30")

    }else if(lastFed==0){
      text("last fed : 12 am ,350,30");


    }else{
      text("last feed :"+lastFed+"AM",350,30 );
    }


   
  
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS-data.val();

}

function writeStock(x) {
  database.ref('/').update({
    food:x
})
}
function feedDog (){
  dog.addImage(happyDog)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update()
  food:foodObj.getFoodStock().
  feedTime;hour()
}
function addFoods(){
  foodS++;
  database.ref('/').update({
  food:foodS
  })
}



