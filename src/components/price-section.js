import * as React from "react";

import TitleSection from "./title-section";

const plans = [
  {
    title: "Ayuda",
    price: {
      month: "$13 USD",
      biannual: "$74 USD",
      annual: "$140 USD",
    },
    description: "Si estás comenzando",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Mini",
    price: {
      month: "$27 USD",
      biannual: "$154 USD",
      annual: "$292 USD",
    },
    description: "Recomendado si tienes algunos años de servicio",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Pro",
    price: {
      month: "$40 USD",
      biannual: "$228 USD",
      annual: "$432 USD",
    },
    description: "Especial para ti si cuentas con muchos miembros",
    services: ["Servicio 1", "Servicio 2"],
  },
  {
    title: "Pro plus",
    price: {
      month: "$60 USD",
      biannual: "$342 USD",
      annual: "$648 USD",
    },
    description:
      "Especial para ti si cuentas con muchos miembros y mucha información para mantener en línea",
    services: ["Servicio 1", "Servicio 2"],
  },
];

const PriceSection = () => {
  const [checkedValue, setCheckedValue] = React.useState("month");

  const handleCheck = ({ target }) => {
    console.log(target.value);
    setCheckedValue(target.value);
  };
  return (
    <section
      class="sm:py-12 bg-gray-lightest text-gray-800 px-3 py-6"
      data-sal="slide-up"
      data-sal-duration="600"
      data-sal-easing="ease-out-bounce"
      id="price"
    >
      <div className="container mx-auto">
        <TitleSection>Nuestros precios</TitleSection>

        <div className="flex justify-center gap-1 my-6 sm:gap-2">
          <label
            className={`
              ${"text-center flex items-center py-2 px-3 border-2 border-blue rounded-full cursor-pointer "}
              ${checkedValue === "month" ? "bg-blue text-white" : ""}
            `}
            for="month"
          >
            <input
              id="month"
              type="radio"
              name="price"
              value="month"
              onChange={handleCheck}
              checked={checkedValue === "month" ? true : false}
            />
            <span className="ml-2">Mensual</span>
          </label>

          <label
            className={`
              ${"text-center flex items-center py-2 px-3 border-2 border-blue rounded-full cursor-pointer "}
              ${checkedValue === "biannual" ? "bg-blue text-white" : ""}
            `}
            for="biannual"
          >
            <input
              id="biannual"
              type="radio"
              name="price"
              value="biannual"
              onChange={handleCheck}
              checked={checkedValue === "biannual" ? true : false}
            />
            <span className="ml-2">Semestral</span>
          </label>

          <label
            className={`
              ${"text-center flex items-center py-2 px-3 border-2 border-blue rounded-full cursor-pointer "}
              ${checkedValue === "annual" ? "bg-blue text-white" : ""}
            `}
            for="annual"
          >
            <input
              id="annual"
              type="radio"
              name="price"
              value="annual"
              onChange={handleCheck}
              checked={checkedValue === "annual" ? true : false}
            />
            <span className="ml-2">Anual</span>
          </label>
        </div>

        <div class="grid sm:grid-cols-4 sm:my-12 gap-1">
          {plans.map((plan, index) => (
            <>
              {index === 2 ? (
                <div className="px-4 py-5 text-center text-white rounded-md bg-blue-light">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="my-2 text-4xl font-semibold">
                    {plan.price[checkedValue]}
                  </p>
                  <p className="h-12 mb-4 text-sm text-gray-100">
                    {plan.description}
                  </p>
                  {/* <ul className="mt-4 divide-y">
                    {plan.services.map((service) => (
                      <li className="p-3">{service}</li>
                    ))}
                  </ul> */}
                  <button
                    type="button"
                    className="w-full px-8 py-2 mt-8 font-semibold bg-white rounded text-blue"
                  >
                    Adquirir
                  </button>
                </div>
              ) : (
                <div className="px-4 py-5 text-center bg-white rounded-md">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="my-2 text-4xl font-semibold">
                    {plan.price[checkedValue]}
                  </p>
                  <p className="h-12 mb-4 text-sm text-gray-600">
                    {plan.description}
                  </p>
                  {/* <ul className="mt-4 divide-y">
                    {plan.services.map((service) => (
                      <li className="p-3">{service}</li>
                    ))}
                  </ul> */}
                  <button
                    type="button"
                    className="w-full px-8 py-2 mt-8 font-semibold text-white rounded bg-blue"
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
