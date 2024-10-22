# Backend AI Chat

Ce projet est le backend d'une application de chat AI utilisant FastAPI et Hugging Face pour générer des réponses.

## Configuration requise

- Python 3.8+
- pip

## Installation

1. Clonez ce dépôt
2. Naviguez vers le dossier du backend :
   ```
   cd backend
   ```
3. Installez les dépendances :
   ```
   pip install -r requirements.txt
   ```

## Configuration

1. Créez un fichier `.env` à la racine du dossier backend
2. Ajoutez votre clé API Hugging Face :
   ```
   HUGGINGFACE_API_KEY=votre_clé_api_ici
   ```

## Lancement du serveur

Pour lancer le serveur de développement :

```
uvicorn app:app --reload
```

Le serveur sera accessible à l'adresse `http://localhost:8000`.

## Endpoints API

- POST `/chat` : Envoie un message et reçoit une réponse de l'AI

## Structure du projet

- `app.py` : Point d'entrée de l'application FastAPI
- `ai.py` : Contient la logique pour interagir avec l'API Hugging Face
- `requirements.txt` : Liste des dépendances Python

## Développement

### Ajout de nouvelles fonctionnalités

Pour ajouter de nouvelles fonctionnalités :

1. Créez une nouvelle route dans `app.py`
2. Implémentez la logique correspondante dans `ai.py` si nécessaire
3. Mettez à jour les tests unitaires

### Tests

Pour exécuter les tests (à implémenter) :

```
pytest
```

## Déploiement

Pour déployer l'application :

1. Assurez-vous que toutes les dépendances sont installées
2. Configurez les variables d'environnement sur votre serveur
3. Utilisez un serveur ASGI comme Gunicorn pour exécuter l'application

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez le projet
2. Créez votre branche de fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## Remarque

Assurez-vous que le frontend est configuré pour communiquer avec ce backend sur le port correct.
