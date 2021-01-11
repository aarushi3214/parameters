var fixedRect, movingRect;
var O1,O2;

function setup()
 { createCanvas(1200,800);
   fixedRect = createSprite(600, 400, 50, 80); 
   fixedRect.shapeColor = "yellow"; 
   fixedRect.debug = true; 
   movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "blue"; 
    movingRect.debug = true;
  
    O1= createSprite(700,300,50,30);
    O1.shapeColor = "green";
    O1.debug = true;

    O2= createSprite(500,100,50,30);
    O2.shapeColor = "green";
    O2.debug = true;
  } 

function draw() 
{ background(0,0,0);
   movingRect.x = World.mouseX;
    movingRect.y = World.mouseY; 
    console.log("moving rect"+movingRect.x); 
    console.log("fixed rect="+fixedRect.x); 

    if(isTouching(movingRect, O1)){
      movingRect.shapeColor = "red"; 
      O1.shapeColor = "red";
     }

      else{
        movingRect.shapeColor = "blue";
        O1.shapeColor = "green";
      }
         if(isTouching(movingRect, fixedRect)){
          movingRect.shapeColor = "red"; 
          fixedRect.shapeColor = "red";
         }
    
          else{
            movingRect.shapeColor = "blue";
            fixedRect.shapeColor = "yellow";
          }
          
          drawSprites(); }

       
