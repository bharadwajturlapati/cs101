var MockData = require('./lib/MockData');
const mockBooksData = MockData.getBooks();

var numbers = [1, 4, 9];


// .map is a method on array.
// Array.prototype.map();
// 1. creates a new array by applying the function to each element in array.
// URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// not returning book
var applyDiscountOnEachBookImplicitReturn = function(arr){
	var afterDiscount = arr.map(eachBook => eachBook.cost - 5);
	console.log(afterDiscount);
};

var applyDiscountOnEachBookNoReturn = function(arr){
	var afterDiscount = arr.map(eachBook => {
		eachBook.cost - 5
	});
	console.log(afterDiscount);
};

//returning book
var applyDiscountOnEachBookAndReturnBook = function(arr){
	var afterDiscount = arr.map(eachBook => {
		eachBook.cost = eachBook.cost - 5;
		return eachBook;
	});
	console.log(afterDiscount);
};

var mathOperations = function(){
	var rootsArr = numbers.map(Math.sqrt);
	console.log(rootsArr);
}

var throwSomeException = function(currentValuePassedOnByIterator){
	if(currentValuePassedOnByIterator == 8){
		//once exception is thrown app.js stops processing 
		// REPL LOOPS STOPS HERE
		throw("Exception thrown here");
	}
	return currentValuePassedOnByIterator;
}

var mathOperationsDataTypes = function(){
	//ignores silently
	// "" converts to zero
	var rootsArr = [1, "", 3].map(Math.sqrt);
	console.log(rootsArr);
	// "216" converts to number
	var rootsArr = [1, "1234", 3].map(Math.sqrt);
	console.log(rootsArr);
	
	// "abc" Math.sqrt return NAN for sqrt of abc
	var rootsArr = [1, "abc", 3].map(Math.sqrt);
	console.log(rootsArr);
}

var customMethodThrowable = function(){
	var newArray = [1,3,5,6].map(throwSomeException);
	console.log(newArray);
}

console.log(mockBooksData);
applyDiscountOnEachBookImplicitReturn(mockBooksData);
applyDiscountOnEachBookNoReturn(mockBooksData);
applyDiscountOnEachBookAndReturnBook(mockBooksData);
mathOperations();
mathOperationsDataTypes();
customMethodThrowable();