var  newWidth = 50;
var newHeight = 50;

// setup function executes once
function setup(){
    createCanvas(600,400);
     background(0);
}

// draw function loops forever
function draw(){
    // background(50);
    if(mouseIsPressed){
       fill(255,0,255,50);
       ellipse(mouseX,mouseY,newWidth,newHeight);
        
    }
  
}