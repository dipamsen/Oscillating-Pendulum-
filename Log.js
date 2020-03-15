class Log {
  constructor(x,y,height,angle){
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = height;
        World.add(world, this.body);
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}