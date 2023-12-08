import { avg, total, sandauga } from "./modules/numberFn.js";
import { makeEl } from "./modules/htmlEl.js";

total(4, 5, 8, 7);
const skaiciuAvg = avg(4, 5, 8, 7);
sandauga(4, 5, 8, 7);

const h1El = document.getElementById("h1");

const h2El = makeEl("h2", "bg-primary", "I am text");
h1El.after(h2El);

const h3El = makeEl("h3", "", skaiciuAvg);
document.body.append(h3El);
