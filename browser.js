browser = {
  "Tab" : ["Fb", "Github", "Twitter", "Gmail"],
  "Activetab" : 0,
}
var social = ["Fb", "Twitter"];

for (var i = 0; i < browser.Tab.length; i++) {
  if (social.includes(browser.Tab[i])) {
    if (browser.Activetab==browser.Tab.indexOf([i])) {
      browser.Activetab++
    }
    remove (browser.Tab,browser.Tab[i])
  }
}

document.write (browser.Tab)
console.log (browser.Activetab)

// Funzione elimina elemento
function remove (array,el) {
   array.splice(array.indexOf(el), 1);
};
