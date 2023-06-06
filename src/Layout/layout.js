import { Link } from "react-router-dom";
import logoImage from '../Assets/Header/LOGO.png';
import footerLogoImage from '../Assets/Footer/LOGO.png';
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
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Page2">A Propos</Link></li>
            
          </ul>
        </nav>
      </header>

      <main>
        {children} {/* Les enfants du composant Layout sont injectés ici */}
      </main>

      <footer>
        <img src={footerLogoImage} alt=""></img>
        <h6>© 2020 Kasa. All rights reserved</h6>
      </footer>
    </div>
  );
}

export default Layout;
