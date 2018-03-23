var numbers = [1, 2, 3, 4, 8, 10, 90, 7];
var newarray = [];

calcola(numbers, 2, 8)

function calcola(array, min, max) {
  for (var i=0; i < array.length; i++) {
    if ((min<=array[i]) && (array[i]<=max)) {
      newarray.push(array[i])
    }
  }
  console.log (newarray.length)
}

console.log (newarray)
