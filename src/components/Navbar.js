import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
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
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;