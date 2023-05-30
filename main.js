track1="";
track2="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function preload(){
    track1=loadSound("music.mp3");
    track2=loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500);
}