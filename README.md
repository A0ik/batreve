# Batrêve - Site de Rénovation Haut de Gamme

![Batrêve](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)

Site web professionnel pour **Batrêve**, entreprise spécialisée dans la rénovation de maison haut de gamme. Design moderne, animations fluides, et optimisé pour la conversion.

## 🎨 Caractéristiques Principales

### Design & UX
- ✨ **Design Distinctive** : Palette de couleurs sophistiquée (vert forêt et or élégant)
- 🎭 **Typographie Premium** : Playfair Display (titres) + Archivo (corps)
- 📱 **Responsive Design** : Parfait sur mobile, tablette et desktop
- 🎬 **Animations GSAP** : Animations fluides et professionnelles
- ⚡ **Performance** : Optimisé pour PageSpeed (score 90+)

### Sections du Site
1. **Hero Section** : Introduction captivante avec statistiques animées
2. **Services** : 4 offres principales avec cards interactives
3. **Processus** : Timeline en 5 étapes avec design unique
4. **Réalisations** : Portfolio avec grille adaptative et overlays
5. **Témoignages** : 6 avis clients avec photos et badges de confiance
6. **FAQ** : Accordion interactif avec 8 questions/réponses
7. **Contact** : Formulaire validé avec informations de contact
8. **Footer** : Navigation complète, newsletter, réseaux sociaux

### Fonctionnalités Techniques
- ✅ Formulaire de contact avec validation en temps réel
- ✅ Navigation sticky avec indicateur de progression
- ✅ Menu hamburger animé pour mobile
- ✅ Bouton "retour en haut" avec apparition au scroll
- ✅ Animations au scroll (GSAP ScrollTrigger)
- ✅ Cookie banner conforme RGPD
- ✅ Lazy loading des images
- ✅ Effet parallax sur le hero
- ✅ Compteurs animés pour les statistiques
- ✅ FAQ accordion avec animations
- ✅ Hover effects sur tous les éléments interactifs

### Conformité Légale (RGPD)
- 📄 Politique de Confidentialité complète
- 📄 Conditions Générales de Vente
- 📄 Politique des Cookies détaillée
- 🍪 Cookie consent banner
- ♿ Accessibilité WCAG 2.1 AA

## 📁 Structure des Fichiers

```
batreeve-website/
├── index.html          # Page principale
├── privacy.html        # Politique de confidentialité
├── terms.html          # Conditions générales
├── cookies.html        # Politique des cookies
├── styles.css          # Styles complets
├── script.js           # JavaScript et animations
└── README.md           # Ce fichier
```

## 🚀 Installation & Déploiement

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web (Apache, Nginx) ou hébergement web
- Connexion internet (pour les fonts Google et GSAP CDN)

### Installation Locale

1. **Télécharger les fichiers**
   ```bash
   # Cloner ou télécharger tous les fichiers dans un dossier
   ```

2. **Ouvrir dans un navigateur**
   ```bash
   # Ouvrez index.html dans votre navigateur
   # Ou utilisez un serveur local :
   python -m http.server 8000
   # Puis naviguez vers http://localhost:8000
   ```

### Déploiement sur un Serveur Web

#### Option 1 : Hébergement Mutualisé (OVH, Hostinger, etc.)

1. **Via FTP/SFTP**
   ```bash
   # Utilisez FileZilla ou un client FTP similaire
   # Uploadez tous les fichiers dans le dossier public_html/
   ```

2. **Via cPanel**
   - Connectez-vous à cPanel
   - Utilisez le Gestionnaire de fichiers
   - Uploadez tous les fichiers dans public_html/

#### Option 2 : Netlify (Recommandé - Gratuit)

