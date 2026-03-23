function genererPDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.text("DEVIS SDO WEB", 20, 20);

doc.text(
"Total : " + totalPrix + "€",
20,
40
);

const signatureImage =
signaturePad.toDataURL();

doc.addImage(
signatureImage,
"PNG",
20,
60,
60,
30
);

doc.save("devis-sdo-web.pdf");

}
