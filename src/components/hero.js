import * as React from "react";

import Img from "gatsby-image";

const Hero = ({ fluid }) => {
  return (
    <div className="container grid mx-auto h-5/6 sm:grid-cols-2 sm:gap-10">
      <div className="px-3 sm:p-20">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 sm:text-3xl lg:text-5xl md:text-4xl">
          Toda la información de tu iglesia a un clic
        </h1>
        <div className="relative">
          <input type="number" className="w-full px-4 py-3 rounded focus:outline-none" placeholder="Ingresa tu número" />
          <button className="absolute px-2 py-1 font-semibold text-white rounded right-2 top-2 bg-blue-light">Llámame</button>
        </div>
      </div>
      <div className="relative">
        <figure style={{ maxWidth: 320 }} className="mx-auto mt-4">
          <Img fluid={fluid} alt="Persona usando Iglenube en un iPad" />
        </figure>
        <div className="absolute px-6 py-4 bg-white rounded-lg shadow-xl bottom-48 left-32">
          <h3>Asistencia</h3>
          <p className="text-sm text-gray-dark">Finanzas</p>
        </div>
        <div className="absolute px-6 py-4 bg-white rounded-lg shadow-xl bottom-80 right-32">
          <h3>Celualr & Grupos</h3>
          <p className="text-sm text-gray-dark">Ministerios</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
