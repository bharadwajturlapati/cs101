var MockData = require('./lib/MockData');
const naturalNumbers = MockData.getNaturalNumbersSE(1,10);


var runReduceSumOfSquares = function(){
	var result = naturalNumbers.map(x => x*x).reduce((aggregator, currentValue) => aggregator+currentValue);
	console.log(result);
	
};

runReduceSumOfSquares();