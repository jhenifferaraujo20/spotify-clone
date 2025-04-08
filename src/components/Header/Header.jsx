import logo from '../../assets/spotify-2.svg';
import styles from './Header.module.css';
import { House, Search, Navigation, CircleArrowDown } from 'lucide-react';

const Header = () => {
    return (
        <header className={`flex ${styles.header}`}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={`flex ${styles.search}`}>
                <button className={styles.home}><House /></button>
                <div className={`flex ${styles.searchBox}`}>
                    <Search className={styles.searchIcon} />
                    <input type="text" placeholder='O que você quer ouvir?' id="searchInput" maxLength={800} />
                    <button className={`flex ${styles.navigationBtn}`}><Navigation size={21} className={styles.navigationIcon} /></button>
                </div>
            </div>
            <div className={`flex ${styles.actions}`}>
                <a href="#" className={`flex ${styles.download}`}>
                    <CircleArrowDown size={16} /> 
                    <span>Instalar aplicativo</span>
                </a>
                <button className={styles.signup}>Inscreva-se</button>
                <button className={`button ${styles.login}`}>Entrar</button>
            </div>
        </header>
    );
};

export default Header;