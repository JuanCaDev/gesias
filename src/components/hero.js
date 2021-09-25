import * as React from "react";

const Hero = () => {
  return (
    <div className="container grid mx-auto h-5/6 sm:grid-cols-2 sm:gap-10 place-items-center">
      <div>
        <h1 className="px-3 mb-2 text-4xl font-bold text-gray-800 sm:text-3xl sm:p-20 lg:text-5xl md:text-4xl">
          Toda la información de tu iglesia a un clic
        </h1>
        <div className="relative">
          <input type="text" className="rounded focus:outline-none" placeholder="Ingresa tu número" />
          <button className="absolute px-2 py-1 font-semibold text-white rounded bg-blue-light right-0">Llámame</button>
        </div>
      </div>
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
