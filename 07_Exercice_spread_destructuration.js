// Données initiales
const taskList = [
  { id: 1, title: "Acheter du lait", completed: false },
  { id: 2, title: "Répondre aux emails", completed: true },
  { id: 3, title: "Faire du sport", completed: false },
];

// 1. Utilisez la destructuration pour extraire le titre et le statut (completed) de la première tâche
// Stockez-les dans des variables nommées "firstTaskTitle" et "firstTaskStatus"

// 2. Utilisez le spread operator pour créer une copie du tableau taskList
// nommée "taskListCopy"

// 3. Copier le dernier objet de la liste, remplacer le title par 'Faire de la musique'
// + ajouter une nouvelle propriété "priority" avec une valeur de 1

// 4. Faire un copie du tableau en ne gardant que les objets 'completed' qui sont égales à 'true'
//  --> Vous pouvez le faire aec le .filter()
