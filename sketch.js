
const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
  var engine,world;
   var ground,ground_options;




var box,box_options;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
     world = engine.world;
     ground_options = { 
       isStatic : true
        };
 ground = Bodies.rectangle(400,380,800,20,ground_options);
   World.add(world,ground);
       box_options = { 
       restitution : 1
        };
 box = Bodies.rectangle(400,50,50,50,box_options);
   World.add(world,box);
 console.log(box);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
   rectMode(CENTER); 
   rect(ground.position.x,ground.position.y,800,20)
    rectMode(CENTER); 
   rect(box.position.x,box.position.y,50,50)
}