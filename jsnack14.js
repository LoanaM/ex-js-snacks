var casualArray = [];

for (var i = 0; i < 5; i++) {
  casual = (Math.floor((Math.random() * 5) + 1));
  casualArray.push(casual)
}
alert (casualArray)
console.log (casualArray)

var guessArray = [];

var countdown = window.setInterval (timer, 1000);
count = 5;

function timer () {
  console.log (count)
  count--
  if (count==0) {
    window.clearTimeout (countdown);
    for (var i = 0; i < 5; i++) {
      guess = parseInt(prompt ("Indovina un numero"));
      guessArray.push(guess)
    }
  }
}
risultato = 0;

//perché non funziona???
for (var j = 0; j < casualArray.length; j++) {
  if (casualArray.includes(guessArray[j])) {
    risultato++
  }
}

  document.write (risultato);
console.log (guessArray);
