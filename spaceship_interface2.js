var five = require("johnny-five");
var myBoard, myLed;
var button = 2;

myBoard = new five.Board();

myBoard.on("ready", function() 
{
  var lightOn = false;
  var btn = new five.Button(button);
  myLed1 = new five.Led(3);
  myLed2 = new five.Led(4);
  myLed3 = new five.Led(5);
  
  btn.on("hit", function()
  {
	  if(lightOn == true)
	  {
		myLed1.on();
		lightOn = false;
	  }
	  else 
	  {
		  myLed1.off();
		  lightOn = true;
	  }
	
  });
  
  /*
  btn.on("release", function()
  {
	  myLed1.off();
  });
  */

});