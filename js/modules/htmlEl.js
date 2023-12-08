// default export
function create(tagName, className, text) {
  const newEl = document.createElement(tagName);
  newEl.className = className;
  newEl.textContent = text;
  return newEl;
}
export function sayHi() {
  console.log("hi");
}

// norim galeti prideti bet koki atributa createHtmlEl funkcija

createHtmlEl(
  "img",
  {
    src: "/img/cat.jpg",
    alt: "image of a cat",
    class: "img-fluid",
  },
  null
);
createHtmlEl(
  "h2",
  {
    class: "bg-primary",
  },
  "Hello world"
);

export default create;
