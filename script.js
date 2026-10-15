fetch("promo.json")
    .then(reponse => reponse.json())
    .then(donnees => {
donnees.apprenants.forEach(apprenant => {
document.getElementById("nomPromo").textContent = donnees.nomPromo;
const ligne = document.createElement("tr");
ligne.innerHTML = `
        <td>${apprenant.nom}</td>
        <td>${apprenant.prenom}</td>
        <td>${apprenant.ville}</td>
        <td><a href ="#" class="lien-detail">Détail</a></td> `;
document.getElementById("liste-apprenants").appendChild(ligne);

ligne.querySelector(".lien-detail").addEventListener("click", function(event) {
    event.preventDefault();
    const fenetre = document.getElementById("fenetre-detail");
    if(fenetre.style.display === "block") {
        fenetre.style.display = "none";
    } else {
document.getElementById("avatar-detail").src = apprenant.avatar;
document.getElementById("nom-detail").textContent = apprenant.nom;
document.getElementById("prenom-detail").textContent = apprenant.prenom;
document.getElementById("ville-detail").textContent = apprenant.ville;
document.getElementById("coordonnees-detail").textContent = "Latitude : " + apprenant.coordonnees.latitude + " / Longitude : " + apprenant.coordonnees.longitude;
document.getElementById("anecdote-detail").textContent = apprenant.anecdotes;
fenetre.style.display = "block";
    }
});
    });
   } );
const fenetreDetail = document.getElementById("fenetre-detail");

// Fermer en cliquant en dehors de la fenêtre
document.addEventListener("click", function (event) {
    if (fenetreDetail.style.display === "block"
        && !fenetreDetail.contains(event.target)
        && !event.target.classList.contains("lien-detail")) {
        fenetreDetail.style.display = "none";
    }
});
