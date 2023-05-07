import styles from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.overlay}>
            <h2> Идёт загрузка.....Ждите </h2>
        </div>
    );
}
export default Preloader;
