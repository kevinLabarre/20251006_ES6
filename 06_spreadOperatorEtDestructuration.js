const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];

console.log(...numbersOne);
console.log(1, 2, 3, 4, 5); // Equivalent

// Pour copie propre d'un tableau
const copy1 = [...numbersOne];
console.log(copy1);

copy1.push(6);
console.log(numbersOne, copy1);

// Pour concaténer (/fusionner) deux tableaux
const allNumbers = [...numbersOne, ...numbersTwo];
console.log(allNumbers);

// En paramètres d'une fonction
const add = (...numbers) => {
  console.log(numbers);
  return numbers;
};

const result = add(1, 2, 3, 4, 5, 8);
