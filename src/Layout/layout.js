
function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Ici pourrait se trouver votre barre de navigation */}
        <h1>Header "Kasa"</h1>
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
