//Global Variables
var snake, snakeImg;
var bg;
var apple, appleImg;
var knifeSound;
var appleGrp;
var score=0;
var gameState=0;
var wall1, wall2, wall3, wall4;

//Images
function preload(){
    appleImg=loadImage("apple.png");
    bg=loadImage("bg.jpg");
}

function setup(){
 createCanvas(600,600);
 snake = createSprite(108,275,40,40);
 appleGrp=new Group();
 snake.setCollider("rectangle",0,0,40,40);
 snake.debug=true;
//-35,-140,-150,-350

 //walls
 wall1=createSprite(300,45,520,10);
 wall2=createSprite(300,555,520,10);
 wall3=createSprite(45,300,10,520);
 wall4=createSprite(555,300,10,520);

/* wall1.visible=false;
 wall2.visible=false;
 wall3.visible=false;
 wall4.visible=false;*/
}

function draw(){
    background(bg);

    //Directions
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
    if(keyDown(RIGHT_ARROW)||keyDown(LEFT_ARROW)||keyDown(UP_ARROW)||keyDown(DOWN_ARROW)){
        gameState=0;
        console.log(gameState);
    }
    if(gameState===0){
        spawnApples();
    }

    if(snake.x>555||snake.x<45){
        textFont('Georgia');
        fill(0);
        textSize(20);
        text("Game Over",250,200);
        gameState=1;
        console.log("Ha! Game Over"+gameState)
    }

    textFont('Georgia');
    fill(0);
    textSize(20);       
    text("Score: "+score,480,35);
    text("Hits: ",250,35);

eatApples();
drawSprites();
}

function spawnApples(){
    if(frameCount%150===0 && gameState===0){
        apple = createSprite(350,327,20,20);
        apple.x=Math.round(random(60,540));
        apple.y=Math.round(random(65,540));
        apple.addImage(appleImg);
        apple.scale=0.075;
        appleGrp.add(apple);
        appleGrp.setLifetimeEach(150);
    }
}

function eatApples(){
    if(appleGrp.isTouching(snake)){
    appleGrp.destroyEach();
    gameState=1;
    //knifeSound.play();
    score+=1;
    
    }
}