let totalPrix = 0;

// Fonction pour calculer le prix total
function calculerPrix() {
    const base = Number(document.getElementById("typeSite").value) || 0;
    const pages = Number(document.getElementById("pages").value) || 0;
    let options = 0;

    // Somme des options cochées
    document.querySelectorAll("input[type=checkbox]:checked").forEach(el => {
        options += Number(el.value);
    });

    totalPrix = base + (pages * 80) + options;

    // Affichage du prix total
    document.getElementById("prixTotal").innerText = "Total : " + totalPrix + "€";
}

// Écoute les changements dans le formulaire pour recalculer automatiquement
document.getElementById("formDevis").addEventListener("change", calculerPrix);

// Fonction pour lancer le paiement de l’acompte (50%)
async function payerAcompte() {
    if (totalPrix === 0) {
        alert("Veuillez d'abord remplir le devis.");
        return;
    }

    const acompte = totalPrix * 0.5;

    try {
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: acompte })
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url; // Redirection vers la page de paiement
        } else {
            alert("Erreur lors de la création de la session de paiement.");
        }
    } catch (error) {
        console.error("Erreur lors de la création de la session :", error);
        alert("Impossible de lancer le paiement. Réessaie plus tard.");
    }
}

// Bouton pour payer l’acompte
document.getElementById("btnPayerAcompte").addEventListener("click", payerAcompte);

// Calcul initial au chargement de la page
calculerPrix();
