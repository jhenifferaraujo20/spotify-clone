import { LibraryBig, Plus, Globe } from "lucide-react";

function Sidebar() {
    return (
        <aside className="sidebar">
            <header className="sidebar-header flex">
                <div className="flex">
                    <LibraryBig />
                    <span>Sua Biblioteca</span>
                </div>
                <div><Plus /></div>
            </header>
            <div className="sidebar-card flex">
                <div className="sidebar-card__content">
                    <h1>Crie sua primeira playlist</h1>
                    <p>É fácil, vamos te ajudar.</p>
                </div>
                <button className="button">Criar playlist</button>
            </div>
            <div className="sidebar-card flex">
                <div className="sidebar-card__content"> 
                    <h1>Que tal seguir um podcast novo?</h1>
                    <p>Avisaremos você sobre novos episódios.</p>
                </div>
                <button className="button">Explore podcasts</button>
            </div>
            <footer className="sidebar-footer">
                <ul>
                    <li>Legal</li>
                    <li>Segurança e Centro de privacidade</li>
                    <li>Política de privacidade</li>
                    <li>Cookies</li>
                    <li>Sobre anúncios</li>
                    <li>Acessibilidade</li>
                </ul>
                <button className="flex">
                    <Globe color="#fff" size={16} />Português do Brasil
                </button>
            </footer>
        </aside>
    );
};

export default Sidebar;