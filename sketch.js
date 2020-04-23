const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var chain;

var recta,ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    recta = new Recte(50,200,10,PI/2);
    ball = new Ball(100,100);
    chain = new Chain(recta.body,ball.body);
    


}

function draw(){
    background(0);
    Engine.update(engine);
    
    recta.display();
    chain.display();
}
