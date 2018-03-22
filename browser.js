browser = {
  "Tab" : ["Fb", "Instagram", "Github", "Hotmail", "Twitter", "Gmail"],
  "Activetab" : 0,
}
var social = ["Fb", "Twitter", "Instagram"];

for (var i = 0; i < browser.Tab.length; i++) {
  if (social.includes(browser.Tab[i])) {
    remove (browser.Tab,browser.Tab[i])
    i--
  }
}

document.write (browser.Tab)
console.log (browser.Activetab)

// Funzione elimina elemento
function remove (array,el) {
   array.splice(array.indexOf(el), 1);
};

// if (browser.Activetab==i) {
//   browser.Activetab++
