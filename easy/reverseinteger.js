// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x)
{
	const isNeg = x < 0 
	            ? true
	            : false;

	if(isNeg)
		x = x * -1;

	let reversed = 0;

	while(x > 0){
		reversed = (reversed * 10) + (x%10);
		x = parseInt(x/10);
	}

	return (isNeg)
		   ? reversed * -1
		   : reversed;
};

console.log(reverse(123));
