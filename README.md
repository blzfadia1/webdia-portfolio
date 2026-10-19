# Portfolio WebDia

Site statique (HTML/CSS/JS) : aucune installation, aucun build.

## Structure
- `index.html` : la page
- `sites.js`   : LA LISTE DE TES SITES (le seul fichier à modifier)
- `style.css`  : les couleurs et le design
- `script.js`  : affiche les cartes
- `vercel.json`: configuration Vercel

## Ajouter un site
Ouvre `sites.js`, copie un bloc `{ ... }`, change le nom, la description, les tags et `url`.

## Tester en local
Double-clique sur `index.html`.

## Déployer sur Vercel
### Méthode 1 : via GitHub (recommandée)
1. Crée un compte sur https://vercel.com (connexion avec GitHub).
2. Crée un dépôt GitHub `webdia-portfolio` et envoie-y tous les fichiers de ce dossier.
3. Sur Vercel : **Add New → Project** → importe le dépôt.
4. Framework Preset : **Other**. Laisse Build Command et Output Directory vides.
5. Clique **Deploy**. Tu obtiens un lien `https://webdia-portfolio.vercel.app`.
6. Chaque modification poussée sur GitHub redéploie le site automatiquement.

### Méthode 2 : via la ligne de commande
```
npm i -g vercel
cd webdia-portfolio
vercel        # premier déploiement (réponds aux questions)
vercel --prod # mise en ligne finale
```

### Méthode 3 : glisser-déposer
Sur https://vercel.com/new, utilise l'import de dossier / CLI, ou passe par GitHub (méthode 1).

## Mettre le lien sur Instagram
Instagram → Modifier le profil → Liens → colle l'URL Vercel.

## Domaine personnalisé (optionnel)
Vercel → ton projet → Settings → Domains → ajoute ton nom de domaine.
