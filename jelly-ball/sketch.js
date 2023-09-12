// Coding Train / Daniel Shiffman

const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior } = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;

let particles = [];
let eyes = [];
let springs = [];

let showSprings = false;


// this function show springs on pressing spacebar//
function keyPressed() {                           //
  if (key == ' ') {                               //
    showSprings = !showSprings;                   //
  }                                               //
}                                                 //
//================================================//


function setup() {
  createCanvas(windowWidth,windowHeight);
  physics = new VerletPhysics2D();
  let bounds = new Rect(0, 0, width, height);
  physics.setWorldBounds(bounds);
  physics.addBehavior(new GravityBehavior(new Vec2D(0,1)))

  // create particles here ==========================================//
  particles.push(new Particle(50, 100));                             //
  particles.push(new Particle(52, 115));                             //
  particles.push(new Particle(59, 129));                             //
  particles.push(new Particle(70, 140));                             //
  particles.push(new Particle(84, 147));                             //
  particles.push(new Particle(100, 150));                            //
  particles.push(new Particle(115, 147));                            //
  particles.push(new Particle(129, 140));                            //
  particles.push(new Particle(140, 129));                            //
  particles.push(new Particle(147, 115));                            //
  particles.push(new Particle(150, 100));                            //
  particles.push(new Particle(147, 84));                             //
  particles.push(new Particle(140, 70));                             //
  particles.push(new Particle(129, 59));                             //
  particles.push(new Particle(115, 52));                             //
  particles.push(new Particle(100, 50));                             //
  particles.push(new Particle(84, 52));                              //
  particles.push(new Particle(70, 59));                              //
  particles.push(new Particle(59, 70));                              //
  particles.push(new Particle(52, 84));                              //
  eyes.push(new Particle(100, 100));                                 //
  //=================================================================//

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      if (i !== j) {
        let a = particles[i];
        let b = particles[j];
        springs.push(new Spring(a, b, 0.01));
      }
    }
  }  

  for (let particle of particles) {
    springs.push(new Spring(particle, eyes[0], 0.001));
  }

}

function draw() {
  background(43, 48, 61);
  physics.update();  
  
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(0, 255, 98)


  fill(0, 255, 98);
  if (showSprings) fill(0, 255, 98, 100);
  strokeWeight(0)
  beginShape();
  for (let particle of particles) {
    vertex(particle.x, particle.y);
  }  
  endShape(CLOSE);


  if (showSprings) {
    for (let spring of springs) {
      spring.show();
    }
  }


  if (mouseIsPressed) {
    eyes[0].lock();
    eyes[0].x = mouseX;
    eyes[0].y = mouseY;
    eyes[0].unlock();
  }
}