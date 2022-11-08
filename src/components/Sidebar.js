import { Link } from 'react-router-dom'

const SideBar = () => {
    
    return(
        <div className="d-flex flex-column flex-shrink-0 p-4 w-20 text-white bg-primary">
        <span className="fs-3">Zahara - Admin</span>
        <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                {/* <a href="#" className="nav-link text-white fs-6">
                Accueil
                </a> */}
                <Link to="/" className="nav-link text-white fs-6">Accueil</Link>
            </li>
            {/* <li>
                <a href="#" className="nav-link text-white fs-6">
                Dashboard
                </a>
            </li> */}
            <li>
                <Link to="/catalogue" className="nav-link text-white fs-6">Produits</Link>
            </li>
            </ul>
            
        </div>
    )
}

export default SideBar


