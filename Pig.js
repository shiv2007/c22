class Pig extends BaseClass {
    constructor(x, y) {
        super(x, y, 80, 80);
        this.image = choseEnemy();
        this.Visiblity = 255;
    }

    display() {
        //console.log(this.body.speed);
        if (this.body.speed < 10) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            pop();
        }
    }

    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1005) {
            score++;
        }
    }

};

function choseEnemy() {
    var pikachu = loadImage("pika.png");
    var syduck = loadImage("syd.png");
    var chikorita = loadImage("chikori.png");
    var charmendar = loadImage("char.png");
    var bulbasor = loadImage("bulba.png");
    var jigglypuf = loadImage("gilly.png");
    var arrayOf = [pikachu, syduck, chikorita, charmendar, bulbasor, jigglypuf];
    var index = Math.round(random(0, arrayOf.length - 1));
    return arrayOf[index];
}