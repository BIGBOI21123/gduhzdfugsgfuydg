img = "";
Status = "";

function setup() {
    canvas = createCanvas(800, 500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("check").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectdetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 800, 500);
    fill("red");
    stroke("red");
    text("Dog",80,80);
    noFill();
    rect(70,60,650,410);

    text("Cat",380,110);
    rect(370,90,350,390);
}