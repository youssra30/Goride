function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById("rideForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const depart = document.getElementById("depart").value;
  const destination = document.getElementById("destination").value;
  const distance = parseFloat(document.getElementById("distance").value);
  const heure = document.getElementById("heure").value;

  if (isNaN(distance) || distance <= 0) {
    alert("Veuillez entrer une distance valide !");
    return;
  }

  let tarif = distance * 5;
  if (heure >= "20:00" || heure < "06:00") tarif *= 1.2;

  const message = `Trajet de ${depart} à ${destination} :
Distance : ${distance} km
Heure : ${heure}
💰 Tarif estimé : ${tarif.toFixed(2)} DH`;

  document.getElementById("resultat").textContent = message;

  const confirmation = document.getElementById("confirmation");
  confirmation.textContent = " Votre réservation a été enregistrée avec succès !";
  confirmation.style.color = "green";
  confirmation.style.fontWeight = "bold";
  confirmation.style.marginTop = "10px";
});

const cards = document.querySelectorAll(".service-card");
window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
