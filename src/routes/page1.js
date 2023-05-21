import { Link } from 'react-router-dom';
import './page1.css'
import Layout from '../Layout/layout.js';
import Component1 from "../Components/component1.js";
import Component2 from "../Components/component2.js";
import HotelList from "../Components/HotelList.js";



export default function Page1() {
    return (
        <Layout>
                <Component1 />
                <Component2 />
                <HotelList />
                {/* <Link to="/Page2">Aller à la page 2</Link>
                <Link to="/Page3">Aller à la page 3</Link> */}
                
        </Layout>
       
    )
  }