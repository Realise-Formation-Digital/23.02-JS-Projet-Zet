// ----------- Données ----------------------------------------------------------
const temp = [
   {
      "id": "1",
      "name": "Booming Shop",
      "price": "150",
      "description": "Vous ne trouvez pas le type d'interface utilisateur que vous souhaitez? Vous voulez des interfaces utilisateur plus délicates ? Alors tu es au bon endroit.",
      "url": "img/15.jpg"
   },

   {
      "id": "2",
      "name": "Kick the Boss 2",
      "price":"125",
      "description": " ",
      "url": "img/14.jpg"
   },

   {
      "id": "3",
      "name": "Coil",
      "price":"100",
      "description": " ",
      "url": "img/13.jpg"
   },

   {
      "id": "4",
      "name": "Robin",
      "price":"95",
      "description": " ",
      "url": "img/12.jpg"
   },

   {
      "id": "5",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/11.jpg"
   },

   {
      "id": "6",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/10.jpg"
   },

   {
      "id": "7",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/9.jpg"
   },

   {
      "id": "8",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/8.jpg"
   },

   {
      "id": "9",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/7.jpg"
   },

   {
      "id": "10",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": " ",
      "url": "img/6.jpg"
   },

   {
      "id": "11",
      "name": "Template 5",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": "temporairement, si vous achetez annuellement, nous payons vos frais mensuels. Site sécurisé avec satellite et connexion sécurisée.",
      "url": "img/5.jpg"
   },

   {
      "id": "12",
      "name": "Template 5",
      "price":"  ",
      "description": "Plus besoin d'être en retard pour les rendez-vous et dates d'affaires importants grâce à l'agenda en ligne.",
      "url": "img/4.jpg"
   },

   {
      "id": "13",
      "name": "Coil3",
      "price":"100",
      "description": "La façon la plus délicieuse et merveilleuse de boire du café.",
      "url": "img/3.jpg"
   },

   {
      "id": "14",
      "name": "Kick the Boss 2",
      "price":"125",
      "description": "Votre patron vous ennuie-t-il ? Attaquez-vous comme si c'était votre patron ! Pas de désintégration ou de déchirure grâce au coton apaisant et à la couture au laser. ",
      "url": "img/2.jpg"
   },

   {
      "id": "15",
      "name": "Automaty a gramaty",
      "price":"150",
      "description": "Vous ne savez pas depuis combien de temps vous travaillez ? Pas de problème, à partir du moment où vous êtes en ligne sur ce site, le temps est conservé et enregistré dans le calendrier.",
      "url": "img/1.jpg"
   }


];

const options = [
   {
      "id": "1",
      "name": "Newsletter",
      "price": "200",
      "description": "Mise en place d'une fiches d'inscription à votre Newsletter"
   },   {
      "id": "2",
      "name": "GoogleMaps",
      "price": "200",
      "description": "Affichage de votre localisation sur GoogleMaps"
   },   {
      "id": "3",
      "name": "Contact Form",
      "price": "100",
      "description": "Création d'un formulaire de contact"
   },   {
      "id": "4",
      "name": "Forum",
      "price": "800",
      "description": "Forum pour les abonnés à la Newsletter"
   },   {
      "id": "5",
      "name": "Référencement",
      "price": "100",
      "description": "Référencement de votre site sur Google, DuckDuckgo, Bing et Safari"
   },   {
      "id": "6",
      "name": "Multilangue",
      "price": "800",
      "description": "Traduction de votre site en 3 langues de votre choix"
   },   {
      "id": "7",
      "name": "Gallerie",
      "price": "300",
      "description": "Mise en place d'une galerie d'image"
   },   {
      "id": "8",
      "name": "Vente sécurisée",
      "price": "100",
      "description": "Nous sécurisons les ventes pour vous"
   },   {
      "id": "9",
      "name": "Slideshow",
      "price": "100",
      "description": "Création d'un slide show selon vos souhaits"
   },   {
      "id": "10",
      "name": "Entretien et hébergement (1ère année gratuite",
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