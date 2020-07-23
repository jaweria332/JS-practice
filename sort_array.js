function circle_comparator(c1, c2) {
  return c1.radius - c2.radius;  
}
var myArray = [{radius: 5}, {radius:9}, {radius: 2}];
myArray.sort(circle_comparator);