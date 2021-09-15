import * as React from "react";

const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 container mx-auto sm:gap-10">
      <h1 className="sm:text-6xl text-4xl text-gray-800 font-bold mb-2 sm:p-20 px-3 py-6">
        La app que necesitas para gestionar tu iglesia
      </h1>
      <div
        className="self-center justify-self-center sm:p-20 px-3 py-6"
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease-out-bounce"
      >
        <h3 className="text-gray-800 text-xl">
          Iglenube administra la información de tu iglesia
        </h3>
        <p className="text-gray-800 mb-6 text-xl">
          ¡Preparate para mantener tu iglesia en línea!
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          <button
            type="button"
            className="px-6 py-2 bg-blue rounded text-white font-semibold"
          >
            Prueba gratuita
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-light rounded text-white font-semibold"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
