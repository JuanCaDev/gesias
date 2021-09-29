import * as React from "react";

import IconPhone from "../assets/phone-portrait-outline.svg";
import IconAlbums from "../assets/albums-outline.svg";
import IconLock from "../assets/lock-closed-outline.svg";
import { StaticImage } from "gatsby-plugin-image";

const SliderSection = () => {
  return (
    <section
      className="px-3 py-6 bg-blue-light"      
      id="benefits"
    >
      <div
        className="container mx-auto sm:py-12"
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease-out-bounce"
      >
        <div className="grid sm:grid-cols-2 place-items-center sm:my-12 sm:gap-20 gap-4">
          <div className="sm:p-10">
            <h3 className="sm:text-7xl text-3xl font-semibold mb-2 text-white">Información general y específica</h3>
          </div>

          <figure className="relative w-full p-10 sm:w-96 sm:p-0">
            <div className="absolute left-0 right-0 w-40 h-40 transform rotate-45 rounded-lg bg-gray-lightest sm:w-64 sm:h-64"></div>
            {/* <GatsbyImage image={image} alt="Computador y dispositivo móvil con información general y específica de Iglenube" /> */}
            <StaticImage src="../images/slider-1.png" alt="Información general y específica en todos los dispositivos" />
          </figure>
        </div>

        <div className="grid sm:grid-cols-3 sm:gap-4 gap-2 container mx-auto sm:pt-10 pt-5">
          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
                <IconPhone width={32} height={32} />
              </figure>
              <h3 className="text-xl sm:mt-2 font-semibold">Multiplataforma</h3>
            </div>
            <p>
              Te brindamos la facilidad de acceder desde cualquier dispositivo
            </p>
          </article>

          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
                <IconAlbums width={32} height={32} />
              </figure>
              <h3 className="text-xl sm:mt-2 font-semibold">Organización</h3>
            </div>
            <p>
              Visualiza tu información detallada y organizada. Ahorrarás tiempo
            </p>
          </article>

          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
                <IconLock width={32} height={32} />
              </figure>
              <h3 className="text-xl sm:mt-2 font-semibold">Seguridad</h3>
            </div>
            <p>Tus datos y los de tu comunidad están seguros con nosotros</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
