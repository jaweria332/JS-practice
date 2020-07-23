function reverse(str){
var myArray = [];
if(!str || str.length < 2 || typeof str !== 'string') {
return "Not Valid";
}
for(var i = str.length; i >= 0; i--) {
myArray.push(str[i]);
}
return myArray.join('');
}

reverse("Hello World");