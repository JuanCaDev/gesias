import * as React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between text-gray-800 py-4 sm:px-6 items-center px-3">
        <span className="font-semibold">Iglenube</span>
        <ul className="flex gap-4 items-center">
          <li className="font-semibold" onClick={() => scrollTo("#benefits")}>
            <button>Beneficios</button>
          </li>
          <li className="font-semibold" onClick={() => scrollTo("#price")}>
            <button>Precios</button>
          </li> 
          <li className="hidden sm:block">
            <button
              type="button"
              className="px-2 py-1 bg-blue rounded text-white font-semibold"
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
