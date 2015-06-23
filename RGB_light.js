var five = require("johnny-five");
var myBoard, myLed;
var button = 2;

myBoard = new five.Board();

myBoard.on("ready", function() 
{
  var lightOn = false;
  var btn = new five.Button(button);
  myLed1 = new five.Led(11);
  myLed2 = new five.Led(10);
  myLed3 = new five.Led(9);
  
// myLed2.on();//green
 //myLed1.on();//red
 //myLed3.on();//blue

});