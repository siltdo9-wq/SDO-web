let totalPrix = 0;

function calculerPrix(){

const base =
Number(document.getElementById("typeSite").value);

const pages =
Number(document.getElementById("pages").value) || 0;

let options = 0;

document.querySelectorAll("input[type=checkbox]:checked")
.forEach(el => {

options += Number(el.value);

});

totalPrix =
base +
(pages * 80) +
options;

document.getElementById("prixTotal")
.innerText =
"Total : " + totalPrix + "€";

}

document
.getElementById("formDevis")
.addEventListener("change", calculerPrix);