1. **Créer un compte sur Netlify**
   - Allez sur [netlify.com](https://www.netlify.com)
   - Créez un compte gratuit

2. **Déployer par glisser-déposer**
   - Glissez le dossier complet sur netlify.com/drop
   - Votre site sera en ligne en quelques secondes !

3. **Configuration du domaine personnalisé**
   - Dans les paramètres Netlify, ajoutez votre domaine
   - Configurez les DNS selon les instructions

#### Option 3 : Vercel (Alternative Gratuite)

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions à l'écran
```

#### Option 4 : GitHub Pages

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/batreve.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Allez dans Settings > Pages
   - Sélectionnez la branche "main"
   - Cliquez sur Save
   - Votre site sera disponible sur `username.github.io/batreve`

## ⚙️ Configuration

### Personnalisation des Couleurs

Dans `styles.css`, modifiez les variables CSS :

```css
:root {
    --primary: #1a4d2e;        /* Vert principal */
    --accent: #d4af37;         /* Or accent */
    /* ... autres couleurs */
}
```

### Modification du Contenu

1. **Textes** : Éditez directement dans `index.html`
2. **Images** : Remplacez les URLs Unsplash par vos propres images
3. **Coordonnées** : Mettez à jour email, téléphone, adresse dans le footer

### Configuration du Formulaire

Dans `script.js`, ligne 238 :

```javascript
// Remplacez cette simulation par votre API
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

Options pour le backend du formulaire :
- **Formspree** : [formspree.io](https://formspree.io) (gratuit)
- **EmailJS** : [emailjs.com](https://www.emailjs.com) (gratuit)
- **Netlify Forms** : Intégré si vous utilisez Netlify
- **Votre propre API** : PHP, Node.js, etc.

### Analytics (Optionnel)

Pour ajouter Google Analytics, ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📸 Images Recommandées

### Sources d'Images Gratuites
- [Unsplash](https://unsplash.com) - Photos de haute qualité
- [Pexels](https://www.pexels.com) - Bibliothèque gratuite
- [Pixabay](https://pixabay.com) - Images libres de droits

### Suggestions d'Images par Section
1. **Hero** : Intérieur moderne rénové, lumineux
2. **Services** : Photos de chantiers, avant/après
3. **Réalisations** : Projets terminés (cuisine, salle de bain, etc.)
4. **Témoignages** : Photos de clients (ou avatars génériques)

### Optimisation des Images
```bash
# Recommandé : optimiser toutes les images avant upload
# Utiliser TinyPNG ou ImageOptim
# Format WebP pour les navigateurs modernes
# Tailles recommandées :
# - Hero: 1920x1080px
# - Portfolio: 800x600px
# - Témoignages: 80x80px
```

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Section

1. Dans `index.html` :
```html
<section id="nouvelle-section" class="nouvelle-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Label</span>
            <h2 class="section-title">Titre</h2>
        </div>
        <!-- Votre contenu -->
    </div>
</section>
```

2. Dans `styles.css` :
```css
.nouvelle-section {
    background: var(--bg-secondary);
    /* Vos styles */
}
```

3. Dans le menu navigation :
```html
<li><a href="#nouvelle-section" class="nav-link">Nouveau</a></li>
```

### Modifier les Animations

Dans `script.js`, ajustez les paramètres GSAP :

```javascript
gsap.from('.element', {
    scrollTrigger: {
        trigger: '.element',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
});
```

## 🔧 Résolution de Problèmes

### Les animations ne fonctionnent pas
- Vérifiez que GSAP est chargé : ouvrez la console (F12)
- Vérifiez votre connexion internet (GSAP est chargé via CDN)

### Le formulaire ne s'envoie pas
- Vérifiez la configuration de votre backend
- Ouvrez la console pour voir les erreurs JavaScript

### Les images ne s'affichent pas
- Vérifiez les URLs des images
- Assurez-vous que les images sont accessibles
- Vérifiez les chemins relatifs

### Le site est lent
- Optimisez les images (compression, WebP)
- Activez la mise en cache du serveur
- Utilisez un CDN pour les ressources statiques

## 📊 Performance

### Scores Lighthouse (objectifs)
- ✅ Performance : 90+
- ✅ Accessibilité : 95+
- ✅ Best Practices : 95+
- ✅ SEO : 95+

### Optimisations Appliquées
- Lazy loading des images
- Minification CSS/JS (recommandé pour production)
- Compression GZIP (côté serveur)
- Mise en cache navigateur
- Fonts optimisées (Google Fonts avec display=swap)

## 🌐 SEO

### Métadonnées Incluses
- ✅ Meta description
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Schema.org markup (LocalBusiness)
- ✅ Sitemap.xml (à créer)
- ✅ Robots.txt (à créer)

### Pour Améliorer le SEO

1. **Créer sitemap.xml** :
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.batreve.fr/</loc>
       <lastmod>2024-01-31</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

2. **Créer robots.txt** :
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.batreve.fr/sitemap.xml
   ```

3. **Google Search Console** : Soumettre le site

## 📱 Support Navigateurs

### Compatibilité Testée
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile

### Fonctionnalités Modernes Utilisées
- CSS Grid & Flexbox
- CSS Custom Properties (variables)
- IntersectionObserver API
- GSAP ScrollTrigger
- ES6+ JavaScript

## 📞 Support & Contact

Pour toute question sur ce projet :
- 📧 Email : contact@batreve.fr
- 📱 Téléphone : +33 1 23 45 67 89

## 📄 Licence

© 2024 Batrêve. Tous droits réservés.

Ce site web est propriété de Batrêve. Toute reproduction ou utilisation non autorisée est interdite.

## 🙏 Crédits

- **Design & Développement** : Fait sur mesure pour Batrêve
- **Animations** : GSAP (GreenSock Animation Platform)
- **Fonts** : Google Fonts (Playfair Display, Archivo)
- **Images** : Unsplash (à remplacer par vos propres photos)
- **Icons** : SVG personnalisés

## 📝 Changelog

### Version 1.0.0 (31 janvier 2024)
- ✨ Lancement initial du site
- 🎨 Design complet avec 7 sections principales
- 📱 Responsive design pour tous les appareils
- ⚡ Animations GSAP fluides
- 📄 Pages légales complètes (RGPD)
- 🍪 Cookie consent banner
- ✅ Formulaire de contact avec validation

---

**Fait avec ❤️ pour Batrêve**
