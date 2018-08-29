var MockData = {}

MockData.getBooks = function(type){
	if(type == "Array"){	
		return books;
	}else {
		//default
		return books;
	}
};

MockData.getNaturalNumbersSE = function(start, end){
	var array = [];
	for(var i= start; i<end; i++){
		array.push(i);
	}
	return array;
};

MockData.getNaturalSquares = function(start, end){
	return MockData.getNaturalNumbersSE(start, end).map(x=>x*x);
};

MockData.getSqrts = function(start, end){
	return MockData.getNaturalNumbersSE(start, end).map(Math.sqrt);
};

//simple data 
var books = [
  {name:'JavaScript', pages:450, cost:10}, 
  {name:'Angular', pages:902, cost:15},
  {name:'Node', pages:732, cost:20}
];


module.exports = MockData;