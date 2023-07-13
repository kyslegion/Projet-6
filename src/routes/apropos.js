import './apropos.css'
import Layout from '../Layout/layout.js';
import AboutBanner from "../Components/AboutBanner.js";
import Collapse from "../Components/Collapse.js";

export default function Apropos() {
    return (
        <Layout>
            <AboutBanner />
            <Collapse />
        </Layout>
    )
  }