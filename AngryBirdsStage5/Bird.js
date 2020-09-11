class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,200,200);
    this.image = loadImage("sprites/anchor.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
