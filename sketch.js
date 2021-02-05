let angle = 0;
let arrowImg;
let video;

function preload(){
    arrowImg = loadImage("images/arrow.png");
}

function setup(){
    createCanvas(800, 600, WEBGL);

    video = createCapture(VIDEO);
    video.size(320, 320);
    video.hide();
}

function draw(){
    // image(video);
    // var directMouseX = mouseX - width/2;
    // var directMouseY = mouseY - height/2;

    ambientLight(255);
    // directionalLight(255, 80, 90, -directMouseX, -directMouseY, 0);
    background(200);

    // fill(255);
    translate(0, 0);
    rectMode(CENTER);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    // fill(255, 80, 90);
    // rect(0, 0, 150, 150);
    noStroke();
    // specularMaterial(255);
    texture(video);
    box(320, 320, 320);
    angle += 0.7;
}