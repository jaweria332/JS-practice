// To calculate the area of rectangle

function Rectangle(length, breadth) {
//To find the area
this.area = function() { return this.length * this.breadth };
//To find the peremeter
this.peremeter = function() { return (length * 2) + (breadth * 2) };
}

// To calculate the distance of two points 
function Point(x, y) {
this.x = x;
this.y = y;
//To find the distance between two points
this.ditance = function(another){ return Math.sqrt( (this.x - another.x)*(this.x - another.x) + (this.y - another.y)*(this.y - another.y) )};
}

//Function to check Palindrom
function check_Palindrome(str){
// To convert string into lower case and remove non-alphanumeric characters
   var newStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var count = 0;
// To check if string is empty
	if(newStr==="") {
		console.log("Nothing found!");
		return false;
	}
// To check if length is even or odd
	if ((newStr.length) % 2 === 0) {
		count = (newStr.length) / 2;
	} else {
		if (newStr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
// In case of odd number of charachter
			count = (newStr.length - 1) / 2;
		}
	}
// To check first character to the last character
	for (var x = 0; x < count; x++) {
		if (newStr[x] != newStr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}

