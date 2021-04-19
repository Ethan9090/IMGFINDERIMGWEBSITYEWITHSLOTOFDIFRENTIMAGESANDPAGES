coco = "";

buss = "";

function preload(){
    buss = loadImage("randombus.jfif");
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center()

    coco = ml5.objectDetector("cocossd",modelLoaded);

}