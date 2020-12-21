var snake, snakeImg;
var bg;
var apple, appleImg;
var knifeSound;
var appleGrp;

function preload(){
    snakeImg=loadImage("snake.png");
    appleImg=loadImage("apple.png");
    bg=loadImage("bg.jpg");
    knifeSound=loadSound("knifeSound.mp3");
}

function setup(){
 createCanvas(600,600);
 snake = createSprite(50,430,20,20);
 snake.addImage(snakeImg);
 snake.scale=0.75;
 appleGrp=new Group();
 snake.setCollider("rectangle",0,0,snake.width,snake.height-40);
 snake.debug=true;
 //apple.debug=true;
}

function draw(){
    background(bg);

    if(keyDown(RIGHT_ARROW)){
        snake.x=snake.x+10;
    }
    if(keyDown(UP_ARROW)){
        snake.y=snake.y-10;
    }
    if(keyDown(DOWN_ARROW)){
        snake.y=snake.y+10;
    }
    if(keyDown(LEFT_ARROW)){
        snake.x=snake.x-10;
    }
    spawnApples();
    eatApples();
    drawSprites();
}

function spawnApples(){
    if(frameCount%100===0){
        apple = createSprite(350,327,20,20);
        apple.x=Math.round(random(100,540));
        apple.y=Math.round(random(40,530));
        apple.addImage(appleImg);
        apple.scale=0.075;
        appleGrp.add(apple);
    }
}

function eatApples(){
    if(appleGrp.isTouching(snake)){
    appleGrp.destroyEach();
    //knifeSound.play();
    }
}