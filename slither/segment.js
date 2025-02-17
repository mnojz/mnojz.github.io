class segment {
  constructor(posX, posY, angle, distance, radius, hue) {
    this.posX = posX;
    this.posY = posY;
    this.angle = angle;
    this.distance = distance;
    this.radius = radius;
    this.hue = hue;
  }

  update(prev) {
    let a = Math.atan2(prev.posY - this.posY, prev.posX - this.posX);
    this.angle = a;
    let d = Math.sqrt(
      Math.pow(prev.posX - this.posX, 2) + Math.pow(prev.posY - this.posY, 2)
    );
    if (d > this.distance) {
      let delta = d - this.distance;
      this.posX += Math.cos(a) * delta;
      this.posY += Math.sin(a) * delta;
    }
  }

  display() {
    ctx.save();
    ctx.translate(this.posX, this.posY);
    ctx.rotate(this.angle);
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}
