// named importas
import { avg, total, sandaug } from "./modules/numberFn.js";
// default import, + named import
import makeEl, { sayHi } from "./modules/htmlEl.js";
import { users as usersEn } from "./modules/users.js";
import Todo from "./modules/TodoClass.js";
// function skills
// console.log('users ===', users);
// total(4, 1, 5, 8, 7);
// sandaug(4, 1, 5, 8, 7);

// // sukurti funkcija kuri suskaiciuoja masyvo gauto argumento vidurki
// // avgArr([4,1,5,8,7])

// const el1 = makeEl('h1', { class: 'bg-info' }, 'I am h1');
// console.log(el1);

// const vid1 = avg(4, 8, 9, 12);
// console.log('vid1 ===', vid1);

// const uzd1El = makeEl('h3', {}, vid1);

// const img = makeEl('img', {
//   src: '/img/cat.jpg',
//   alt: 'image of a cat',
//   class: 'img-fluid',
// });
// const h2El = makeEl('h2', { class: 'bd-primary' }, 'Hello world');

// console.log('img ===', img);

// document.body.append(uzd1El, h2El, img);
sayHi();

// importuoti ir atspausdinti visu users objektu vardus
const num1 = 500;

console.table(usersEn);
usersEn.forEach((uObj) => {
  console.log(uObj.name);
});

// sukurti klase Todo
// klase turetu grazinti naujai sukurta todo objekta su
// id, title, isDone savybem. id generuojam random

const t1 = new Todo("Go to park");
const t2 = new Todo("Go to Gym");
console.log("t1 ===", t1, t2);
// sukuria
// { id: '2457', title: 'Go to park' isDone: false }
