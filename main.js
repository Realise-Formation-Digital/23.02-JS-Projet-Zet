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

// ------------------------------------------------------------------------------



/**
 * Fonction qui vide la séléction et ferme la fenêtre
 */
function clr(){

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
   const price = calculator();

   //Ajouter la dynamic window vide
   const dynamicWindow = dynamicWindowHTML();
   let dynamicWindowId = document.getElementById('dynamicWindow');
   dynamicWindowId.innerHTML = dynamicWindow;
   
   //Ajouter dans la dynamic window le nom du template
   let dynamicWindowTemplateNameId = document.getElementById('dynamicWindowTemplateName');
   dynamicWindowTemplateNameId.innerHTML = selectionList.template.name;

   //Ajouter dans la dynamic window le prix du template
   let dynamicWindowTemplatePriceId = document.getElementById('dynamicWindowTemplatePrice');
   dynamicWindowTemplatePriceId.innerHTML = selectionList.template.price;

   //Ajouter le nom et le prix des options
   let optionsInfos = '';
   for(option of selectionList.options) {
      optionsInfos += `<li class="list-group-item"> ${option.name}: CHF ${option.price}</li>`
   }
   let dynamicWindowOptionsInfosId = document.getElementById('dynamicWindowOptionsInfos');
   dynamicWindowOptionsInfosId.innerHTML = optionsInfos;

   //Ajouter le prix total
   let dynamicWindowTotalId = document.getElementById('dynamicWindowTotal');
   dynamicWindowTotalId.innerHTML = `<h3>${price}</h3>`;

}

function dynamicWindowHTML(){
   return `
      <div class="card">
         <h5 class="card-header">Liste des produits choisis</h5>
         <ul class="list-group list-group-flush">
            <li class="list-group-item"><span id="dynamicWindowTemplateName"></span>: CHF <span id="dynamicWindowTemplatePrice"></span></li>
            <div id="dynamicWindowOptionsInfos"></div>
         </ul>
      </div>
   `
}


/**
 * Crée une fenêtre dynamique pour la section buy et affiche
 * @param {*} templateId 
 */
function createBuyWindow(templateId){

}