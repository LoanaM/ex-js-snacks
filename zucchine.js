var zucchina1 = {
  "varietà" : "cipolllina",
  "peso" : 10,
  "lunghezza" : "10",
};
var zucchina2 = {
  "varietà" : "agrumina",
  "peso" : 20,
  "lunghezza" : "15",
};
var zucchina3 = {
  "varietà" : "satanica",
  "peso" : 8,
  "lunghezza" : "25",
};
var zucchina4 = {
  "varietà" : "cipolllina",
  "peso" : 35,
  "lunghezza" : "15",
}
var zucchina5 = {
  "varietà" : "estiva",
  "peso" : 15,
  "lunghezza" : "7",
}
var zucchina6 = {
  "varietà" : "primavera",
  "peso" : 3,
  "lunghezza" : "10",
}
var zucchina7 = {
  "varietà" : "autunno",
  "peso" : 6,
  "lunghezza" : "8",
}
var zucchina8 = {
  "varietà" : "cipolllina",
  "peso" : 10,
  "lunghezza" : "18",
}
var zucchina9 = {
  "varietà" : "satanica",
  "peso" : 40,
  "lunghezza" : "22",
}
var zucchina10 = {
  "varietà" : "cipolllina",
  "peso" : 5,
  "lunghezza" : "9",
}
var zucchine = [zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6, zucchina7, zucchina8, zucchina9, zucchina10];
var somma = 0

// Calocolo peso delle zucchine
for (var i = 0; i < zucchine.length; i++) {
      somma+= zucchine[i].peso;
}
document.write (somma)

// Divisione array
var arrayMinor = []
var arrayMaior = []

for (var i = 0; i < zucchine.length; i++) {
      if (zucchine[i].lunghezza <= 15) {
        arrayMinor.push(zucchine[i])
      }
      else {
        arrayMaior.push(zucchine[i])
      }
}

// Calcolo peso per array
var peso1 = 0
for (var i = 0; i < arrayMaior.length; i++) {
      peso1+= arrayMaior[i].peso;
}
var peso2 = 0
for (var i = 0; i < arrayMinor.length; i++) {
      peso2+= arrayMinor[i].peso;
}

console.log (peso1)
console.log (peso2)
