myArray = ["Python", "C++", "JavaScript", "C#", "Html", "CSS"]; 

//To call each element of array we have two method
//First method

myArray.forEach(function(elem) {console.log(elem);})

//second method

for(var i = 0; i<myArray.length ; i++){
console.log(myArray[i]);
}