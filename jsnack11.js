var letters = ["a", "b", "c", "d", "e"];
var numbers = [1,2,3,4,5];
var mixed = [];


for (var i = 0; i < letters.length; i++) {
    mixed.push(letters[i])
    mixed.push(numbers[i])
}

document.write (mixed)
console.log (mixed);
