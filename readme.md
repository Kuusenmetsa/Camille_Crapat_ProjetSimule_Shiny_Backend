# Camille_Crapat_ProjetSimule_Shiny_Backend

Ce projet est une API créer pour le projet d'Openclassrooms dénommé Shiny

## Prérequis

Vous devez avoir installé git, nodeJS et npm au préalable.

## Installation

Afin d'installer cette API, utilisez les commandes ci-dessous :

```bash
git clone https://github.com/Kuusenmetsa/Camille_Crapat_ProjetSimule_Shiny_Backend.git
```

```bash
cd Camille_Crapat_ProjetSimule_Shiny_Backend
```

```bash
npm install
```

## Création de la base de données

```sql
CREATE SCHEMA IF NOT EXISTS `shiny` DEFAULT CHARACTER SET utf8 ;
USE `shiny` ;

CREATE TABLE IF NOT EXISTS `shiny`.`devs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `dev_type` VARCHAR(30) NOT NULL,
  `link_img` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `shiny`.`survey` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `survey` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;
```

## Ajout des données exemple dans la base de données

```sql
INSERT INTO shiny.survey (survey) VALUES ('Votre site doit-il sauvegarder des données entrées par vos utilisateurs ?'),
('Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?'),
("Avez-vous déjà des maquettes pour l'application que vous voulez créer ?"),
("Le site comporte-t-il une fonction d'authentification ?"),
('Souhaitez-vous avoir plusieurs types de comptes pour votre application (administrateur, visiteur, utilisateur, etc). ?'),
('Avez-vous prévu une version mobile à part entière ?');

INSERT INTO shiny.devs (lastname, firstname, dev_type, link_img) VALUES ('Gautier', 'Arielle', 'Développeuse fullstack', 'http://localhost:8000/images/arielle-gautier.jpeg'),
('Carpentier', 'Marine', 'Développeuse frontend', 'http://localhost:8000/images/marine-carpentier.jpeg'),
('Barre', 'Lucile', 'Product Designer', 'http://localhost:8000/images/lucile-barre.jpeg'),
('Rolland', 'Clément', 'Développeur mobile', 'http://localhost:8000/images/clement-rolland.jpeg'),
('Chevalier', 'Grégoire', 'Développeur backend', 'http://localhost:8000/images/gregoire-chevalier.jpeg'),
('Rodriguez', 'Raphaël', 'Designer', 'http://localhost:8000/images/raphael-rodriguez.jpeg'),
('Vysa', 'Hugo', 'Développeur frontend', 'http://localhost:8000/images/hugo-vysa.jpeg'),
('Toman', 'Mina', 'Développeur mobile', 'http://localhost:8000/images/mina-toman.jpeg'),
('Leroy','Amélie','Développeuse backend','http://localhost:8000/images/amelie-leroy.jpeg'),
('Lebrun','Maxime','Intégrateur SEO','http://localhost:8000/images/maxime-lebrun.jpeg'),
('Brun', 'Julien', 'Développeur mobile', 'http://localhost:8000/images/julien-brun.jpeg');
```

## Ajout des identifiants de connexion à MySQL

Créez un fichier .env et ajoutez vos informations de connexion comme ci-dessous :

```javascript
DB_SERVER = "";
DB_PORT = "";
DB_USER = "";
DB_PASSWORD = "";
DB_DATABASE = "shiny";
```

## Mise à jour

```bash
npm run update_base
```

## Lancement

Pour lancer le serveur, utilisez la commande ci-dessous :

```bash
node server
```
