const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;




//var grArray = [];

var newTile;
var ladybug,ladybug_img;
var tile,tile_img;
var coin,coin_img;

//var bk_song;



function preload()
{
  bg_img = loadImage('Bg.jpg');
  ladybug_img = loadImage('Ladybug.png');
  tile_img = loadImage('Tile.png');
  coin_img = loadImage('coins.png');

  bk_song = loadSound('title song.mpeg');
  

 

}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  bk_song.loop();
  bk_song.setVolume(0);

  engine = Engine.create();
  world = engine.world;

   
  ladybug = createSprite(600,400,50,50);
  ladybug.addImage(ladybug_img);
  ladybug.scale = 1.5;

  tile = createSprite(540,330,50,50);
  tile.addImage(tile_img);
  tile.scale = 1.5;

  tile1 = createSprite(540,330,50,50);
  tile1.addImage(tile_img);
  tile1.scale = 1.5;

  tile2 = createSprite(540,330,50,50);
  tile2.addImage(tile_img);
  tile2.scale = 1.5;

  coin = createSprite(100,330,50,50);
  coin.addImage(coin_img);
  coin.scale = 0.1;

  coin1 = createSprite(700,330,50,50);
  coin1.addImage(coin_img);
  coin1.scale = 0.1;

  coin2 = createSprite(300,330,50,50);
  coin2.addImage(coin_img);
  coin2.scale = 0.1;

  coin3 = createSprite(800,330,50,50);
  coin3.addImage(coin_img);
  coin3.scale = 0.1;

  coin4= createSprite(500,330,50,50);
  coin4.addImage(coin_img);
  coin4.scale = 0.1;

  coin5 = createSprite(900,330,50,50);
  coin5.addImage(coin_img);
  coin5.scale = 0.1;


  rectMode(CENTER);
  ellipseMode(RADIUS);
 
}


function draw() 
{
  background(bg_img);
  

 /* for(i = 0; i <= 20;i++){
    var x = random(200,200);
    var y = 200;*/
   
    //newTile.show();
    
  if(frameCount%140 === 0){
    tile.x = Math.round(random(500,500));
    tile.y = Math.round(random(50,400));
    tile1.x = Math.round(random(500,500));
    tile1.y = Math.round(random(100,400));
    tile2.x = Math.round(random(500,500));
    tile2.y = Math.round(random(120,400));
    coin.x = Math.round(random(600,250));
    coin.y = Math.round(random(50,400));
    coin1.x = Math.round(random(600,250));
    coin1.y = Math.round(random(50,400));
    coin2.x = Math.round(random(600,250));
    coin2.y = Math.round(random(50,400));
    coin3.x = Math.round(random(600,250));
    coin3.y = Math.round(random(50,400));
    coin4.x = Math.round(random(600,250));
    coin4.y = Math.round(random(50,400));
    coin5.x = Math.round(random(600,250));
    coin5.y = Math.round(random(50,400));
  }
 // newTile.show();

  //tile.x = 600;
 // tile.y = random(200,100);

 /*if(ladybug.isTouching(coin)){
   coin.visible = false;
 }*/
 

 if(keyDown(UP_ARROW)){
   ladybug.y = ladybug.y-2;
 }

 if(keyDown(DOWN_ARROW)){
  ladybug.y = ladybug.y+2;
}

if(keyDown(LEFT_ARROW)){
  ladybug.x = ladybug.x-2;
}

if(keyDown(RIGHT_ARROW)){
  ladybug.x = ladybug.x+2;
}
   /* grArray.push(newground);
     }*/
  

  Engine.update(engine);
 
  textSize(25);
  fill("red");
  text("Point:",900,50);

  drawSprites();



}

