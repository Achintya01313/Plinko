
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {

  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  world= engine.world;

}

function draw() {

  background(255,255,255);  
    
  if(frameCount%90===0){

    particles.push(newParticle(random(width/2-10, width/2+10),10,10))
  
  }
  
  ground= new Ground(200,780,60,10)

  drawSprites();

}