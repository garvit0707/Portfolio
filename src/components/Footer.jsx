const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4">
          <div className="footer-brand">
            {'<'}<span>Garvit Sharma</span>{'/>'}
          </div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#hero" className="back-top" title="Back to top">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
        <div className="section-divider mb-4"></div>
        <div className="text-center footer-copy">
          © 2025 Garvit Sharma · Built with ❤️ and lots of
          <span style={{ color: 'var(--accent)' }}> React Native</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
