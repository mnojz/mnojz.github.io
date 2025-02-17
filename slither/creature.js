class creature {
  constructor() {
    this.body = [];
    this.len = 28;
    this.speed = 3;
    this.r1 = 30;
    for (let i = 0; i < this.len; i++) {
      let r = this.r1 - i * (this.r1 / (this.len - 1));
      this.body.push(
        new segment(
          canvas.width / 2 - i * this.r1,
          canvas.height / 2,
          0,
          r * 0.8,
          r,
          176 + (54 / this.len) * i
        )
      );
    }
  }

  update(mX, mY) {
    let head = this.body[0];

    if (isNaN(mX) || isNaN(mY)) {
      return;
    }

    let a = Math.atan2(mY - parseFloat(head.posY), mX - parseFloat(head.posX));

    head.angle = a;
    head.posX += this.speed * Math.cos(a);
    head.posY += this.speed * Math.sin(a);

    for (let i = 1; i < this.len; i++) {
      let c = this.body[i]; //current segment
      let p = this.body[i - 1]; //previous segment
      c.update(p);
    }
  }

  display() {
    let head = this.body[0];
    for (let i = 0; i < this.len; i++) {
      this.body[i].display();
    }
  }
}
