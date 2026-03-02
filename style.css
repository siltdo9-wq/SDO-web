<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SDO Web – Création de sites internet modernes & performants</title>
<meta name="description" content="SDO Web, fondée par Silvio De Oliveira, crée des sites professionnels optimisés pour la performance, la conversion et l'image de marque. Contactez-moi sur Instagram @sdo_web.">
<meta name="keywords" content="création site web, agence web, site vitrine, landing page, développement web, SEO, automatisation">
<meta name="author" content="Silvio De Oliveira">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="SDO Web – Création de sites internet modernes">
<meta property="og:description" content="Sites vitrines, landing pages et e-commerce optimisés pour la conversion. Contactez @sdo_web sur Instagram.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://sdoweb.fr">
<meta property="og:image" content="https://sdoweb.fr/og-image.jpg">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
:root {
  --ink: #0F172A;
  --purple: #7C3AED;
  --purple-light: #A78BFA;
  --blue: #38BDF8;
  --bg: #F8FAFC;
  --card: #ffffff;
  --muted: #64748B;
  --border: #E2E8F0;
  --instagram: #E4405F;
  --gradient-hero: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-purple: 0 8px 32px rgba(124, 58, 237, 0.25);
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
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
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  letter-spacing: -0.01em;
}

/* NAVIGATION */
nav {
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 1000;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  padding: 1.25rem 5vw;
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

nav.scrolled {
  padding: 1rem 5vw;
  box-shadow: var(--shadow-md);
  background: rgba(248, 250, 252, 0.98);
}

.logo { 
  font-family: var(--font-display);
  font-weight: 700; 
  font-size: 1.5rem; 
  color: var(--ink);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: transform 0.3s ease;
}

.logo:hover { transform: scale(1.02); }
.logo span { color: var(--purple); }

.nav-links { 
  display: flex; 
  gap: 2.5rem; 
  list-style: none; 
  align-items: center;
}

.nav-links a { 
  color: var(--muted); 
  text-decoration: none; 
  font-size: var(--text-sm);
  font-weight: 500; 
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0;
}

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

.nav-links a:hover { 
  color: var(--purple); 
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-social {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-instagram {
  color: var(--instagram);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
}

.nav-instagram:hover {
  background: rgba(228, 64, 95, 0.1);
  border-color: var(--instagram);
  transform: translateY(-2px);
}

.nav-instagram svg {
  width: 20px;
  height: 20px;
}

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

.burger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* HERO */
.hero {
  min-height: 100vh;
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 8rem 5vw 5rem;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute; 
  inset: 0; 
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 70% at 80% 20%, rgba(124, 58, 237, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 60% at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 60%);
  animation: pulse-bg 8s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.grid-lines {
  position: absolute; 
  inset: 0; 
  z-index: 0; 
  opacity: 0.03;
  background-image:
    linear-gradient(var(--ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--ink) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-content { 
  position: relative; 
  z-index: 1; 
  max-width: 900px; 
  text-align: center;
}

.hero-badge {
  display: inline-flex; 
  align-items: center; 
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.08); 
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: var(--purple); 
  padding: 0.5rem 1rem; 
  border-radius: 100px;
  font-size: var(--text-xs);
  font-weight: 600; 
  letter-spacing: 0.05em; 
  text-transform: uppercase;
  margin-bottom: 2rem;
  animation: fadeUp 0.8s ease both;
  font-family: var(--font-sans);
}

.hero-badge::before { 
  content: ''; 
  width: 6px; 
  height: 6px; 
  background: var(--purple); 
  border-radius: 50%; 
  animation: pulse 2s infinite; 
}

@keyframes pulse { 
  0%, 100% { opacity: 1; transform: scale(1); } 
  50% { opacity: 0.5; transform: scale(1.2); } 
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700; 
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s 0.1s ease both;
  letter-spacing: -0.03em;
  color: var(--ink);
}

h1 em { 
  font-style: normal; 
  color: var(--purple);
  position: relative;
}

h1 em::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgba(124, 58, 237, 0.1);
  z-index: -1;
  transform: skewX(-10deg);
}

.hero-sub {
  font-size: var(--text-lg);
  color: var(--muted); 
  max-width: 600px;
  margin: 0 auto 2.5rem; 
  font-weight: 400;
  line-height: 1.7;
  animation: fadeUp 0.8s 0.2s ease both;
  letter-spacing: 0;
}

.hero-btns { 
  display: flex; 
  gap: 1rem; 
  flex-wrap: wrap; 
  justify-content: center;
  animation: fadeUp 0.8s 0.3s ease both; 
}

.btn-primary {
  background: var(--purple); 
  color: #fff;
  padding: 1rem 2rem; 
  border-radius: 8px;
  font-weight: 600; 
  text-decoration: none; 
  font-size: var(--text-base);
  transition: all 0.3s ease; 
  box-shadow: var(--shadow-purple);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  font-family: var(--font-sans);
  letter-spacing: 0;
}

.btn-primary:hover { 
  transform: translateY(-2px); 
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.35);
  background: #6D28D9;
}

.btn-instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  color: #fff;
  padding: 1rem 2rem; 
  border-radius: 8px;
  font-weight: 600; 
  text-decoration: none; 
  font-size: var(--text-base);
  transition: all 0.3s ease; 
  box-shadow: 0 8px 24px rgba(220, 39, 67, 0.25);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  font-family: var(--font-sans);
  letter-spacing: 0;
}

.btn-instagram:hover { 
  transform: translateY(-2px); 
  box-shadow: 0 12px 32px rgba(220, 39, 67, 0.35);
  filter: brightness(1.1);
}

.btn-instagram svg {
  width: 20px;
  height: 20px;
}

.btn-secondary {
  background: transparent; 
  color: var(--ink);
  padding: 1rem 2rem; 
  border-radius: 8px;
  font-weight: 600; 
  text-decoration: none; 
  font-size: var(--text-base);
  border: 2px solid var(--border); 
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
}

.btn-secondary:hover { 
  border-color: var(--purple); 
  color: var(--purple);
  transform: translateY(-2px);
  background: rgba(124, 58, 237, 0.05);
}

.hero-stats {
  display: flex; 
  gap: 4rem; 
  margin-top: 4rem;
  padding-top: 2rem; 
  border-top: 1px solid var(--border);
  animation: fadeUp 0.8s 0.4s ease both;
  justify-content: center;
}

.stat-val { 
  font-family: var(--font-display);
  font-size: 2.5rem; 
  font-weight: 700; 
  color: var(--ink);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-label { 
  font-size: var(--text-sm); 
  color: var(--muted); 
  font-weight: 500;
  margin-top: 0.5rem;
  letter-spacing: 0;
}

@keyframes fadeUp { 
  from { opacity: 0; transform: translateY(20px); } 
  to { opacity: 1; transform: translateY(0); } 
}

/* SECTIONS */
section { 
  padding: 6rem 5vw; 
  position: relative;
}

.section-header {
  max-width: 700px;
  margin-bottom: 4rem;
}

.section-label {
  font-size: var(--text-xs);
  font-weight: 600; 
  letter-spacing: 0.1em; 
  text-transform: uppercase;
  color: var(--purple); 
  margin-bottom: 1rem;
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: rgba(124, 58, 237, 0.08);
  border-radius: 100px;
  font-family: var(--font-sans);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.875rem, 3.5vw, 2.5rem);
  font-weight: 700; 
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.section-sub { 
  color: var(--muted); 
  font-size: var(--text-lg);
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0;
}

/* SERVICES */
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
  background: radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

#services .section-title { color: #fff; }
#services .section-sub { color: rgba(255, 255, 255, 0.65); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover { 
  transform: translateY(-4px);
  border-color: rgba(124, 58, 237, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 48px; 
  height: 48px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(56, 189, 248, 0.3));
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 1.5rem; 
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.service-card h3 { 
  font-family: var(--font-display);
  font-size: var(--text-xl); 
  font-weight: 600; 
  margin-bottom: 0.75rem; 
  color: #fff;
  letter-spacing: -0.01em;
}

.service-card p { 
  font-size: var(--text-base); 
  color: rgba(255, 255, 255, 0.6); 
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0;
}

/* WHY US */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.why-card {
  background: #fff; 
  border: 1px solid var(--border);
  border-radius: 16px; 
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
}

.why-card:hover { 
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1); 
  transform: translateY(-4px);
  border-color: transparent;
}

.why-icon { 
  font-size: 2rem; 
  margin-bottom: 1rem;
  display: inline-block;
}

.why-card h3 { 
  font-family: var(--font-display);
  font-size: var(--text-lg); 
  font-weight: 600; 
  margin-bottom: 0.5rem;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.why-card p { 
  font-size: var(--text-base); 
  color: var(--muted); 
  line-height: 1.6;
  letter-spacing: 0;
}

/* PORTFOLIO */
#portfolio { 
  background: var(--bg);
  position: relative;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.portfolio-card {
  border-radius: 16px; 
  overflow: hidden;
  background: #fff; 
  border: 1px solid var(--border);
  transition: all 0.4s ease;
  position: relative;
}

.portfolio-card:hover { 
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1); 
  transform: translateY(-4px);
  border-color: transparent;
}

.portfolio-img {
  height: 220px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  position: relative; 
  overflow: hidden;
  background: linear-gradient(135deg, var(--ink), var(--purple));
}

.mockup-screen {
  width: 85%; 
  height: 80%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex; 
  flex-direction: column;
  overflow: hidden; 
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
}

.portfolio-card:hover .mockup-screen {
  transform: scale(1.02);
}

.mockup-bar { 
  height: 12px; 
  background: rgba(0, 0, 0, 0.08); 
  display: flex; 
  align-items: center; 
  gap: 4px; 
  padding: 0 8px; 
}

.mockup-dot { 
  width: 5px; 
  height: 5px; 
  border-radius: 50%; 
}

.mockup-body { 
  flex: 1; 
  padding: 10px; 
  display: flex; 
  flex-direction: column; 
  gap: 6px; 
}

.mockup-line { 
  height: 4px; 
  border-radius: 2px; 
  background: rgba(15, 23, 42, 0.1); 
}

.mockup-line.accent { 
  background: var(--purple); 
  opacity: 0.5; 
}

.portfolio-info { 
  padding: 1.5rem; 
}

.portfolio-tag {
  display: inline-block;
  font-size: var(--text-xs); 
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 0.05em;
  color: var(--purple); 
  background: rgba(124, 58, 237, 0.08);
  padding: 0.3rem 0.8rem; 
  border-radius: 100px; 
  margin-bottom: 0.75rem;
  font-family: var(--font-sans);
}

.portfolio-info h3 { 
  font-family: var(--font-display);
  font-weight: 600; 
  margin-bottom: 0.5rem;
  font-size: var(--text-xl);
  color: var(--ink);
  letter-spacing: -0.01em;
}

.portfolio-info p { 
  font-size: var(--text-base); 
  color: var(--muted);
  line-height: 1.6;
  letter-spacing: 0;
}

/* PROCESS */
#process { 
  background: #fff;
  position: relative;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  z-index: 0;
}

@media (max-width: 768px) {
  .process-steps::before { display: none; }
}

.process-step { 
  text-align: center; 
  padding: 1rem; 
  position: relative; 
  z-index: 1; 
}

.step-num {
  width: 56px; 
  height: 56px;
  background: #fff; 
  border: 2px solid var(--purple);
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-lg); 
  font-weight: 600; 
  color: var(--purple);
  margin: 0 auto 1rem;
  position: relative;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
  letter-spacing: -0.02em;
}

