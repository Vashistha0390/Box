const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2 ;
var pig1, pig2;
var log1,log2,log3,log4;
var birid

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pig2 = new Pig(300,100)
    pig1 = new Pig(200,200)
    
    box1 = new Box(700,320,70,70)
    box2 = new Box(920,320,70,70)
    
    ground = new Ground(600,400,1200,10)
    console.log(ground);

    log1 = new Log(300,60,300,PI/2)
    log2 = new Log(50,50,20,PI/7)
    log3 = new Log(200,200,20,PI/5.3)
    log4 = new Log(300,100,20,PI/12)

    birid = new Bird(200,400)

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    

box1.display() 
box2.display()

ground.display()

pig1.display()
pig2.display()

log1.display()
log2.display()
log3.display()
log4.display()

birid.display()
}