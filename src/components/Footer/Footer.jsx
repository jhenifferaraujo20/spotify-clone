import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={`${styles.footer} singup-bar flex`}>
            <div>
                <p className={styles.bold}>Testar o Premium de graça</p>
                <p>Inscreva-se para curtir música ilimitada e podcats só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <button className="button">Inscreva-se grátis</button>
        </footer>
    );
};

export default Footer;