.process-step h3 { 
  font-family: var(--font-display);
  font-size: var(--text-base); 
  font-weight: 600; 
  margin-bottom: 0.5rem;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.process-step p { 
  font-size: var(--text-sm); 
  color: var(--muted);
  line-height: 1.6;
  letter-spacing: 0;
}

/* PRICING */
#pricing { 
  background: var(--bg);
  position: relative;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: #fff; 
  border: 1px solid var(--border);
  border-radius: 16px; 
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative; 
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.pricing-card.featured {
  background: var(--ink); 
  color: #fff; 
  border-color: var(--ink);
  transform: scale(1.02);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
  z-index: 2;
}

.pricing-card.featured:hover {
  transform: scale(1.02) translateY(-4px);
}

.pricing-card.featured h3 { 
  color: rgba(255, 255, 255, 0.7); 
}

.pricing-card.featured .price { 
  color: #fff; 
}

.pricing-card.featured p { 
  color: rgba(255, 255, 255, 0.65); 
}

.featured-badge {
  position: absolute; 
  top: 1.25rem; 
  right: 1.25rem;
  background: var(--purple); 
  color: #fff;
  font-size: var(--text-xs); 
  font-weight: 600; 
  letter-spacing: 0.05em;
  padding: 0.3rem 0.8rem; 
  border-radius: 100px; 
  text-transform: uppercase;
  font-family: var(--font-sans);
}

.pricing-card h3 { 
  font-size: var(--text-xs); 
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 0.1em; 
  color: var(--muted); 
  margin-bottom: 1rem;
  font-family: var(--font-sans);
}

.price { 
  font-family: var(--font-display);
  font-size: 2rem; 
  font-weight: 700; 
  margin-bottom: 0.25rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  line-height: 1;
}

.pricing-card.featured .price {
  color: #fff;
}

.price-note { 
  font-size: var(--text-sm); 
  color: var(--muted); 
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.pricing-card p { 
  font-size: var(--text-base); 
  color: var(--muted); 
  line-height: 1.6;
  letter-spacing: 0;
}

.pricing-footer { 
  text-align: center; 
  margin-top: 3rem; 
}

.pricing-footer p { 
  color: var(--muted); 
  font-size: var(--text-base); 
  margin-bottom: 1.5rem;
  letter-spacing: 0;
}

/* TESTIMONIALS */
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.testi-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px; 
  padding: 2rem;
  transition: all 0.3s ease;
}

.testi-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(124, 58, 237, 0.3);
}

