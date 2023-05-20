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
Note: index.html n'est lu que dans le dossier général et pas dans public

```
# Installation
```
npx create-react-app ProjetExemple
cd ProjetExemple
npm start

```

# Creer des routes
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
