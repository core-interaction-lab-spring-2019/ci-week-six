var ellipseDiameter = 200;
var ellipseRandom;

function myFunction() {
  document.getElementById("myH2").style.color = "#orange";
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseRandom = random(1, ellipseDiameter);

}

function draw() {

   if (mouseIsPressed) {
       fill('#fae');
     } else {
       fill(20, 20, 60, 60);
     }
     ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);




}
