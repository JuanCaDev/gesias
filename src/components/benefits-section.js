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
      data-sal-duration="400"
      data-sal-easing="ease-out-bounce"
    >
      <TitleSection>Nuestros beneficios</TitleSection>

      <div class="grid sm:grid-cols-2 place-items-center sm:my-12 my-6 sm:gap-20 gap-4">
        <div>
          <h3 class="text-2xl font-bold mb-2">Disponible 24/7 para ti</h3>
          <p>
            Te ofrecemos un software maestro en la administración y organización
            de la información de tu iglesia desde cualquierlugar donde tengas
            conexión
          </p>
        </div>

        <figure className="sm:w-96 relative w-full p-10 sm:p-0">
          <div className="bg-gray-300 bg-opacity-40 rounded-lg sm:w-64 sm:h-64 w-40 h-40 left-0 absolute right-0 transform rotate-45"></div>
          <Img fluid={fluid} />
        </figure>
      </div>

      <div class="grid sm:grid-cols-3 gap-4 container mx-auto sm:pt-10 pt-5">
        <article className="flex gap-4 sm:block sm:gap-0">
          <figure class="bg-blue-100 rounded p-2 w-max">
            <IconPhone width={32} height={32} />
          </figure>
          <h3 class="text-xl sm:mt-2 font-semibold">
            Accede desde todos tus dispositivos
          </h3>
        </article>

        <article className="flex gap-4 sm:block sm:gap-0">
          <figure class="bg-blue-100 rounded p-2 w-max">
            <IconAlbums width={32} height={32} />
          </figure>
          <h3 class="text-xl sm:mt-2 font-semibold">
            Información organizada detallada
          </h3>
        </article>

        <article className="flex gap-4 sm:block sm:gap-0">
          <figure class="bg-blue-100 rounded p-2 w-max">
            <IconLock width={32} height={32} />
          </figure>
          <h3 class="text-xl sm:mt-2 font-semibold">
            Seguridad en tus datos y usuarios
          </h3>
        </article>
      </div>
    </section>
  );
};

export default BenefitsSection;
