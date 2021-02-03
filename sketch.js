const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingShot;
var game_state = "init";
var score = 0;
var scoreColor = "green";
var birds_arr = [];

var b1;
var b2;
var b3;
var b4;

function preload() {
    change_bg();
    b1 = loadImage("sprites/bird.png");
    b2 = loadImage("sprites/bird2.png");
    b3 = loadImage("sprites/bird3.png");
    b4 = loadImage("sprites/bird4.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(0, height, windowWidth * 2, 20);
    platform = new Ground(150, 605, 300, 170);

    box1 = new Box(700, 620, 70, 70);
    box2 = new Box(920, 620, 70, 70);
    pig1 = new Pig(810, 650);
    log1 = new Log(810, 560, 300, PI / 2);

    box3 = new Box(700, 540, 70, 70);
    box4 = new Box(920, 540, 70, 70);
    pig3 = new Pig(810, 520);

    log3 = new Log(810, 480, 300, PI / 2);

    box5 = new Box(810, 460, 70, 70);
    log4 = new Log(760, 420, 150, PI / 7);
    log5 = new Log(870, 420, 150, -PI / 7);

    bird = new Bird(200, 370, b1);
    bird2 = new Bird(150, 550, b2);
    bird3 = new Bird(100, 550, b3);
    bird4 = new Bird(50, 550, b4);

    birds_arr.push(bird4);
    birds_arr.push(bird3);
    birds_arr.push(bird2);
    birds_arr.push(bird);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body, { x: 200, y: 360 });
}

function draw() {
    if (backgroundImg) {
        background(backgroundImg);
    }
    Engine.update(engine);
    strokeWeight(4);
    pig1.Score();
    pig3.Score();
    textSize(25);
    fill(scoreColor);
    text("Your Score is :- " + score, windowWidth - 500, 50);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();

    platform.display();
    //log6.display();
    slingshot.display();
    // console.log("WindowWidth-->" + window.innerWidth + " windowHeight-->" + window.innerHeight);1366 657
}

function mouseDragged() {
    if (game_state != "fly") {
        Matter.Body.setPosition(birds_arr[birds_arr.length - 1].body, { x: mouseX, y: mouseY });
        Matter.Body.applyForce(birds_arr[birds_arr.length - 1].body, birds_arr[birds_arr.length - 1].body.position, { x: 10, y: -10 });
    }
}


function mouseReleased() {
    slingshot.fly();
    game_state = "fly";
    birds_arr.pop();
}

function keyPressed() {
    if (keyCode == 32) {
        if (birds_arr.length >= 0) {
            Matter.Body.setPosition(birds_arr[birds_arr.length - 1].body, { x: 200, y: 370 });
            slingshot.attach(birds_arr[birds_arr.length - 1].body);
            // Matter.Body.setAngle(birds_arr[birds_arr.length - 1].body, PI / 2);
            bird.arr = [];
            bird2.arr = [];
            bird3.arr = [];
            bird4.arr = [];
            game_state = "init";
        }
    }
}

async function change_bg() {
    var loadtime = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var timejson = await loadtime.json();
    var t = timejson.datetime;
    var hr = t.slice(11, 13);
    if (hr > 6 && hr < 17) {
        bg = "sprites/bg.png";
        scoreColor = "green";
    } else {
        bg = "sprites/bg2.jpg";
        scoreColor = "white";
    }
    backgroundImg = loadImage(bg);
}