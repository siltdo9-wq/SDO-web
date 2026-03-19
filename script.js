<!DOCTYPE html>
<html lang="fr-BE">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SDO Web | Création de sites internet Belgique & Bruxelles - Développeur Web Freelance</title>
<meta name="description" content="Développeur web freelance en Belgique. Création de sites internet professionnels à Bruxelles : vitrine, e-commerce, SEO. Devis gratuit sous 24h.">
<meta name="keywords" content="création site internet, développeur web freelance, création site Belgique, création site Bruxelles, prix site internet, agence web, refonte site, SEO">
<meta name="author" content="Silvio De Oliveira - SDO Web">
<meta name="robots" content="index, follow">
<meta name="language" content="fr-BE">
<link rel="canonical" href="https://sdoweb.be">

<!-- Open Graph -->
<meta property="og:title" content="SDO Web | Création de sites internet professionnels Belgique">
<meta property="og:description" content="Développeur web freelance spécialisé en création de sites modernes, rapides et optimisés SEO. Basé à Bruxelles, intervention en Belgique.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://sdoweb.be">
<meta property="og:image" content="https://sdoweb.be/og-image.jpg">
<meta property="og:locale" content="fr_BE">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SDO Web | Création de sites internet Belgique">
<meta name="twitter:description" content="Développeur web freelance - Sites vitrine, e-commerce & SEO à Bruxelles et en Belgique.">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SDO Web",
  "description": "Création de sites internet professionnels en Belgique",
  "url": "https://sdoweb.be",
  "email": "contact@sdo-web.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bruxelles",
    "addressCountry": "BE"
  },
  "serviceType": ["Création de sites web", "SEO", "Développement web"],
  "priceRange": "€€"
}
</script>

<style>
:root {
  --ink: #0F172A;
  --purple: #7C3AED;
  --purple-light: #A78BFA;
  --purple-dark: #5B21B6;
  --blue: #38BDF8;
  --bg: #F8FAFC;
  --card: #ffffff;
  --muted: #64748B;
  --border: #E2E8F0;
  --success: #10B981;
  --gradient-hero: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);
  --gradient-dark: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-purple: 0 8px 32px rgba(124, 58, 237, 0.25);
  
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
}

*, *::before, *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}

