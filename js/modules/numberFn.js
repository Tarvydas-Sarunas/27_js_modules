export function avg(sk1, sk2, sk3, sk4) {
  const sum = (sk1 + sk2 + sk3 + sk4) / 4;
  return sum;
}

export function arrAvg(arr) {
  let skaiciai = 0;
  arr.forEach((obj) => {
    skaiciai += obj;
  });
  const arrAvg = skaiciai / arr.length;
  return arrAvg;
}

export function total(sk1, sk2, sk3, sk4) {
  return sk1 + sk2 + sk3 + sk4;
}

export function sandauga(sk1, sk2, sk3, sk4) {
  const rez = sk1 * sk2 * sk3 * sk4;
  return rez;
}
