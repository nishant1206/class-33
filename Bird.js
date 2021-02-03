class Bird extends BaseClass {
    constructor(x, y, img) {
        super(x, y, 50, 50);
        /* this.b1 = loadImage("sprites/bird.png");
        this.b2 = loadImage("sprites/bird2.jpg");
        this.b3 = loadImage("sprites/bird3.png");
        this.b4 = loadImage("sprites/bird4.png"); */
        this.image = img;
        this.image2 = loadImage("sprites/smoke.png");
        this.arr = [];
    }

    display() {
        /* var r = Math.round(random(1, 4));
        switch (r) {
            case 1:
                this.image=thi
        } */
        super.display();
        push();
        var p = this.body.position;
        if (this.body.velocity.x > 10 && this.body.position.x > 220) {
            var arr_2 = [p.x, p.y];
            this.arr.push(arr_2);
        }
        for (var i = 0; i < this.arr.length; i = i + 2) {
            image(this.image2, this.arr[i][0], this.arr[i][1]);
        }
        pop();
    }
}