# Utiliser une image de base
FROM node:21.7.1

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de votre application
COPY . .

# Exposer le port sur lequel l'application sera accessible
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
