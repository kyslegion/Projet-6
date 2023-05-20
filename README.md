# La structuration de base d'un projet React
```
ProjetExemple/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── main.js
  │   ├── App.vue
  │   └── ...
  ├── assets/
  │   ├── images/
  │   ├── styles/
  │   └── ...
  ├── tests/
  ├── package.json
  ├── README.md
  └── ...

```
1. # Installation du Projet
```
npx create-react-app ProjetExemple
cd ProjetExemple
npm start

```

2. # Creer des routes
Une route sert à déterminer quel contenu ou quel composant afficher à l'utilisateur en fonction de l'URL qu'il visite dans une application web.
## Installation des dépendances
```
npm install --save react-router-dom
```
## Ajouter des routes 
### Pre-requis:
-fichier js localisé dans le dossier routes avec fonction renvoyant du Html (ex: Home,About,Contact)
Dans App.js importer les fichier js des routes
```
import Page1  from "./pages/page1.js";
import Page2 from "./pages/page2.js";
import Page3  from "./pages/page3.js";
```

Dans la fonction App() du fichier App.js Ajouter une structuration Router>Routes>Route
```
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
```
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
```
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
```
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
path="*" est crucial pour gérer l'erreur

3. # Créer un Layout
Un layout sert à fournir une structure visuelle commune (comme une barre de navigation, un pied de page, etc.) à plusieurs pages ou composants dans une application web.
## Structuration d'un Layout
```
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
```
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
{children} représente le contenu spécifique à chaque page (routes/composants, etc.) qui sera affiché dans la balise <main>. C'est à la fois un paramètre de la fonction Layout et un élément injecté dans le composant <main>.

À noter : Tout contenu placé entre les balises <Layout> et </Layout> est considéré comme un "enfant" du composant Layout, et est passé à la fonction Layout comme argument children.

### Dans le dossier Route/page1.js
```
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