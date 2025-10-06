//  La fonction reduce de MODIFIE PAS le tableau d'origine.
//  La fonction reduce applique une 'fonction de réduction'
//  .reduce() retourne une valeur unique

const myArray = [1, 2, 3, 4, 5];

// Appliquer .reduce() pour additionner tous les chiffres
const sum = myArray.reduce((total, element) => total + element); //  1 + 2 + 3 + 4 + 5 = 15
console.log(sum);

// Avec une 'initialValue',
// --> ci-dessous, le total initial est égale à 10
const sum2 = myArray.reduce((total, element) => total + element, 10); // 10 + 1 + 2 + 3 + 4 + 5 = 25
console.log(sum2);
