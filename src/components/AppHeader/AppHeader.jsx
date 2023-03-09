import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header>

            <nav>
                <ul>
                    <li>Бургер</li>
                    <li>Сендвич</li>
                    <li>Сок</li>
                </ul>
                
            </nav> 
            {/* <NavLink
                exact="true"
                acteveclassname="active"
                className="constructor-link"
                to="Конструктор"
            >
                
            </NavLink>
            <NavLink>
                
            </NavLink>

            <Link className="logo" to="/">
                <img  alt="logo" />
            </Link> */}

        </header>
    );    
}
export default AppHeader;