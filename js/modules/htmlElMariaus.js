function createHtmlEL(tagName, attrsObj, text = false) {
  // kuriam el
  const newEl = document.createElement(tagName);
  // sudeti visus atributus
  // sukti cikla per attr obj
  for (let key in attrsObj) {
    let value = attrsObj[key];
    newEl.setAttribute(key, value);
  }
  // ikelem text jei yra paduotas
  if (text !== false) {
    newEl.textContent = text;
  }
  return newEl;
}

const num1 = 500;
export function sayHi() {
  console.log("hi");
}

// norim galeti prideti bet koki atributa createHtmlEL funkcija

export default createHtmlEL;
