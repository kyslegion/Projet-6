import { Link, NavLink } from "react-router-dom";
import logoImage from '../Assets/Header/LOGO.png';
import footerLogoImage from '../Assets/Footer/LOGO.png';
import './layout.css';

function Layout({ children }) {
  return (
    <div>
      <header>
        <div className="header-logo">
          <img src={logoImage} alt="header logo" />
        </div>
        <nav className="nav">
          <ul className="nav-btn">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/apropos" activeClassName="active">
                À Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <img src={footerLogoImage} alt="footer logo"></img>
        <h6>© 2020 Kasa. All rights reserved</h6>
      </footer>
    </div>
  );
}

export default Layout;
