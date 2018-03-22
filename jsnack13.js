var count = parseInt (prompt ("Inserisci conto alla rovescia:"))
var countdown = window.setInterval (timer, 1000);

function timer () {
  console.log (count)
  count--
  if (count<0) {
    window.clearTimeout (countdown);
    document.getElementById('auguri').innerHTML = "Buon Anno!"
  }
}
