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
function clr() {

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
function displayPrice() {

}


/**
 * Crée une fenêtre dynamique pour la section buy et affiche
 * @param {*} templateId 
 */
function createBuyWindow(templateId) {

}