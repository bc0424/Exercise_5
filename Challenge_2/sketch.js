  var LLscale = 0.4, RLscale = 0.4, LAscale = 0.4, RAscale = 0.4, Bscale = 0.4, Hscale = 0.4;
  var A = 500, B = 200;

function setup(){
createCanvas(1500,1500);
background(255);   //white background

}

function draw(){
  background(255);
  //the first MonsterA, You can change the scale of each part
  //use 1-6 to control head, body, leftleg, rightleg, leftarm, rightarm
  //it may be dismantled
  //remember to press another key to stop!!!!!
  //press 0 to reset
 
    if(mouseIsPressed){
 push();
 background(255);
 scale((mouseX/800 + mouseY/800)/2);
 monsterC(mouseX, mouseY);
 pop();
 
    }
  if(key === 0){
    background(255);
    LLscale = 0.4, RLscale = 0.4, LAscale = 0.4, RAscale = 0.4, Bscale = 0.4, Hscale = 0.4;
  }
  
  frameRate(0.1);
  if(key == 1){
    Hscale = Hscale + 0.01;
  }
  if(key == 2){
    Bscale = Bscale + 0.01;
  }
  if(key == 3){
    LLscale = LLscale + 0.01;
  }
  if(key == 4){
    RLscale = RLscale + 0.01;
  }
  if(key == 5){
    LAscale = LAscale + 0.01;
  }
  if(key == 6){
    RAscale = RAscale + 0.01;
  }
    monsterA(300, 300, LLscale, RLscale, LAscale, RAscale, Bscale, Hscale);
    
  //the second MonsterA, it will move randomly
  
    
    monsterA(A, B, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
     A += random(-10, 10);
     B += random(-10, 10);
  
      
  //the first MonsterB, You can move it with your mouse
    frameRate(30);
    var speedX;
    var speedY;
    speedX = (800 - mouseX) / 3;
    speedY = (800 - mouseY) / 3;
    var startX = 400;
    var startY = 400;
    monsterB(startX -= speedX, startY -= speedY , 1);
  
  //the second MonsterB, You can rotate it with your mouse pressed
  push();
  if(mouseIsPressed){
  var angel = map(mouseX, 0, width, - PI / 8, PI / 8);
  rotate(angel);
  }
  monsterB(300, 300, 0.5);
  pop();
  
   monsterBonnie1();
   monsterC(500, 800);
   monsterC(1000, 800 );
   if(key == 9) {
    centerX = centerX + 80;
    centerY = centerY + 30;
    } 
   

}
   
    


//JOYCE'S MONSTER
function monsterC(X, Y){
 armA(X - 160, Y - 30);
 armB(X - 160, Y + 30);
 face(X, Y);

}
function armA(AX, AY){
  
  //arms
  stroke(0);
  noFill();
  strokeWeight(15);
  curve(AX, AY, AX, AY, AX - 80, AY - 40, AX - 120, AY - 120);
  curve(AX, AY, AX - 80, AY - 40, AX - 120, AY - 120, AX - 120, AY - 120);
  //shoulder
  fill(100);
  strokeWeight(1);
  ellipse(AX, AY, 30, 30);
  //hand
  fill(180)
  quad(AX - 120, AY - 120, AX - 140, AY - 120, AX - 180, AY - 180, AX - 120, AY - 140);
}
function armB(BX, BY){
  //arm
  noFill();
  strokeWeight(15);
  curve(BX, BY, BX, BY, BX - 200, BY - 60, BX - 200, BY + 60);
  curve(BX, BY, BX - 200, BY - 60, BX - 200, BY + 60, BX - 200, BY + 60);
  //shoulder
  fill(100);
  strokeWeight(1);
  ellipse(BX, BY, 30, 30);
  //hand
  fill(180);
  quad(BX - 200, BY + 60, BX - 200, BY + 80, BX - 140, BY + 120, BX - 180, BY + 60);
  

}

function face(centerX, centerY){
   var a, b, c, d, e, f;
  a = 180;
  b = 180;
  c = 180;
  d = 180;
  e = 180;
  f = 180;
  //ANTENNA
  noFill();
  strokeWeight(10);
  arc(centerX + 180,centerY - 110,160,160,radians(180),radians(270));  //bendy thing
  fill(135,215,255);
  strokeWeight(1);
  ellipse(centerX + 180,centerY - 190,40,40);  //ball
  //NORMAL ARM
  fill(215,200,230);
  arc(centerX + 140, centerY + 30, 100, 100, radians(-135),radians(45),CHORD);
  //SPIKES
  fill(125,90,165);
  triangle(centerX - 120, centerY - 70, centerX - 160, centerY - 150, centerX - 80, centerY -110);//bottom
  triangle(centerX - 80, centerY - 110, centerX - 80, centerY - 190, centerX - 20, centerY - 130);//middle
  triangle(centerX - 20, centerY - 130, centerX, centerY - 230, centerX + 20, centerY - 130);
  //ROBOT FEET
  fill(140);
  triangle(centerX - 80, centerY + 90, centerX - 180, centerY + 150, centerX - 40, centerY + 130);
  //NORMAL FEET
  fill(215,200,230);
  ellipse(centerX + 100, centerY + 140, 120, 40);
  //ROBOT FACE
  fill(180);
  if(key == 'e'){
    fill(215, 200, 230);
  }
  if(key == 'r'){
    a = a +random(-75, 75);
    b = b +random(-75, 75);
    c = c +random(-75, 75);
    fill(a, b, c);
  }
  stroke(0);
  arc(centerX, centerY, 305, 305, radians(110),radians(290),CHORD);
  //outer eye
  fill(100);
  ellipse(centerX - 80, centerY - 30, 60, 60);
   
  fill(194,0,0);
  //inner eye
  strokeWeight(2);
  ellipse(centerX - 80, centerY - 30, 30, 30);
   if (key == 9){
    centerX = centerX + 80;
    centerY = centerY + 30;
   }
  //mouth
  rect(centerX - 80, centerY + 50, 100, 30);
  line(centerX - 60, centerY + 50, centerX - 60, centerY + 80);
  line(centerX - 40, centerY + 50, centerX - 40, centerY + 80);
  //NORMAL FACE
  fill(215,200,230);
   fill(215,200,230);
  if(key == 'e'){
  fill(180);}
  if(key == 'r'){
    d = d + random(-75, 40);
    e = e + random(-75, 55);
    f = f + random(-75, 25);
    fill(d, e, f);
  }
  strokeWeight(1);
  arc(centerX, centerY, 300, 300, radians(-70),radians(110),CHORD);
  //eye
  noFill();
  strokeWeight(4);
  arc(centerX + 80, centerY - 10, 60, 60, radians(200), radians(340));
  //mouth
  strokeWeight(3);
  arc(centerX, centerY, 180, 180, radians(30), radians(110));
  //blush
  strokeWeight(1);
  stroke(235,150,190);
  line(centerX + 60, centerY + 20, centerX + 80, centerY);
  line(centerX + 80, centerY + 20, centerX + 100, centerY);
  line(centerX + 100, centerY + 20, centerX + 120, centerY);
  
  
  }




//THE WHOLE FUNCTION 
function monsterA(X, Y, LLscale, RLscale, LAscale, RAscale, Bscale, Hscale){
  var Green = color(0, 255, 0);
  var Pink = color(255, 25, 128);
  var Red = color(255, 0, 0);
  var Blue = color(0, 0, 255);
  var Orange = color(255, 167, 24);
  leftarm(X - 90 * LAscale, Y + 10 * LAscale, LAscale, Pink);
  rightarm(X + 75 * RAscale, Y + 10 * RAscale, RAscale, Pink);
  leftleg(X - 65 * LLscale, Y + 40 * LLscale, LLscale, Green);
  rightleg(X + 35 * RLscale, Y + 40 * RLscale, RLscale, Green);
  body(X, Y, Bscale, Red);
  head(X - 25 * Hscale, Y - 150 * Hscale, Hscale, Orange, Blue);
  
}







//Leftleg
function leftleg(LLstartX, LLstartY, LLscale, LLcolor){
  stroke(0);
  strokeWeight(3);
  fill(LLcolor);
  rect(LLstartX - 25 * LLscale, LLstartY, 50 * LLscale, 150 * LLscale);
  //feet
  fill(162, 98, 255);
  ellipse( LLstartX + 5 * LLscale, LLstartY + 150 * LLscale, 70 * LLscale, 30 * LLscale);
  //toe
  line(LLstartX + 15 * LLscale, LLstartY + 140 * LLscale, LLstartX + 25 * LLscale, LLstartY + 139 * LLscale);
  line(LLstartX + 20 * LLscale, LLstartY + 145 * LLscale, LLstartX + 35 * LLscale, LLstartY + 144 * LLscale);
  line(LLstartX + 25 * LLscale, LLstartY + 151 * LLscale, LLstartX + 35 * LLscale, LLstartY + 149 * LLscale);
  }
  
//Rightleg
function rightleg(RLstartX, RLstartY, RLscale, RLcolor){
  stroke(0);
  strokeWeight(3);
  fill(RLcolor);
  rect(RLstartX - 25 * RLscale , RLstartY, 50 * RLscale, 150 * RLscale);
  //feet
  fill(162, 98, 255);
  ellipse( RLstartX + 5 * RLscale, RLstartY + 150 * RLscale, 70 * RLscale, 30 * RLscale);
  //toe
  line(RLstartX + 15 * RLscale, RLstartY + 140 * RLscale, RLstartX + 25 * RLscale, RLstartY + 139 * RLscale);
  line(RLstartX + 20 * RLscale, RLstartY + 145 * RLscale, RLstartX + 35 * RLscale, RLstartY + 144 * RLscale);
  line(RLstartX + 25 * RLscale, RLstartY + 151 * RLscale, RLstartX + 35 * RLscale, RLstartY + 149 * RLscale);
  }

//Leftarm
function leftarm(LAbodyX, LAbodyY, LAscale, LAcolor){
  stroke(0);
  strokeWeight(3);
  fill(LAcolor);
  quad(LAbodyX, LAbodyY, LAbodyX - 135 * LAscale, LAbodyY, LAbodyX - 110 * LAscale, LAbodyY - 35 * LAscale, LAbodyX - 25 * LAscale, LAbodyY - 35 * LAscale);
  //fingers
  fill(255);
  triangle( LAbodyX - 190 * LAscale, LAbodyY - 50 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 55 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 35 * LAscale);
  triangle( LAbodyX - 190 * LAscale, LAbodyY - 25 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 35 * LAscale, LAbodyX - 165 * LAscale, LAbodyY - 15 * LAscale);
  triangle( LAbodyX - 180 * LAscale, LAbodyY + 5 * LAscale, LAbodyX - 165 * LAscale, LAbodyY - 15 * LAscale, LAbodyX - 145 * LAscale, LAbodyY - 5 * LAscale);
  //hand
  fill(255, 241, 48);
  arc( LAbodyX - 135 * LAscale, LAbodyY - 35 * LAscale, 75 * LAscale, 75 * LAscale, 0, PI+QUARTER_PI, CHORD);
}
//Rightarm
function rightarm(RAbodyX, RAbodyY, RAscale, RAcolor){
  stroke(0);
  strokeWeight(3);
  fill(RAcolor);
  quad(RAbodyX, RAbodyY, RAbodyX + 135 * RAscale, RAbodyY, RAbodyX + 110 * RAscale, RAbodyY - 35 * RAscale, RAbodyX + 25 * RAscale, RAbodyY - 35 * RAscale);
  //fingers
  fill(255);
  triangle(RAbodyX + 95 * RAscale, RAbodyY - 55 * RAscale, RAbodyX + 125 * RAscale, RAbodyY - 70 * RAscale, RAbodyX + 115 * RAscale, RAbodyY - 35 * RAscale);
  triangle(RAbodyX + 115 * RAscale, RAbodyY - 45 * RAscale, RAbodyX + 145 * RAscale, RAbodyY - 65 * RAscale, RAbodyX + 135 * RAscale, RAbodyY - 25 * RAscale);
  triangle(RAbodyX + 135 * RAscale, RAbodyY - 35 * RAscale, RAbodyX + 165 * RAscale, RAbodyY - 61 * RAscale, RAbodyX + 150 * RAscale, RAbodyY - 15 * RAscale);
  //hand
  fill(255, 241, 48);
  arc(RAbodyX + 125 * RAscale, RAbodyY - 35 * RAscale, 75 * RAscale, 75 * RAscale, 0, PI+QUARTER_PI, CHORD);
}
//Body
function body(centerX, centerY, Bscale, Bcolor){
  stroke(0);
  strokeWeight(3);
  fill(Bcolor);
  quad(centerX - 100 * Bscale, centerY - 100 * Bscale, centerX + 50 * Bscale, centerY - 100 * Bscale, centerX + 100 * Bscale, centerY + 50 * Bscale, centerX - 100 * Bscale, centerY + 100 * Bscale);
}
//Head Horn Teeth Eye Tongue
function head(headX, headY, Hscale, Headcolor, Horncolor){
  //horn
  stroke(0);
  strokeWeight(3);
  fill(Horncolor);
  triangle(headX - 105 * Hscale, headY, headX - 125 * Hscale, headY - 75 * Hscale, headX - 25 * Hscale, headY);
  triangle(headX - 50 * Hscale, headY - 75 * Hscale, headX - 50 * Hscale, headY - 130 * Hscale, headX - 5 * Hscale, headY - 75 * Hscale);
  //teeth
  var x;
  for(x = 0; x < 10; x ++){
    strokeWeight(3);
    stroke(0);
    fill(255);
    triangle(headX - 5 * Hscale + 10 * x * Hscale, headY + 25 * Hscale, headX - 5 * Hscale + 10 * (x+1) * Hscale, headY - 15 * Hscale, headX - 5 * Hscale + 10 * (x+2) * Hscale, headY + 25 * Hscale);
    triangle(headX - 5 * Hscale, headY - 95 * Hscale + 10 * x * Hscale, headX + 15 * Hscale, headY - 90 * Hscale + 10 * x * Hscale, headX - 5 * Hscale, headY - 80 * Hscale + 10 * x * Hscale);
  }
  //tongue
  fill(255, 102, 93);
  quad(headX - 25 * Hscale, headY, headX + 125 * Hscale, headY - 70 * Hscale, headX + 115 * Hscale, headY - 60 * Hscale, headX - 25 * Hscale, headY + 10 * Hscale);
  //head
  fill(Headcolor);
  arc(headX, headY, 225 * Hscale, 200 * Hscale, 0, PI+HALF_PI, PIE);
  //eye
  fill(255);
  ellipse(headX - 20 * Hscale, headY - 50 * Hscale, 30 * Hscale, 20 * Hscale);
  //pupil
  fill(0);
  ellipse(headX - 20 * Hscale, headY - 50 * Hscale, 9 * Hscale, 9 * Hscale);
  }

function monsterB(X, Y, MonsterScale){
  push();
  translate(X, Y);
  scale(MonsterScale);
  strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  triangle(190, 75, 225, 95, 195, 123);// right ear
  triangle(310, 75, 275, 95, 305, 123);// left ear
  ellipse(250, 150, 120, 120);// head
  arc(250, 270, 160, 200, -1.05, 4.2, OPEN);// body
  
  noStroke();
  fill(250, 248, 237);
  ellipse(250, 270, 80, 100);//belly
  
  strokeWeight(5);
  stroke(245, 35, 220);
  line(238, 258, 262, 282);
  line(262, 258, 238, 282);// a monster should have its weekness
  
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
  
  strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  quad(308, 201, 366, 251, 362, 268, 325, 235);
  ellipse(370, 261, 20, 20);// left hand
  
  fill(255, 0, 0);
  ellipse(180, 220, 40, 40);
  noFill();
  arc(178, 195, 30, 30, 1, 2);
  arc(192, 202, 30, 30, 2.7, 4);
  // an apple in its right hand!
  // show that it is a field mouse
  
  fill(178, 174, 147);
  ellipse(161, 220, 20, 20);// right hand
  
  stroke(250, 8, 36);
  strokeWeight(3);
  line(232, 130, 216, 150);
  line(226, 130, 232, 138);
  line(222, 150, 216, 144);// scar
  
  noFill();
  strokeWeight(15);
  stroke(178, 174, 147);
  arc(160, 260, 90, 70, 1, 3.6);// tail
  noStroke();
  fill(178, 174, 147);
  triangle(105, 239, 136, 252, 132, 225);
  
  noFill();
  strokeWeight(10);
  stroke(131, 125, 102);
  line(370, 261, 390, 248);
  
  strokeWeight(1);
  stroke(0);
  fill(222, 222, 222);
  triangle(389, 243, 403, 258, 430, 218);// a knife
  pop();
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
    
    
    function monsterChris1 (mouselocX, mouselocY) {
 Blegs(530,590 ,30, 100);
 body (600,550);
 Bteeth(590 ,320 );
 Bhead(600 ,420 ,150,150);
 arm(655, 480, 530, 500 );
 apple(640,400 );
 tail (505,550);
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

function arm (rightarmX, rightarmY, leftarmX, leftarmY) {
 strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  quad(rightarmX, rightarmY, rightarmX + 58, rightarmY + 50, rightarmX + 54, rightarmY + 67, rightarmX + 17, rightarmY + 34);
  ellipse(rightarmX + 62, rightarmY + 60, 20, 20);// left hand
 fill(178, 174, 147);
  ellipse(leftarmX, leftarmY, 20, 20);// right hand
 
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


