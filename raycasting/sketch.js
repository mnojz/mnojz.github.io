let walls = [];
let ray;
let particle;

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundry(x1, y1, x2, y2);
  }
  walls.push(new Boundry(0, 0, width, 0));
  walls.push(new Boundry(width, 0, width, height));
  walls.push(new Boundry(width, height, 0, height));
  walls.push(new Boundry(0, height, 0, 0));

  particle = new Particle();
}

function draw() {
  background("#0b112c");
  for (let wall of walls) {
    wall.show();
  }
  particle.show();
  particle.update(mouseX, mouseY);
  particle.look(walls);
}