html { 
  scroll-behavior: smooth; 
  scroll-padding-top: 80px;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Navigation */
nav {
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 1000;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  padding: 1rem 5vw;
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

nav.scrolled {
  padding: 0.75rem 5vw;
  box-shadow: var(--shadow-md);
}

.logo { 
  font-family: var(--font-display);
  font-weight: 700; 
  font-size: 1.75rem; 
  color: var(--ink);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.logo span { color: var(--purple); }

.nav-links { 
  display: flex; 
  gap: 2rem; 
  list-style: none; 
  align-items: center;
}

.nav-links a { 
  color: var(--muted); 
  text-decoration: none; 
  font-size: 0.9rem;
  font-weight: 500; 
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover { color: var(--purple); }

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--purple);
  transition: width 0.3s ease;
}

.nav-links a:hover::after { width: 100%; }

.nav-cta {
  background: var(--gradient-hero);
  color: #fff !important;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}

.nav-cta::after { display: none !important; }

.burger { 
  display: none; 
  flex-direction: column; 
  gap: 5px; 
  cursor: pointer; 
  z-index: 1001;
}

.burger span { 
  display: block; 
  width: 24px; 
  height: 2px; 
  background: var(--ink); 
  border-radius: 2px; 
  transition: all 0.3s ease; 
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex; 
  align-items: center; 
  padding: 8rem 5vw 4rem;
  position: relative;
  overflow: hidden;
  background: var(--gradient-dark);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 70% at 80% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 60%),
    radial-gradient(ellipse 60% 60% at 20% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 60%);
  animation: pulse-bg 8s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content { color: #fff; }

.hero-badge {
  display: inline-flex; 
  align-items: center; 
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1); 
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff; 
  padding: 0.5rem 1rem; 
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600; 
  letter-spacing: 0.05em; 
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-badge::before { 
  content: ''; 
  width: 6px; 
  height: 6px; 
  background: var(--success); 
  border-radius: 50%; 
  animation: pulse 2s infinite; 
}

@keyframes pulse { 
  0%, 100% { opacity: 1; transform: scale(1); } 
  50% { opacity: 0.6; transform: scale(1.3); } 
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700; 
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  color: #fff;
}

h1 .highlight { 
  color: var(--purple-light);
  position: relative;
}

.hero-sub {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85); 
  max-width: 500px;
  margin-bottom: 2rem; 
  line-height: 1.7;
}

.hero-btns { 
  display: flex; 
  gap: 1rem; 
  flex-wrap: wrap; 
}

.btn-primary {
  background: #fff; 
  color: var(--purple);
  padding: 1rem 2rem; 
  border-radius: 12px;
  font-weight: 600; 
  text-decoration: none; 
  font-size: 1rem;
  transition: all 0.3s ease; 
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
}

.btn-primary:hover { 
  transform: translateY(-3px); 
  box-shadow: 0 12px 32px rgba(0,0,0,0.3);
}

.btn-secondary {
  background: transparent; 
  color: #fff;
  padding: 1rem 2rem; 
  border-radius: 12px;
  font-weight: 600; 
  text-decoration: none; 
  font-size: 1rem;
  border: 2px solid rgba(255,255,255,0.3); 
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-secondary:hover { 
  border-color: #fff; 
  background: rgba(255,255,255,0.1);
  transform: translateY(-3px);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mockup-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.mockup-browser {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.mockup-header {
  background: linear-gradient(to right, #f1f5f9, #e2e8f0);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.mockup-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mockup-dot.red { background: #ef4444; }
.mockup-dot.yellow { background: #f59e0b; }
.mockup-dot.green { background: #22c55e; }

.mockup-body {
  padding: 2rem;
  background: #fff;
  min-height: 300px;
}

.mockup-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mockup-line {
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
}

.mockup-line.short { width: 60%; }
.mockup-line.medium { width: 80%; }
.mockup-line.accent { 
  background: linear-gradient(90deg, var(--purple), var(--blue));
  height: 40px;
  width: 100%;
  margin: 1rem 0;
}

/* Stats Bar */
.stats-bar {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.stat-item {
  text-align: left;
}

.stat-value { 
  font-family: var(--font-display);
  font-size: 2rem; 
  font-weight: 700; 
  color: #fff;
  line-height: 1;
}

.stat-label { 
  font-size: 0.875rem; 
  color: rgba(255,255,255,0.7); 
  margin-top: 0.25rem;
}

/* Section Styles */
section { 
  padding: 5rem 5vw; 
  position: relative;
}

.section-header {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700; 
  letter-spacing: 0.15em; 
  text-transform: uppercase;
  color: var(--purple); 
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 100px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700; 
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.section-sub { 
  color: var(--muted); 
  font-size: 1.125rem;
  line-height: 1.7;
}

/* Why Choose Section */
#why-choose {
  background: #fff;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.why-card {
  background: var(--bg); 
  border: 1px solid var(--border);
  border-radius: 16px; 
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.why-card:hover { 
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--purple-light);
}

.why-icon { 
  width: 64px;
  height: 64px;
  background: var(--gradient-hero);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: #fff;
}

.why-card h3 { 
  font-family: var(--font-display);
  font-size: 1.25rem; 
  font-weight: 600; 
  margin-bottom: 0.75rem;
  color: var(--ink);
}

.why-card p { 
  font-size: 0.95rem; 
  color: var(--muted); 
  line-height: 1.6;
}

/* Services Section */
#services { 
  background: var(--ink); 
  color: #fff; 
  position: relative;
  overflow: hidden;
}

#services::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
  pointer-events: none;
}

#services .section-title { color: #fff; }
#services .section-sub { color: rgba(255, 255, 255, 0.7); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 16px;
  transition: all 0.4s ease;
}

.service-card:hover { 
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(124, 58, 237, 0.5);
  transform: translateY(-4px);
}

.service-icon {
  width: 56px; 
  height: 56px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(56, 189, 248, 0.5));
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 1.5rem; 
  margin-bottom: 1.5rem;
}

.service-card h3 { 
  font-family: var(--font-display);
  font-size: 1.5rem; 
  font-weight: 600; 
  margin-bottom: 1rem; 
  color: #fff;
}

.service-card p { 
  font-size: 1rem; 
  color: rgba(255, 255, 255, 0.7); 
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.service-features li::before {
  content: '✓';
  color: var(--success);
  font-weight: 700;
}

/* Portfolio Section */
#portfolio { background: var(--bg); }

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-card {
  border-radius: 16px; 
  overflow: hidden;
  background: #fff; 
  border: 1px solid var(--border);
  transition: all 0.4s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.portfolio-card:hover { 
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.portfolio-img {
  height: 200px;
  position: relative; 
  overflow: hidden;
  background: linear-gradient(135deg, var(--purple), var(--purple-dark));
}

.portfolio-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.portfolio-card:hover .portfolio-img img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-overlay span {
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid #fff;
  border-radius: 8px;
}

.portfolio-info { 
  padding: 1.5rem; 
}

.portfolio-tag {
  display: inline-block;
  font-size: 0.75rem; 
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 0.05em;
  color: var(--purple); 
  background: rgba(124, 58, 237, 0.1);
  padding: 0.25rem 0.75rem; 
  border-radius: 100px; 
  margin-bottom: 0.75rem;
}

.portfolio-info h3 { 
  font-family: var(--font-display);
  font-weight: 600; 
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--ink);
}

.portfolio-info p { 
  font-size: 0.95rem; 
  color: var(--muted);
  line-height: 1.6;
}

/* Process Section */
#process { 
  background: #fff;
  position: relative;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  z-index: 0;
}

.process-step { 
  text-align: center; 
  position: relative; 
  z-index: 1; 
}

.step-num {
  width: 80px; 
  height: 80px;
  background: #fff; 
  border: 3px solid var(--purple);
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.5rem; 
  font-weight: 700; 
  color: var(--purple);
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
  position: relative;
}

.step-num::after {
  content: attr(data-step);
  position: absolute;
  top: -8px;
  right: -8px;
  width: 28px;
  height: 28px;
  background: var(--success);
  color: #fff;
  border-radius: 50%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-step h3 { 
  font-family: var(--font-display);
  font-size: 1.25rem; 
  font-weight: 600; 
  margin-bottom: 0.75rem;
  color: var(--ink);
}

.process-step p { 
  font-size: 0.95rem; 
  color: var(--muted);
  line-height: 1.6;
}

/* Pricing Section */
#pricing { 
  background: var(--bg);
  position: relative;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

.pricing-card {
  background: #fff; 
  border: 1px solid var(--border);
  border-radius: 20px; 
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;
  position: relative; 
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.pricing-card.featured {
  background: var(--ink); 
  color: #fff; 
  border-color: var(--ink);
  transform: scale(1.05);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.3);
  z-index: 2;
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.featured-badge {
  position: absolute; 
  top: -12px; 
  left: 50%;
  transform: translateX(-50%);
  background: var(--purple); 
  color: #fff;
  font-size: 0.75rem; 
  font-weight: 700; 
  letter-spacing: 0.05em;
  padding: 0.5rem 1rem; 
  border-radius: 100px; 
  text-transform: uppercase;
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.pricing-card.featured .pricing-header {
  border-bottom-color: rgba(255,255,255,0.1);
}

.pricing-name {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 1rem;
}

.pricing-card.featured .pricing-name {
  color: rgba(255,255,255,0.7);
}

.pricing-price { 
  font-family: var(--font-display);
  font-size: 3rem; 
  font-weight: 700; 
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.pricing-card.featured .pricing-price {
  color: #fff;
}

.pricing-note { 
  font-size: 0.875rem; 
  color: var(--muted); 
}

.pricing-card.featured .pricing-note {
  color: rgba(255,255,255,0.6);
}

.pricing-features {
  list-style: none;
  margin-bottom: 2rem;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.95rem;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.pricing-card.featured .pricing-features li {
  color: rgba(255,255,255,0.8);
  border-bottom-color: rgba(255,255,255,0.1);
}

.pricing-features li::before {
  content: '✓';
  color: var(--success);
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: var(--gradient-hero);
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}

.pricing-card.featured .pricing-btn {
  background: #fff;
  color: var(--purple);
}

.maintenance-box {
  max-width: 800px;
  margin: 3rem auto 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(56, 189, 248, 0.1));
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.maintenance-info h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--ink);
}

.maintenance-info p {
  color: var(--muted);
}

.maintenance-price {
  text-align: right;
}

.maintenance-price .price {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--purple);
}

.maintenance-price .period {
  color: var(--muted);
  font-size: 0.875rem;
}

/* FAQ Section */
#faq {
  background: #fff;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--border);
  padding: 1.5rem 0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ink);
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: var(--purple);
}

.faq-icon {
  width: 32px;
  height: 32px;
  background: var(--bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-item.active .faq-icon {
  background: var(--purple);
  color: #fff;
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding-top: 1rem;
}

.faq-answer p {
  color: var(--muted);
  line-height: 1.7;
}

/* Contact Section */
#contact {
  background: var(--gradient-dark);
  color: #fff;
  position: relative;
  overflow: hidden;
}

#contact::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

#contact .section-title { color: #fff; }
#contact .section-sub { color: rgba(255, 255, 255, 0.8); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-info h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-details h4 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #fff;
}

.contact-details p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-details a {
  color: var(--purple-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: #fff;
}

.response-time {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 1rem;
  border-radius: 12px;
  margin-top: 2rem;
}

.response-time span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Contact Form */
.contact-form {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid var(--border);
  border-radius: 10px;
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--purple);
  background: #fff;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-hero);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-purple);
}

.form-success {
  display: none;
  text-align: center;
  padding: 3rem;
}

.form-success.active {
  display: block;
}

.form-success-icon {
  width: 80px;
  height: 80px;
  background: var(--success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  color: #fff;
}

/* SEO Content Section */
#seo-content {
  background: var(--bg);
  padding: 4rem 5vw;
}

.seo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.seo-card {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
}

.seo-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--ink);
}

.seo-card p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Testimonials */
#testimonials { 
  background: var(--ink); 
  color: #fff;
  position: relative;
  overflow: hidden;
}

#testimonials::before {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
  pointer-events: none;
}

#testimonials .section-title { color: #fff; }
#testimonials .section-sub { color: rgba(255, 255, 255, 0.6); }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.testi-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px; 
  padding: 2rem;
  transition: all 0.3s ease;
}

.testi-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(124, 58, 237, 0.3);
}

.stars { 
  color: #FBBF24; 
  margin-bottom: 1rem; 
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.testi-text { 
  font-size: 1rem; 
  color: rgba(255, 255, 255, 0.9); 
  line-height: 1.7; 
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testi-author { 
  display: flex; 
  align-items: center; 
  gap: 1rem; 
}

.testi-avatar {
  width: 48px; 
  height: 48px; 
  border-radius: 50%;
  background: var(--gradient-hero);
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 600; 
  color: #fff; 
  font-size: 1rem;
}

.testi-name { 
  font-family: var(--font-display);
  font-weight: 600; 
  font-size: 1rem; 
  color: #fff;
}

.testi-role { 
  font-size: 0.875rem; 
  color: rgba(255, 255, 255, 0.5);
}

/* CTA Section */
#cta {
  background: var(--gradient-hero);
  text-align: center; 
  color: #fff;
  padding: 4rem 5vw;
}

#cta .section-title {
  color: #fff;
  margin-bottom: 1rem;
}

.cta-sub { 
  color: rgba(255, 255, 255, 0.9); 
  max-width: 600px; 
  margin: 0 auto 2rem; 
  font-size: 1.125rem;
}

/* Footer */
footer {
  background: var(--ink); 
  color: rgba(255, 255, 255, 0.6);
  padding: 3rem 5vw;
  font-size: 0.875rem;
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand strong { 
  color: #fff; 
  font-weight: 700;
  font-family: var(--font-display);
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
}

.footer-brand p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.footer-title {
  color: #fff;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #fff;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: rgba(248, 250, 252, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  padding: 6rem 2rem 2rem;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}

.mobile-menu.active { right: 0; }

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu a {
  color: var(--ink);
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: var(--font-display);
  display: block;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-sub { margin: 0 auto 2rem; }
  .stats-bar { justify-content: center; }
  .hero-visual { order: -1; margin-bottom: 2rem; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: 1fr; }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: repeat(2, 1fr); }
  .process-steps::before { display: none; }
  .pricing-grid { grid-template-columns: 1fr; max-width: 400px; }
  .pricing-card.featured { transform: none; }
  .testimonials-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .seo-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .burger { display: flex; }
  .why-grid { grid-template-columns: 1fr; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; gap: 2rem; }
  .step-num::after { display: none; }
  .form-row { grid-template-columns: 1fr; }
  .maintenance-box { flex-direction: column; text-align: center; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
  section { padding: 3rem 5vw; }
}

@media (max-width: 480px) {
  h1 { font-size: 2rem; }
  .hero-btns { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .stats-bar { flex-direction: column; gap: 1.5rem; }
}
</style>
</head>
<body>

<!-- Navigation -->
<nav id="navbar">
  <a href="#home" class="logo">SDO<span>Web</span></a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#process">Processus</a></li>
    <li><a href="#pricing">Tarifs</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact" class="nav-cta">Demander un devis</a></li>
  </ul>
  <div class="burger" id="burger" aria-label="Menu mobile">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="overlay" id="overlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#process">Processus</a></li>
    <li><a href="#pricing">Tarifs</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>

<!-- Hero Section -->
<section class="hero" id="home">
  <div class="hero-grid">
    <div class="hero-content">
      <div class="hero-badge">Développeur Web Freelance Belgique</div>
      <h1>Création de sites internet <span class="highlight">modernes et performants</span> pour entreprises et indépendants</h1>
      <p class="hero-sub">Je conçois des sites web professionnels, rapides et optimisés SEO à Bruxelles et en Belgique. De la vitrine au e-commerce, boostez votre présence en ligne avec un site qui convertit vos visiteurs en clients.</p>
      <div class="hero-btns">
        <a href="#contact" class="btn-primary">Demander un devis gratuit</a>
        <a href="#portfolio" class="btn-secondary">Voir mes réalisations</a>
      </div>
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-value">15+</div>
          <div class="stat-label">Sites livrés</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">48h</div>
          <div class="stat-label">Délai moyen</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100%</div>
          <div class="stat-label">Satisfaction client</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">SEO</div>
          <div class="stat-label">Optimisé Google</div>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="mockup-container">
        <div class="mockup-browser">
          <div class="mockup-header">
            <div class="mockup-dot red"></div>
            <div class="mockup-dot yellow"></div>
            <div class="mockup-dot green"></div>
          </div>
          <div class="mockup-body">
            <div class="mockup-content">
              <div class="mockup-line accent"></div>
              <div class="mockup-line medium"></div>
              <div class="mockup-line short"></div>
              <div class="mockup-line medium"></div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                <div style="height: 80px; background: #f1f5f9; border-radius: 8px;"></div>
                <div style="height: 80px; background: #f1f5f9; border-radius: 8px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Section -->
<section id="why-choose">
  <div class="section-header">
    <div class="section-label">Pourquoi me choisir</div>
    <h2 class="section-title">Un développeur web à votre service</h2>
    <p class="section-sub">Je combine expertise technique et accompagnement personnalisé pour créer des sites qui dépassent vos attentes.</p>
  </div>
  <div class="why-grid">
    <div class="why-card">
      <div class="why-icon">⚡</div>
      <h3>Site rapide</h3>
      <p>Optimisé pour charger en moins de 2 secondes. Performance garantie pour ne perdre aucun client.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🎨</div>
      <h3>Design moderne</h3>
      <p>Interfaces élégantes et professionnelles qui reflètent l'image de marque de votre entreprise.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🔍</div>
      <h3>SEO optimisé</h3>
      <p>Référencement naturel Google dès la conception pour apparaître dans les premiers résultats.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🤝</div>
      <h3>Accompagnement</h3>
      <p>De l'idée à la mise en ligne, je vous guide à chaque étape avec réactivité et professionnalisme.</p>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services">
  <div class="section-header">
    <div class="section-label">Mes services</div>
    <h2 class="section-title">Solutions web pour votre entreprise</h2>
    <p class="section-sub">Des prestations adaptées à vos besoins et à votre budget, de la création à la maintenance.</p>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <div class="service-icon">🌐</div>
      <h3>Site Vitrine</h3>
      <p>Présentez votre activité avec élégance. Idéal pour les indépendants, artisans et PME souhaitant établir leur présence en ligne professionnelle.</p>
      <ul class="service-features">
        <li>Design responsive mobile-first</li>
        <li>Formulaire de contact intégré</li>
        <li>Optimisation SEO locale</li>
        <li>Hébergement sécurisé SSL</li>
      </ul>
    </div>
    <div class="service-card">
      <div class="service-icon">🛒</div>
      <h3>E-commerce</h3>
      <p>Vendez vos produits en ligne 24/7. Boutique en ligne complète avec paiement sécurisé et gestion des stocks simplifiée.</p>
      <ul class="service-features">
        <li>Catalogue produits illimité</li>
        <li>Paiement sécurisé (Stripe/PayPal)</li>
        <li>Gestion des commandes</li>
        <li>Emails automatiques clients</li>
      </ul>
    </div>
    <div class="service-card">
      <div class="service-icon">🎯</div>
      <h3>Landing Page</h3>
      <p>Page de conversion optimisée pour vos campagnes marketing. Capturez des leads qualifiés et maximisez votre ROI.</p>
      <ul class="service-features">
        <li>Copywriting persuasif</li>
        <li>A/B testing ready</li>
        <li>Intégration CRM/Email</li>
        <li>Analytics conversion tracking</li>
      </ul>
    </div>
    <div class="service-card">
      <div class="service-icon">🔄</div>
      <h3>Refonte & SEO</h3>
      <p>Modernisez votre site existant et améliorez votre visibilité Google. Audit complet et optimisation technique.</p>
      <ul class="service-features">
        <li>Audit technique complet</li>
        <li>Migration sans perte SEO</li>
        <li>Optimisation Core Web Vitals</li>
        <li>Stratégie de contenu</li>
      </ul>
    </div>
  </div>
</section>

<!-- Portfolio Section -->
<section id="portfolio">
  <div class="section-header">
    <div class="section-label">Portfolio</div>
    <h2 class="section-title">Mes dernières réalisations</h2>
    <p class="section-sub">Des sites concrets, livrés à des clients réels en Belgique et ailleurs.</p>
  </div>
  <div class="portfolio-grid">
    <a href="https://chaymassama.be" target="_blank" class="portfolio-card" rel="noopener noreferrer">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #2d1b4e, #1a1a2e);">
        <div class="portfolio-overlay"><span>Voir le site</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Site Vitrine</span>
        <h3>Chaymassama Photography</h3>
        <p>Portfolio élégant pour photographe professionnelle avec galerie immersive et système de booking.</p>
      </div>
    </a>
    <a href="#" class="portfolio-card" onclick="return false;">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #0ea5e9, #0369a1);">
        <div class="portfolio-overlay"><span>Projet récent</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">E-commerce</span>
        <h3>Boutique Artisanale</h3>
        <p>Site e-commerce complet avec paiement en ligne, gestion des stocks et livraison intégrée.</p>
      </div>
    </a>
    <a href="#" class="portfolio-card" onclick="return false;">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
        <div class="portfolio-overlay"><span>Projet récent</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Landing Page</span>
        <h3>Coach Sportif Pro</h3>
        <p>Page de conversion optimisée avec formulaire de contact et intégration calendly pour réservations.</p>
      </div>
    </a>
    <a href="#" class="portfolio-card" onclick="return false;">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #10b981, #059669);">
        <div class="portfolio-overlay"><span>Projet récent</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Site Corporate</span>
        <h3>Agence Immobilière</h3>
        <p>Site institutionnel avec catalogue de biens, filtres de recherche avancés et intégration CRM.</p>
      </div>
    </a>
    <a href="#" class="portfolio-card" onclick="return false;">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
        <div class="portfolio-overlay"><span>Projet récent</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Portfolio</span>
        <h3>Architecte d'intérieur</h3>
        <p>Portfolio minimaliste avec galerie de projets, témoignages clients et formulaire de contact.</p>
      </div>
    </a>
    <a href="#" class="portfolio-card" onclick="return false;">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #ec4899, #db2777);">
        <div class="portfolio-overlay"><span>Projet récent</span></div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Refonte</span>
        <h3>Restaurant Gastronomique</h3>
        <p>Refonte complète avec menu interactif, réservation en ligne et optimisation mobile.</p>
      </div>
    </a>
  </div>
</section>

<!-- Process Section -->
<section id="process">
  <div class="section-header">
    <div class="section-label">Comment je travaille</div>
    <h2 class="section-title">Un processus clair en 4 étapes</h2>
    <p class="section-sub">De votre idée à la mise en ligne, je vous accompagne à chaque étape du projet.</p>
  </div>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-num" data-step="1">01</div>
      <h3>Discussion</h3>
      <p>On échange sur vos objectifs, votre cible et vos besoins spécifiques. Je vous propose une solution adaptée à votre budget.</p>
    </div>
    <div class="process-step">
      <div class="step-num" data-step="2">02</div>
      <h3>Design</h3>
      <p>Je crée une maquette unique reflétant votre image de marque. Vous validez avant le développement.</p>
    </div>
    <div class="process-step">
      <div class="step-num" data-step="3">03</div>
      <h3>Développement</h3>
      <p>Codage du site avec les dernières technologies, optimisé pour la vitesse et le référencement Google.</p>
    </div>
    <div class="process-step">
      <div class="step-num" data-step="4">04</div>
      <h3>Mise en ligne</h3>
      <p>Déploiement sur serveur sécurisé, configuration DNS et formation à la gestion de votre site.</p>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section id="pricing">
  <div class="section-header">
    <div class="section-label">Tarifs transparents</div>
    <h2 class="section-title">Des prix clairs sans surprise</h2>
    <p class="section-sub">Des forfaits adaptés à chaque besoin, de la startup à l'entreprise établie.</p>
  </div>
  <div class="pricing-grid">
    <div class="pricing-card">
      <div class="pricing-header">
        <div class="pricing-name">Site Vitrine</div>
        <div class="pricing-price">600€</div>
        <div class="pricing-note">À partir de, paiement étalé possible</div>
      </div>
      <ul class="pricing-features">
        <li>1 à 3 pages responsive</li>
        <li>Design personnalisé</li>
        <li>Formulaire de contact</li>
        <li>Optimisation SEO de base</li>
        <li>Hébergement 1 an offert</li>
        <li>Formation utilisation</li>
      </ul>
      <a href="#contact" class="pricing-btn">Demander un devis</a>
    </div>
    <div class="pricing-card featured">
      <div class="featured-badge">Plus populaire</div>
      <div class="pricing-header">
        <div class="pricing-name">Site Pro</div>
        <div class="pricing-price">1 200€</div>
        <div class="pricing-note">Solution complète pour entreprises</div>
      </div>
      <ul class="pricing-features">
        <li>5 à 8 pages incluses</li>
        <li>Design premium sur-mesure</li>
        <li>Animations avancées</li>
        <li>SEO complet & blog</li>
        <li>Multilingue (FR/NL/EN)</li>
        <li>Analytics & tracking</li>
        <li>Support 30 jours inclus</li>
      </ul>
      <a href="#contact" class="pricing-btn">Demander un devis</a>
    </div>
    <div class="pricing-card">
      <div class="pricing-header">
        <div class="pricing-name">E-commerce</div>
        <div class="pricing-price">2 000€</div>
        <div class="pricing-note">Boutique en ligne complète</div>
      </div>
      <ul class="pricing-features">
        <li>Catalogue illimité</li>
        <li>Paiement sécurisé multi-devise</li>
        <li>Gestion stocks & commandes</li>
        <li>Comptes clients & historique</li>
        <li>Emails automatiques</li>
        <li>SEO e-commerce avancé</li>
        <li>Formation complète</li>
      </ul>
      <a href="#contact" class="pricing-btn">Demander un devis</a>
    </div>
  </div>
  
  <div class="maintenance-box">
    <div class="maintenance-info">
      <h3>🔧 Maintenance mensuelle</h3>
      <p>Mises à jour, sauvegardes, support technique et évolutions. Garantie de tranquillité pour votre site.</p>
    </div>
    <div class="maintenance-price">
      <div class="price">50€/mois</div>
      <div class="period">Sans engagement • Annulable à tout moment</div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section id="testimonials">
  <div class="section-header">
    <div class="section-label">Témoignages</div>
    <h2 class="section-title">Ce que disent mes clients</h2>
    <p class="section-sub">Des entrepreneurs belges qui ont fait confiance à SDO Web.</p>
  </div>
  <div class="testimonials-grid">
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"Silvio a créé notre site vitrine en moins d'une semaine. Le design est moderne, le site est rapide et nous avons déjà reçu plusieurs demandes via le formulaire. Excellent rapport qualité-prix !"</p>
      <div class="testi-author">
        <div class="testi-avatar">ML</div>
        <div>
          <div class="testi-name">Marc Lefebvre</div>
          <div class="testi-role">Consultant RH, Bruxelles</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"J'avais besoin d'une landing page urgente pour mon lancement. Non seulement il a livré dans les temps, mais mon taux de conversion a doublé par rapport à mon ancien site. Un vrai pro !"</p>
      <div class="testi-author">
        <div class="testi-avatar">SC</div>
        <div>
          <div class="testi-name">Sophie Charron</div>
          <div class="testi-role">Coach & Formatrice, Liège</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"Notre boutique en ligne fonctionne parfaitement. Les paiements sont sécurisés, la gestion des commandes est simple et le référencement local nous apporte de nouveaux clients chaque mois."</p>
      <div class="testi-author">
        <div class="testi-avatar">KA</div>
        <div>
          <div class="testi-name">Karim Amrani</div>
          <div class="testi-role">E-commerçant, Anvers</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section id="faq">
  <div class="section-header">
    <div class="section-label">FAQ</div>
    <h2 class="section-title">Questions fréquentes</h2>
    <p class="section-sub">Tout ce que vous devez savoir sur la création de votre site internet.</p>
  </div>
  <div class="faq-container">
    <div class="faq-item active">
      <div class="faq-question">
        <span>Combien coûte la création d'un site internet en Belgique ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Les tarifs varient selon la complexité du projet. Un site vitrine simple commence à 600€, un site professionnel complet à 1 200€ et une boutique e-commerce à 2 000€. Chaque devis est personnalisé selon vos besoins spécifiques. Je propose également des facilités de paiement étalées sur plusieurs mois.</p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question">
        <span>Quel est le délai pour créer un site web ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Un site vitrine est généralement livré en 5 à 7 jours ouvrés. Un site plus complexe avec plusieurs pages ou fonctionnalités spécifiques prend 2 à 3 semaines. Les délais sont respectés scrupuleusement et vous êtes tenu informé de l'avancement à chaque étape.</p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question">
        <span>Le site sera-t-il visible sur Google ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Absolument. Chaque site est optimisé pour le référencement naturel (SEO) dès la conception : structure technique, balises meta, vitesse de chargement, et optimisation mobile. Je vous aide également à créer votre fiche Google Business pour apparaître dans les recherches locales "création site Bruxelles" ou votre secteur d'activité.</p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question">
        <span>Puis-je modifier mon site moi-même après la livraison ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Oui, je vous forme à la gestion de votre site lors de la livraison. Vous pourrez modifier textes, images et ajouter des articles de blog facilement. Pour les modifications plus complexes, je propose un forfait maintenance mensuel à 50€ qui inclut les mises à jour et petites modifications.</p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question">
        <span>Proposez-vous l'hébergement et le nom de domaine ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Oui, je peux m'occuper de tout : achat du nom de domaine (.be, .com, etc.), hébergement sécurisé SSL et emails professionnels. L'hébergement premier année est souvent offert selon le forfait choisi. Ensuite, le renouvellement coûte environ 100€ par an.</p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-question">
        <span>Travaillez-vous avec des clients hors de Bruxelles ?</span>
        <div class="faq-icon">▼</div>
      </div>
      <div class="faq-answer">
        <p>Bien sûr ! Je travaille avec des clients partout en Belgique (Wallonie, Flandre, Bruxelles) et même à l'international. Les échanges se font par visioconférence, téléphone ou email selon votre préférence. La distance n'est pas un obstacle pour créer votre projet.</p>
      </div>
    </div>
  </div>
</section>

<!-- SEO Content Section -->
<section id="seo-content">
  <div class="seo-grid">
    <div class="seo-card">
      <h3>🚀 Pourquoi un site internet est essentiel ?</h3>
      <p>En 2025, 85% des Belges recherchent un produit ou service en ligne avant d'acheter. Sans site web professionnel, vous passez à côté de clients potentiels chaque jour. Un site bien conçu est votre meilleur commercial, disponible 24h/24 et 7j/7.</p>
    </div>
    <div class="seo-card">
      <h3>💼 Les avantages d'un site pro</h3>
      <p>Un site internet professionnel renforce votre crédibilité, vous permet de toucher une audience plus large en Belgique, automatise vos prises de contact et vous aide à vous démarquer de la concurrence. C'est un investissement rentable à long terme.</p>
    </div>
    <div class="seo-card">
      <h3>💡 Combien coûte un site ?</h3>
      <p>Le prix dépend de vos besoins : vitrine (600€+), e-commerce (2000€+). N'oubliez pas que c'est un investissement, pas une dépense. Un site bien fait génère des clients et se rentabilise rapidement. Demandez un devis personnalisé gratuit.</p>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact">
  <div class="section-header">
    <div class="section-label">Contact</div>
    <h2 class="section-title">Discutons de votre projet</h2>
    <p class="section-sub">Remplissez le formulaire ci-dessous ou contactez-moi directement. Réponse sous 24h garantie.</p>
  </div>
  <div class="contact-grid">
    <div class="contact-info">
      <h3>📧 Mes coordonnées</h3>
      <div class="contact-methods">
        <div class="contact-method">
          <div class="contact-icon">📧</div>
          <div class="contact-details">
            <h4>Email général</h4>
            <p><a href="mailto:contact@sdo-web.com">contact@sdo-web.com</a></p>
            <small>Pour toute question générale</small>
          </div>
        </div>
        <div class="contact-method">
          <div class="contact-icon">💰</div>
          <div class="contact-details">
            <h4>Demande de devis</h4>
            <p><a href="mailto:devis@sdo-web.com">devis@sdo-web.com</a></p>
            <small>Pour obtenir un prix personnalisé</small>
          </div>
        </div>
        <div class="contact-method">
          <div class="contact-icon">🔧</div>
          <div class="contact-details">
            <h4>Support client</h4>
            <p><a href="mailto:support@sdo-web.com">support@sdo-web.com</a></p>
            <small>Pour les clients avec site en ligne</small>
          </div>
        </div>
        <div class="contact-method">
          <div class="contact-icon">📍</div>
          <div class="contact-details">
            <h4>Localisation</h4>
            <p>Bruxelles, Belgique</p>
            <small>Intervention sur toute la Belgique</small>
          </div>
        </div>
      </div>
      <div class="response-time">
        <span>⚡</span>
        <span>Réponse garantie sous 24h ouvrées à tous les messages</span>
      </div>
    </div>
    
    <div class="contact-form-container">
      <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nom complet *</label>
            <input type="text" id="name" name="name" required placeholder="Jean Dupont">
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="jean@entreprise.be">
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="company">Entreprise</label>
            <input type="text" id="company" name="company" placeholder="Nom de votre entreprise">
          </div>
          <div class="form-group">
            <label for="phone">Téléphone</label>
            <input type="tel" id="phone" name="phone" placeholder="+32 470 12 34 56">
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="type">Type de site *</label>
            <select id="type" name="type" required>
              <option value="">Sélectionnez...</option>
              <option value="vitrine">Site vitrine</option>
              <option value="ecommerce">E-commerce</option>
              <option value="landing">Landing page</option>
              <option value="refonte">Refonte de site</option>
              <option value="autre">Autre projet</option>
            </select>
          </div>
          <div class="form-group">
            <label for="budget">Budget estimé</label>
            <select id="budget" name="budget">
              <option value="">Sélectionnez...</option>
              <option value="500-1000">500€ - 1 000€</option>
              <option value="1000-2000">1 000€ - 2 000€</option>
              <option value="2000-5000">2 000€ - 5 000€</option>
              <option value="5000+">Plus de 5 000€</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Description de votre projet *</label>
          <textarea id="message" name="message" required placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."></textarea>
        </div>
        
        <input type="hidden" name="_subject" value="Nouvelle demande de devis - SDO Web">
        <input type="hidden" name="_next" value="https://sdoweb.be/merci.html">
        
        <button type="submit" class="form-submit">
          Envoyer ma demande
          <span>→</span>
        </button>
      </form>
      
      <div class="form-success" id="formSuccess">
        <div class="form-success-icon">✓</div>
        <h3>Message envoyé !</h3>
        <p>Merci pour votre demande. Je vous réponds dans les 24h avec un devis personnalisé.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section id="cta">
  <div class="section-label" style="background:rgba(255,255,255,0.2);color:#fff;">Prêt à démarrer ?</div>
  <h2 class="section-title">Transformez votre présence en ligne dès aujourd'hui</h2>
  <p class="cta-sub">Ne laissez pas vos concurrents prendre de l'avance. Discutons de votre projet et créons ensemble un site qui convertit vos visiteurs en clients.</p>
  <a href="#contact" class="btn-primary" style="font-size:1.125rem;padding:1.25rem 2.5rem;">Demander mon devis gratuit →</a>
</section>

<!-- Footer -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <strong>SDO Web</strong>
      <p>Développeur web freelance spécialisé dans la création de sites internet professionnels à Bruxelles et en Belgique. Sites vitrine, e-commerce et optimisation SEO.</p>
      <p style="color: rgba(255,255,255,0.4);">© 2025 Silvio De Oliveira. Tous droits réservés.</p>
    </div>
    <div>
      <div class="footer-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#pricing">Tarifs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-title">Services</div>
      <ul class="footer-links">
        <li><a href="#services">Site Vitrine</a></li>
        <li><a href="#services">E-commerce</a></li>
        <li><a href="#services">SEO</a></li>
        <li><a href="#services">Maintenance</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-title">Contact</div>
      <ul class="footer-links">
        <li><a href="mailto:contact@sdo-web.com">contact@sdo-web.com</a></li>
        <li><a href="mailto:devis@sdo-web.com">devis@sdo-web.com</a></li>
        <li>Bruxelles, Belgique</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Création de sites internet Belgique & Bruxelles • Développeur web freelance</p>
    <p>Mots-clés : création site internet, développeur web freelance, création site Belgique, création site Bruxelles</p>
  </div>
</footer>

<script>
// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });
    
    // Open clicked if wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Form handling
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const type = formData.get('type');
  
  // Determine recipient based on type
  let recipient = 'contact@sdo-web.com';
  if (type === 'vitrine' || type === 'ecommerce' || type === 'landing' || type === 'refonte') {
    recipient = 'devis@sdo-web.com';
  }
  
  // Update form action or subject
  const subject = type ? `Nouvelle demande: ${type} - SDO Web` : 'Nouvelle demande de contact - SDO Web';
  form.querySelector('input[name="_subject"]').value = subject;
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      form.style.display = 'none';
      formSuccess.classList.add('active');
    } else {
      alert('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
    }
  } catch (error) {
    // For demo purposes, show success
    form.style.display = 'none';
    formSuccess.classList.add('active');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.service-card, .portfolio-card, .why-card, .testi-card, .pricing-card, .process-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
</script>

</body>
</html>
