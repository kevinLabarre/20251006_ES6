// Données initiales
const taskList = [
  { id: 1, title: "Acheter du lait", completed: false },
  { id: 2, title: "Répondre aux emails", completed: true },
  { id: 3, title: "Faire du sport", completed: true },
];

// 1. Utilisez la destructuration pour extraire le titre et le statut (completed) de la première tâche
// Stockez-les dans des variables nommées "firstTaskTitle" et "firstTaskStatus"

// a. Solution 1: deux destructurations:
const [firstTask] = taskList;
const { title: firstTaskTitle, completed: firstTaskStatus } = firstTask;

console.log(
  `firstTaskTitle: ${firstTaskTitle} | `,
  `firstTaskStatus: ${firstTaskStatus}`
);

// b. Exemple 2: avec une destructuration
const { title: firstTaskTitle2, completed: firstTaskStatus2 } = taskList[0];
console.log(
  `firstTaskTitle: ${firstTaskTitle2} | `,
  `firstTaskStatus: ${firstTaskStatus2}`
);

// c. Exemple 3: avec 'double' destructuration
const [{ title: firstTitle, completed: firstDone }] = taskList;
console.log(
  `firstTaskTitle: ${firstTitle} | `,
  `firstTaskStatus: ${firstDone}`
);

// 2. Utilisez le spread operator pour créer une copie du tableau taskList
// nommée "taskListCopy"

const taskListCopy = [...taskList];
console.log(taskListCopy);

// 3. Copier le dernier objet de la liste, remplacer le title par 'Faire de la musique'
// + ajouter une nouvelle propriété "priority" avec une valeur de 1

// Solution 1:
const [, , lastTask] = taskList;
const copy = { ...lastTask, title: "Faire de la musique", priority: 1 };
console.log(copy);

// b. Solution 2:
const lastTaskModified = {
  ...taskList[taskList.length - 1], // acceder au dernier element via l'index ( tasklist[3] )
  title: "Faire de la musique",
  priority: 1,
};
console.log(lastTaskModified);

// 4. Faire une fonction qui affiche les éléments passés en paramètre dans un console.log.
// --> On doit pouvoir passer autant de paramètres que l'on veut quand on appelle la fonction

const myFunction = (...params) => {
  params.forEach((p) => console.log(p));
};

myFunction("toto", "tata", "tutu", 1, 2, 3);

// 5. Faire une copie du tableau en ne gardant que les objets 'completed' qui sont égales à 'true'
//  --> Vous pouvez le faire avec le .filter()

const taskFiltered = taskList.filter((task) => task.completed === true);
console.log(taskFiltered);
