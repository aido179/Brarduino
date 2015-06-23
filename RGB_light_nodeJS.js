var five = require("johnny-five"); 
var board = new five.Board(); 

board.on("ready", function()
{
	var register = new five.ShiftRegister
	({
		pins:
		{
			data: 8,
			latch: 9,
			clock: 10
		}
	});
	
	var value = 5; 
	function next()
	{
		//value = value > 0x11 ? value >> 1 : 0x88; 
		//value = value < 0x1 ? value << 1 : 0x13;
		register.send(value);
		if (value > 161) 
		{
			value = 5;
		} 
		else 
		{
			value = value << 1;
		}
			
		//register.send(1);
		setTimeout(next, 400);
	}
	next();
		
});