import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from "./routes/page1.js";
import Page2 from "./routes/page2.js";
import Page3 from "./routes/page3.js";
import NotFound from "./routes/pageError.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page2 />} />
        <Route path="/contact" element={<Page3 />} />
        <Route path="*"element={<NotFound />} /> {/* Ce composant sera affiché lorsqu'aucune des routes précédentes n'a été appariée */}
      </Routes>
    </Router>
  );
}

export default App;
