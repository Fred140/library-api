Présentation générale
library-api est une API backend développée avec Next.js (App Router) et Prisma pour la gestion d’une bibliothèque de livres.
Elle permet de créer, lire, mettre à jour, supprimer et liker des livres, et de servir ces données à un front-end (par exemple Angular).

Structure des fichiers principaux
route.ts
Contient les handlers API pour les opérations CRUD sur les livres :

model Livre {
  id          Int      @id @default(autoincrement())
  titre       String
  auteur      String
  resume      String
  publication DateTime
  couverture  String?
  liked       Boolean  @default(false)
}

GET : liste tous les livres
POST : ajoute un livre
PATCH : met à jour un livre (ex : like)
DELETE : supprime un livre
OPTIONS : gère le CORS
route.ts
Permet de récupérer un livre par son identifiant (id) via une requête POST.

schema.prisma
Définit le modèle de données avec Prisma.
Exemple du modèle Livre :

/generated/prisma/
Contient le client Prisma généré automatiquement pour interagir avec la base de données.

/prisma/migrations/
Dossier contenant l’historique des migrations de la base de données.

Fonctionnalités principales
CRUD sur les livres :
Ajouter, modifier, supprimer, lister les livres.
Like/Dislike :
Possibilité de liker un livre (champ liked).
Recherche par ID :
Récupérer un livre précis via son identifiant.
Upload de couverture (si route /api/upload présente).
Gestion du CORS :
Les headers nécessaires sont ajoutés pour permettre les requêtes depuis le front-end (ex : Angular sur localhost:4200).
Technologies utilisées
Next.js (API routes, App Router)
Prisma (ORM pour la base de données, ici SQLite)
TypeScript
SQLite (par défaut, configurable)
Utilisation
Démarrage :
Lancer le serveur Next.js (npm run dev ou yarn dev).
Migrations :
Utiliser Prisma pour appliquer les changements de schéma (npx prisma migrate dev).
Connexion front-end :
Le front (ex : Angular) consomme les routes API exposées sur http://localhost:3000/api/livres.
Résumé
library-api est une API REST moderne pour gérer une bibliothèque de livres, avec persistance des données, gestion des likes, et interfaçable facilement avec un front-end moderne.
Elle est conçue pour être simple à étendre et à maintenir.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/route.ts`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Routes

This directory contains example API routes for the headless API app.

For more details, see [route.js file convention](https://nextjs.org/docs/app/api-reference/file-conventions/route).
