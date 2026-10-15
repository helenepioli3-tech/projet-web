fetch("promo.json")
    .then(reponse => reponse.json())
    .then(donnees => {

document.getElementById("nomPromo").textContent = donnees.nomPromo;

document.getElementById("dateDebut").textContent = donnees.dateDebut;
document.getElementById("dateFin").textContent = donnees.dateFin;
document.getElementById("nombreApprenants").textContent = donnees.nombreApprenants;
document.getElementById("description").textContent = donnees.description;
    });