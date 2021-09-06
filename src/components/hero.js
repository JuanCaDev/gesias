import * as React from "react";

import Img from "gatsby-image";

const Hero = ({ fluid }) => {
  return (
    <div className="grid sm:grid-cols-2">
      <figure className="hidden sm:block">
        <Img fluid={fluid} />
      </figure>
      <div
        className="self-center justify-self-center sm:p-10 px-3 py-6"
        data-sal="slide-up"
      >
        <h1 className="text-4xl text-gray-800 font-bold mb-2">
          App para tu iglesia
        </h1>
        <h3 className="text-gray-800">
          Administra eficazmente la información de tu iglesia con Gesias
        </h3>
        <p className="text-gray-800 mb-6">
          ¡Preparate para mantener tu iglesia en línea!
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          <button
            type="button"
            className="px-8 py-2 bg-blue-900 rounded text-white font-semibold"
          >
            Prueba gratuita
          </button>
          <button
            type="button"
            className="px-8 py-2 bg-blue-400 rounded text-white font-semibold"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
