import * as React from "react";

import IconCall from "../assets/call.svg";
import IconChat from "../assets/chat.svg";
import IconEmail from "../assets/email.svg";
import IconTicket from "../assets/ticket.svg";
import SubtitleSection from "./subtitle-section";
import TitleSection from "./title-section";
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ContactSection = () => {
  return (
    <section
      className="px-3 py-6 bg-gray-light sm:py-12"      
      id="we-work"
    >
      <TitleSection>¿Tienes dudas de nuestros planes o productos?</TitleSection>
      <div className="mt-2"></div>
      <SubtitleSection>Tenemos muchas opciones para resolver tus preguntas</SubtitleSection>
      <div
        className="container mx-auto mt-6"
        data-sal="slide-right"
        data-sal-duration="600"
        data-sal-easing="ease-out-bounce"
      >
        <div className="grid grid-cols-2 gap-4 place-items-center md:grid-cols-4 sm:gap-20">
          <OutboundLink
            href="https://calendly.com/iglenube"
            target="_blank"
            className="flex flex-col items-center"
          >
            <IconCall width={64} />
            <p className="mt-1 text-gray-dark">Programar una llamada</p>
          </OutboundLink>
          <OutboundLink href="https://api.whatsapp.com/send?phone=573176419012&text=Me%20interesa%20saber%20mas%20sobre%20Iglenube..." className="flex flex-col items-center">
            <IconChat width={64} />
            <p className="mt-1 text-gray-dark">Chatea con un agente</p>
          </OutboundLink>
          <OutboundLink href="mailto:soporte@iglenube.com" target="_blank" className="flex flex-col items-center">
            <IconEmail width={64} />
            <p className="mt-1 text-gray-dark">Enviar un correo</p>
          </OutboundLink>
          <OutboundLink href="https://calendly.com/iglenube" target="_blank" className="flex flex-col items-center">
            <IconTicket width={64} />
            <p className="mt-1 text-gray-dark">Generar un ticket de soporte</p>
          </OutboundLink>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
