import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="header"
      onClick={() => {
        const newUrl = window.location.href.split("?")[0];
        // Replace the current URL without query parameters
        window.location.replace(newUrl); // This will automatically reload the page
      }}
    >
      <div className="header-content">
        <img
          src="/searchstax.svg" // Correct path to the logo
          alt="SearchStax Logo"
          className="logo"
        />
        <h1 className="header-title">SearchStax</h1>
      </div>
    </header>
  );
};

export default Header;
