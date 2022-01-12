import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import './styles.css';

export const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/jardel978" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/jardel978</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

