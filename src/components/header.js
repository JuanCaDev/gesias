import * as React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";
import Img from "gatsby-image";

const Header = ({ fluid }) => {
  return (
    <header>
      <nav className="flex items-center justify-between px-3 py-4 text-gray-800 sm:px-6">
        <div className="w-12">
          <Img fluid={fluid} alt="Logo Iglenube" />
        </div>
        <ul className="flex items-center gap-4">
          <li className="font-semibold text-gray-dark" onClick={() => scrollTo("#benefits")}>
            <button className="hover:underline">Beneficios</button>
          </li>
          <li className="font-semibold text-gray-dark" onClick={() => scrollTo("#price")}>
            <button className="hover:underline">Precios</button>
          </li> 
          {/* <li className="font-semibold text-gray-dark" onClick={() => scrollTo("#contact")}>
            <button className="hover:underline">Contacto</button>
          </li> */}
          <li className="hidden sm:block">
            <a
              type="button"
              className="px-2 py-1 font-semibold text-white rounded bg-blue-light"
              href="https://dashboard.iglenube.com/registro"
              target="_blank"
            >
              Prueba gratuita
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
