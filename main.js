noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas = createCanvas(550, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" +leftWristX+ "rightWristX =" +rightWristX+ "difference =" +difference);
    }
}

function draw(){
    background("#800000");
    document.getElementById("text").innerHTML = "Width and Height of the Text will be" +difference+ "px";
    textSize(difference);
    fill("#00FFFF");
    text("Navreet", 50, 400);
}
