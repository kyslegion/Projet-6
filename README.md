<img src="https://www.sooyoos.com/app/uploads/2021/06/react-javascript.png" width="300" height="200" alt="Texte alternatif">


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
## Installation des dépendances (react-router-dom)
```jsx
npm install --save react-router-dom
```
## Ajouter des routes 
### C'est quoi une route ? 
Une route va correspondre a un chemin précis, par exemple une page précise (home, contact, catalogue,etc)

Dans `App.js` importer les components des routes contenues dans le dossier routes (ici Page 1,2,3 et NotFound)
```jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page1 from "./routes/page1.js";
import Page2 from "./routes/page2.js";
import Page3 from "./routes/page3.js";
import NotFound from "./routes/pageError.js";
```
Ensuite dans App.js dans notre fonction `App()` Ajouter une structuration `Router>Routes>Route` c'est que l'on appelle des Outlets.
Dans React Router, le concept d'"outlet" fait référence à un emplacement réservé dans lequel le contenu des routes sera rendu.
```jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="*"element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```
Dans `Page1.js` voici a quoi ressemble une fonction qui retourne du html:
```jsx
export default function Page1() {
    return (
        <div>
            <h1>Page1 🧮</h1>
        </div>
    )
  }
```
### Gérer les erreurs de routes 
Créer dans routes un fichier `pageError.js` avec une fonction `NotFound` pour gérer les erreurs de routes:
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
Dans `App.js` ajouter une route pour gérer l'erreur 
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
Note: `path="*"` est crucial pour gérer l'erreur
# 3. Créer un Layout
## C'est quoi un Layout ? 
Un `layout` sert à fournir une structure visuelle commune (comme une barre de navigation, un pied de page, etc.) à plusieurs pages ou composants dans une application web.
En bref il peut correspondre au footer et/ou au header par exemple.
## Structuration d'un dossier Layout
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
Créer un `dossier layouts` dans lequel on crée un fichier `Layout.js`

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
### A quoi correspond `{children}` ?
`{children}` représente le contenu spécifique à chaque page (routes/composants, etc.) qui sera affiché dans la balise <main>. C'est à la fois un paramètre de la fonction Layout et un élément injecté dans le composant <main>.

`À noter` : Tout contenu placé entre les balises <Layout> et </Layout> est considéré comme un "enfant" du composant Layout, et est passé à la fonction Layout comme argument children ou comme Props c'est a dire une abréviation de "properties" en anglais, qui signifie "propriétés" en français..

### Exemple de Layout avec son contenu {children}
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

## C'est quoi un Composant ? 
Un composant est un élément réutilisable que l'on peut ajouter à une route ou à d'autres composants dans une application React.
Généralement il ne contient qu'une fonction

## Comment créer un Composant ?

1. Créez un dossier `components`.
2. Dans ce dossier, créez le nombre de composant souhaité sous la forme de fichiers js(ex: `Component1.js`).
Le fichier devra avoir une fonction retournant du html comme dans l'exemple ci dessous:
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
1. Ensuite, il nous faut choisir une route dans laquelle placer notre component comme dans l'exemple ci dessous:
```jsx
import Layout from '../Layout/layout.js';
import Component1 from "../components/Component1.js";

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
## C'est quoi un Props ? 
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

### Installer Link 
Ajouter dans le fichier js dans lequel je veux utiliser les link `import { Link } from 'react-router-dom';`

Si je veux ajouter un (`Link`/Href) vers une route , je dois suivre les étapes suivantes 

1. Ajouter un modèle du type <Link to="/page2">Aller à la page 2</Link> dans le return de la fonction.

voici a quoi devrait ressembler le code:

```jsx
import { Link } from 'react-router-dom';
import Layout from '../Layout/layout.js';
import Component1 from "../components/component1.js";

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

## 7. Utilisation des ressources dans React avec Asset

Dans cette section, nous allons apprendre comment incorporer et utiliser des ressources, telles que des images, dans votre application React en utilisant le dossier "Asset".

### Importation de l'image

