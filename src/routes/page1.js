import Layout from '../Layout/layout.js';
import Component1 from "../Components/component1.js";
import { Link } from 'react-router-dom';


export default function Page1() {
    // Component implementation
    return (
        <Layout>
            <div>
                <h1>Page1 🧮</h1>
                <Component1 />
                <Link to="/Page2">Aller à la page 2</Link>
                <Link to="/Page3">Aller à la page 3</Link>

            </div>
        </Layout>
       
    )
  }