# La structuration de base d'un projet React
```jsx
/ProjetExemple
|-- node_modules/
|-- public/
|   |-- index.html
|   |-- favicon.ico
|   |-- manifest.json
|-- src/
|   |-- components/
|   |   |-- Banner.js
|   |   |-- Card.js
|   |-- layouts/
|   |   |-- Layout.js
|   |-- routes/
|   |   |-- page1.js
|   |   |-- page2.js
|   |   |-- page3.js
|   |-- App.js
|   |-- index.js
|-- package.json
|-- package-lock.json
|-- README.md


```
# 1. Installation du Projet
```jsx
npx create-react-app ProjetExemple
cd ProjetExemple
npm start

```

# 2. Creer des routes
Une route sert à déterminer quel contenu ou quel composant afficher à l'utilisateur en fonction de l'URL qu'il visite dans une application web.
## Installation des dépendances
```jsx
npm install --save react-router-dom
```
## Ajouter des routes 
### Pre-requis:
-fichier js localisé dans le dossier routes avec fonction renvoyant du Html (ex: Home,About,Contact)
Dans App.js importer les fichier js des routes
```jsx
import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2.js";
import Page3 from "./pages/page3.js";
```

Dans la fonction App() du fichier App.js Ajouter une structuration Router>Routes>Route
```jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page2 />} />
        <Route path="/contact" element={<Page3 />} />
      </Routes>
    </Router>
  );
}
```
Dans le fichier.js:
```jsx
export default function Page1() {
    // Component implementation
    return (
        <div>
            <h1>Page1 🧮</h1>
        </div>
    )
  }
```
## Gérer les erreurs de routes 
Créer dans routes un fichier pageError.js avec une fonction NotFound:
```jsx
function NotFound() {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
    </div>
  )
}
export default NotFound;
```
dans App.js ajouter une route pour gérer l'erreur 
```jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page2 />} />
        <Route path="/contact" element={<Page3 />} />
        <Route path="*" element={<NotFound />} /> {/* Ce composant sera affiché lorsqu'aucune des routes précédentes n'a été appariée */}
      </Routes>
    </Router>
  );
}
```
Note: path="*" est crucial pour gérer l'erreur

# 3. Créer un Layout
Un layout sert à fournir une structure visuelle commune (comme une barre de navigation, un pied de page, etc.) à plusieurs pages ou composants dans une application web.
## Structuration d'un Layout
```jsx
/ProjetExemple
  /src
    /components
    /layouts
    /pages
    /services
    /styles
    App.js
    index.js

```
## Installation du Layout
Créer un dossier layouts dans lequel on crée un fichier Layout.js

### Dans le ficher /Layout/layout.js:
```jsx
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Ici pourrait se trouver votre barre de navigation */}
        <h1>Mon Application</h1>
      </header>

      <main>
        {children} {/* Les enfants du composant Layout sont injectés ici */}
      </main>

      <footer>
        {/* Ici pourrait se trouver votre pied de page */}
        <p>© 2023 Mon Application</p>
      </footer>
    </div>
  );
}
export default Layout;
```
'{children}' représente le contenu spécifique à chaque page (routes/composants, etc.) qui sera affiché dans la balise <main>. C'est à la fois un paramètre de la fonction Layout et un élément injecté dans le composant <main>.

À noter : Tout contenu placé entre les balises <Layout> et </Layout> est considéré comme un "enfant" du composant Layout, et est passé à la fonction Layout comme argument children ou comme Props c'est a dire une abréviation de "properties" en anglais, qui signifie "propriétés" en français..

### Dans le dossier Route/page1.js
```jsx
import Layout from '../Layout/layout.js'; 

function Page1() {
  return (
    <Layout>
      <h2>Accueil</h2>
      <p>Bienvenue sur mon application !</p>
    </Layout>
  );
}

export default HomePage;
```
On importe la fonction l'ayout pour l'appliquer sur la fonction responsable de la route de la page1


# 4. Créer des Composants

