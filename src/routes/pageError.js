import {Link} from 'react-router-dom'
import './pageError.css'
import Layout from '../Layout/layout.js';

function NotFound() {
  return (
    <Layout>
      <div id='NotFound'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"><h3>Retourner sur la page d’accueil</h3></Link>

      </div>
    </Layout>
  )
}
export default NotFound;