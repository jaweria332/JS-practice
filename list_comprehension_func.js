//Finding string of largest length
var myArray= ["Python", "C++", "JavaScript", "C#", "Html", "CSS"];

function max_str(arr) {
return arr.reduce(function(previous, current){
if(current.length > previous.length){
return current;
}
else { return previous;}
}, "");
}

//Returning square of given numeric array
var myArray = [1,2,3,4,5,6];
myArray.map(function(element) {
return element*element;
});

//Return the sum of square of given numeric array
myArray.map(function(element) {return element*element}).reduce(function(previous, current){ return previous + current }, 0);

//Return a boolean value for array if it fulfills given criteria or not

function arrayCompliment(arr, criteriaFunc) {
  return arr.filter(function(x) {return !criteriaFunc(x)});
}
function condi(elem) {
return elem.length > 5;
}
var myArray= ["Python", "C++", "JavaScript", "C#", "Html", "CSS"];
arrayCompliment(myArray, condi);