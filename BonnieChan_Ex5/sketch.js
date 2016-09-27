function setup() {
   createCanvas(1000, 1000);
  background(160,153,200);// ground(grass)
  
  
  
}
 function draw () {
 monsterChris1();
 monsterBonnie();
 monsterBonnie1();
 
  if (mouseIsPressed){ //if mouse is clicked another monster will show up
   monsterChris ();
  }
 }
 
 
    
 function monsterBonnie1() {
  Blegs( 770, 300,50,100);
  arm(900, 180);
  tail(750, 250);
  if(mouseIsPressed) {
  Bhead(820,100, 150,150);
 }

  Bbody( 750,150);

  }  
    
    
    
function monsterBonnie () {
 Blegs(130, 755, 50, 100);
 Barms(10,600);
 Bbody(100,600);
  if(mouseIsPressed) {

 Btongue(150,550, 0);
 } else {
  Btongue( 180,550, 50);
 }
 Bhead(170, 550, 120, 100);

}



function monsterChris1 (mouselocX, mouselocY) {
 Blegs(530,590 ,30, 100);
 body (600,550);
 Bteeth(590 ,320 );
 Bhead(600 ,420 ,150,150);
 arm(655, 480, 530, 500 );
 apple(640,400 );
 tail (505,550);
}

function monsterChris () {
 body(250,270);
 arm(308, 201);
 apple(180, 220);
 tail(160, 260);
 head();
 knife();
}

//Bonnie's Monster
function Blegs (locX, locY,locW, locH) { //for legs and feet
 stroke(0);
strokeWeight(3);
fill(0,255,0);
rect( locX, locY, locW, locH);//legs
rect( locX +100, locY, locW, locH);

fill( 162, 98, 255);
ellipse( locX + 25, locY + 100, locW + 20, locH - 120); //feet
ellipse( locX + 125, locY + 100, locW +20, locH - 120);
/*
line( 350, 580, 360, 579);// toe lines for left foot
line( 355, 585, 370, 584);
line( 360, 591, 375, 589);

line( 450, 580, 460, 579);//toe lines for right foot
line( 455, 585, 470, 584);
line( 460, 591, 475, 589);
*/
 
}

function Barms (armsX, armsY) { //for arms and hands
 noStroke();
 fill(255, 25, 128);
quad( armsX, armsY, armsX + 85, armsY, armsX + 110, armsY + 35, armsX - 25, armsY + 35 );//arms
quad( armsX + 250, armsY, armsX +335, armsY, armsX + 360, armsY + 35, armsX + 235, armsY + 35);
fill(255);
 if (mouseIsPressed) {
  fill(0);
 
 }
  
triangle( armsX - 80, armsY - 15, armsX - 60, armsY- 20, armsX - 60, armsY); //fingers
triangle( armsX - 80, armsY + 10, armsX - 60, armsY, armsX - 55, armsY + 25);
triangle( armsX - 70, armsY + 40, armsX - 55, armsY + 20, armsX - 35, armsY + 30);
triangle( armsX + 330, armsY - 20, armsX + 370, armsY - 35, armsX + 350, armsY);
triangle( armsX + 360, armsY - 10, armsX +390, armsY - 30, armsX + 380, armsY + 10);
triangle( armsX + 380, armsY, armsX +410, armsY- 26, armsX + 390, armsY + 20);
fill(255,241,48);
arc( armsX - 25, armsY, 75, 75, 0, PI+QUARTER_PI, CHORD); //hands
arc( armsX + 360, armsY, 75, 75, 0, PI+QUARTER_PI, CHORD);
}

function Bbody (bodyX, bodyY) { // for body
 fill(255,0,0);
quad(bodyX,bodyY,bodyX + 150,bodyY,bodyX + 200,bodyY + 150,bodyX, bodyY + 200);

}

function Bhorn (hornX, hornY) { //for horns
 fill(0,0,255);
triangle( hornX,hornY,hornX - 20,hornY- 75,hornX + 80,hornY);
fill( 0, 0, 255);
triangle( hornX + 55, hornY - 75, hornX + 55, hornY-130, hornX + 100, hornY- 75);
}

