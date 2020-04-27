let uy, uz, fy, fz;
//let dalek;
let bibik;
let tree;
let font;

function preload(){
  //dalek = loadModel('assets/bb8.obj', true);
  tree = loadModel('assets/Halloween_Pumpkin.obj',true);
  soundFormats('mp3', 'ogg');
  bibik = loadSound('assets/ghost duet.mp3');
  font = loadFont('assets/college.ttf');
  song1 = bibik;

}



function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);

//slider_uy = createSlider(-90, 90, 0);
//slider_uy.position(10, 10);
slider_uz = createSlider(-90, 90, 0);
slider_uz.position(10, 30);
song1.play();

}

let upper_yrot = 0; 
let upper_zrot = 0;
let leg_lrot = 0;
let leg_rrot = 0;

function draw() {
background(120,0,10);
textFont(font);
textSize(18);
text('A Lonely Pumpkin Man', -100, 250);

lights();

upper_yrot = radians(mouseX);
upper_zrot = radians(slider_uz.value());
leg_lrot = 
leg_rrot =

rotateX(radians(70));
//pumpkin head
push();
scale(1);   
//translate(0,30,110);
translate(0,30,110);
noStroke();
rotateX(radians(100));
//ambientLight(300,90,0);
//ambientMaterial(120);
fill(255,140,0);
model(tree); 
pop();  

//body
push();
noStroke();
ambientLight(50,150,10);
ambientMaterial(100);
translate(0,40,-20);
box(100,100,130);
pop();

push();
noStroke();
ambientLight(10,0,100);
ambientMaterial(1);
translate(-20,200,130);
rotateX(radians(100));
sphere(5);
pop();

push();
noStroke();
translate(20,200,130);
ambientLight(30,0,100);
ambientMaterial(10);
rotateX(radians(100));
sphere(5);
pop();

push();
noStroke();
//ambientLight(220,50,0);
//ambientMaterial(150);
translate(-30,50,-120);
fill(255,140,0);
//transformAndRnderRobotArm(yrot, zrot)
box(40,40,70);
pop();

push();
noStroke();
//ambientLight(220,50,0);
//ambientMaterial(150);
translate(30,50,-120);
fill(255,140,0);
//transformAndRnderRobotArm(yrot, zrot)
box(40,40,70);
pop();

push();
// upper arm
fill(255,140,0); // magenta
translate(-65,70,10);
transformAndRnderRobotArm(upper_yrot, upper_zrot);
box(20, 20, 80);
pop();
// forearm
/*
push();
fill(0, 255, 255); // cyan
translate(-50,70,-71);
transformAndRnderRobotArm(forearm_yrot, forearm_zrot);
pop();
*/
push();
fill(255,140,0);
translate(65,70,10);
transformAndRnderRobotArm(upper_yrot, upper_zrot);
//transformAndRnderRobotArm(yrot,zrot);
box(20, 20, 80); 
pop();
// draw a grid on xy plane

function transformAndRnderRobotArm(yrot, zrot) {
strokeWeight(1);
stroke(255, 0, 0);
//line(0, 0, 0, 300, 0, 0); // visualize x-rotation axis
rotateY(yrot);
stroke(0, 255, 0);
//line(0, 0, 0, 0, 300, 0); // visualize y-rotation axis
rotateZ(zrot);
stroke(0, 0, 255);
//line(0, 0, 0, 0, 0, 300); // visualize z-rotation axis
noStroke();
translate(0, 0, 50);
//box(30, 30, 100); 
// The above axis visualization is to show about which axis
// each rotation rotates in euler angle rotation
}
}
