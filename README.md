# Session de formation Angular 13 (IMS Group)

Ce projet a été crée avec [Angular CLI](https://github.com/angular/angular-cli) en utilisant la version 13.1.2.

## Téléchargement & clonage du projet 

Vous pouvez cloner ce projet à travers git en utilisant la commande `git clone URL` avec `URL` correspond au lien du repo github. Ensuite, n'oublier pas de télécharger les dépendances du projet en faisant `npm i` dans le même répertoire.

## Exécuter du projet dévelopment

Exécuter le serveur de développement à travers la commande `ng serve -o` pour compiler le projet. Ensuite, vous pouvez naviguer vers `http://localhost:4200/` dans votre navigateur afin de voir l'application (en utilisant l'option `-o` le navigateur va ouvrir automatiquement une autre anglet après la compilation du projet). Après chaque changement dans le code source, l'application sera rechargée automatiquement.

## Génération des composants/services/pipes ou autres

Exécuter la commande `ng generate component component-name` afin de génerer un nouveau composant. Vous pouvez faire aussi `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Le plan par séance: 

### 1. Séance 1: Introduction à la programmation JavaScript et TypeScript

Dans cette séance, nous avons discuté ensemble (rappel sur la programmation JavaScript):

1. Pourquoi JavaScript?
2. Historique du EcmaScript (ES6)
3. Création d'une classe dans ES6
4. Notion de visibilité (dans les classes)
5. Les variables et les constantes 
6. Les fonctions fléchées (Arrow Functions)
7. Les fonctions fléchées (One-liner)
Template Strings

Ensuite, nous avons discuté la partie TypeScript: 

1. Pourquoi TypeScript? 
2. De l’EcmaScript au TypeScript
3. Le compilateur TypeScript (TSC)
3. Le typage dans TypeScript

Vous pouvez consulter le support des cours et/ou vous pouvez regarder [cs vidéos](https://www.youtube.com/hatemdagbouj) dans ma chaine YouTube.
### 2. Séance 2: Introduction à Angular

Dans cette séance, nous avons commencer la partie Angular. Les concepts abordée sont:

1. Pourquoi Angular? 
2. Historique du Framework
3. Angular vs Angular JS
4. Angular Products
5. Angular avec TypeScript
6. Single Page Application: SPA
7. Le design pattern MVC 
8. Démarrer avec Angular (Partie pratique): créer une application angular et comprendre la structure des dossiers/fichiers.

### 3. Séance 3: Les fondamentaux d'Angular (branche `master`):

Cette séance se focalise sur: 

1. La génération d'un composant à travers la commande `ng generate component [NOM_COMPOSANT]` ou bien via `ng g c [NOM_COMPOSANT]`.
2. La partie `declarations:[...]` du module `AppModule.ts`.
3. Suppression d'un composant.
4. Installation de Bootstrap 4 dans notre projet Angular.
5. Décomposition de notre application à des composants réutilisable.

### 4. Séance 4: Le routing dans Angular (branche `17/07/2022`):

Cette séance se focalise sur: 

1. Impélentation du routing dans notre application.
2. L'interpolation `{{ variable_name}}` 
3. L'event binding `(click)="delete()"` et `(onSubmit)="register()"`
4. Two way data binding  `[(ngModel)]="user.name"`
5. Le property binding `[src]="user.avatar"`

### 5. Séance 5: les formulaires en Angular (branche `23/07/2022`): 

Il existe deux façons pour implementer les formulaires dans Angular: 

1. `Template driven form` du module `FormsModule` 
2. `Reactive Form` du module `ReactiveFormsModule`.

Il faut noter qu'il faut importer l'un des deux modules avant l'utilisation. 

De plus, dans cette séance nous avons discuté ensemble: 

1. Création d'un formulaire en utilisant la manière `template driven form`.

2. Les directives structurelles dans Angular: 
    * La directive structurelle `*ngIf`
    * La directive structurelle `*ngFor`

3. Persistance des données dans le `localStorage`.


### 6. Séance 6: Reactive Forms dans Angular (branche `24/07/2022`)

Dans cette séance, nous avons focalisé sur:

1. Avantages des formulaires réactives.
2. Creation d'un formulaire en utilisant la manière `Reactive Forms` (FormGroup, FormControl, FormArray).
3. Utilisation du `Reactive programming` dans angular afin de suivre les changements sur un champs particulier (en utilisant `observable` et `subscribe`). L'objectif est de cacher et/ou afficher d'autre champs ou bien de mettre à jours les validations.

5. Les directives d'attribut dans Angular: 
    
    * Le binding du class selon une condition `[ngClass]`
    * Verrouiller un button selon une condition `[disabled]`.

### 7. Séance 7: (branche `30/07/2022`)

Dans cette séance, nous avons cencentré sur: 
1. La communication parent/child: en utilisant `@Input()` et `@Output()`.
2. Le problème de state managment (dans le cas où y a plusieurs `@Input()`), les solutions possibles: 
    * Data Services (basé sur `RxJS`)
    * NgRx Layer (basé sur `React Redux`)
    * Autres bibliothèque de gestion du state (i.e Akita) 
3. Création du couche `logique métier` dans un service
    * Création d'un service `ng g s [NOM]`
    * Injection de dépendance dans un composant
    * Les types d'injection de dépendances dans Angular.
4. Consommation d'une RESTfull API dans Angular: 
    
    * Utilisation du module `HttpClientModule`.
    * Utilisation du service `HttpClient`
    * Créer un service pour faire les appels Web service.  
### 8. Séance 8: (branche `31/07/2022`)

1. Correction de l'exercice.
2. CRUD en utilisant les RESTfull API.
3. Les pipes personalisé dans Angular.
    * Name pipe
    * Search pipe
4. Les modules dans Angular: 
    * Shared module
    * Features module (lazy loaded) 
5. Routing avancée : 
    * Lazy loading VS Egger loading 
    * Route Guard
7. Les interceptors HTTP dans Angular
    * JWT Web Token Interceptor
    * Response Intercepor
## Contact : 

1. [LinkedIn](https://www.linkedin.com/in/dagbouj-hatem/) profile.

2. [Twitter](https://twitter.com/dagbhatem) profile.

3. [Github](https://github.com/dagboujhatem) profile.

4. E-mail : dagboujhatem@gmail.com