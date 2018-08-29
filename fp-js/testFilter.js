var MockData = require('./lib/MockData');
const mockBooksData = MockData.getNaturalNumbersSE(1,10);
const mockSquareData = MockData.getNaturalSquares(1,10);
const mockSqrts = MockData.getSqrts(1,10);

var testSimpleFilter = function(){
	var filteredResult = mockBooksData.filter(x=>{
		if(x %2 ==0){
			return x;
		}
	});
	console.log(filteredResult);
	
	var filteredResult = mockBooksData.filter(x=>{
		if(x %2 !=0){
			return x;
		}
	});
	console.log(filteredResult);
}

var testMaths = function(){
	console.log(mockSquareData);
	console.log(mockSqrts);
}

testSimpleFilter();
testMaths();