.stars { 
  color: #FBBF24; 
  margin-bottom: 1rem; 
  font-size: var(--text-base); 
  letter-spacing: 0.1em; 
}

.testi-text { 
  font-size: var(--text-base); 
  color: rgba(255, 255, 255, 0.85); 
  line-height: 1.7; 
  margin-bottom: 1.5rem;
  font-style: italic;
  letter-spacing: 0;
}

.testi-author { 
  display: flex; 
  align-items: center; 
  gap: 1rem; 
}

.testi-avatar {
  width: 44px; 
  height: 44px; 
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--blue));
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 600; 
  color: #fff; 
  font-size: var(--text-sm);
  flex-shrink: 0;
  letter-spacing: 0;
}

.testi-name { 
  font-family: var(--font-display);
  font-weight: 600; 
  font-size: var(--text-base); 
  color: #fff;
  letter-spacing: 0;
}

.testi-role { 
  font-size: var(--text-sm); 
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0;
}

/* INSTAGRAM SECTION */
#instagram {
  background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

#instagram::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}

.instagram-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.instagram-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.instagram-icon svg {
  width: 40px;
  height: 40px;
  color: #fff;
}

#instagram .section-title {
  color: #fff;
  margin-bottom: 1rem;
}

#instagram .section-sub {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.instagram-handle {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
  display: inline-block;
  letter-spacing: -0.01em;
}

