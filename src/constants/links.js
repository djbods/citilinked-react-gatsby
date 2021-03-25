import React from "react";
import { Link } from "gatsby";
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className="page-link">
          Products
        </Link>
        {children}
      </li>
      <li>
        <Link to="/services" className="page-link">
          Services
        </Link>
      </li>
      <li>
        <Link to="/gallery" className="page-link">
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/locations" className="page-link">
          Locations
        </Link>
      </li>
      <li>
        <Link to="/quote" className="page-link">
          Quote
        </Link>
      </li>
      <li>
        <Link to="/faqs" className="page-link">
          FAQs
        </Link>
      </li>
    </ul>
  );
};

export default Links;
