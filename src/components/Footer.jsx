import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Luis Eduardo Gumeta González</p>
        <div className="footer-links">
          <a href="https://github.com/dudufcb1/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dudufcb" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:coringasmx@gmail.com">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
