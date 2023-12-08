// sukurti funkcija kuri suskaiciuoja 4 skaiciu vidurki
// avg(4,5,8,7) grazina vidurki
export function avg(n1, n2, n3, n4) {
  const total = n1 + n2 + n3 + n4;
  return total / 4;
}

export function total(n1, n2, n3, n4) {
  console.log("total:", n1 + n2 + n3 + n4);
  return n1 + n2 + n3 + n4;
}
// exportuoti ir importuoti ir panaudoti sandaug fn main.js
export function sandaug(n1, n2, n3, n4) {
  const rez = n1 * n2 * n3 * n4;
  console.log("sandaug ===", rez);
  return rez;
}
