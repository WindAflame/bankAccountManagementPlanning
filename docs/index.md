Bank Project

# Introduction

Ce projet à pour but de déployer un outil permettant d'aider à la gestion de son compte bancaire. Tel que renseigner tout ses achats et effectuer une vérification avec les données de sa banque.

# Cahier des charges

Voici une liste des choses à prévoir :

- Rendre accéssible ce site à tout le monde.
- Faire en sorte que les données saisie par l'utilisateur soit retenu uniquement pour le mois en cours.
- Faire en sorte de générer des fichiers JSON encrypter pour sauvegarder et archiver un mois.
- Permettre le chargement d'un mois pour visualiser ce contenu. (Pas de sauvegarde en temps réel. Que sur la demande de génération de fichiers JSON dans ce cas.)
- Permettre à l'utilisateur de choisir une base de données gratuite pour y stocker ces données. (Tel que Firebase mais ceci est optionnel)

# Spécifications

## Cadre Technique

| Nom | Version | Description |
|---|---|---|
| Angular | >= 6.x | L'utilisation de cette librairie car je l'a connais bien et qu'elle possède un tableau prêt à l'utilisation. |
| Lib. IndexedDB | X | Trouver une lib pour la gestion de données sous forme de base dans le nav. |

## Fonctionnalités

| Nom | Description |
|---|---|
| Login | La page de login à pour rôle de gérer les différents cas d'utilisation des données. (JSON/IndexedDB/Firebase) |
| Portage des données sous forme de JSON Encrypter | Afin de sauvegarder les données, nous inviterons l'utilisateur à effectuer une sauvegarde sous forme de fichier car nous avons pas infrastructure pour garder ces données. Ces fichiers devront être encrypter pour garder un minimum la vie privé de l'utilisateur. |
| Gestion des données dans IndexedDB | Durant l'utilisation de ce site, il faut sauvegarder les données quelque part sous peine de devoir charger et générer un JSON à chaque utilisation. La première solution est d'utiliser la base de données existante dans les navigateurs. |
| Gestion des données en externe | Ceci à pour but de déporter la gestion des données dans le navigateur à un service dédié sur le web. |
| Référencement de ses achats | Fonctionnalité principal. Pouvoir saisir des informations sur ses transactions. Il en existe plusieurs types : itératif et ponctuel. De base toutes les saisies sont ponctuels. |
| Gestion des transactions par catégorie | Ceci permet à l'utilisateur de référencer sa transaction sous une catégorie puis de demander à visualiser tout ses catégorie en même temps pour comparer les totaux. |
| ? | Oublié |
| Comparaison avec le récapitulatif de sa banque | La banque peux fournir un fichier regroupant toutes les transactions sur un mois donné. Il faudra pouvoir parcourir ce fichier et fournir au client de maniere visuelle si tout est identique à ça saisie. |
| Extension pour ajouter automatiquement des transactions sur le web | Afin d'aider à la saisie de cet outils. Utilisation d'une extension chrome pour détecter les transactions et les inscrires dans l'outil. |

## Base de données.

Afin de générer facilement un json. La BDD n'aura qu'une table.

*TRADUIRE EN ANGLAIS LES CHAMPS DE LA BDD*

| Colonne | Type | Description |
|---|---|---|
| id | serial | x |
| name | string | x |
| credit* | double | x |
| debit* | double | x |
| catégorie | string | x |
| commentaire | string | x |
| itératif_jour | int | Nombre de jour entre chaque prélèvement / Le jour effectif de l'itération par mois. |
| itératif_mois | int | Nombre de mois entre chaque prélèvement |

* Obligatoire
