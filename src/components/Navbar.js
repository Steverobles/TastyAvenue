import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensilSpoon, faBars } from '@fortawesome/free-solid-svg-icons'; // Using Free Solid Icons instead
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <a className='navbar-brand' href='/'>Tasty Avenue</a>
                <button className='navbar-toggler' type='button' onClick={handleNavCollapse}>
                    <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id='navbarSupportedContent'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/recipes'>Recipes</a>
                        </li>
                    </ul>
                    <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='Search...' aria-label='Search' />
                        <button className='btn btn-outline-light' type='button'>
                            <FontAwesomeIcon icon={faUtensilSpoon} />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;