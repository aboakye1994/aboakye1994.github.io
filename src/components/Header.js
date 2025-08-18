const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="#app"><h1 className="header-name">Angel Boakye</h1></a>
            </div>
            <nav className="header-container" aria-label="Main Navigation">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;