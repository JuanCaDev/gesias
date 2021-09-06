import * as React from "react";

import TitleSection from "./title-section";

const plans = [
  {
    title: "Ayuda",
    price: "$ 49.900",
    description: "Si estás comenzando",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Mini",
    price: "$ 89.900",
    description: "Recomendado si tienes algunos años de servicio",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Pro",
    price: "$ 129.900",
    description: "Especial para ti si cuentas con muchos miembros",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Pro plus",
    price: "$ 169.900",
    description:
      "Especial para ti si cuentas con muchos miembros y mucha información para mantener en línea",
    services: ["Servicio 1", "Servicio 2"],
  },
];

const PriceSection = ({ fluid }) => {
  return (
    <section
      class="sm:py-12 bg-gray-200 text-gray-800 px-3 py-6"
      data-sal="slide-up"
    >
      <div className="container mx-auto">
        <TitleSection>Nuestros precios</TitleSection>

        <div class="grid sm:grid-cols-4 sm:my-12 gap-4 my-6">
          {plans.map((plan, index) => (
            <>
              {index === 2 ? (
                <div className="bg-blue-400 rounded-md py-5 px-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="text-5xl font-semibold my-2">{plan.price}</p>
                  <p className="text-gray-100 text-sm h-12">
                    {plan.description}
                  </p>
                  <ul className="mt-4 divide-y">
                    {plan.services.map((service) => (
                      <li className="p-3">{service}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="px-8 mt-8 py-2 w-full bg-white rounded text-blue-400 font-semibold"
                  >
                    Adquirir
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-md py-5 px-4 text-center">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="text-5xl font-semibold my-2">{plan.price}</p>
                  <p className="text-gray-600 text-sm h-12">
                    {plan.description}
                  </p>
                  <ul className="mt-4 divide-y">
                    {plan.services.map((service) => (
                      <li className="p-3">{service}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="px-8 mt-8 py-2 w-full bg-blue-400 rounded text-white font-semibold"
                  >
                    Adquirir
                  </button>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
