import {NavLink} from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <nav className='navbar'>
            <div className='nav-list'>
                <ul>
                    <li>
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard"
                                 className={({isActive}) => isActive? 'active-menu-link' : 'default-menu-link'}>Dashboard</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navigation;
