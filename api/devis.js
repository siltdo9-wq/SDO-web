/**

- SDO Web – API Devis IA
- Vercel Serverless Function
- POST /api/devis
  */

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || ‘*’;

// ─── CORS HEADERS ────────────────────────────────────────────────────────────
function setCors(res) {
res.setHeader(‘Access-Control-Allow-Origin’, ALLOWED_ORIGIN);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);
}

// ─── INPUT VALIDATION ─────────────────────────────────────────────────────────
function validate(body) {
const { nom, email, service, budget, description } = body;
const errors = [];

if (!nom || typeof nom !== ‘string’ || nom.trim().length < 2)
errors.push(‘Nom invalide.’);
if (!email || !/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email))
errors.push(‘Email invalide.’);
if (!service || typeof service !== ‘string’ || service.trim().length === 0)
errors.push(‘Service invalide.’);
if (!budget || typeof budget !== ‘string’ || budget.trim().length === 0)
errors.push(‘Budget invalide.’);
if (!description || description.trim().length < 20)
errors.push(‘Description trop courte (20 caractères minimum).’);

return errors;
}

// ─── PROMPT BUILDER ───────────────────────────────────────────────────────────
function buildPrompt({ nom, email, service, budget, description }) {
const serviceLabels = {
vitrine: ‘Site vitrine (3–5 pages)’,
landing: ‘Landing page (page unique)’,
ecommerce: ‘Site e-commerce’,
refonte: ‘Refonte de site existant’,
automatisation: ‘Automatisation / intégrations’,
};

const budgetLabels = {
‘<500’: ‘Moins de 500€’,
‘500-1000’: ‘500€ – 1 000€’,
‘1000-2000’: ‘1 000€ – 2 000€’,
‘2000-5000’: ‘2 000€ – 5 000€’,
‘>5000’: ‘Plus de 5 000€’,
};

return `Tu es Silvio, fondateur de SDO Web, une agence web freelance belge premium.
Tu vas analyser une demande de devis entrante et produire une réponse commerciale structurée en JSON.

─── DEMANDE CLIENT ───────────────────────────────────────
Nom           : ${nom.trim()}
Email         : ${email.trim()}
Service       : ${serviceLabels[service]}
Budget indiqué: ${budgetLabels[budget]}
Description   : ${description.trim()}
─────────────────────────────────────────────────────────

─── GRILLE DE PRIX SDO WEB ───────────────────────────────
Landing page        : 300€ – 500€   (délai 48h)
Site vitrine simple : 600€ – 800€   (délai 4–5 jours)
Site vitrine Pro    : 900€ – 1 200€ (délai 5–7 jours)
Site e-commerce     : 1 200€ – 2 000€ (délai 10–14 jours)
Refonte de site     : 500€ – 1 500€ (selon complexité)
Automatisation      : 300€ – 800€   (selon scope)
Maintenance / mois  : 50€ – 120€
─────────────────────────────────────────────────────────

─── MISSION ──────────────────────────────────────────────

1. Qualifie le prospect : FAIBLE / MOYEN / PREMIUM
- FAIBLE : budget incohérent, description vague, demande hors scope
- MOYEN  : projet clair, budget réaliste, bon potentiel
- PREMIUM: budget élevé, projet précis, client sérieux
1. Estime le prix réel basé sur la description + grille ci-dessus
   (fourchette basse et haute en euros)
1. Rédige un message de réponse commercial en FRANÇAIS :
- Commence par “Bonjour [prénom],”
- Ton premium, chaleureux, direct — jamais générique
- Confirme avoir compris le projet en 1–2 phrases
- Donne l’estimation de prix avec justification courte
- Mentionne le délai estimé
- Propose un next step clair (appel WhatsApp ou réponse email)
- Maximum 150 mots
- Signature : “— Silvio | SDO Web”

─── FORMAT DE RÉPONSE ────────────────────────────────────
Réponds UNIQUEMENT avec un objet JSON valide, sans markdown ni backticks :
{
“qualification”: “MOYEN”,
“score”: 7,
“prixMin”: 900,
“prixMax”: 1200,
“delai”: “5 à 7 jours”,
“message”: “Bonjour …”,
“nextStep”: “Répondez à cet email ou contactez-moi sur Instagram @sdo_web”,
“notes_internes”: “Client sérieux, projet e-commerce clair, budget cohérent”
}`;
}

// ─── CALL CLAUDE API ──────────────────────────────────────────────────────────
async function callClaude(prompt) {
const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) throw new Error(‘ANTHROPIC_API_KEY manquante dans les variables d'environnement.’);

const response = await fetch(‘https://api.anthropic.com/v1/messages’, {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
‘x-api-key’: apiKey,
‘anthropic-version’: ‘2023-06-01’,
},
body: JSON.stringify({
model: ‘claude-opus-4-5’,
max_tokens: 800,
messages: [{ role: ‘user’, content: prompt }],
}),
});

if (!response.ok) {
const err = await response.text();
throw new Error(`Claude API error ${response.status}: ${err}`);
}

const data = await response.json();
const raw = data.content?.[0]?.text;
if (!raw) throw new Error(‘Réponse Claude vide.’);

// Strip potential markdown backticks
const clean = raw.replace(/^`(?:json)?\n?/i, '').replace(/\n?`$/i, ‘’).trim();

try {
return JSON.parse(clean);
} catch {
throw new Error(’Réponse Claude non parseable : ’ + clean.slice(0, 200));
}
}

// ─── MAIN HANDLER ─────────────────────────────────────────────────────────────
export default async function handler(req, res) {
setCors(res);

// Preflight
if (req.method === ‘OPTIONS’) return res.status(204).end();

// Method guard
if (req.method !== ‘POST’) {
return res.status(405).json({ error: ‘Méthode non autorisée.’ });
}

try {
// Robustly parse body
let body = req.body;
if (typeof body === ‘string’) {
try { body = JSON.parse(body); } catch { body = {}; }
}
if (!body || typeof body !== ‘object’) {
return res.status(400).json({ error: ‘Corps de requête invalide.’ });
}

```
// Validate
const errors = validate(body);
if (errors.length > 0) {
  return res.status(400).json({ error: errors.join(' '), details: errors });
}

// Sanitize
const safe = {
  nom: String(body.nom).trim().slice(0, 100),
  email: String(body.email).trim().slice(0, 200),
  service: String(body.service).trim().slice(0, 50),
  budget: String(body.budget).trim().slice(0, 20),
  description: String(body.description).trim().slice(0, 2000),
};

// Call Claude
const result = await callClaude(buildPrompt(safe));

return res.status(200).json({
  success: true,
  qualification: result.qualification,
  score: result.score,
  prixMin: result.prixMin,
  prixMax: result.prixMax,
  delai: result.delai,
  message: result.message,
  nextStep: result.nextStep,
});
```

} catch (err) {
console.error(’[SDO/devis]’, err.message);
return res.status(500).json({
error: ’Erreur serveur : ’ + err.message,
});
}
}
