const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog,chain1;
var pendulum = "stop";
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    constrainedLog = new Log(200,200,20,PI/2);
    bird = new Bird(100,100);
    chain1 = new Chain(constrainedLog.body,bird.body);
}

function draw(){
    background("rgb(230,230,255)");
    Engine.update(engine);
    if(keyCode==32 && pendulum == "stop"){
        pendulum = "osc";
    }if(keyCode==ENTER && pendulum == "osc"){
        pendulum = "stop";
    }
    
    text("space to control with mouse",200,40);
    text("enter to stop",200,80);
    console.log(pendulum);
    console.log(keyCode);
    constrainedLog.display();
    bird.display();
    chain1.display();
}
