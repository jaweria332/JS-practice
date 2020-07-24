function step_iterator(start, step) {
return function() {
var result = start;
start = start + step;
return result;
}
} 
var series = step_iterator(0, 2);
series();
series();
series();
series();