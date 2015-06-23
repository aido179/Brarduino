var five = require("johnny-five"); 
var board = new five.Board(); 
var button = 7;
var button2 = 6;
var button3 = 4;
board.on("ready", function()

//works on binary
// 0001 green_1 ON
//0010 blue_1 ON
// 0100 Blue_2 ON
//1000 Greenn_2 ON
{
	var btn = new five.Button(button);
	var btn2 = new five.Button(button2);
	var btn3 = new five.Button(button3);
	
	var lightOn = false;
	var lightOn2 = false;
	var register = new five.ShiftRegister
	({
		pins:
		{
			data: 8,
			latch: 9,
			clock: 10
		}
	});
	value = 1;
	

	function next()
	{

		register.send(value);

		//setTimeout(next, 400);
	}
	next();
	
	function foo()
  {
	  if(lightOn == true)
	  {
		value = 4;
		lightOn = false;
		next();
	  }
	  else 
	  {
		 value = 8;
		  lightOn = true;
		  next();
	  }
  }
	function foo2()
  {
	  if(lightOn2 == true)
	  {
		value =  4;
		lightOn2 = false;
		next();
	  }
	  else 
	  {
		 value =  8;
		  lightOn2 = true;
		  next();
	  }
  }
  
  function foo3()
  {
	  if(lightOn2 == true)
	  {
		value =  32;
		lightOn2 = false;
		next();
	  }
	  else 
	  {
		 value =  64;
		  lightOn2 = true;
		  next(); 
	  }
  }
	
	btn.on("hit", foo );
	btn2.on("hit", foo2 );
	btn3.on("hit", foo3 );
});	