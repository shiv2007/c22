const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone, pokemon;
var backgroundImg, aish;
var ball, slingShot;

function preload() {
    backgroundImg = loadImage("grou.png");
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    aish = new Aish(150, 305, 350, 300);

    stone = new Box(810, 420, 70, 70);
    pokemon = new Pig(700, 450);
    pokemon2 = new Pig(920, 450)
    log1 = new Log(810, 360, 300, PI / 2);

    stone3 = new Box(700, 340, 70, 70);
    stone4 = new Box(920, 340, 70, 70);
    pokemon3 = new Pig(810, 320);
    pokemon4 = new Pig(700, 220);
    pokemon5 = new Pig(920, 220);
    pokemon6 = new Pig(810, 120);



    log3 = new Log(810, 280, 300, PI / 2);

    stone5 = new Box(810, 260, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    log6 = new Log(810, 180, 300, PI / 2);


    ball = new Bird(200, 200);

    slingshot = new SlingShot(ball.body, { x: 200, y: 200 });
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    stone.display();
    ground.display();
    pokemon.display();
    pokemon2.display();
    log1.display();

    stone3.display();
    stone4.display();
    pokemon3.display();
    log3.display();
    pokemon4.display();
    pokemon5.display();
    pokemon6.display();

    stone5.display();
    log4.display();
    log5.display();
    log6.display();

    ball.display();
    aish.display();
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}


function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32 && ball.body.speed < 1) {
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, { x: 200, y: 50 });
        slingshot.attach(ball.body);
    }
}

async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if (hour <= 0600 && hour >= 1900) {
        bg = "grou.png";
    } else {
        bg = "school.jpeg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}