import styles from './preloader.module.css'
const Preloader = () => {
    return (
        <div className={styles.overlay}>
            <h1> Идёт загрузка.....Ждите </h1>
        </div>
    );
}

export default Preloader;
