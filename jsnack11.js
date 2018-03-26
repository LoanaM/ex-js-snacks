var letters = ["a", "b", "c", "d", "e"];
var numbers = [1,2,3,4,5,6,7];
var mixed = [];

if (letters.length==numbers.length) {
    for (var i = 0; i < letters.length; i++) {
        mixed.push(letters[i])
        mixed.push(numbers[i])
    }
}
else if (letters.length>numbers.length) {
  cont = 0
    for (var i = 0; i < numbers.length; i++) {
          mixed.push(letters[i])
          mixed.push(numbers[i])
          cont++
      }
    for (var k = cont; k < letters.length; k++) {
      mixed.push(letters[k])
    }
}
else { //sistema alternativo senza var cont
    for (i = 0; i < letters.length; i++) {
          mixed.push(letters[i])
          mixed.push(numbers[i])
    }
    for (i; i < numbers.length; i++) {
      mixed.push(numbers[i])
    }
}


console.log(mixed);
