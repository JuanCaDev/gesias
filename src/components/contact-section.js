import * as React from "react";

import IconCall from "../assets/call.svg";
import IconChat from "../assets/chat.svg";
import IconEmail from "../assets/email.svg";
import IconTicket from "../assets/ticket.svg";
import SubtitleSection from "./subtitle-section";
import TitleSection from "./title-section";

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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center sm:gap-20">
          <a href="tel:+573176419012" className="flex flex-col items-center">
            <IconCall width={64} />
            <p className="mt-1 text-gray-dark">Programar una llamada</p>
          </a>
          <a href="#" className="flex flex-col items-center">
            <IconChat width={64} />
            <p className="mt-1 text-gray-dark">Chatea con un agente</p>
          </a>
          <a href="mailto:soporte@iglenube.com" className="flex flex-col items-center">
            <IconEmail width={64} />
            <p className="mt-1 text-gray-dark">Enviar un correo</p>
          </a>
          <a href="#" className="flex flex-col items-center">
            <IconTicket width={64} />
            <p className="mt-1 text-gray-dark">Generar un ticket de soporte</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
