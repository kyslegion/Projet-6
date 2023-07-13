import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Index from "./routes/index.js";
import Apropos from "./routes/apropos.js";
import NotFound from "./routes/pageError.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*"element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}
export default App;
