-----------------
StatsWebIsis2016
--------------

La bibliothèque utilisée pour le front-end du site est : **Materialize**.
Une **fonctionnalité d'authentification** a été implémentée.

Le site répond à certaines contraintes de responsive design mais la comptabilité inter-navigateurs n'étant pas gérée totalement (Manque d'implémentations de correctifs de Materialize), il est nécessaire d'ouvrir le projet sous Google Chrome pour avoir un rendu optimal, néanmoins avec l'implémentation des correctifs, ce problème peut être résolu.

![enter image description here](http://puu.sh/rxcu7/8e71ff3e52.png)

-----

Du fait de l'ancienneté des données, nous avons fait le choix de définir des références abstraites de date pour obtenir des données (par exemple, le jour « courant » pour la requête du chiffre affaire est le définie en « dur » le 05-06-1996).

## Nous avons réalisés 2 écrans principaux :
–	**le tableau de bord** : sont présents 4 diagrammes qui donne au directeur commercial une vue d'ensemble de sa société :

–	Un camembert présente l'état des commandes : une commande ne possédant pas de données « Envoyee_le » est considérée comme en cours tandis qu'une commande possédant cette donnée est considérée comme une commande validée.
Le nom de la requête respective dans le fichier « jbdc2json » est « Etat100Commandes ». C'est une requête *statique*.

–	Un histogramme représentant le nombre de commandes effectué le derniers mois. L'histogramme permets d'avoir une vue d'ensemble jour après jour du nombre de commande effectué dans le mois.
Le nom de la requête respective dans le fichier « jbdc2json » est « DernieresCommandes ». C'est une requête *statique*.

–	Un camembert présente la répartition de différentes catégories des produits commandés de toute la base de données.
Le nom de la requête respective dans le fichier « jbdc2json » est « DistributionCategories ». C'est une requête *statique*.

–	Un histogramme présente le chiffre d'affaire (soit la quantité de produit commandé * le prix du produit unitaire) pour les 2 dernières années. Travaillant sur la base SQL derby, il a été implémenté le traitement des dates en JavaScript.
Le nom de la requête respective dans le fichier « jbdc2json » est « DistributionsRevenus ». C'est une requête « pseudo dynamique » : etant donnée le fait que les manipulations sont difficiles sur les dates et l'ancienneté des données, elles sont liées depuis le code JavaScript. Autrement, il est facile de la rendre dynamique en joignant les 2 dates (début et fin) souhaitées.

Toutes ces méthodes sont présentent dans le fichier « dashboard.js », présent lui-même dans le dossier  projetWeb2016>Web Pages>asset>js. Ce fichier contient les méthodes qui appellent leur requête respective. Le résultat est transformé côté serveur au format « json » via la servlet Jdbc2Json de M. Bastide. Les données sont ensuite récupérées en javascript via une requête AJAX utilise la visualisation des Google charts utilisés pour mettre en forme les données.


–	**L'écran répartition géographique** :
Cet écran présente un formulaire à l'utilisateur dans lequel il peut cocher différents pays pour les comparer. La liste des pays est obtenue de façon dynamique via une requête sur la base. Le nom de la requête respective dans le fichier « jbdc2json » est « RecuperationPays ». C'est une requête statique appelée à chaque chargement de la page. L’utilisateur peut ensuite sélectionner une date de début et une date de fin sur les « datePicker » (calendrier materialize) et choisir entre étudier 2 paramètres :

–	Le nombre de commandes pour chacun des pays sélectionnés dans l'intervalle de temps saisi dans le formulaire. Le nom de la requête respective dans le fichier « jbdc2json » est « CommandesParPays ».

–	Le nombre de clients pour chacun des pays sélectionnés dans l'interval de temps saisit dans le formulaire.Le nom de la requête respective dans le fichier « jbdc2json » est « nbClients».

A chaque changement de saisie dans le formulaire, la requête (client ou commande) est effectuée avec les nouveaux paramètres pris en compte. Le code responsable de cette requête dynamique est présent dans le fichier repartition_geographique.js, lui même présent dans le dossier ProjetWeb2016>Web Pages>asset>js. En premier lieu, la récupération des différents champs du formulaire est effectuée. Selon le choix du bouton radio commande/client, la requête respective est appelée avec les paramètres issus du formulaire et enfin, la carte géographique de google chart est implémentée avec les données.

*L’architecture des fichiers : Les fichiers côté client sont contenus dans le dossier WebPages Défini par l’architecture :*
 

###Côté client
•	Assets : Dossier où se trouvent les ressources CSS et Javascript qui seront utilisées dans les interfaces clients
•	Assets\js : Dossier où se trouvent tous les modules javascript (Le fichier init contient la fonction de dessins de la visualisation modifiée) et les autres fichiers javascript correspondent à chaque vue.
•	Pages : Corps de texte JSP : Ce sont purement des fichiers .JSP qui contiennent du HTML et qui sera appelé suivant la requête http. 
•	Structure : Fichiers où sont contenus les fichiers JSP statique qui seront inclus dans l’ensemble des vues.
•	Index.jsp et Repartition_geograph.jsp  Fichiers contrôleurs qui servent de route pour le tableau de bord et la fonction de répartition géographique, incluant les différentes vues / sturctures.

###Côté serveur
3 Servlets ont été créées :
•	Connexion : Cette servlet est appelée via Ajax pour instancier une connexion via le système des sessions. 
•	Déconnexion : Cette servlet déconnecte et redirige directement sur /home
•	Home : Fonction qui permet de créer le /home dans l’url en appelant la vue index

La librairie Jdbc2Json : Développée par M. Rémi Bastide, cette servlet permet de requêter la base Derby et d’en ressortir des données en JSON.

----

####Quelques images : 

![enter image description here](http://puu.sh/rxcWg/1714288fa3.png)

![enter image description here](http://puu.sh/rxcZd/2f0dd7b3f6.png)

![enter image description here](http://puu.sh/rxd2L/2f1cf0d655.png)