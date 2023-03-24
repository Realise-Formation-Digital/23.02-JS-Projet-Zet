// ----------- Données ----------------------------------------------------------
const temp = [
   {
      "id": "1",
      "name": "Automaty Gramaty",
      "price": "150",
      "description": "Vous ne savez pas depuis combien de temps vous travaillez ? Pas de problème, à partir du moment où vous êtes en ligne sur ce site, le temps est conservé et enregistré dans le calendrier.",
      "url": "img/1.jpg"
   },

   {
      "id": "2",
      "name": "Kick the Boss 2",
      "price": "125",
      "description": "Votre patron vous ennuie-t-il ? Attaquez-vous comme si c'était votre patron ! Pas de désintégration ou de déchirure grâce au coton apaisant et à la couture au laser",
      "url": "img/2.jpg"
   },

   {
      "id": "3",
      "name": "Coil",
      "price": "100",
      "description": "La façon la plus délicieuse et merveilleuse de boire du café",
      "url": "img/3.jpg"
   },

   {
      "id": "4",
      "name": "Robin",
      "price": "95",
      "description": "Plus besoin d'être en retard pour les rendez-vous et dates d'affaires importants grâce à l'agenda en ligne.",
      "url": "img/4.jpg"
   },

   {
      "id": "5",
      "name": "Template 5",
      "price": "Mensuellement 65-Annuel:715!!",
      "description": "temporairement, si vous achetez annuellement, nous payons vos frais mensuels. Site sécurisé avec satellite et connexion sécurisée",
      "url": "img/5.jpg"
   }
];

const options = [
   {
      "id": "1",
      "name": "Newsletter",
      "price": "200",
      "description": "Mise en place d'une fiches d'inscription à votre Newsletter"
   }, {
      "id": "2",
      "name": "GoogleMaps",
      "price": "200",
      "description": "Affichage de votre localisation sur GoogleMaps"
   }, {
      "id": "3",
      "name": "Contact Form",
      "price": "100",
      "description": "Création d'un formulaire de contact"
   }, {
      "id": "4",
      "name": "Forum",
      "price": "800",
      "description": "Forum pour les abonnés à la Newsletter"
   }, {
      "id": "5",
      "name": "Référencement",
      "price": "100",
      "description": "Référencement de votre site sur Google, DuckDuckgo, Bing et Safari"
   }, {
      "id": "6",
      "name": "Multilangue",
      "price": "800",
      "description": "Traduction de votre site en 3 langues de votre choix"
   }, {
      "id": "7",
      "name": "Gallerie",
      "price": "300",
      "description": "Mise en place d'une galerie d'image"
   }, {
      "id": "8",
      "name": "Vente sécurisée",
      "price": "100",
      "description": "Nous sécurisons les ventes pour vous"
   }, {
      "id": "9",
      "name": "Slideshow",
      "price": "100",
      "description": "Création d'un slide show selon vos souhaits"
   }, {
      "id": "10",
      "name": "Entretien et hébergement (1ère année gratuite)",
      "price": "5000",
      "description": "Nous nous occupons de l'entretien et de l'hébergement de votre site"
   }
];
// ----------- Variables --------------------------------------------------------
let selectionList = {}; // liste du template et des fonctionnalités choisies
// ------------------------------------------------------------------------------



/**
 * Fonction qui vide la séléction et ferme la fenêtre
 */
function clr() {
   let buySection = document.getElementById('buy-selection'); // div buy-selection
   // vide la liste
   selectionList = [];

   // vide la div buy-selection
   buySection.innerHTML = '';
}

/**
 * Prendre lla liste de selection et calcule le prix total et le retourne
 */
function calculator() {
   //Initialise le prix total avec le prix du template
   let totalPrice = Number(selectionList.template.price);

   //Ajoute au prix total le prix de chaque option sélectionnée
   for (let option of selectionList.options) {
      totalPrice += Number(option.price);
   }

   return totalPrice;
}


/**
 * Affiche le prix total calculé et la liste de la selection
 */