Un composant est un élément réutilisable que l'on peut ajouter à une route ou à d'autres composants dans une application React.

Voici comment créer un composant :

1. Créez un dossier "Components".
2. Dans ce dossier, créez un fichier "Component1.js" avec le contenu suivant :

```jsx
export default function Component1() {
  return (
    <div>
      <h1>Bienvenue dans Component1</h1>
      <p>Ceci est un exemple de composant en React.</p>
    </div>
  );
}

```

1. Ensuite, dans la route où vous souhaitez ajouter le composant, importez le composant et utilisez-le :

```jsx
import Layout from '../Layout/layout.js';
import Component1 from "../Components/Component1.js";

export default function Page1() {
  return (
    <Layout>
      <div>
        <h1>Page1 🧮</h1>
        <Component1 />
      </div>
    </Layout>
  );
}

```

Dans cet exemple, nous importons le composant `Layout` qui peut servir de mise en page commune, puis nous utilisons le composant `Component1` dans la route `Page1`. Le contenu de `Component1` sera affiché à l'endroit où nous ajoutons `<Component1 />` dans la structure de la page.


# 5.Créer des Props
Le mot "props" est une abréviation de "properties" en anglais, qui signifie "propriétés" en français. En React, les props sont des objets JavaScript qui permettent de transmettre des données d'un composant parent à un composant enfant.

## Dans parent.js :

```jsx
function parent({ children }) {
  return (
    <div>
      <header>
        {/* Ici pourrait se trouver votre barre de navigation */}
        <h1>Mon Application</h1>
      </header>

      <main>
        {children} {/* Les enfants du composant Layout sont injectés ici */}
      </main>

      <footer>
        {/* Ici pourrait se trouver votre pied de page */}
        <p>© 2023 Mon Application</p>
      </footer>
    </div>
  );
}
export default parent;
```
## Dans children.js :

```jsx
import React from 'react';
import parent from './parent.js';

function children() {
  return (
    <parent>
      {/* Contenu qui va être passé dans {children} */}
      <h2>Accueil</h2>
      <p>Bienvenue sur mon application !</p>
      {/* Contenu qui va être passé dans {children} */}
    </parent>
  );
}

export default Page1;

```

Dans cet exemple, nous avons deux fichiers : `parent.js` et `children.js`. Le composant `parent` dans `parent.js` reçoit la prop `children` et l'utilise pour afficher le contenu spécifique à chaque page dans la balise `<main>`.

Dans `children.js`, nous importons le composant `parent` depuis `parent.js` et l'utilisons pour envelopper le contenu spécifique à la page d'accueil. Le contenu est placé entre les balises `<parent>` et `</parent>` et sera passé au composant `parent` en tant que `children`.

Cela permet d'afficher le contenu de la page d'accueil dans la structure globale définie par `parent`.

# 6. Créer des Links vers des routes
Voici le code mis en forme pour le format Markdown :

Si je veux ajouter un (`Link`/Href) vers une route , je dois suivre les étapes suivantes :

1. Aller dans la fonction de la route ou du composant qui renvoie le HTML.
2. Importer Link depuis react-router-dom.
3. Ajouter un modèle du type <Link to="/page2">Aller à la page 2</Link> dans le return de la fonction.

Dans la route associée à `/` (la page d'accueil), je dois faire :

```jsx
import { Link } from 'react-router-dom';
import Layout from '../Layout/layout.js';
import Component1 from "../Components/component1.js";

export default function Page1() {
  return (
    <Layout>
      <div>
        <h1>Page1 🧮</h1>
        <Component1 />
        <Link to="/page2">Aller à la page 2</Link>
        <Link to="/page3">Aller à la page 3</Link>
      </div>
    </Layout>
  );
}

```

Dans cet exemple, j'ai importé `Link` depuis `react-router-dom` et l'ai utilisé pour créer des liens vers les pages 2 et 3. Les utilisateurs pourront cliquer sur ces liens pour être redirigés vers les pages correspondantes de votre application.

# 7.Créer des Hooks