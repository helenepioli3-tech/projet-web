const tableau = document.querySelector(".conteneur-tableau");
const listeCartes = document.getElementById("liste-cartes");

// Création des cartes
fetch("promo.json")
    .then(reponse => reponse.json())
    .then(donnees => {
        donnees.apprenants.forEach(apprenant => {
            const carte = document.createElement("div");
            carte.classList.add("carte");

            const titre = document.createElement("h3");
            titre.textContent = apprenant.prenom + " " + apprenant.nom;
            carte.appendChild(titre);

            const ville = document.createElement("p");
            ville.textContent = apprenant.ville;
            carte.appendChild(ville);

            const bouton = document.createElement("button");
            bouton.textContent = "Détail";
            bouton.classList.add("lien-detail");   // important pour ne pas fermer la fenêtre aussitôt
            carte.appendChild(bouton);

            // Clic sur "Détail" : on remplit et on affiche la fenêtre
            bouton.addEventListener("click", function () {
                document.getElementById("avatar-detail").src = apprenant.avatar;
                document.getElementById("nom-detail").textContent = apprenant.nom;
                document.getElementById("prenom-detail").textContent = apprenant.prenom;
                document.getElementById("ville-detail").textContent = apprenant.ville;
                document.getElementById("coordonnees-detail").textContent = "Latitude : " + apprenant.coordonnees.latitude + " / Longitude : " + apprenant.coordonnees.longitude;
                document.getElementById("anecdote-detail").textContent = apprenant.anecdotes;
                document.getElementById("fenetre-detail").style.display = "block";
            });

            listeCartes.appendChild(carte);
        });
    });

// Affiche le tableau ou les cartes
function afficher(format) {
    if (format === "liste") {
        tableau.style.display = "block";
        listeCartes.style.display = "none";
    } else {
        tableau.style.display = "none";
        listeCartes.style.display = "grid";
    }
}

// Au chargement : on applique le format enregistré
const formatSauvegarde = localStorage.getItem("format") || "liste";
document.querySelector(`input[name="affichage"][value="${formatSauvegarde}"]`).checked = true;
afficher(formatSauvegarde);

// Quand on change les boutons radio à la main
document.querySelectorAll('input[name="affichage"]').forEach(input => {
    input.addEventListener("change", function () {
        afficher(this.value);
    });
});