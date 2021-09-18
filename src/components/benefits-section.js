  import * as React from "react";

import Img from "gatsby-image";

import TitleSection from "./title-section";

import IconPhone from "../assets/phone-portrait-outline.svg";
import IconAlbums from "../assets/albums-outline.svg";
import IconLock from "../assets/lock-closed-outline.svg";

const BenefitsSection = ({ fluid }) => {
  return (
    <section
      class="container mx-auto sm:py-12 text-gray-800 px-3 py-6"
      data-sal="slide-up"
      data-sal-duration="600"
      data-sal-easing="ease-out-bounce"
      id="benefits"
    >
      <TitleSection>Nuestros beneficios</TitleSection>

      <div class="grid sm:grid-cols-2 place-items-center sm:my-12 my-6 sm:gap-20 gap-4">
        <div>
          <h3 class="text-2xl font-bold mb-2">Disponible para ti 24/7</h3>
          <p>
            Iglenube es la plataforma digital para iglesias más completa del
            mercado. Con nuestro software podrás gestionar eventos, reuniones,
            ministerios, miembros, bautizos y mucho más desde un mismo lugar.
          </p>
        </div>

        <figure className="relative w-full p-10 sm:w-96 sm:p-0">
          <div className="absolute left-0 right-0 w-40 h-40 transform rotate-45 rounded-lg bg-gray-lightest sm:w-64 sm:h-64"></div>
          <Img fluid={fluid} />
        </figure>
      </div>

      <div class="grid sm:grid-cols-3 sm:gap-4 gap-2 container mx-auto sm:pt-10 pt-5">
        <article className="p-6 rounded bg-gray-lightest">
          <div className="flex items-center gap-3 mb-2">
            <figure class="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
              <IconPhone width={32} height={32} />
            </figure>
            <h3 class="text-xl sm:mt-2 font-semibold">Multiplataforma</h3>
          </div>
          <p>
            Te brindamos la facilidad de acceder desde cualquier dispositivo
          </p>
        </article>

        <article className="p-6 rounded bg-gray-lightest">
          <div className="flex items-center gap-3 mb-2">
            <figure class="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
              <IconAlbums width={32} height={32} />
            </figure>
            <h3 class="text-xl sm:mt-2 font-semibold">Organización</h3>
          </div>
          <p>
            Visualiza tu información detallada y organizada. Ahorrarás tiempo
          </p>
        </article>

        <article className="p-6 rounded bg-gray-lightest">
          <div className="flex items-center gap-3 mb-2">
            <figure class="bg-blue-light bg-opacity-30 rounded-full p-2 w-max">
              <IconLock width={32} height={32} />
            </figure>
            <h3 class="text-xl sm:mt-2 font-semibold">Seguridad</h3>
          </div>
          <p>Tus datos y los de tu comunidad están seguros con nosotros</p>
        </article>
      </div>
    </section>
  );
};

export default BenefitsSection;