.btn-instagram-large {
  background: #fff;
  color: var(--instagram);
  padding: 1.2rem 3rem;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  font-size: var(--text-lg);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
}

.btn-instagram-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  background: transparent;
  color: #fff;
  border-color: #fff;
}

.btn-instagram-large svg {
  width: 24px;
  height: 24px;
}

/* CTA */
#contact {
  background: var(--gradient-hero);
  text-align: center; 
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

#contact .section-title { 
  color: #fff;
  position: relative;
  z-index: 1;
}

.cta-sub { 
  color: rgba(255, 255, 255, 0.9); 
  max-width: 600px; 
  margin: 0 auto 2.5rem; 
  font-size: var(--text-lg);
  line-height: 1.7;
  position: relative;
  z-index: 1;
  letter-spacing: 0;
}

/* FOOTER */
footer {
  background: var(--ink); 
  color: rgba(255, 255, 255, 0.5);
  padding: 3rem 5vw;
  font-size: var(--text-sm);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-brand strong { 
  color: rgba(255, 255, 255, 0.9); 
  font-weight: 600;
  font-family: var(--font-display);
  font-size: var(--text-lg);
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-social a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.footer-social a:hover {
  color: #fff;
  transform: translateY(-2px);
}

.footer-social svg {
  width: 24px;
  height: 24px;
}

.footer-instagram {
  color: var(--instagram) !important;
}

.footer-instagram:hover {
  color: #fff !important;
}

/* MOBILE MENU */
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

.mobile-menu.active {
  right: 0;
}

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu a {
  color: var(--ink);
  text-decoration: none;
  font-size: var(--text-lg);
  font-weight: 600;
  font-family: var(--font-display);
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
}

.mobile-menu a:hover {
  color: var(--purple);
}

.mobile-instagram {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--instagram) !important;
  margin-top: 1rem;
  padding: 1rem !important;
  background: rgba(228, 64, 95, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(228, 64, 95, 0.2) !important;
}

.mobile-instagram svg {
  width: 24px;
  height: 24px;
}

.mobile-cta {
  display: inline-block;
  margin-top: 2rem;
  background: var(--purple);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  width: 100%;
  font-family: var(--font-sans);
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

/* RESPONSIVE */
@media (max-width: 1024px) {
  .hero-stats { gap: 3rem; }
  .pricing-card.featured { transform: scale(1); }
  .nav-social { display: none; }
}

@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .burger { display: flex; }
  
  .hero { padding: 7rem 5vw 4rem; }
  .hero-stats { 
    gap: 2rem; 
    flex-wrap: wrap;
    justify-content: center;
  }
  .stat-val { font-size: 2rem; }
  
  .portfolio-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
  
  .process-steps { gap: 3rem; }
  .process-steps::after { display: none; }
  
  .pricing-card.featured { transform: none; }
  .pricing-grid { gap: 1rem; }
  
  section { padding: 4rem 5vw; }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  h1 { font-size: 2rem; }
  .hero-btns { flex-direction: column; width: 100%; }
  .btn-primary, .btn-secondary, .btn-instagram { width: 100%; justify-content: center; }
  .hero-stats { flex-direction: column; gap: 1.5rem; text-align: center; }
  .section-header { text-align: center; margin-bottom: 3rem; }
  .instagram-handle { font-size: var(--text-xl); }
}

/* REDUCED MOTION */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}

/* SELECTION */
::selection {
  background: rgba(124, 58, 237, 0.2);
  color: var(--ink);
}
</style>
</head>
<body>

<!-- NAVIGATION -->
<nav id="navbar">
  <a href="#home" class="logo">SDO<span>Web</span></a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Réalisations</a></li>
    <li><a href="#pricing">Tarifs</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-social">
    <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="nav-instagram" aria-label="Instagram SDO Web">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      <span>@sdo_web</span>
    </a>
  </div>
  <div class="burger" id="burger" aria-label="Menu mobile" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="overlay" id="overlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="#services" class="mobile-link">Services</a></li>
    <li><a href="#portfolio" class="mobile-link">Réalisations</a></li>
    <li><a href="#pricing" class="mobile-link">Tarifs</a></li>
    <li><a href="#contact" class="mobile-link">Contact</a></li>
    <li>
      <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="mobile-link mobile-instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <span>Suivez-moi sur Instagram</span>
      </a>
    </li>
  </ul>
  <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="mobile-cta mobile-link">Me contacter sur Instagram</a>
</div>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="grid-lines"></div>
  <div class="hero-content">
    <div class="hero-badge">Agence web moderne</div>
    <h1>Des sites internet <em>modernes, rapides</em> et automatisés pour développer votre activité.</h1>
    <p class="hero-sub">SDO Web crée des sites professionnels optimisés pour la performance, la conversion et l'image de marque. Fondée par Silvio De Oliveira.</p>
    <div class="hero-btns">
      <a href="#portfolio" class="btn-primary">Voir mes réalisations</a>
      <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="btn-instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        Me contacter sur Instagram
      </a>
    </div>
    <div class="hero-stats">
      <div>
        <div class="stat-val" data-count="5">0</div>
        <div class="stat-label">Sites livrés</div>
      </div>
      <div>
        <div class="stat-val">48h</div>
        <div class="stat-label">Délai moyen</div>
      </div>
      <div>
        <div class="stat-val">100%</div>
        <div class="stat-label">Satisfaction client</div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="services">
  <div class="section-header">
    <div class="section-label">Ce que je fais</div>
    <div class="section-title" style="color:#fff">Mes services</div>
    <p class="section-sub">Des solutions web pensées pour les entrepreneurs, freelances et petites entreprises qui veulent une présence en ligne efficace et professionnelle.</p>
  </div>
  <div class="services-grid">
    <div class="service-card scroll-reveal">
      <div class="service-icon">🌐</div>
      <h3>Site vitrine</h3>
      <p>Un site clair, moderne et convaincant pour présenter votre activité et gagner la confiance de vos prospects.</p>
    </div>
    <div class="service-card scroll-reveal">
      <div class="service-icon">🎯</div>
      <h3>Landing page</h3>
      <p>Une page de conversion percutante, conçue pour transformer vos visiteurs en clients dès la première visite.</p>
    </div>
    <div class="service-card scroll-reveal">
      <div class="service-icon">💼</div>
      <h3>Site freelance</h3>
      <p>Votre vitrine personnelle sur le web, pensée pour attirer des clients et mettre en valeur votre expertise.</p>
    </div>
    <div class="service-card scroll-reveal">
      <div class="service-icon">🔄</div>
      <h3>Refonte de site</h3>
      <p>On donne un coup de jeune à votre ancien site pour le rendre moderne, rapide et adapté à tous les appareils.</p>
    </div>
    <div class="service-card scroll-reveal">
      <div class="service-icon">⚙️</div>
      <h3>Automatisation</h3>
      <p>Formulaires intelligents, emails automatiques et optimisation SEO pour que votre site travaille pour vous.</p>
    </div>
  </div>
</section>

<!-- WHY US -->
<section id="why">
  <div class="section-header">
    <div class="section-label">Pourquoi SDO Web ?</div>
    <div class="section-title">Une approche moderne orientée résultats</div>
    <p class="section-sub">Je combine rapidité, qualité et intelligence artificielle pour livrer des sites qui font la différence.</p>
  </div>
  <div class="why-grid">
    <div class="why-card scroll-reveal">
      <div class="why-icon">🚀</div>
      <h3>Livraison rapide</h3>
      <p>Votre site est conçu et livré en quelques jours, pas en quelques mois. L'efficacité avant tout.</p>
    </div>
    <div class="why-card scroll-reveal">
      <div class="why-icon">🤖</div>
      <h3>IA & automatisation</h3>
      <p>J'utilise les meilleurs outils d'IA pour accélérer la conception sans sacrifier la qualité.</p>
    </div>
    <div class="why-card scroll-reveal">
      <div class="why-icon">💰</div>
      <h3>Prix accessibles</h3>
      <p>Des tarifs pensés pour les indépendants et petites structures, avec un rapport qualité-prix imbattable.</p>
    </div>
    <div class="why-card scroll-reveal">
      <div class="why-icon">✅</div>
      <h3>Sites déjà en ligne</h3>
      <p>Plusieurs projets concrets, fonctionnels et en production. Vous n'êtes pas mon cobaye.</p>
    </div>
    <div class="why-card scroll-reveal">
      <div class="why-icon">📱</div>
      <h3>100% responsive</h3>
      <p>Chaque site est parfaitement adapté mobile, tablette et desktop. Aucun compromis.</p>
    </div>
    <div class="why-card scroll-reveal">
      <div class="why-icon">🤝</div>
      <h3>Accompagnement</h3>
      <p>Je reste disponible après la mise en ligne pour répondre à vos questions et assurer le suivi.</p>
    </div>
  </div>
</section>

<!-- PORTFOLIO -->
<section id="portfolio">
  <div class="section-header">
    <div class="section-label">Réalisations</div>
    <div class="section-title">Mes derniers projets</div>
    <p class="section-sub">Des sites concrets, livrés à des clients réels, en ligne et fonctionnels.</p>
  </div>
  <div class="portfolio-grid">
    <div class="portfolio-card scroll-reveal">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #0F172A, #7C3AED);">
        <div class="mockup-screen">
          <div class="mockup-bar">
            <div class="mockup-dot" style="background:#ef4444"></div>
            <div class="mockup-dot" style="background:#f59e0b"></div>
            <div class="mockup-dot" style="background:#22c55e"></div>
          </div>
          <div class="mockup-body">
            <div class="mockup-line accent" style="width:60%;height:8px;border-radius:4px;"></div>
            <div class="mockup-line" style="width:90%"></div>
            <div class="mockup-line" style="width:75%"></div>
            <div class="mockup-line" style="width:50%"></div>
            <div class="mockup-line accent" style="width:40%;height:16px;border-radius:8px;margin-top:4px;"></div>
          </div>
        </div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Application Mobile</span>
        <h3>Nour – Compagnon Musulman</h3>
        <p>Application avec prières, Qibla, Coran et abonnements. Design épuré et responsive.</p>
      </div>
    </div>
    <div class="portfolio-card scroll-reveal">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #0ea5e9, #0F172A);">
        <div class="mockup-screen">
          <div class="mockup-bar">
            <div class="mockup-dot" style="background:#ef4444"></div>
            <div class="mockup-dot" style="background:#f59e0b"></div>
            <div class="mockup-dot" style="background:#22c55e"></div>
          </div>
          <div class="mockup-body">
            <div class="mockup-line" style="background:#0ea5e9;opacity:.4;width:50%;height:8px;border-radius:4px;"></div>
            <div class="mockup-line" style="width:85%"></div>
            <div class="mockup-line" style="width:70%"></div>
            <div style="display:flex;gap:4px;margin-top:4px;">
              <div style="flex:1;height:28px;background:rgba(14,165,233,.3);border-radius:4px;"></div>
              <div style="flex:1;height:28px;background:rgba(14,165,233,.2);border-radius:4px;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Plateforme IA</span>
        <h3>NEXUS – IDE IA</h3>
        <p>Éditeur de code IA avec chat intégré, prévisualisation live et multi-personnalités.</p>
      </div>
    </div>
    <div class="portfolio-card scroll-reveal">
      <div class="portfolio-img" style="background: linear-gradient(135deg, #f97316, #ef4444);">
        <div class="mockup-screen">
          <div class="mockup-bar">
            <div class="mockup-dot" style="background:#ef4444"></div>
            <div class="mockup-dot" style="background:#f59e0b"></div>
            <div class="mockup-dot" style="background:#22c55e"></div>
          </div>
          <div class="mockup-body">
            <div class="mockup-line" style="background:#f97316;opacity:.5;width:55%;height:8px;border-radius:4px;"></div>
            <div class="mockup-line" style="width:80%"></div>
            <div style="display:flex;gap:4px;margin-top:4px;">
              <div style="flex:1;height:20px;background:rgba(249,115,22,.3);border-radius:4px;"></div>
              <div style="flex:1;height:20px;background:rgba(249,115,22,.2);border-radius:4px;"></div>
              <div style="flex:1;height:20px;background:rgba(249,115,22,.15);border-radius:4px;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-info">
        <span class="portfolio-tag">Livraison</span>
        <h3>FoodRush – Plateforme</h3>
        <p>Marketplace food delivery avec interface client, restaurant et admin.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section id="process">
  <div style="text-align:center;margin-bottom:4rem;">
    <div class="section-label">Comment je travaille</div>
    <div class="section-title">Un processus clair et efficace</div>
  </div>
  <div class="process-steps">
    <div class="process-step scroll-reveal">
      <div class="step-num">01</div>
      <h3>Discussion</h3>
      <p>On échange sur vos besoins, votre cible et vos objectifs</p>
    </div>
    <div class="process-step scroll-reveal">
      <div class="step-num">02</div>
      <h3>Maquette</h3>
      <p>Je crée la structure et le design de votre site</p>
    </div>
    <div class="process-step scroll-reveal">
      <div class="step-num">03</div>
      <h3>Développement</h3>
      <p>Développement rapide assisté par intelligence artificielle</p>
    </div>
    <div class="process-step scroll-reveal">
      <div class="step-num">04</div>
      <h3>Optimisation</h3>
      <p>SEO technique, référencement et automatisations</p>
    </div>
    <div class="process-step scroll-reveal">
      <div class="step-num">05</div>
      <h3>Mise en ligne</h3>
      <p>Déploiement et accompagnement post-livraison</p>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="pricing">
  <div class="section-header" style="text-align:center;margin-left:auto;margin-right:auto;">
    <div class="section-label">Tarifs transparents</div>
    <div class="section-title">Des prix pensés pour les indépendants</div>
    <p class="section-sub">Tarifs clairs pour les indépendants et petites entreprises. Pas de mauvaise surprise.</p>
  </div>
  <div class="pricing-grid">
    <div class="pricing-card scroll-reveal">
      <h3>Landing Page</h3>
      <div class="price">300€ – 500€</div>
      <div class="price-note">Page unique de conversion</div>
      <p>Parfaite pour lancer une offre ou capturer des leads efficacement.</p>
    </div>
    <div class="pricing-card scroll-reveal">
      <h3>Site Vitrine</h3>
      <div class="price">600€ – 900€</div>
      <div class="price-note">3 à 5 pages</div>
      <p>Idéal pour présenter votre activité et générer des contacts qualifiés.</p>
    </div>
    <div class="pricing-card featured scroll-reveal">
      <div class="featured-badge">Populaire</div>
      <h3>Site Vitrine Pro</h3>
      <div class="price">900€ – 1 200€</div>
      <div class="price-note">Avec animations & SEO</div>
      <p>Site complet, optimisé SEO, avec animations et formulaires automatisés.</p>
    </div>
    <div class="pricing-card scroll-reveal">
      <h3>E-commerce</h3>
      <div class="price">1 200€ – 2 000€</div>
      <div class="price-note">Boutique en ligne</div>
      <p>Votre boutique prête à vendre, avec catalogue et paiement sécurisé.</p>
    </div>
    <div class="pricing-card scroll-reveal">
      <h3>Maintenance</h3>
      <div class="price">50€ – 120€</div>
      <div class="price-note">Par mois</div>
      <p>Mises à jour, sauvegardes et support mensuel pour votre tranquillité.</p>
    </div>
  </div>
  <div class="pricing-footer">
    <p>Projet spécifique ? Contactez-moi pour un devis sur mesure.</p>
    <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="btn-instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      Discuter sur Instagram
    </a>
  </div>
</section>

<!-- TESTIMONIALS -->
<section id="testimonials">
  <div class="section-header">
    <div class="section-label">Ce qu'ils disent</div>
    <div class="section-title" style="color:#fff">Témoignages clients</div>
    <p class="section-sub">Des entrepreneurs qui ont fait confiance à SDO Web pour leur présence en ligne.</p>
  </div>
  <div class="testimonials-grid">
    <div class="testi-card scroll-reveal">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"Silvio a livré mon site vitrine en moins de 5 jours. Le design est propre, moderne, et mes clients le remarquent immédiatement. Excellent rapport qualité-prix !"</p>
      <div class="testi-author">
        <div class="testi-avatar">ML</div>
        <div>
          <div class="testi-name">Marc Lefebvre</div>
          <div class="testi-role">Consultant RH</div>
        </div>
      </div>
    </div>
    <div class="testi-card scroll-reveal">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"J'avais besoin d'une landing page pour mon lancement. SDO Web a tout compris dès le départ. Rapide, professionnel, mon taux de conversion a doublé !"</p>
      <div class="testi-author">
        <div class="testi-avatar">SC</div>
        <div>
          <div class="testi-name">Sophie Charron</div>
          <div class="testi-role">Coach & formatrice</div>
        </div>
      </div>
    </div>
    <div class="testi-card scroll-reveal">
      <div class="stars">★★★★★</div>
      <p class="testi-text">"Un vrai professionnel. Mon site e-commerce est parfaitement pensé, rapide et bien optimisé. Les automatisations me font gagner un temps précieux."</p>
      <div class="testi-author">
        <div class="testi-avatar">KA</div>
        <div>
          <div class="testi-name">Karim Amrani</div>
          <div class="testi-role">Entrepreneur</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- INSTAGRAM SECTION -->
<section id="instagram">
  <div class="instagram-content">
    <div class="instagram-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    </div>
    <div class="section-label" style="background:rgba(255,255,255,0.2);color:#fff;">Restons connectés</div>
    <div class="section-title">Suivez-moi sur Instagram</div>
    <p class="section-sub">Retrouvez mes actualités, mes derniers projets et contactez-moi directement par message privé pour discuter de votre projet.</p>
    <div class="instagram-handle">@sdo_web</div>
    <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="btn-instagram-large">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      Envoyer un message
    </a>
  </div>
</section>

<!-- CTA -->
<section id="contact">
  <div class="section-label" style="color:rgba(255,255,255,0.9);background:rgba(255,255,255,0.15);">Passons à l'action</div>
  <div class="section-title" style="text-align:center">Vous avez un projet ?</div>
  <p class="cta-sub">Discutons-en et lançons votre présence en ligne rapidement. Réponse sous 24h garantie sur Instagram.</p>
  <div style="text-align:center;">
    <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="btn-instagram-large">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      Me contacter sur Instagram
    </a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-content">
    <div class="footer-brand">
      <strong>SDO Web</strong>
      <span>Création de sites internet modernes</span>
      <span style="color: rgba(255,255,255,0.4); margin-top: 0.5rem;">© 2025 Silvio De Oliveira. Tous droits réservés.</span>
    </div>
    <div class="footer-social">
      <a href="https://www.instagram.com/sdo_web?igsh=bnczMThlenN0N3Y0" target="_blank" rel="noopener noreferrer" class="footer-instagram" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <span>@sdo_web</span>
      </a>
    </div>
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
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  burger.setAttribute('aria-expanded', burger.classList.contains('active'));
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Intersection Observer for scroll animations
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

document.querySelectorAll('.scroll-reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Counter animation for stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.dataset.count) {
      const target = parseInt(entry.target.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          entry.target.textContent = target + '+';
          clearInterval(timer);
        } else {
          entry.target.textContent = Math.floor(current);
        }
      }, 16);
      
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-val[data-count]').forEach(stat => {
  statsObserver.observe(stat);
});

// Smooth scroll for anchor links
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
</script>

</body>
</html>
