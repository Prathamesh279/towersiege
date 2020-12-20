const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block ;
var block1;
var block2; 
var block3 ;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block = new ground(20,20,20,20);
    block1 = new ground(20,20,20,20);
    block2 = new ground(20,20,20,20);
    block3 = new ground(20,20,20,20);
    block4 = new ground(20,20,20,20);
    block5 = new ground(20,20,20,20);
    block6 = new ground(20,20,20,20);
    block7 = new ground(20,20,20,20);
    block8 = new ground(20,20,20,20);
    block9 = new ground(20,20,20,20);
    block10 = new ground(20,20,20,20);
    block11 = new ground(20,20,20,20);
    block12 = new ground(20,20,20,20);
    
} 

function draw(){
    background("black");
    Engine.update(engine);

    block.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    
}

