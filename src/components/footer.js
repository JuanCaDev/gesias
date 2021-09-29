import * as React from "react";

import IconTwitter from "../assets/twitter.svg";
import IconFacebook from "../assets/facebook.svg";
import IconInstagram from "../assets/instagram.svg";
import IconYoutube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <section
      className="px-3 py-6"      
      id="we-work"
    >
      <div
        className="container mx-auto"
        // data-sal="slide-right"
        // data-sal-duration="600"
        // data-sal-easing="ease-out-bounce"
      >
        <h4 className="pl-3 text-xl border-l border-blue-light text-blue">Redes sociales</h4>
        <div className="flex gap-3 mt-4">
          <a href="https://twitter.com/iglenube" target="_blank" title="Seguir a Iglenube en Twitter" rel="noreferrer">
            <IconTwitter width={32} height={32} />
          </a>
          <a href="https://facebook.com/iglenube" target="_blank" title="Seguir a Iglenube en Facebook" rel="noreferrer">
            <IconFacebook width={32} height={32} />
          </a>
          <a href="https://instagram.com/iglenube" target="_blank" title="Seguir a Iglenube en Instagram" rel="noreferrer">
            <IconInstagram width={32} height={32} />
          </a>
          <a href="https://youtube.com/iglenube" target="_blank" title="Seguir a Iglenube en Youtube" rel="noreferrer">
            <IconYoutube width={32} height={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
