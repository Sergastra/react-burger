import React from 'react';
import styles from './app-header.module.css'
import Navbar from './navbar/navbar';


const AppHeader = () => {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    );    
}
export default AppHeader;