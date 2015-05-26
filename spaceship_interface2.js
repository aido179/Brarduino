var five = require("johnny-five");
var myBoard, myLed;
var button = 2;

myBoard = new five.Board();

myBoard.on("ready", function() 
{
  var btn = new five.Button(button);
  myLed1 = new five.Led(3);
  myLed2 = new five.Led(4);
  myLed3 = new five.Led(5);
  
  btn.on("hit", function()
  {
	  myLed1.on();
  });
  
  btn.on("release", function()
  {
	  myLed1.off();
  });
  
  //myLed2.blink(500);
  //myLed3.strobe(500);
  //myLed1.strobe( 3000 );
	
  // make myLED available as "led" in REPL

  // this.repl.inject({
    // led: myLed
  // });
});