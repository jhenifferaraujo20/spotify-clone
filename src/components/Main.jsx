import Card from './Card';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Main() {
    return (
        <main className="main-panel">
            <h1>Navegar por todas as seções</h1>
            <div className="cards-container">
                {Array.from({ length: 20 }, (_, i) => (
                    <Card key={i} />
                ))}
            </div>
            <footer className="main-footer">
                <nav className="main-footer-nav">
                    <ul>
                        <li className='main-footer-title'>Empresa</li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Empregos</a></li>
                        <li><a href="">For the record</a></li>
                    </ul>
                    <ul>
                        <li className='main-footer-title'>Comunidades</li>
                        <li><a href="">Para Artistas</a></li>
                        <li><a href="">Desenvolvedores</a></li>
                        <li><a href="">Publicidade</a></li>
                        <li><a href="">Investidores</a></li>
                        <li><a href="">Fornecedores</a></li>
                    </ul>
                    <ul>
                        <li className='main-footer-title'>Links Úteis</li>
                        <li><a href="">Suporte</a></li>
                        <li><a href="">Aplicativo móvel grátis</a></li>
                    </ul>
                    <ul>
                        <li className='main-footer-title'>Planos do Spotify</li>
                        <li><a href="">Premium Individual</a></li>
                        <li><a href="">Premium Duo</a></li>
                        <li><a href="">Premium Família</a></li>
                        <li><a href="">Premium Universitário</a></li>
                        <li><a href="">Spotify Free</a></li>
                    </ul>
                    <div className="socials">
                        <a href=""><Instagram size={18} /></a>
                        <a href=""><Twitter size={18} /></a>
                        <a href=""><Facebook size={18} /></a>
                    </div>
                </nav>
                <hr className='border'></hr>
                <div>© 2025 Spotify AB</div>
            </footer>
        </main>
    );
};

export default Main;