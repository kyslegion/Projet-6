import logoImage from '../Assets/Header/LOGO.png';
import './layout.css';
function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Ici pourrait se trouver votre barre de navigation */}
        <div className="header-logo">
          <img src={logoImage} alt="" />
        </div>
        <nav className="nav">
          <ul className="nav-btn">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A Propos</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {children} {/* Les enfants du composant Layout sont injectés ici */}
      </main>

      <footer>
        {/* Ici pourrait se trouver votre pied de page */}
        <p>FOOTER © 2023 Mon Application</p>
      </footer>
    </div>
  );
}

export default Layout;
