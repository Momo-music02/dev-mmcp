# Développement du site MMCP

Ce dossier contient le site de développement du distributeur musical Morgann Music CP (MMCP).

## Structure du site
- **index.html** : Accueil et présentation du projet
- **firebase.html** : Explications sur l'intégration de Firebase (auth, Firestore, Storage, Hosting)
- **cloudflare.html** : Explications sur l'intégration de Cloudflare (CDN, DNS, sécurité, Workers)
- **apps-script.html** : Explications sur l'intégration de Google Apps Script (API, automatisations)
- **deploiement.html** : Processus de déploiement et gestion des modifications
- **style.css** : Style commun à toutes les pages

## Déploiement
1. Développer/modifier les fichiers dans ce dossier `dev/`.
2. Commit & push sur le dépôt GitHub : https://github.com/Momo-music02/dev-mmcp
3. Déployer sur Firebase Hosting avec `firebase deploy` (voir firebase.html).
4. Cloudflare gère la sécurité, le CDN et le DNS du domaine.

## Technologies intégrées
- **Firebase** : Authentification, base de données, stockage, hébergement
- **Cloudflare** : Sécurité, CDN, DNS, Workers
- **Google Apps Script** : Automatisations, endpoints API personnalisés

Pour plus de détails, consulte chaque page dédiée.
