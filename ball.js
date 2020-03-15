class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/block_blue.png");
  }

  display() {
    if(pendulum==="osc"){
      this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    } else if(pendulum=="stop"){
      this.body.position.x = 200;
    this.body.position.y = 300;
    }
    super.display();
  }
}
