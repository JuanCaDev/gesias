import * as React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";
import Img from "gatsby-image";

const Header = ({ fluid }) => {
  console.log(fluid)
  return (
    <header>
      <nav className="flex items-center justify-between px-3 py-4 text-gray-800 sm:px-6">
        <div className="w-12">
          <Img fluid={fluid} alt="Logo Iglenube" />
        </div>
        <ul className="flex items-center gap-4">
          <li className="font-semibold" onClick={() => scrollTo("#benefits")}>
            <button>Beneficios</button>
          </li>
          <li className="font-semibold" onClick={() => scrollTo("#price")}>
            <button>Precios</button>
          </li> 
          <li className="hidden sm:block">
            <button
              type="button"
              className="px-2 py-1 font-semibold text-white rounded bg-blue"
            >
              Prueba gratuita
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
