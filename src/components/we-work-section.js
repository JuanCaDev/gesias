import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import IconEPayCo from "../assets/epayco.svg";
import IconAws from "../assets/aws.svg";
import IconCloudFlare from "../assets/cloudflare.svg";

const WeWorkSection = () => {
  return (
    <section
      className="px-3 py-6 bg-gray-light"      
      id="we-work"
    >
      <div
        className="container mx-auto"
        // data-sal="slide-right"
        // data-sal-duration="600"
        // data-sal-easing="ease-out-bounce"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center sm:gap-20 gap-4">
          <IconEPayCo width={120} />
          <IconAws width={120} />
          <IconCloudFlare width={120} />
        </div>
      </div>
    </section>
  );
};

export default WeWorkSection;
