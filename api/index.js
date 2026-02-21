<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Installation Photovoltaïque pour Professionnels</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #f4f6f9, #e9edf3);
    color: #1a1a1a;
}

header {
    background: linear-gradient(120deg, #0b2e59, #123f7a);
    color: white;
    padding: 80px 20px;
    text-align: center;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

header p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.cta-btn {
    background-color: #ff7a00;
    color: white;
    padding: 15px 30px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

section {
    padding: 60px 20px;
    max-width: 1000px;
    margin: auto;
}

.section-dark {
    background-color: #0b2e59;
    color: white;
}

h2 {
    text-align: center;
    margin-bottom: 40px;
}

.benefits {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.benefit {
    background: white;
    padding: 30px;
    flex: 1 1 250px;
    border-radius: 15px;
    box-shadow: 
        0 10px 25px rgba(0,0,0,0.08),
        0 5px 10px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    position: relative;
}

.benefit:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 20px 40px rgba(0,0,0,0.15),
        0 10px 20px rgba(0,0,0,0.1);
}

.section-dark .benefit {
    background: #123f7a;
    box-shadow: 
        0 10px 25px rgba(0,0,0,0.2),
        0 5px 10px rgba(0,0,0,0.15);
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 
        0 15px 40px rgba(0,0,0,0.1),
        0 5px 15px rgba(0,0,0,0.05);
}

input, textarea {
    padding: 15px;
    font-size: 1em;
    border-radius: 10px;
    border: 1px solid #ccc;
    transition: all 0.2s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 10px rgba(255,122,0,0.3);
}

footer {
    text-align: center;
    padding: 20px;
    font-size: 0.9em;
    background-color: #1a1a1a;
    color: white;
}
</style>
</head>

<body>

<header>
<h1>Réduisez vos coûts énergétiques grâce au photovoltaïque</h1>
<p>Étude gratuite pour professionnels, agriculteurs et entreprises industrielles</p>
<button class="cta-btn" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
Demander mon étude gratuite
</button>
</header>

<section>
<h2>Pourquoi agir maintenant ?</h2>
<div class="benefits">
<div class="benefit">
<h3>Explosion des coûts</h3>
<p>Les tarifs de l'électricité restent instables et impactent votre rentabilité.</p>
</div>
<div class="benefit">
<h3>Toitures inexploitées</h3>
<p>Votre bâtiment peut devenir une source de revenus ou d’économies.</p>
</div>
<div class="benefit">
<h3>Avantage fiscal</h3>
<p>Amortissements et dispositifs spécifiques pour les professionnels.</p>
</div>
</div>
</section>

<section class="section-dark">
<h2>Notre solution clé en main</h2>
<div class="benefits">
<div class="benefit">
<h3>Étude technique complète</h3>
<p>Dimensionnement personnalisé selon votre consommation.</p>
</div>
<div class="benefit">
<h3>Installation certifiée</h3>
<p>Équipe qualifiée, conformité et suivi administratif.</p>
</div>
<div class="benefit">
<h3>Rentabilité mesurable</h3>
<p>Projection financière claire sur 20 ans.</p>
</div>
</div>
</section>

<section id="simulateur">
<h2>Simulez la rentabilité de votre toiture</h2>

<div class="benefits">

<div class="benefit">
<label>Surface de toiture disponible (m²)</label>
<input type="number" id="surface" placeholder="Ex : 800">
</div>

<div class="benefit">
<label>Consommation annuelle (kWh)</label>
<input type="number" id="conso" placeholder="Ex : 65000">
</div>

<div class="benefit">
<label>Puissance compteur (kVA) (facultatif)</label>
<input type="number" id="compteur" placeholder="Ex : 36">
</div>

<div class="benefit">
<label>Type de contrat</label>
<select id="typeContrat" onchange="afficherTarifs()">
<option value="">-- Sélectionner --</option>
<option value="base">Base</option>
<option value="hp_hc">HP / HC Classique</option>
<option value="hp_hc_saison">HP / HC Haute saison / Basse saison</option>
</select>
</div>

</div>

<div id="zoneTarifs" class="benefits"></div>

<div style="text-align:center; margin-top:30px;">
<button class="cta-btn" onclick="calculer()">Calculer mon potentiel</button>
</div>

<div id="resultat" style="margin-top:40px; text-align:center; font-size:1.2em;"></div>
<div id="scoreRentabilite" style="margin-top:20px; font-size:1.3em; text-align:center;"></div>

<div style="display:flex; justify-content:center; gap:40px; margin-top:30px;">
<div style="width:250px;"><canvas id="pieSansPV"></canvas></div>
<div style="width:250px;"><canvas id="pieAvecPV"></canvas></div>
</div>

</section>

<section id="contact">
<h2>Obtenez votre étude gratuite</h2>
<form>
<input type="text" placeholder="Nom de l'entreprise" required>
<input type="text" placeholder="Nom & prénom" required>
<input type="email" placeholder="Email professionnel" required>
<input type="tel" placeholder="Téléphone" required>
<textarea placeholder="Surface de toiture / type d'activité"></textarea>
<button class="cta-btn" type="submit">Recevoir mon étude</button>
</form>
</section>

<footer>
© 2026 Installation Photovoltaïque – Tous droits réservés
</footer>

<script>

function afficherTarifs() {

let type = document.getElementById("typeContrat").value;
let zone = document.getElementById("zoneTarifs");

if(type === "base"){
zone.innerHTML = `
<div class="benefit">
<label>Tarif unique (c€/kWh)</label>
<input type="number" step="0.01" id="tarifBase" placeholder="Ex : 18">
</div>`;
}

else if(type === "hp_hc"){
zone.innerHTML = `
<div class="benefit">
<label>Tarif Heures Pleines (c€/kWh)</label>
<input type="number" step="0.01" id="tarifHP" placeholder="Ex : 20">
</div>
<div class="benefit">
<label>Tarif Heures Creuses (c€/kWh)</label>
<input type="number" step="0.01" id="tarifHC" placeholder="Ex : 14">
</div>`;
}

else if(type === "hp_hc_saison"){
zone.innerHTML = `
<div class="benefit">
<label>HP Haute Saison (c€/kWh)</label>
<input type="number" step="0.01" id="hpHaute">
</div>
<div class="benefit">
<label>HC Haute Saison (c€/kWh)</label>
<input type="number" step="0.01" id="hcHaute">
</div>
<div class="benefit">
<label>HP Basse Saison (c€/kWh)</label>
<input type="number" step="0.01" id="hpBasse">
</div>
<div class="benefit">
<label>HC Basse Saison (c€/kWh)</label>
<input type="number" step="0.01" id="hcBasse">
</div>`;
}

else{
zone.innerHTML = "";
}
}

function calculer() {

let surface = parseFloat(document.getElementById("surface").value);
let conso = parseFloat(document.getElementById("conso").value);
let type = document.getElementById("typeContrat").value;

if(!surface || !conso || !type){
document.getElementById("resultat").innerHTML = "Veuillez remplir tous les champs obligatoires.";
return;
}

// ===== PRIX MOYEN SELON CONTRAT =====
let prixCentimes;

if(type === "base"){
prixCentimes = parseFloat(document.getElementById("tarifBase").value);
}

else if(type === "hp_hc"){
let hp = parseFloat(document.getElementById("tarifHP").value);
let hc = parseFloat(document.getElementById("tarifHC").value);
prixCentimes = (hp * 0.7) + (hc * 0.3);
}

else if(type === "hp_hc_saison"){
let hpH = parseFloat(document.getElementById("hpHaute").value);
let hcH = parseFloat(document.getElementById("hcHaute").value);
let hpB = parseFloat(document.getElementById("hpBasse").value);
let hcB = parseFloat(document.getElementById("hcBasse").value);

let moyenneHaute = (hpH * 0.7) + (hcH * 0.3);
let moyenneBasse = (hpB * 0.7) + (hcB * 0.3);

prixCentimes = (moyenneHaute + moyenneBasse) / 2;
}

if(!prixCentimes){
document.getElementById("resultat").innerHTML = "Veuillez renseigner vos tarifs.";
return;
}

// Conversion en euros
let prixKwh = prixCentimes / 100;

// ===== PARAMÈTRES PROJET =====
const productible = 1000;
const tauxRevente = 0.0536;
const maintenance = 480;

let kwc = surface / 4.4;
let coutParKwc = kwc <= 36 ? 1000 : 900;
let investissement = kwc * coutParKwc;

let production = kwc * productible;
let tauxAuto = Math.min(0.8, conso / production);
let autoconsomme = production * tauxAuto;
let surplus = production - autoconsomme;

let economie = autoconsomme * prixKwh;
let revente = surplus * tauxRevente;

let productionAn = production;
let prixAn = prixKwh;

let cumul = 0;
let amortissementReel = null;

for(let an = 1; an <= 20; an++){

    let autoconsommeAn = productionAn * tauxAuto;
    let surplusAn = productionAn - autoconsommeAn;

    let economieAn = autoconsommeAn * prixAn;
    let reventeAn = surplusAn * tauxRevente;

    let gainAn = economieAn + reventeAn - maintenance;

    cumul += gainAn;

    if(cumul >= investissement && amortissementReel === null){
        amortissementReel = an;
    }

    // Inflation
    if(an <= 7) prixAn *= 1.02;
    else if(an <= 15) prixAn *= 1.01;
    else prixAn *= 1.005;

    // Dégradation
    productionAn *= 0.996;
}

let gainMoyen = cumul / 20;

// ===== SCORE RENTABILITÉ =====
let score;
let couleur;

if(amortissementReel && amortissementReel <= 6){
score = "🟢 Projet Très Rentable";
couleur = "green";
}
else if(amortissementReel && amortissementReel <= 10){
score = "🟠 Projet Rentable";
couleur = "orange";
}
else{
score = "🔴 Rentabilité Faible";
couleur = "red";
}

// ===== AFFICHAGE =====
document.getElementById("resultat").innerHTML = `
<strong>Puissance estimée :</strong> ${kwc.toFixed(1)} kWc<br>
<strong>Coût annuel estimé :</strong> ${(conso * prixKwh).toFixed(0)} €<br>
<strong>Gain moyen annuel :</strong> ${gainMoyen.toFixed(0)} € / an<br>
<strong>Amortissement réel :</strong> ${amortissementReel ? amortissementReel + " ans" : "Non amorti sur 20 ans"}
`;

document.getElementById("scoreRentabilite").innerHTML =
`<span style="color:${couleur}; font-weight:bold;">${score}</span>`;

// ===== GRAPHIQUES =====
let factureSansPV = conso * prixKwh;
let factureAvecPV = factureSansPV - economie + maintenance;

if(window.chart1) window.chart1.destroy();
if(window.chart2) window.chart2.destroy();

window.chart1 = new Chart(document.getElementById("pieSansPV"), {
type: 'pie',
data: {
labels: ["Facture annuelle"],
datasets: [{ data: [factureSansPV] }]
}
});

window.chart2 = new Chart(document.getElementById("pieAvecPV"), {
type: 'pie',
data: {
labels: ["Facture restante", "Économie générée"],
datasets: [{ data: [factureAvecPV, economie] }]
}
});

}

</script>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</body>
</html>
