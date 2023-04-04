import React from 'react';
import styles from './app-header.module.css'


const AppHeader = () => {
    return (
        <header className={styles.header}>

            <nav className={styles.nav}>
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