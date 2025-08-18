
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <address className="footer-contact-access">
                    Email: <a href="mailto:aboakye861@gmail.com">aboakye861@gmail.com</a><br />
                    Mobile: <a href="tel:3139034054">313-903-4054</a>
                </address>
                <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                    © {new Date().getFullYear()} Angel Boakye. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;