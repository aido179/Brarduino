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
	
	var value = 0; 
	function next()
	{
		value = value > 0x11 ? value >> 1 : 0x88; 
		register.send(value);
		setTimeout(next, 200);
	}
	next();
		
});