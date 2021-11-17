img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#008000");
    text("Dog", 45, 75);
    noFill();
    stroke("#008000");
    rect(30, 60, 400, 300);
}