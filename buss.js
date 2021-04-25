console.log("bummer");
ImG = "";

status = "";
coco = [];

function preload(){
    ImG = loadImage("randombuss.jfif");
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center()

    coco = ml5.objectDetector("cocossd",modelLoaded);

}
function modelLoaded(){
    console.log("mymdoelisready");
    modeL.detect(ImG,gotResult);
    status = "yes";
}

function gotResult(error, results){
    if (error){
    console.log(error);
 }
    console.log(results); 
    coco = results;
}

function draw(){

    image(ImG,0,0,500,350);

    if(status != ""){
        for(i=0; i < coco.length; i++){

            mypercent = floor(coco[i].confidence*100) + "%";

            fill("red");
            text(coco[i].label + " " + mypercent,coco[i].x + 15,coco[i].y + 15);
            noFill();
            stroke("red");
            rect(coco[i].x,coco[i].y,coco[i].width,coco[i].height);

            document.getElementById("isItumcheckingifimgornotyesimgnookay").innerHTML = "Iseeitnowhorrayifthismessageappearedthenimadenoeerroeinthecodeyay";

        }
    }
}