La première étape consiste à importer l'image dans votre fichier JSX. Vous pouvez utiliser la syntaxe `import` pour cela. Dans l'exemple suivant, nous importons l'image `LOGO.png` en utilisant le chemin relatif `../Assets/Header/LOGO.png`. L'importation se présente comme ceci :

```jsx
import logoImage from '../Assets/Header/LOGO.png';
```

Cela crée une variable `logoImage` qui contient le chemin d'accès à l'image importée.

### Utilisation de l'image

Après avoir importé l'image, vous pouvez l'utiliser dans votre code JSX. Dans l'exemple suivant, nous utilisons l'image dans une balise `<img>` en utilisant la syntaxe `{logoImage}` comme valeur de l'attribut `src` :

```jsx
<img src={logoImage} alt="" />
```

L'attribut `src` de la balise `<img>` est défini avec la variable `logoImage`, qui contient le chemin d'accès à l'image importée.


# 8.Créer un Proxy
## Créer un proxy + fetch

Pour accéder à des données extérieures à notre serveur, nous devons créer un proxy dans un fichier `proxy.js` et le placer à la racine. Voici les étapes à suivre :

1. Installez Express et http-proxy-middleware.

```bash
npm install express http-proxy-middleware
```

2. Dans `proxy.js`, importez les modules nécessaires et configurez le proxy.

```javascript
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(
  '/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',
  createProxyMiddleware({ 
    target: 'http://s3-eu-west-1.amazonaws.com',
    changeOrigin: true 
  })
);
app.listen(4000);
```

3. Ensuite, créez le composant enfant `fetch.js` qui effectuera la requête fetch.

```javascript
import React from 'react';

export default function HotelList() {
  const fetchData = async () => {
    try {
      const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  fetchData();

  return (
    <div>
      {/* Affichez vos données ici. */}
    </div>
  );
}
```

4. Ensuite, dans le composant parent (généralement la route) nommé `page1.js`, importez le composant enfant.

```javascript
import React from 'react';
import Layout from '../Layout/layout.js';
import Component1 from "../components/component1.js";
import { Link } from 'react-router-dom';

export default function Page1() {
  // Implémentation du composant
  return (
    <Layout>
      <div>
        <h1>Page1 🧮</h1>
        <Component1 />
        <Link to="/Page2">Aller à la page 2</Link>
        <Link to="/Page3">Aller à la page 3</Link>
      </div>
    </Layout>
  );
}
```
# 8.2 Créer un Proxy dans le module de serveur de développement intégré 

Le serveur de développement intégré est une fonctionnalité fournie par des outils tels que Create React App, qui est une boîte à outils pour la création d'applications React. Il vous permet de démarrer rapidement le développement sans avoir à vous soucier de la configuration initiale.

Le serveur de développement intégré est un serveur web léger qui sert votre application React pendant le développement. Quand vous exécutez la commande `npm start` ou `yarn start`, c'est ce serveur qui est lancé. Il a plusieurs fonctionnalités utiles pour le développement:

1. **Rechargement à chaud:** Lorsque vous modifiez vos fichiers de code, le serveur de développement détecte ces modifications et recharge automatiquement la page dans votre navigateur, vous permettant de voir les effets de vos modifications en temps réel.

2. **Transpilation et regroupement automatiques:** Le serveur de développement utilise des outils tels que Babel et Webpack pour transpiler automatiquement votre code (par exemple, convertir le JSX en JavaScript ordinaire) et le regrouper en un seul fichier.

3. **Proxy pour les requêtes API:** Le serveur de développement peut rediriger certaines requêtes à un autre serveur, ce qui peut être utile pour contourner les restrictions CORS pendant le développement, comme je l'ai mentionné dans ma réponse précédente.

Ces fonctionnalités facilitent le développement et le débogage de votre application. Cependant, le serveur de développement n'est pas destiné à être utilisé en production. Pour la production, vous devriez créer une version de production de votre application avec la commande `npm run build` ou `yarn build`, qui génère des fichiers statiques optimisés pour la performance.

