import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} SearchStax. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
