function num_printer(upto, filter) {
for( var i=0; i<=upto; i++){
if(filter(i)) {
console.log(i);
}
}
}
function is_odd(num) {
return num % 2 != 0 }

function is_even(num) {
return num % 2 == 0; }

num_printer(16, is_odd);
num_printer(16, is_even);