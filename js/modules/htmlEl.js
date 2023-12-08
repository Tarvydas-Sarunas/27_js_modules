// iskelti makeEl i htmlEl moduli, exportuoti, importuoti ir isitikinti kad veikia main.js

function createHtmlEl(tagName, className, text = false) {
  const newEl = document.createElement(tagName);
  // sudeti visus atributus
  // sukti cikla per attr obj
  // el.setAttribute('class', 'd-none')
  newEl.className = className;
  // ikelem text jei yra paduotas
  newEl.textContent = text;
  return newEl;
}
// norim galeti prideti bet koki atributa createHtmlEL funkcija
createHtmlEl;

const img = makeEl("img", {
  src: "/img/cat.jpg",
  alt: "image of a cat",
  class: "img-fluid",
});
const h2El = makeEl("h2", { class: "bd-primary" }, "Hello world");

function createHtmlElUni(tagName, atrObj, text) {
  const newEl = document.createElement(tagName);
  // sudeti visus atributus
  // sukti cikla per attr obj
  for (let key in atrObj) {
    let value = atrObj[key];
    newEl.setAttribute(key, value);
  }
  // ikelem text jei yra paduotas
  if (text !== false) {
    newEl.textContent = text;
  }
  return newEl;
}
