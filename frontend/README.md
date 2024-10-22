# Frontend AI Chat

Ce projet est le frontend d'une application de chat AI utilisant React, TypeScript, et Vite.

## Configuration requise

- Node.js 14+
- npm ou yarn

## Installation

1. Clonez ce dépôt
2. Naviguez vers le dossier du frontend :
   ```
   cd frontend
   ```
3. Installez les dépendances :
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

## Lancement de l'application

Pour lancer l'application en mode développement :

```
npm run dev
```
ou
```
yarn dev
```

L'application sera accessible à l'adresse `http://localhost:5173`.

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run lint` : Exécute le linter ESLint
- `npm run preview` : Lance un aperçu de la version de production

## Structure du projet

- `src/` : Contient le code source de l'application
  - `components/` : Composants React réutilisables
    - `Header.tsx` : Composant d'en-tête
    - `ChatInput.tsx` : Composant de saisie de message
    - `ChatMessage.tsx` : Composant de message individuel
    - `EmptyState.tsx` : État initial du chat
  - `types/` : Définitions de types TypeScript
    - `index.ts` : Types partagés
  - `App.tsx` : Composant principal de l'application
  - `main.tsx` : Point d'entrée de l'application
  - `index.css` : Styles globaux et configuration Tailwind
- `public/` : Fichiers statiques
- `index.html` : Page HTML principale
- `vite.config.ts` : Configuration de Vite
- `tailwind.config.js` : Configuration de Tailwind CSS
- `tsconfig.json` : Configuration TypeScript

## Personnalisation

Vous pouvez personnaliser l'apparence de l'application en modifiant les fichiers CSS et les composants React. Le fichier `tailwind.config.js` permet de personnaliser les styles Tailwind CSS.

## Développement

### Ajout de nouveaux composants

1. Créez un nouveau fichier dans le dossier `components/`
2. Implémentez le composant en utilisant React et TypeScript
3. Importez et utilisez le composant dans `App.tsx` ou d'autres composants

### Gestion de l'état

L'application utilise l'état local de React. Pour une application plus complexe, envisagez d'utiliser des solutions de gestion d'état comme Redux ou Zustand.

## Tests

Pour exécuter les tests (à implémenter) :

```
npm run test
```

## Déploiement

Pour déployer l'application :

1. Exécutez `npm run build` pour créer une version de production
2. Déployez le contenu du dossier `dist/` sur votre serveur web

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez le projet
2. Créez votre branche de fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## Remarque

Assurez-vous que le backend est en cours d'exécution et accessible pour que l'application fonctionne correctement. Vérifiez que l'URL du backend est correctement configurée dans les appels API du frontend.