function displayPrice() {
   const price = calculator();

   //Ajouter la dynamic window vide
   let dynamicWindowId = document.getElementById('dynamicWindow');
   dynamicWindowId.innerHTML = dynamicWindowHTML();

   //Ajouter dans la dynamic window le nom du template
   let dynamicWindowTemplateNameId = document.getElementById('dynamicWindowTemplateName');
   dynamicWindowTemplateNameId.innerHTML = selectionList.template.name;

   //Ajouter dans la dynamic window le prix du template
   let dynamicWindowTemplatePriceId = document.getElementById('dynamicWindowTemplatePrice');
   dynamicWindowTemplatePriceId.innerHTML = selectionList.template.price;

   //Ajouter le nom et le prix des options
   let optionsInfos = '';
   for (option of selectionList.options) {
      optionsInfos += `<li class="list-group-item"> ${option.name}: CHF ${option.price}</li>`
   }
   let dynamicWindowOptionsInfosId = document.getElementById('dynamicWindowOptionsInfos');
   dynamicWindowOptionsInfosId.innerHTML = optionsInfos;

   //Ajouter le prix total
   let dynamicWindowTotalId = document.getElementById('dynamicWindowTotal');
   dynamicWindowTotalId.innerHTML = `<h3>${price}</h3>`;

}

/**
 * Fonction qui retourne le HTML vide pour la dynamic window
 * 
 * @returns 
 */
function dynamicWindowHTML() {
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
function createBuyWindow(templateId) {

   //Ajouter le HTML vide à la div d'id buy-selection
   let buyWindowId = document.getElementById("buy-selection");
   buyWindowId.innerHTML = buyWindowHTML();

   //Récupérer le template d'id passé en paramètre
   const template = temp.find((t) => t.id === templateId);

   //Ajouter le template à la liste des sélections
   selectionList = { 
      "template": template, 
      "options": []
   };

   //Ajouter dans la buy window l'image
   let buyWindowTemplateImageId = document.getElementById('templateImage');
   buyWindowTemplateImageId.innerHTML = `<img src="${template.url}" alt="${template.name}">`;

   //Ajouter dans la buy window le nom du template
   let buyWindowTemplateNameId = document.getElementById('templateName');
   buyWindowTemplateNameId.innerHTML = `${template.name}`;

   //Ajouter dans la buy window la description du template
   let buyWindowTemplateDescriptionId = document.getElementById('templateDescription');
   buyWindowTemplateDescriptionId.innerHTML = `${template.description}`;

   //Ajouter dans la buy window le prix du template
   let buyWindowTemplatePriceId = document.getElementById('templatePrice');
   buyWindowTemplatePriceId.innerHTML = `${template.price}`;

   let optionsDisplay = '';
   for(let option of options) {
      optionsDisplay += `
         <div class="form-check">
            <input onclick="manageOptions(${option.id})" class="form-check-input" type="checkbox" value="${option.id}" id="option_${option.id}">
            <label class="form-check-label" for="option_${option.id}">
               ${option.name} - ${option.price}
            </label>
         </div>`
      ;
   }

   //Ajouter dans la buy window la liste des options
   let buyWindowOptionsDisplayId = document.getElementById('optionsDisplay');
   buyWindowOptionsDisplayId.innerHTML = optionsDisplay;

   //Ajouter la dynamic window
   displayPrice();


}

/**
 * Fonction qui retourne le HTML vide pour buy window
 * 
 * @returns 
 */
function buyWindowHTML() {
   return `
   <div class="container-fluid">
   <div>
      <button onclick="clr()" classe="btn-close btn-close-white" aria-label="Close">X</button>
   </div>
    <div>
        <div>
            <div id="templateImage"></div>
        </div>

        <div>
            <h1 id="templateName"></h1>
            <h2 id="templateDescription"></h2>
        </div>
        <div>
            <h1 id="templatePrice"></h1>
        </div>
    </div>
   <div id="optionsDisplay"></div>
   <div id="dynamicWindow"></div>
   <div id="dynamicWindowTotal"></div>
    `

}

/**
 * Fonction qui ajoute ou enlève une option de la selection list
 * 
 * @param {*} optionId 
 */
function manageOptions(optionId){  
      
   //Récupérer l'option de paramètre optionId dans la selection list (si absente, undefined)
   const optionInSelection = selectionList.options.find((o) => o.id === optionId.toString())
   
   //Si l'option existe dans la selection list, on l'enlève
   if (optionInSelection){
      const index = selectionList.options.findIndex((o) => o.id === optionId.toString());
      selectionList.options.splice(index, 1);
   
   //Si l'option n'existe pas, on l'ajoute
   } else {
      //Récupérer l'option d'id passé en paramètre
      const option = options.find(o => o.id === optionId.toString());
      selectionList.options.push(option);
   }

   displayPrice();
}