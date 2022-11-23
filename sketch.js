function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(222,255,248);
  
  noStroke()//Avoide shape border
  

  

  
  //Left Screw
  fill(190,190,190)
  rect(85,290,30,10)
  
  fill(120,120,120)
  rect(85,285,10,20)
  
  //Right Screw
  fill(190,190,190)
  rect(285,290,30,10)
  
  fill(120,120,120)
  rect(305,285,10,20)
  
  //Face
  fill(150,198,146)
  rect(98,150,203,100)
  
  arc(199,245,203,203,0,radians(180))
  
  //Hair
  fill(59,63,75)
  rect(98,150,203,50)
  arc(120,210,50,50,radians(230),radians(330))
  arc(150,210,50,50,radians(230),radians(330))
  arc(180,210,50,50,radians(230),radians(330))
  
  //Mark
  rect(220,215,70,5)
  rect(240,210,5,20)
  rect(260,210,5,20)
  
  //Eyes
  ellipse(150, 260, 30, 30);//Left Eye
  ellipse(246, 260, 30, 30);//Right Eye
  
  fill(255,255,255)
  ellipse(150, 260, 20, 20);//Left Eye
  ellipse(246, 260, 20, 20);//Right Eye  
  
  //Mouth
  fill(59,63,75)
  rect(140,290,120,20)
  
  
  
}