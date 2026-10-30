//applique le thème choisi par l'utilisateur
//Fichier chargé sur toutes les pages
if (localStorage.getItem("theme") === "sombre") {
    document.body.classList.add("sombre");
}