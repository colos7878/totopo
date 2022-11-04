
var play;
var backgroundImg;
var segundo = 0;


var disparo = false;
var totopo;
var totopoImg;
var cloudImage1,cloudImage2,cloudImage3;
var frijolImg;
var cloud;
var frijol;
var timer=0;


function preload() {
  backgroundImg = loadImage("./imagenes/cielo/fondo.png");
  cloudImage1 = loadImage("./imagenes/cielo/nube1.png");
  cloudImage2 = loadImage("./imagenes/cielo/nube2.png");
  cloudImage3 = loadImage("./imagenes/cielo/nube3.png");
  totopoImg = loadAnimation("./imagenes/totopo/totopoInmovil1.png", "./imagenes/totopo/totopoInmovil2.png", "./imagenes/totopo/totopoInmovil3.png", "./imagenes/totopo/totopoInmovil4.png", "./imagenes/totopo/totopoInmovil5.png", "./imagenes/totopo/totopoInmovil6.png", "./imagenes/totopo/totopoInmovil7.png", "./imagenes/totopo/totopoInmovil8.png", "./imagenes/totopo/totopoInmovil9.png", "./imagenes/totopo/totopoInmovil10.png")
  frijolImg = loadAnimation("./imagenes/Frijol/frijol1.png","./imagenes/Frijol/frijol2.png","./imagenes/Frijol/frijol3.png", "./imagenes/Frijol/frijol4.png", "./imagenes/Frijol/frijol5.png")
}

function setup() {
  canvas = createCanvas(2340, 780);


  diseñoDeTotopo();

  
}


function draw() {
  background("#DA2EB8");
  image(backgroundImg, 0, 0, width, height);



  keyPressed();
  spawnClouds();
    


  drawSprites();
  if(frijol!=undefined && frijol.lifetime===580 ){
    disparo=false;
  }
}



function spawnClouds(){
       

  if (frameCount % 60 === 0) {
      cloud = createSprite(2340,220,40,10);
      cloud.y = Math.round(random(-25,800));

       //asignar tiempo de vida a la variable
      cloud.lifetime = 820;
      
      var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: cloud.addImage(cloudImage1);
              break;
      case 2: cloud.addImage(cloudImage2);
              break;
      case 3: cloud.addImage(cloudImage3);
              break;

      default: break;
    }
    cloud.scale = 0.5;
    cloud.velocityX = -3;
  }

 segundo = segundo + Math.round(getFrameRate()/100);



}
    function keyPressed() {

      if(this.keyIsDown(83) && totopo.y <780 && totopo.y >30 ) {
        totopo.y += 5;
        }
    
      if(this.keyIsDown(87) && totopo.y <780 && totopo.y >30 ) {
        totopo.y = totopo.y -5;
        }
      if(this.keyIsDown(65) && totopo.x <2320 && totopo.x >15 ) {
        totopo.x = totopo.x -5;
        }
      if(this.keyIsDown(68) && totopo.x <2320 && totopo.x >15 ) {
        totopo.x = totopo.x +5;
        }
      if(this.keyIsDown(32) && disparo==false) {

        frijol = createSprite(totopo.x,totopo.y,totopo.h,totopo.w);
        frijol.addAnimation("frijol", frijolImg);
        totopo.addAnimation("flying", totopoImg);
        frijol.velocityX = 10;
        frijol.lifetime=600;
        disparo=true;

      
        }

  }

function diseñoDeTotopo(){

  totopo = createSprite(50,300,50,50);
  totopo.addAnimation("flying", totopoImg);
  //totopo.scale = 0.5;



}
