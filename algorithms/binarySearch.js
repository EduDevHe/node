function binarySurch(list, item) {
  // o início da lista
  let LOW = 0;
  // o fim da lista
  let HIGH = list.length - 1;
  let attempts = 0;
  while (LOW <= HIGH) {
    // o meio da lista
    const midle = Math.floor((LOW + HIGH) / 2);
    console.log(midle);
    // tentativas de encontrar o valor
    attempts = attempts + 1;
    // onde o algoritmo começar a buscar
    const tentative = list[midle];
    // decrementa o fim da lista caso a tentativa seja maior que item caso contrario decrementa o início
    if (tentative > item) {
      HIGH = midle - 1;
    } else {
      LOW = midle + 1;
    }
    // retorno
    if (tentative == item) return { attempts, midle };
  }
  return "Not found";
}
const list = Array.from(Array(156).keys(), (num) => num + 1);
console.log(binarySurch(list, 128));
