var fundo, solo
var agua
var boy, girl
var meninoparado, meninaparada
var meninowalk, meninawalk

function preload(){
fundo = loadImage("BG.png");
solo = loadImage("SOLO.png");
agua = loadImage("WATER.png");
meninoparado = loadImage("IDLE1.png");
meninaparada = loadImage("MIDLE1.png");
meninawalk = loadAnimation("MWALK1.png", "MWALK2.png", "MWALK3.png", "MWALK4.png", "MWALK5.png", "MWALK6.png", 
"MWALK7.png", "MWALK8.png", "MWALK9.png", "MWALK10.png", "MWALK11.png", "MWALK12.png", "MWALK13.png",
 "MWALK14.png", "MWALK15.png", "MWALK16.png", "MWALK17.png", "MWALK18.png", "MWALK19.png", "MWALK20.png");
meninowalk = loadAnimation("WALK1.png", "WALK2.png", "WALK3.png", "WALK4.png", "WALK5.png", "WALK6.png", 
"WALK7.png", "WALK8.png", "WALK9.png", "WALK10.png", "WALK11.png", "WALK12.png", "WALK13.png", "WALK14.png", "WALK15.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);
chao = createSprite(width/2,height-20);
chao.addImage(solo);

rio = createSprite(40,height-30,80,80);
rio.addImage(agua);
rio = createSprite(width-40,height-35,80,80);
rio.addImage(agua); 

boystop = createSprite(200,height-140,20,20);
boystop.addImage(meninoparado);
boystop.scale = 0.3
boystop.addAnimation("bandando", meninowalk);

girlstop = createSprite(250,height-140,80,80);
girlstop.addImage(meninaparada);
girlstop.scale = 0.3
girlstop.addAnimation("gandando", meninawalk);
}

function draw() {
  
  background(fundo);
      
  if (keyDown("D")) {
    boystop.x = boystop.x+5
    boystop.changeAnimation("bandando");
  }
  if (keyDown("RIGHT_ARROW")) {
    girlstop.x = girlstop.x+5
    girlstop.changeAnimation("gandando");
  }
   drawSprites();
        
}
