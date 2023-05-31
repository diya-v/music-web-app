track1="";
track2="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', getResult);
}

function preload(){
    track1=loadSound("music.mp3");
    track2=loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(results){
    console.log(results);
    if(results.length>0){
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("left wrist x="+leftWristX+" left wrist y="+leftWristY);
        console.log("right wrist x="+rightWristX+" right wrist y="+rightWristY);
    }

}