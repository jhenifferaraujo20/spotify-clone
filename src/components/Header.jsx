import logo from '../assets/spotify-2.svg';
import { House, Search, Navigation, CircleArrowDown } from 'lucide-react';

const Header = () => {
    return (
        <header className="header flex">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex search">
                <button className="home"><House /></button>
                <div className="search-box flex">
                    <Search className='search-icon' />
                    <input type="text" placeholder='O que você quer ouvir?' />
                    <button className='navigation-btn flex'><Navigation size={21} className='navigation-icon' /></button>
                </div>
            </div>
            <div className="flex actions">
                <a href="#" className='download flex'>
                    <CircleArrowDown size={16} /> 
                    <span>Instalar aplicativo</span>
                </a>
                <button className="signup">Inscreva-se</button>
                <button className="login button">Entrar</button>
            </div>
        </header>
    );
};

export default Header;