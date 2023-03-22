// ----------- Données ----------------------------------------------------------
const temp = [
   {
      "id": "1",
      "name": "Nom du template",
      "price": "150",
      "description": "Description du template",
      "url": "./..."
   },
];

const options = [
   {
      "id": "1",
      "name": "Nom de la fonctionnalité",
      "price": "100",
      "description": "Description de la fonctionnalité"
   },
];
// ----------- Variables --------------------------------------------------------
let selectionList = []; // liste du template et des fonctionnalités choisies
let buySection = document.getElementById('buy-selection'); // div buy-selection
// ------------------------------------------------------------------------------



/**
 * Fonction qui vide la séléction et ferme la fenêtre
 */
function clr(){
   // vide la liste
   selectionList = [];

   // vide la div buy-selection
   buySection.innerHTML = null;

}

/**
 * Prendre lla liste de selection et calcule le prix total et le retourne
 */
function calculator(){

   return 0;
}


/**
 * Affiche le prix total calculé et la liste de la selection
 */
function displayPrice(){

}


/**
 * Crée une fenêtre dynamique pour la section buy et affiche
 * @param {*} templateId 
 */
function createBuyWindow(templateId){

}