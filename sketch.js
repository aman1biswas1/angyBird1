const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1
var log1
var bird1
function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(750,730)
    box1 = new Box(700,730,60,60);
    box2 = new Box(800,730,60,60);
    log1 = new Log(750, 670, 210, PI/2)
    pig2 = new Pig(750,630)
    box3 = new Box(700,630,60,60);
    box4 = new Box(800,630,60,60);
    box5 = new Box(750,530,60,60)
    log2 = new Log(750, 570, 230, PI/2)
    log3 = new Log(730, 470, 100, PI/6)
    log4 = new Log(775, 470, 100, -PI/6)
    bird1 = new Bird(100,730)
    ground = new Ground(750,height,1500,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird1.display();
    ground.display();
}