import React from "react";
import "./_footer.css";

function _Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p className="footer">©{currentYear} Mindfulday, Inc.</p>
    </div>
  );
}

export default _Footer;
