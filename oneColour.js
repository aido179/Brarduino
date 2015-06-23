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
	
	var value = 2; 
	function next()
	{

	}
	next();
		
});