import { LibraryBig, Plus, Globe } from "lucide-react";
import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <header className={`flex ${styles.sidebarHeader}`}>
                <div className="flex">
                    <LibraryBig />
                    <span>Sua Biblioteca</span>
                </div>
                <div className={styles.plusBtnDiv}><Plus className={styles.plusBtn} /></div>
            </header>
            <div className={`flex ${styles.sidebarCard}`}>
                <div className={styles.sidebarCardContent}>
                    <h1>Crie sua primeira playlist</h1>
                    <p>É fácil, vamos te ajudar.</p>
                </div>
                <button className="button">Criar playlist</button>
            </div>
            <div className={`flex ${styles.sidebarCard}`}>
                <div className={styles.sidebarCardContent}> 
                    <h1>Que tal seguir um podcast novo?</h1>
                    <p>Avisaremos você sobre novos episódios.</p>
                </div>
                <button className="button">Explore podcasts</button>
            </div>
            <footer className={styles.sidebarFooter}>
                <ul>
                    <li>Legal</li>
                    <li>Segurança e Centro de privacidade</li>
                    <li>Política de privacidade</li>
                    <li>Cookies</li>
                    <li>Sobre anúncios</li>
                    <li>Acessibilidade</li>
                </ul>
                <button className="flex">
                    <Globe className={styles.btnIcon} size={16} />Português do Brasil
                </button>
            </footer>
        </aside>
    );
};

export default Sidebar;