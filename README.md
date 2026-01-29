# Site Web Ideal Home Project

Site institutionnel multi-pages pour **Ideal Home Project**, société d'investissement et de valorisation immobilière spécialisée dans l'achat, la rénovation et la revente de biens immobiliers.

---

## 📋 Table des matières

- [Fonctionnalités actuelles](#fonctionnalités-actuelles)
- [Structure du site](#structure-du-site)
- [Technologies utilisées](#technologies-utilisées)
- [Installation et utilisation](#installation-et-utilisation)
- [Charte graphique](#charte-graphique)
- [Fonctionnalités non implémentées](#fonctionnalités-non-implémentées)
- [Recommandations pour la suite](#recommandations-pour-la-suite)
- [Informations légales](#informations-légales)

---

## ✅ Fonctionnalités actuelles

### Pages implémentées (7 pages)

1. **`index.html`** — Page d'accueil
   - Zone split interactive (2 univers : IHP / Recrutement)
   - Tous les blocs du CDC (0 à 10) : présentation, triple identification, méthode, réalisations, services, processus, avis
   - CTA flottant permanent en bas à droite ("Devenir membre")

2. **`qui-sommes-nous.html`** — Présentation institutionnelle
   - Manifeste : "Créer un immobilier plus intelligent, collectif et humain"
   - ADN : Co-agir, Co-construire, Co-réussir
   - Métier Agent Marchand
   - Ambition nationale & internationale
   - Gouvernance : Bureau des 7
   - Valeurs fondamentales

3. **`nos-biens.html`** — Réalisations
   - 3 projets détaillés avec avant/après
   - Description des travaux réalisés
   - Témoignages clients (vendeurs/acquéreurs)

4. **`vendeurs.html`** — Page dédiée vendeurs
   - Hero section avec accroche
   - Constat : freins d'une vente traditionnelle
   - Solution IHP : engagement, maîtrise technique, sécurisation
   - Processus en 4 étapes
   - CTA final vers formulaire contact

5. **`acquereurs.html`** — Page dédiée acquéreurs
   - Hero section "Achat immobilier réinventé"
   - Constat : parcours du combattant
   - Solution IHP : clé en main
   - Services : audit, conception, MOA, livraison
   - Promesse : sécurité, qualité, transparence

6. **`rejoindre-le-reseau.html`** — Candidature Agent Marchand
   - Accroche "Changer de vie professionnelle"
   - **Google Form intégré** (iframe) pour candidature
   - Message de remerciement

7. **`contact.html`** — Formulaires segmentés + coordonnées
   - 2 formulaires HTML distincts : Vendeur / Acquéreur
   - Coordonnées complètes (siège, email, téléphone, horaires)

### Fonctionnalités transversales

- **Header sticky** sur toutes les pages (logo + menu centré + CTA "Rejoindre le réseau")
- **CTA flottant** en bas à droite sur toutes les pages (sauf `rejoindre-le-reseau.html`)
- **Footer** avec logo, coordonnées, mentions légales
- **Design responsive** (mobile-first, breakpoint 980px)
- **Charte graphique bordeaux (#800020)** respectée sur l'ensemble du site

---

## 🗂️ Structure du site

```
/
├── index.html                 # Accueil (split interactif + blocs CDC)
├── qui-sommes-nous.html       # Présentation institutionnelle
├── nos-biens.html             # Réalisations avec témoignages
├── vendeurs.html              # Page vendeurs
├── acquereurs.html            # Page acquéreurs
├── rejoindre-le-reseau.html   # Candidature + Google Form intégré
├── contact.html               # Formulaires contact + coordonnées
└── README.md                  # Documentation (ce fichier)
```

---

## 🛠️ Technologies utilisées

- **HTML5** (sémantique)
- **CSS3** (Flexbox, Grid, custom properties, animations)
- **JavaScript** (aucune dépendance externe, script minimal pour navigation active)
- **Google Fonts** : Montserrat (titres) + Inter (corps de texte)
- **Google Forms** : iframe intégré sur la page "Rejoindre le réseau"

### Ressources externes

- **Logo officiel** : `https://www.genspark.ai/api/files/s/qEfoezZl`
- **Google Form candidature** : `https://docs.google.com/forms/d/e/1FAIpQLSff80IuNjtOFVcsHxC6r5bug_iWGPboSsS-8VSLzJGX3hMUBQ/viewform?usp=sharing&ouid=118246987118794997024`

---

## 🚀 Installation et utilisation

### Prérequis

Aucun prérequis. Site statique HTML/CSS/JS pur.

### Lancement en local

1. **Télécharger** les fichiers du projet
2. **Ouvrir** `index.html` dans un navigateur web (Chrome, Firefox, Safari, Edge)

Ou utiliser un serveur local (recommandé pour éviter les restrictions CORS sur certains navigateurs) :

```bash
# Python 3
python -m http.server 8000

# Node.js (avec http-server)
npx http-server -p 8000
```

Puis ouvrir : `http://localhost:8000`

### Déploiement en production

Le site peut être déployé sur n'importe quel hébergement statique :

- **Netlify** (recommandé) : drag & drop du dossier
- **Vercel** : connexion GitHub + déploiement automatique
- **GitHub Pages** : commit + push sur branche `gh-pages`
- **Serveur Apache/Nginx** : copie des fichiers dans `/var/www/html`

---

## 🎨 Charte graphique

### Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| **Bordeaux principal** | `#800020` | Titres, CTA, accents |
| **Encre (titres)** | `#111827` | Titres principaux |
| **Texte principal** | `#1f2937` | Corps de texte |
| **Texte secondaire** | `#6b7280` | Légendes, hints |
| **Fond soft** | `#f3f4f6` | Arrière-plans légers |
| **Bordeaux 5% alpha** | `rgba(128, 0, 32, 0.05)` | Fonds légers |
| **Bordeaux 10% alpha** | `rgba(128, 0, 32, 0.10)` | Bordures |

### Typographie

- **Titres** : `Montserrat` (800/900, letterspacing -0.02em)
- **Corps** : `Inter` (400/500/600)
- **Tailles** : `clamp()` pour responsive (de 14px à 42px selon usage)

### Espacement

- **Padding principal** : `48px` (desktop) / `22px` (mobile)
- **Container max** : `1180px`
- **Border radius** : `20px` (xl) / `28px` (2xl)
- **Ombres** : `0 18px 40px rgba(128,0,32,.10)`

---

## ❌ Fonctionnalités non implémentées

### Formulaires de contact

Les formulaires HTML sont présents sur `contact.html` mais **ne sont pas connectés** à un backend.

**Options pour activation :**
- Utiliser **Formspree** (service gratuit)
- Créer un **script PHP** (si hébergement PHP)
- Utiliser **Netlify Forms** (si déployé sur Netlify)
- Connecter à un **Google Sheet** via Apps Script

### Google Form pré-rempli

Sur `rejoindre-le-reseau.html`, le Google Form est intégré mais **ne pré-remplit pas** les champs depuis la page HTML.

**Pour activer le pré-remplissage :**
1. Ouvrir le Google Form en mode édition
2. Menu ⋮ → "Obtenir le lien prérempli"
3. Remplir des valeurs de test
4. Récupérer l'URL avec `entry.XXXX=` pour chaque champ
5. Modifier le formulaire HTML pour construire cette URL dynamiquement

### Images réelles

Les sections "Nos réalisations" utilisent des **textes descriptifs** mais pas de **vraies photos avant/après**.

**À ajouter :**
- Photos des 3 réalisations (Bordeaux, Villenave-d'Ornon, Bordeaux Nord)
- Idéalement : slider avant/après (avec bibliothèque comme [twentytwenty](https://zurb.com/playground/twentytwenty))

---

## 📌 Recommandations pour la suite

### Priorité 1 (Fonctionnel)

1. **Connecter les formulaires contact** (Formspree ou backend PHP)
2. **Ajouter les photos réelles** des réalisations (avant/après)
3. **Tester le Google Form** en production (vérifier que les réponses arrivent bien)

### Priorité 2 (SEO & Performance)

1. **Ajouter les balises Open Graph** (meta pour réseaux sociaux)
   ```html
   <meta property="og:title" content="Ideal Home Project">
   <meta property="og:description" content="Société d'investissement immobilière...">
   <meta property="og:image" content="URL_IMAGE">
   ```

2. **Créer un `sitemap.xml`** pour le référencement
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>https://votredomaine.fr/index.html</loc><priority>1.0</priority></url>
     <url><loc>https://votredomaine.fr/qui-sommes-nous.html</loc><priority>0.8</priority></url>
     <!-- etc. -->
   </urlset>
   ```

3. **Optimiser les images** (compression, format WebP, lazy loading)

4. **Ajouter Google Analytics** ou Plausible (tracking visiteurs)

### Priorité 3 (UX)

1. **Ajouter des animations** au scroll (AOS, Intersection Observer)
2. **Créer un slider avant/après** pour les réalisations
3. **Ajouter une carte interactive** (Google Maps) sur la page Contact
4. **Créer une page "Mentions légales"** + "Politique de confidentialité"

---

## 📄 Informations légales

**SAS IDEAL HOME PROJECT**  
10 rue Raymond Bierge  
33140 Villenave d'Ornon  

**SIRET** : 992 408 047 00015  
**APE** : 68.10Z  
**TVA intracommunautaire** : FR49992408047  

**Contact**  
📧 Email : bonjour@idealhomeproject.com  
📞 Tél : 06 64 64 64 64  
🕒 Horaires : Du lundi au vendredi, de 9h00 à 18h00  

---

## 📊 Résumé des URIs fonctionnels

| Page | URI | Fonctionnalité |
|------|-----|----------------|
| Accueil | `/index.html` | Split interactif + blocs CDC complets |
| Qui sommes-nous | `/qui-sommes-nous.html` | Présentation institutionnelle |
| Nos biens | `/nos-biens.html` | Réalisations + témoignages |
| Vendeurs | `/vendeurs.html` | Page dédiée vendeurs |
| Acquéreurs | `/acquereurs.html` | Page dédiée acquéreurs |
| Rejoindre le réseau | `/rejoindre-le-reseau.html` | Candidature + Google Form intégré |
| Contact | `/contact.html` | Formulaires segmentés + coordonnées |

### Ancres spécifiques

- `#vendeur` → Contact formulaire vendeur
- `#acquereur` → Contact formulaire acquéreur
- `#candidature` → Rejoindre le réseau (zone formulaire)
- `#univers-ihp` → Index (contenu après le split)

---

## 👨‍💻 Développeur

Site développé selon le cahier des charges fonctionnel et éditorial fourni.  
Design et développement conformes aux spécifications IHP 2026.

**Technologies** : HTML5, CSS3, JavaScript (vanilla)  
**Polices** : Montserrat, Inter (Google Fonts)  
**Logo** : https://www.genspark.ai/api/files/s/qEfoezZl  

---

## 📝 Changelog

### Version 1.0.0 (2026-01-29)

- ✅ Création des 7 pages du site
- ✅ Header sticky + menu centré + CTA haut droite
- ✅ CTA flottant bas droite (toutes pages)
- ✅ Zone split interactive (page d'accueil)
- ✅ Google Form intégré (page réseau)
- ✅ Formulaires contact segmentés
- ✅ Design responsive mobile
- ✅ Charte graphique bordeaux respectée

---

**Pour toute question ou modification, contacter l'équipe Ideal Home Project.**