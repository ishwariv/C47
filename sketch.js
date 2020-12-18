var snake, snakeImg;
var bg;
var apple, appleImg;

function preload(){
    snakeImg=loadImage("snake.png");
    appleImg=loadImage("apple.png");
    bg=loadImage("bg.jpg");
}

function setup(){
 createCanvas(400,400);
 snake = createSprite(50,350,20,20);
 snake.addImage(snakeImg);

 apple = createSprite(350,210,20,20);
 apple.addImage(appleImg);
 apple.scale=0.075;
}

function draw(){
    background(bg);

    if(keyDown(RIGHT_ARROW)){
        snake.x=snake.x+10;
    }
    if(keyDown(UP_ARROW)){
        snake.y=snake.y-10;
    }
    drawSprites();
}