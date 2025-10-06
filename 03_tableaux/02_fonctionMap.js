// La fonction map crée une copie du tableau existant, et applique la même opération sur chacun des éléments du tableau.
// La fonction map de MODIFIE PAS le tableau d'origine.

const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const obj = { firstName: "Malcom", lastName: "Reynolds" };

const firstNames = persons.map((element) => element.firstName);

const firstNames2 = persons.map((element) => {
  return {
    name: element.firstName,
    fullName: `${element.firstName} ${element.lastName}`,
  };
  //   return { firstName: element.firstName };
});

console.log(firstNames);
console.log(firstNames2);

const chiffres = [1, 2, 3, 4, 5];

const chiffresCarre = chiffres.map((chiffre) => chiffre * chiffre);
console.log(chiffresCarre);

// FlatMap()
const chiffresCarre2 = chiffres.map((chiffre) => [chiffre * chiffre]);
console.log(chiffresCarre2);

// const faltMapCarre = chiffres.flatMap((chiffre) => [chiffre * chiffre]);
// console.log(faltMapCarre);
