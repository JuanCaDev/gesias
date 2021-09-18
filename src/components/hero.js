import * as React from "react";

const Hero = () => {
  return (
    <div className="container grid mx-auto h-5/6 sm:grid-cols-2 sm:gap-10 place-items-center">
      <h1 className="px-3 py-6 mb-2 text-4xl font-bold text-gray-800 sm:text-5xl sm:p-20 xl:text-8xl md:text-6xl">
        La app que necesitas para gestionar tu iglesia
      </h1>
      <div
        className="self-center px-3 py-6 justify-self-center sm:p-20"
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease-out-bounce"
      >
        <h3 className="text-2xl font-semibold text-gray-800">
          Iglenube administra la información de tu iglesia
        </h3>
        <p className="mb-6 text-xl text-gray-800">
          ¡Preparate para mantener tu iglesia en línea!
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            className="px-6 py-2 font-semibold text-white rounded bg-blue"
          >
            Prueba gratuita
          </button>
          <button
            type="button"
            className="px-6 py-2 font-semibold text-white rounded bg-blue-light"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
