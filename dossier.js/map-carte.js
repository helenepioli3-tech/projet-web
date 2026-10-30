const map = L.map("map").setView([46.1603, -1.1511], 9);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

fetch("promo.json")
  .then((reponse) => reponse.json())
  .then((donnees) => {
    donnees.apprenants.forEach((apprenant) => {
      document.getElementById("nomPromo").textContent = donnees.nomPromo;
      L.marker([
        apprenant.coordonnees.latitude,
        apprenant.coordonnees.longitude,
      ])
        .addTo(map)
        .addTo(map)
        .bindPopup(`${apprenant.nom}<br>${apprenant.ville}`);
    });
  });
