import * as React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between text-gray-800 py-4 sm:px-6 items-center px-3">
        <span className="font-semibold">Gesias</span>
        <ul className="flex gap-4 items-center">
          <li className="font-semibold">Beneficios</li>
          <li className="font-semibold">Precios</li>
          <li className="hidden sm:block">
            <button
              type="button"
              className="px-2 py-1 bg-blue-900 rounded text-white font-semibold"
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