function Bteeth (teethX, teethY) { //for teeth
 noStroke();
 for ( var x = teethX; x <= teethX+60; x+=10) { //teeth bottom
fill(255);
triangle( x , teethY + 122, x +10, teethY + 82, x +15, teethY + 112);
for ( var y = teethY; y <= teethY + 62; y+=10) { // teeth top
 fill ( 255);
 triangle( teethX, y + 25, teethX + 20, y + 35, teethX, y + 45);
  }
 }
}

function Btongue (tonguex, tonguey, tonguew) {
 fill(255, 102, 93);
quad( tonguex + tonguew, tonguey, (tonguex + 150) + tonguew, tonguey - 70, tonguex + 140 + tonguew, tonguey - 60, tonguex - tonguew, tonguey + 10);
}

function Bhead (headX, headY, headW, headH) {
 noStroke();
 fill(255,167,24);
 if (mouseX < 500) {
  fill(0, 75, 180);
 }
arc(headX, headY, headW, headH,0, PI+HALF_PI, PIE);
fill(255);
ellipse( headX - 20, headY - 50, headW - 130, headH - 140); // eye
fill(0);
ellipse ( headX - 20, headY - 50, headW - 140, headH - 140); // pupil
}






//Chris's Monster
function head () { //for full head including ears and nose
   strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  triangle(190, 75, 225, 95, 195, 123);// right ear
  triangle(310, 75, 275, 95, 305, 123);// left ear
  ellipse(250, 150, 120, 120);// head
  noStroke();
  triangle(220, 135, 280, 135, 250, 145);
  ellipse(235, 160, 40, 40);
  ellipse(265, 160, 40, 40);//face
  strokeWeight(1);
  stroke(0);
  line(233, 155, 180, 135);
  line(233, 157, 175, 150);
  line(233, 160, 180, 165); 
  line(267, 155, 320, 135);
  line(267, 157, 325, 150);
  line(267, 160, 320, 165);// beard
  
  noStroke();
  fill(80);
  triangle(250, 170, 230, 180, 270, 180);//mouth..maybe
  
  strokeWeight(8);
  stroke(50);
  point(224,140);
  point(276,140);// eye
  stroke(250, 8, 36);
  strokeWeight(3);
  line(232, 130, 216, 150);
  line(226, 130, 232, 138);
  line(222, 150, 216, 144);// scar
}

function body (x, y, red, h) {
strokeWeight(1);
  stroke(0);
    fill(178, 174, 147);
  arc(x, y, 160, 200, -0.95, 4.1, OPEN);// body
  noStroke();
  fill(250, 248, 237);
   if(mouseIsPressed) {
    fill(255,0,0);
   }
  ellipse(x , y , 80 , 100 );//belly
  strokeWeight(5);
  stroke(245, 35, 220);
  line(x-12, y- 12, x +12, y +12);
  line(x +12, y-12, x - 12, y +12);// a monster should have its weekness
}

function arm (rightarmX, rightarmY, leftarmX, leftarmY) {
 strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  quad(rightarmX, rightarmY, rightarmX + 58, rightarmY + 50, rightarmX + 54, rightarmY + 67, rightarmX + 17, rightarmY + 34);
  ellipse(rightarmX + 62, rightarmY + 60, 20, 20);// left hand
 fill(178, 174, 147);
  ellipse(leftarmX, leftarmY, 20, 20);// right hand
 
}

function apple (appleX, appleY) {
  fill(255, 0, 0);
  ellipse(appleX, appleY, 40, 40);
  noFill();
  arc(appleX - 2, appleY - 25, 30, 30, 1, 2);
  arc(appleX + 12, appleY - 18, 30, 30, 2.7, 4);
  // an apple in its right hand!
  // show that it is a field mouse
  
}

function tail (tailX, tailY) {
   noFill();
  strokeWeight(15);
  stroke(178, 174, 147);
  arc(tailX, tailY, 90, 70, 1, 3.6);// tail
  noStroke();
  fill(178, 174, 147);
  triangle(tailX - 55, tailY-21, tailX-24, tailY - 8, tailX -28, tailY-35);
}

function knife () {
noFill();
strokeWeight(10);
stroke(131, 125, 102);
line(370, 261, 390, 248);
strokeWeight(1);
stroke(0);
fill(222, 222, 222);
triangle(389, 243, 403, 258, 430, 218);// a knife
}