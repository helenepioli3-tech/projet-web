fetch("promo.json")
    .then(reponse => reponse.json())
    .then(donnees => {

document.getElementById("nomPromo").textContent = donnees.nomPromo;  
     
const selectTheme = document.getElementById("theme");
const radios = document.querySelectorAll('input[name="format"]');
const formulaire = document.querySelector("form");

// on remet les choix déjà enregistrés 
//Si rien n'est enregistré, on prend les valeurs par défaut (clair et liste)
selectTheme.value = localStorage.getItem("theme") || "clair";
const formatSauvegarde = localStorage.getItem("format") || "liste";

radios.forEach(radio => {
     // Le bouton est coché seulement si sa valeur est celle qui est enregistrée
    radio.checked = (radio.value === formatSauvegarde);
});

// on enregistre au lieu de recharger la page
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

// On récupère le bouton radio coché
    const format = document.querySelector('input[name="format"]:checked').value;

// On enregistre les deux choix dans le localStorage    
    localStorage.setItem("theme", selectTheme.value);
    localStorage.setItem("format", format);
    
// On change le thème tout de suite, sans recharger
// (le 2e paramètre dit : mettre la classe si c'est vrai, l'enlever sinon)
    document.body.classList.toggle("sombre", selectTheme.value === "sombre");
    alert("Préférences enregistrées !");
});
    });
