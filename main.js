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
      "name": "Post Only",
      "price":"110",// Première mois gratuit d'utilisation, Annuel 990.-
      "description": "Vous aurez besoin de référencement lors de la création de votre site Web, nous fabriquons pour vous le logiciel de référencement le plus rapide et le personnel et vous le donnons. ",
      "url": "img/14.jpg"

   },

   {
      "id": "3",
      "name": "Fresh Music",
      "price":"12",// starter free; basic 12.-; Premium 25.-
      "description": "Vous pouvez écouter toute la musique sur Youtube et Spotify en un seul endroit avec le système cloud, les télécharger sur votre appareil et les partager.",
      "url": "img/13.jpg"

   },

   {
      "id": "4",
      "name": "App Screen",
      "price":"15",
      "description": "S'il existe un site Web que le style que vous souhaitez en tête , faisons en sorte qu'il se produise",
      "url": "img/12.jpg"

   },

   {
      "id": "5",
      "name": "Suivre l'Alert",
      "price":"25", //Par mois 25; Annuel 120
      "description": "Vous ne savez pas où se trouve votre enfant ? Êtes-vous une famille curieuse? Nous vous permettons de vérifier à tout moment où se trouve votre enfant grâce aux signaux téléphoniques. ",
      "url": "img/11.jpg"
   },

   {
      "id": "6",
      "name": "Bla Bla",
      "price":"45",//Par mois 45; Annuel 100
      "description": "Vous pouvez l'utiliser pour enregistrer vos projets et présentations, et vous pouvez également les modifier à votre guise en choisissant les personnes avec lesquelles vous souhaitez partager. ",
      "url": "img/10.jpg"
   },

   {
      "id": "7",
      "name": "Grocéry",
      "price":"120",
      "description": "Si vous voulez manger les fruits et légumes les plus frais, vous êtes à la bonne adresse.",
      "url": "img/9.jpg"
   },

   {
      "id": "8",
      "name": "Company",
      "price":"255",
      "description": "connaissance, Honnêtement, Soins ",
      "url": "img/8.jpg"
   },

   {
      "id": "9",
      "name": "Mecatronique",
      "price":"65",
      "description": "Association de ceux qui codent robot avec arduino ",
      "url": "img/7.jpg"
   },

   {
      "id": "10",
      "name": "Icon",
      "price":"15",
      "description": "créez votre propre icône. ",
      "url": "img/6.jpg"
   },

   {
      "id": "11",
      "name": "Robin",
      "price":"Mensuellement 65-Annuel:715!!",
      "description": "Plus besoin d'être en retard pour les rendez-vous et dates d'affaires importants grâce à l'agenda en ligne. temporairement, si vous achetez annuellement, nous payons vos frais mensuels. Site sécurisé avec satellite et connexion sécurisée.",
      "url": "img/5.jpg"
   },

   {
      "id": "12",
      "name": "Satelite",
      "price":" 75",
      "description": "temporairement, si vous achetez annuellement, nous payons vos frais mensuels. Site sécurisé avec satellite et connexion sécurisée.",
      "url": "img/4.jpg"
   },

   {
      "id": "13",
      "name": "Coil",
      "price":"100",
      "description": "La façon la plus délicieuse et merveilleuse de boire du café.",
      "url": "img/3.jpg"
   },

   {
      "id": "14",
      "name": "Kick the Boss 2",
      "price":"125",
      "description": "Votre patron vous ennuie-t-il? Attaquez-vous comme si c'était votre patron! Pas de désintégration ou de déchirure grâce au coton apaisant et à la couture au laser. ",
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
      optionsInfos += `
         <li class="list-group-item">
            <div class="row">
               <div class="col-xs-12 col-sm-6">
                  ${option.name}
               </div>
               <div class="col-xs-12 col-sm-6">
               CHF ${option.price}
               </div>
            </div>
         </li>`
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
      <div class="row">
         <div class="col-xs-12 col-sm-6">
            <div class="card">
               <h4 class="card-header fw-bold">Liste des produits choisis</h4>
               <h5 class="card-header fw-bold">Template</h5>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                     <div class="row">
                        <div class="col-xs-12 col-sm-6">
                           <div id="dynamicWindowTemplateName"></div>
                        </div>
                        <div class="col-xs-12 col-sm-6 text-end">
                           <div id="dynamicWindowTemplatePrice"></div>
                        </div>
                     </div>
                  </li>
                  <h5 class="card-header fw-bold">Options</h5>
                  <div id="dynamicWindowOptionsInfos"></div>
               </ul>
               
            </div>
         </div>
         <div class="col-xs-12 col-sm-6">
            <h4 class="fw-bold">Prix total</h4>
            <h5 id="dynamicWindowTotal"></h5>
         </div>
      </div>
   `
}

/**
 * Listener qui surveille les clics sur les boutons buy et lance la fonction createBuyWindow avec l'id du template en paramètre
 */
document.querySelectorAll('a[href="#buy-selection"]').forEach(occurence => {
   occurence.addEventListener('click', (e) => {
      let templateId = e.target.id;
      createBuyWindow(templateId);
   });
 });


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
   buyWindowTemplateImageId.innerHTML = `<img src="${template.url}" alt="${template.name} class="img-thumbnail mx-auto" style="width:250px;height:auto;">`;

   //Ajouter dans la buy window le nom du template
   let buyWindowTemplateNameId = document.getElementById('templateName');
   buyWindowTemplateNameId.innerHTML = `${template.name}`;

   //Ajouter dans la buy window la description du template
   let buyWindowTemplateDescriptionId = document.getElementById('templateDescription');
   buyWindowTemplateDescriptionId.innerHTML = `${template.description}`;

   //Ajouter dans la buy window le prix du template
   let buyWindowTemplatePriceId = document.getElementById('templatePrice');
   buyWindowTemplatePriceId.innerHTML = `${template.price}.-`;

   let optionsDisplay = `<div class="container-fluid m-3"><h3 class="text-center">Options</h3><div class="row"><div class="col">`;
   index=0;
   for(let option of options) {
      if (index === 5) {
         console.log ("index : ", index)
         optionsDisplay += `</div><div class="col">`
      }
      index++;
      optionsDisplay += `
         <div class="form-check">
            <input onclick="manageOptions(${option.id})" class="form-check-input" type="checkbox" value="${option.id}" id="option_${option.id}">
            <label class="form-check-label" for="option_${option.id}">
               <div class="row">
                  <div class="col-10">
                     ${option.name} - ${option.description}
                  </div>
                  <div class="col-2 text-end">   
                     ${option.price}
                  </div>
               </div>
            </label>
         </div>`
      ;
   }
   optionsDisplay += '</div></div>';
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
   <div class="container-fluid w-100">
      <div class="row">
         <div class="col-xl-12 text-end">
            <button class="border border-danger rounded text-danger" onclick="clr()">X</button>
         </div>
      </div>
      <div class="row mt-3 mb-5">
         <div class="col-xl-3">
            <div id="templateImage" class=" text-center"></div>
         </div>
         <div class="col-xl-6">
         <h1 id="templateName" class="text-start"></h1>
            <h5 id="templateDescription" class="text-start"></h5>
         </div>
         <div class="col-xl-3">
            <div>
            
               <h1 id="templatePrice" class="text-center border border-5"></h1>
            </div>
         </div>
      </div>
   
      <div class="row" id="optionsDisplay"></div>
      <div class="row" id="dynamicWindow"></div>
   </div> `

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