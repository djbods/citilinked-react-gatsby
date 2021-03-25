import React from "react";
import Links from "../constants/links";
// import SocialLinks from "../constants/socialLinks";
const Footer = () => {
  return (
    <footer className="footer">
      <Links styleClass="nav-links" />
      <div>
        {/* <SocialLinks styleClass="footer-icons" /> */}
        <p>
          &copy;{new Date().getFullYear()} Citilinked Self Storage. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
