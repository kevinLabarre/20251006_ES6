// La fonction filter crée une copie du tableau existant, la fonction filter de MODIFIE PAS le tableau d'origine.
// filter() applique un filtre sur les éléments

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// La fonction passée en param du .filter doit retourner la condition de votre 'filtre'
const wordsFilter = words.filter((word, index) => word.length > 6);
console.log(wordsFilter);

// Exercice
// 1. Créer un tableau qui contient les nombres supérieurs à 5 --> resultat: [6, 7, 8, 9, 10]
// 2. Créer un tableau qui contient les nombres pairs ( nombre pair si: nombre % 2 === 0 )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Faire une fonction 'textFilter(entreeUtilisateur)' qui prend en parametre une chaine de caractères
//  --> la fonction doit retourner un tableau qui contient uniquement les mots qui contiennent la chaine de caractères passée en param
// Pour le tri, on peut utiliser indexOf ou include

// Par exemple -> console.log(textFilter("es"));
// --> resultat: ["destruction", "present"]

// Trier le tableau 'words', garder les mots qui contiennent le texte passé en param
// Pour le tri, on peut utiliser indexOf ou includes
const textFilter = (text) => words.filter((word) => word.includes(text));

function textFilter2(text) {
  return words.filter((word) => word.includes(text));
}

console.log(textFilter("es")); // --> resultat: ["destruction", "present"]
