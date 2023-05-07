import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './navbar.module.css'

const Navbar = () => {
    
    return (
        <nav className={styles.navbar_nav}>

            <div className={styles.nav_item}>

                <a href="/" className={styles.nav_links} >
                    <BurgerIcon type="secondary" />
                    <span className="text text_type_main-default">Конструктор</span>
                </a>

                <a href="/" className={styles.nav_links} >
                    <ListIcon type="secondary" />
                    <span className="text text_type_main-default">Лента заказов</span>
                </a>

            </div>

            <div className={styles.nav_logo}>
                <a href='/'><Logo /></a>
            </div>

            <div className={styles.nav_item}>
                <a href="/" className={styles.nav_links} >
                    <ProfileIcon className='mr-5' type="secondary" />
                    <span className="text text_type_main-default">Личный кабинет</span>
                </a>
            </div>
        </nav>
    )
}
export default Navbar;
