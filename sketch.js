var car, wall;
var speed;var weight;

function setup(){
createCanvas("400,400");
speed= random(40,90);
weight= random(500,1900);

car= createSprite(50,200,50,50);
car.shapeColour=colour("purple");
wall= createSprite(1500,200,60,height/2);
}

function draw(){
 background("black");
 car.velocityX=speed;

 if(wall.x-car.x < (wall.x+car.x)/2){
    car.velocityX=0;
    var deformation= 0.5*speed*weight*speed/22059;

    if(deformation>180){
      car.shapeColour=colour(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColour= colour(230,230,0);
    }
    if(deformation < 100){
      car.shapeColour= colour(0,255,0);
    }
 }

}