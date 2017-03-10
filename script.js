var newWidth = 35;
var newHeight = 35;

//if you have a specific background color with the same rgb then you can just write it out one time 
function setup(){
    createCanvas(600,400);
    background(66, 134, 244);
    
}

//draw function loops forever
function draw(){
    fill(13, 7, 181)
    ellipse(180,95,115,115)
    ellipse(480,95,115,115)
    fill(31, 242, 242)
    rect(344,120,77,111);
    rect(298,198,100,99)
    stroke(166, 209, 12)
    strokeWeight(12);
    line(33,220,34,34);
    line(34,44,130,44);
    line(136,220,34,34);
}