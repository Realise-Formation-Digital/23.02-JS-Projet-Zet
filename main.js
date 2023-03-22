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
      "price":"125",
      "description": "Votre patron vous ennuie-t-il ? Attaquez-vous comme si c'était votre patron ! Pas de désintégration ou de déchirure grâce au coton apaisant et à la couture au laser",
      "url": "img/2.jpg"
   },

   {
      "id": "3",
      "name": "Coil",
      "price":"100",
      "description": "La façon la plus délicieuse et merveilleuse de boire du café",
      "url": "img/3.jpg"
   },

   {
      "id": "4",
      "name": "Robin",
      "price":"95",
      "description": "Plus besoin d'être en retard pour les rendez-vous et dates d'affaires importants grâce à l'agenda en ligne.",
      "url": "img/4.jpg"
   },

   {
      "id": "5",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
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
let selectionList = []; // liste du template et des fonctionnalités choisies
// ------------------------------------------------------------------------------



/**
 * Fonction qui vide la séléction et ferme la fenêtre
 */
function clr(){
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
   let totalPrice = Number(selectionList.template.price);

   for(let option of selectionList.options){
      totalPrice += Number(option.price);
   }

   return totalPrice;
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
function createBuyWindow(templateId) {

}