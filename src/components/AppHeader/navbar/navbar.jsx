import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar_nav}>

            <section className={styles.nav_item}>

                <a href="/" className={styles.nav_item}>
                    <BurgerIcon type="primary" /> Конструктор
                </a>

                <a href="/" className={styles.nav_item}>
                    <ListIcon type="primary" /> Лента заказов
                </a>

            </section>

            <Logo />

            <a href="/" className='nav-item'>
                <ProfileIcon type="primary" /> Личный кабинет
            </a>
        </nav>
    )
}


export default Navbar;
