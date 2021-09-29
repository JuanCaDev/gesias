import * as React from "react";

import IconEPayCo from "../assets/epayco.svg";
import IconAws from "../assets/aws.svg";
import IconCloudFlare from "../assets/cloudflare.svg";
import SubtitleSection from "./subtitle-section";
import TitleSection from "./title-section";

const ContactSection = () => {
  return (
    <section
      className="px-3 py-6 bg-gray-light"      
      id="we-work"
    >
      <TitleSection>¿Tienes dudas de nuestros planes o productos?</TitleSection>
      <div className="mt-2"></div>
      <SubtitleSection>Tenemos muchas opciones para resolver tus preguntas</SubtitleSection>
      <div
        className="container mx-auto"
        // data-sal="slide-right"
        // data-sal-duration="600"
        // data-sal-easing="ease-out-bounce"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 place-items-center sm:gap-20">
          <IconEPayCo width={120} />
          <IconAws width={120} />
          <IconCloudFlare width={120} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
