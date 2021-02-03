class Pig extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("sprites/enemy.png");
        this.vispig = 255;
    }
    display() {
        if (this.body.speed < 3) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.vispig = this.vispig - 2;
            tint(255, this.vispig);
            var p = this.body.position;
            image(this.image, p.x, p.y, 50, 50);
            pop();
        }
    }
    Score() {
        if (this.vispig < 0 && this.vispig > -50) {
            score = score + 5;
        }
    }
};