Si vous utilisez Create React App, vous pouvez configurer un proxy dans votre fichier `package.json`. C'est une fonctionnalité du serveur de développement intégré qui peut être utilisée pour contourner les restrictions CORS pendant le développement.

Voici comment vous pouvez le faire:

1. Ouvrez le fichier `package.json` dans la racine de votre projet.

2. Ajoutez la clé "proxy" à la fin de votre fichier `package.json`. Il devrait ressembler à ceci:

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    // vos dépendances ici
  },
  "scripts": {
    // vos scripts ici
  },
  "proxy": "https://s3-eu-west-1.amazonaws.com"
}
```

3. Enregistrez le fichier et redémarrez votre serveur de développement.

Maintenant, lorsque vous faites une requête à `/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json` dans votre application, le serveur de développement redirigera la requête à `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`.

Notez que cette configuration ne modifie que le comportement du serveur de développement et n'affecte pas le comportement de votre application en production. Vous devez toujours configurer les en-têtes CORS correctement sur votre serveur ou utiliser une autre solution pour gérer les requêtes CORS en production.

# 9. Création de Hooks

Voici un exemple de code utilisant des hooks en React :

```javascript
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  fetchData();
}, [data]);
```

Dans ce code :

- `const [data, setData] = useState([]);` déclare une variable d'état `data` et une fonction `setData` pour la mettre à jour. `data` est initialisée avec un tableau vide `[]`.

- `useEffect` est un hook spécial qui permet d'exécuter du code supplémentaire après que le composant a été rendu. Ici, il est utilisé pour effectuer une requête asynchrone pour récupérer des données.

- Le code à l'intérieur de `useEffect` est exécuté une première fois après le premier rendu du composant, puis chaque fois que la dépendance `data` change.

- La fonction `fetchData` est une fonction asynchrone qui effectue une requête HTTP pour récupérer les données depuis une URL spécifique.

- Si la réponse HTTP n'est pas valide (code de statut différent de 200), une erreur est levée.

- Si la requête est réussie, les données JSON sont extraites de la réponse et mises à jour dans l'état `data` en utilisant la fonction `setData`.

- En cas d'erreur lors de la récupération des données, un message d'erreur est affiché dans la console.

L'utilisation de `useState` permet de gérer l'état local du composant en déclarant une variable d'état et une fonction pour la mettre à jour. `useEffect` permet d'exécuter du code supplémentaire en réaction aux changements d'état ou à d'autres événements du composant.


# 9. Images statiques

C'est une décision prise par les concepteurs de Create React App pour simplifier la gestion des fichiers statiques.

Dans Create React App, Webpack est utilisé pour gérer tous les fichiers du projet. Webpack est un outil puissant qui peut traiter et optimiser de nombreux types de fichiers, notamment JavaScript, CSS et images. Cependant, il ne peut traiter que les fichiers qui sont importés directement dans votre code JavaScript.

Si vous voulez qu'un fichier soit traité par Webpack (par exemple, pour bénéficier des optimisations d'image), vous devez l'importer directement dans votre code JavaScript. Par exemple, si vous avez une image `image.png` dans votre dossier `src`, vous pouvez l'importer et l'utiliser comme ceci :

```jsx
import logo from './image.png';

