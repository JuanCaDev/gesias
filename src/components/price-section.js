import * as React from "react";
import SubtitleSection from "./subtitle-section";

import TitleSection from "./title-section";

import IconEPayCo from "../assets/epayco.svg";
import cn from "classnames";

const plans = [
  {
    title: "Jabes",
    services: ["125 miembros", "10 células/grupos", "App móvil y web", "Soporte 24/7"],
    prices: [
      {
        type: "mes",
        price_usd: 13.00
      },
      {
        type: "semestre",
        price_usd: 74.00
      },
      {
        type: "año",
        price_usd: 140.00
      },
    ]
  },
  {
    title: "Josue",
    services: ["300 miembros", "30 células/grupos", "App móvil y web", "Soporte 24/7"],
    prices: [
      {
        type: "mes",
        price_usd: 27.00
      },
      {
        type: "semestre",
        price_usd: 154.00
      },
      {
        type: "año",
        price_usd: 200.00
      },
    ]
  },
  {
    title: "Moises",
    services: ["750 miembros", "70 células/grupos", "App móvil y web", "Soporte 24/7"],
    prices: [
      {
        type: "mes",
        price_usd: 40.00
      },
      {
        type: "semestre",
        price_usd: 228.00
      },
      {
        type: "año",
        price_usd: 432.00
      },
    ]
  },
  {
    title: "David",
    services: ["2000 miembros", "1000 células/grupos", "App móvil y web", "Soporte 24/7"],
    prices: [
      {
        type: "mes",
        price_usd: 60.00
      },
      {
        type: "semestre",
        price_usd: 342.00
      },
      {
        type: "año",
        price_usd: 648.00
      },
    ]
  },
];

const PriceSection = () => {
  const [checkedValue, setCheckedValue] = React.useState("month");

  const handleCheck = ({ target }) => {
    setCheckedValue(target.value);
  };
  return (
    <section
      className="px-3 py-6 text-gray-800 sm:py-12 bg-gray-lightest"
      data-sal="slide-up"
      data-sal-duration="600"
      data-sal-easing="ease-out-bounce"
      id="price"
    >
      <div className="container mx-auto">
        <SubtitleSection>Tabla de precios</SubtitleSection>
        <TitleSection>Hay una opción para tu iglesia</TitleSection>

        {/* <div className="flex justify-center gap-1 my-6 sm:gap-2">
          <label
            className={`
              ${"text-center flex items-center py-2 px-3 border-2 border-blue rounded-full cursor-pointer "}
              ${checkedValue === "month" ? "bg-blue text-white" : ""}
            `}
            htmlForm="month"
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
            htmlForm="biannual"
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
            htmlForm="annual"
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
        </div> */}

        <div className="grid gap-2 mt-6 mb-3 sm:grid-cols-4 sm:mt-12 sm:mb-6">
          {plans.map((plan, index) => (
            <>
              {index === 1 ? (
                <div className="px-4 py-6 text-center text-white rounded-md shadow-lg bg-purple" key={index}>
                  <div className="grid grid-cols-2 gap-4" style={{ gridTemplateColumns: "auto 1fr" }}>
                    <div>
                      <small className="text-gray">Plan</small>
                      <h3 className="text-2xl font-semibold">{plan.title}</h3>
                    </div>
                    <div>
                      <ul className="text-sm text-left text-gray-lightest">
                        {plan.services.map((service, index) => (
                          <li key={index}>{ service }</li>
                        ))}
                      </ul>
                    </div>
                  </div>  

                  <ul className="mt-6 text-left text-white">
                    {plan?.prices?.map((price, index) => (
                      <li key={index}>
                        {price.price_usd} usd <span className="text-sm text-gray">/{price.type}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    type="button"
                    className="w-full px-8 py-2 mt-8 font-semibold bg-white rounded text-blue"
                  >
                    Adquirir
                  </button>

                  <div className="flex flex-col items-center mt-3">
                    <span className="mb-1 text-sm text-gray">Paga seguro con</span>
                    <IconEPayCo width={64} height={30} />
                  </div>
                </div>
              ) : (
                <div className="px-4 py-6 text-center bg-white rounded-md shadow-lg" key={index}>
                  <div className="grid grid-cols-2 gap-4" style={{ gridTemplateColumns: "auto 1fr" }}>
                    <div>
                      <small className="text-gray">Plan</small>
                      <h3 className="text-2xl font-semibold">{plan.title}</h3>
                    </div>
                    <div>
                      <ul className="text-sm text-left text-gray-dark">
                        {plan.services.map((service, index) => (
                          <li key={index}>{ service }</li>
                        ))}
                      </ul>
                    </div>
                  </div>  
                  
                  <ul className="mt-6 text-left text-gray-dark">
                    {plan?.prices?.map((price, index) => (
                      <li key={index}>
                        {price.price_usd} usd <span className="text-sm text-gray">/{price.type}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    type="button"
                    className={cn("w-full px-8 py-2 mt-8 font-semibold text-white rounded", {
                      ["bg-pink"]: index === 0,
                      ["bg-purple"]: index === 2,
                      ["bg-blue-light"]: index === 3,
                    })}
                  >
                    Adquirir
                  </button>
                  
                  <div className="flex flex-col items-center mt-3">
                    <span className="mb-1 text-sm text-gray">Paga seguro con</span>
                    <IconEPayCo width={64} height={30} />
                  </div>
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