function Component() {
  return <img src={logo} alt="Logo" />;
}
```

Cependant, il y a des moments où vous ne voulez pas (ou ne pouvez pas) importer un fichier directement dans votre code JavaScript. Par exemple, vous voudrez peut-être référencer une image dans un fichier CSS, ou inclure un fichier PDF pour téléchargement. Pour ces cas, Create React App offre le dossier `public`. Tout ce que vous mettez dans le dossier `public` sera copié sans modification dans le dossier de build final, et vous pouvez y faire référence par URL.

C'est pourquoi toutes les ressources statiques que vous voulez utiliser dans votre projet Create React App doivent être placées dans le dossier `public` si elles ne sont pas importées directement dans votre code JavaScript.

# Gestion d'état entrre page et component
fichier page1.js:
import { Link } from 'react-router-dom';
import './page1.css'
import Layout from '../Layout/layout.js';
import Component1 from "../Components/component1.js";
import Component2 from "../Components/component2.js";
import React, { useState } from 'react';



export default function Page1() {
    const [isComponent1Visible, setComponent1Visible] = useState(true);
    const [isComponent2Visible, setComponent2Visible] = useState(true);

    return (
        <Layout>
            {isComponent1Visible && <Component1 />}
            {isComponent2Visible && <Component2 setComponent2Visible={setComponent2Visible} />}
        </Layout>
       
    )
  }


fichier component2.js:

import React, { useEffect, useState } from 'react';

export default function Component2({ setComponent2Visible }) {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [data]);
  const handleClick = () => {
    setComponent2Visible(false); 
  };

  return (
    <section id="Gallery">
    <ul>
      {data.map((element, index) => (
        <li key={index} onClick={handleClick}>
          <h3 className='title'>{element.title}</h3>
          <img id="Section1" src={element.cover} alt=""  />
       </li> 
      ))}
    </ul>
    </section>
  );
}
D'accord, je vais expliquer ce qui se passe entre ces deux fichiers.

1. Dans le fichier `Page1.js`, vous déclarez deux variables d'état `isComponent1Visible` et `isComponent2Visible` en utilisant le Hook `useState` de React. Ces deux variables d'état sont initialisées à `true`, ce qui signifie que les deux composants sont visibles par défaut.

2. Ensuite, dans la méthode de rendu de `Page1.js`, vous utilisez ces variables d'état pour conditionnellement rendre `Component1` et `Component2`. Si la variable d'état correspondante est `true`, le composant est rendu ; sinon, il ne l'est pas.

3. Pour `Component2`, vous passez la fonction `setComponent2Visible` (qui est utilisée pour mettre à jour l'état `isComponent2Visible`) en tant que props au `Component2`. C'est important pour la suite.

4. Dans `Component2.js`, vous utilisez cette fonction `setComponent2Visible` dans la fonction `handleClick`. Cette fonction est appelée chaque fois qu'un utilisateur clique sur un élément de la liste rendue par `Component2`.

5. Lorsqu'un clic se produit, `setComponent2Visible` est appelé avec l'argument `false`. Cela met à jour l'état `isComponent2Visible` dans `Page1.js` à `false`.

6. Étant donné que l'état `isComponent2Visible` est utilisé pour conditionnellement rendre `Component2`, une fois qu'il est mis à jour à `false`, `Component2` n'est plus rendu. Ainsi, `Component2` disparaît de la page lorsque vous cliquez sur un élément de la liste.

C'est une utilisation courante des hooks d'état et des props dans React pour gérer l'affichage conditionnel des composants et la communication entre les composants.




Bien sûr ! Voici une version réécrite de votre texte avec une mise en forme plus élégante :

---

Pour stocker les données, nous créons un tableau dans React en utilisant le hook `useState`. Voici comment le mettre en place :

```jsx
const [data, setData] = useState(null);
```

- `data` est le tableau qui va contenir les données.
- `useState` est le hook qui crée un état pour le tableau, initialisé à `null` ou vide.
- `setData` est la fonction utilisée pour modifier le tableau en lui passant de nouvelles valeurs.

Ensuite, nous créons une fonction à l'endroit où se trouve le tableau vide. Cette fonction accepte en paramètre la valeur `data` que nous souhaitons lui ajouter plus tard :

```jsx
const handleData = (data) => {
  setData(data);
};
```

Plus loin dans notre code, nous retournons notre JSX qui sera placé dans le layout.

Nous avons un composant appelé `JsonComponent`, qui contient la liste de nos fichiers JSON. Pour l'intégrer dans le layout, nous utilisons la syntaxe suivante :

```jsx
<JsonComponent />
```

Nous pouvons également lui passer des props, y compris une fonction, de la manière suivante :

```jsx
<JsonComponent test={handleData} />
```

Dans cet exemple, nous utilisons le nom de propriété "test" pour représenter la fonction `handleData`.

Dans le composant `JsonComponent`, nous déstructurons les props en utilisant la syntaxe suivante :

```jsx
export default function JsonComponent({ housingClicked }) {
```

Cela nous permet d'accéder directement à `housingClicked` sans avoir à utiliser `props.housingClicked`.

Dans ce composant, nous utilisons un tableau vide appelé `dataJson` pour stocker notre liste de fichiers JSON. Nous itérons ensuite sur son contenu dans un bloc `return`, par exemple en utilisant `element.photo` pour chaque élément.

Généralement, nous utilisons des balises `<ul>` et `<li>` pour représenter chaque élément dans `dataJson`. Pour chaque `<li>`, nous ajoutons une fonction `onClick` qui appelle la fonction `housingClicked`.

Cependant, il peut arriver que nous voulions cacher certains éléments précédents dans le HTML pour afficher un nouvel élément. Dans ce cas, nous créons une nouvelle fonction, par exemple `handleClick`, qui utilise à la fois la fonction `housingClicked` et une fonction `setVisible` pour déterminer si le contenu précédent (par exemple, la liste JSON) doit être affiché ou non lorsqu'un élément `<li>` est cliqué.

Pour nous assurer que l'élément sur lequel nous avons cliqué soit précisément celui qui est traité, nous ajoutons une clé (`key`) lors de l'itération de `dataJson` :

```jsx
<li key={index} onClick={() => handleClick(element)}>
```

Il est nécessaire d'avoir à la fois l'élément et l'index lors de cette itération. L'index est toujours le deuxième paramètre.

---

J'espère que cette version réécrite est plus agréable à lire. N'hésitez pas à me solliciter si vous avez d'autres questions !





Il faut stocker quelque part les données 
on crée donc un tableau react en faisant
const [data,setData=useState(null)
data est le tableau
use state est l'état du tableau (null ou vide)
et set data est la fonction par l'aquelle on va pouvoir modifier le tableau dans le code en y passant des parametres



Je dois créer la ou se trouve le tableau vide une fonction
cette fonction va accepter en parametre la valeur 'data'
que l'on va lui ajouter plus tard
const handleData=(data)=>{setData(Data)}


plus loin dans notre fonction on va retourne notre jsx
qui se place bien evidement dans le layout


on a un component qui va contenir la liste de notre fichier json
nommé ex:JsonComponent
on va l'ajouter dans le layout en faisant 
<JsonComponent>
Ensuite on va lui passer des props
(propriétés, notamment une fonction, la fonction
handle data

<JsonComponent test={handleData} >

On peuc choisir le nom de la propriété, ici c'est "test" qui va représenter handleData



Ensuite dans le composant on va ajouter en paramettre 
export default function Component2({ housingCliqued }) {

on met les {} pour destructurer le props et pouvoir le lire directement sans faire des test.element1



Dans notre component a un moment donné on va avoir un tableau vide dataJson qui va accueillir notre liste de fichier json
c'est a partir de ce tableau datajson que l'on va dans un return itérer son contenu en faisant des element.photo par exemple
On va généralement faire un ul li 
et pour chaque element dans datajson faire un li
on va pour chaque li ajouter un fonction onClick
cette fonction oonclick va appeler la fonction housingCliqued


Cependant il peut arriver que parfois l'on veuille cacher des element dans le html précédent pour en afficher un nouveau un autre après
il sera parfois donc nécessaire de faire une nouvelle fonction
par exemple "handleclick" dans laquelle on aura la fonction housing cliqued mais aussi "setvisible" qui déterminera si le contenu précédent, ici par exemple la liste json s'affiche ou pas quand on clique sur un element li 

Du coup pour s'assurer que lelement que sur lequel on a cliqué ne soit précisément celui sur lequel on a cliqué il faut lui ajouter un key={index}
<li key={index} onClick={() => handleClick(element)}>
mais pour ça il faut préalablement dans l'itération de dataJson avoir l'élement et aussi l'index
l'index est toujours le deuxième paramettre