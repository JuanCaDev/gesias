import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import IconPhone from "../assets/phone-portrait-outline.svg";
import IconAlbums from "../assets/albums-outline.svg";
import IconLock from "../assets/lock-closed-outline.svg";

const slides = [
  {
    title: "Información general y específica",
    img: <StaticImage src={`../images/slider-1.png`} alt="Información general y específica" />
  },
  {
    title: "Regístrate 100% en línea",
    img: <StaticImage src={`../images/slider-2.png`} alt="Regístrate 100% en línea" />
  },
  {
    title: "Medición de crecimiento, segmentación y más",
    img: <StaticImage src={`../images/slider-3.png`} alt="Medición de crecimiento, segmentación por rango, edad y ministerios." />
  }
]

const SliderSection = () => {
  const slider = React.useRef(null)
  const [slideActive, setSlideActive] = React.useState(0)

  const handleClick = (index) => {
    setSlideActive(index)
    let left = 0;
    if (index !== 0) {
      left = slider.current.offsetWidth
    }
    console.log(left * index)
    slider.current.scrollTo({
      left: left * index,
      behavior: "smooth"
    })
  }
  
  return (
    <section
      className="py-6 bg-blue-light"      
      id="benefits"
    >
      <div
        className="relative mx-auto sm:py-12"
        // data-sal="slide-up"
        // data-sal-duration="600"
        // data-sal-easing="ease-out-bounce"
      >
        <div className="absolute top-0 flex gap-3 left-3 sm:left-14">
          {slides.map((_, index) => (
            <button
              className={cn("p-3 bg-white rounded-full", {
                ["bg-opacity-50"]: index !== slideActive
              })}
              type="button"
              onClick={() => handleClick(index)}
              key={index}
            >
              <div className="flex items-center justify-center w-5 h-5">{ index + 1 }</div>
            </button>
          ))}
        </div>
        
        <div
          className="flex px-3 overflow-hidden pt-14 md:pt-0"
          style={{ scrollSnapType: "x mandatory" }}
          ref={slider}
        >
          {slides.map((slide, index) => (
            <div
              className="grid min-w-full gap-4 md:grid-cols-2 place-items-center sm:my-12 md:gap-14"
              style={{ scrollSnapAlign: "center" }}
              key={index}
            >
              <div className="sm:p-10">
                <h3 className="mb-2 text-3xl font-semibold text-white lg:text-7xl md:text-6xl">
                  {slide.title}
                </h3>
              </div>

              <figure className="relative max-w-sm sm:w-96">
                {/* <div className="absolute left-0 right-0 w-40 h-40 transform rotate-45 rounded-lg bg-gray-lightest sm:w-64 sm:h-64"></div> */}
                {slide.img}
              </figure>
            </div>
          ))}
        </div>

        <div className="container grid gap-2 px-3 pt-5 mx-auto md:grid-cols-3 sm:gap-4 sm:pt-10">
          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="p-2 rounded-full bg-blue-light bg-opacity-30 w-max">
                <IconPhone width={32} height={32} />
              </figure>
              <h3 className="text-xl font-semibold sm:mt-2">Multiplataforma</h3>
            </div>
            <p>
              Te brindamos la facilidad de acceder desde cualquier dispositivo
            </p>
          </article>

          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="p-2 rounded-full bg-blue-light bg-opacity-30 w-max">
                <IconAlbums width={32} height={32} />
              </figure>
              <h3 className="text-xl font-semibold sm:mt-2">Organización</h3>
            </div>
            <p>
              Visualiza tu información detallada y organizada. Ahorrarás tiempo
            </p>
          </article>

          <article className="p-6 rounded bg-gray-lightest">
            <div className="flex items-center gap-3 mb-2">
              <figure className="p-2 rounded-full bg-blue-light bg-opacity-30 w-max">
                <IconLock width={32} height={32} />
              </figure>
              <h3 className="text-xl font-semibold sm:mt-2">Seguridad</h3>
            </div>
            <p>Tus datos y los de tu comunidad están seguros con nosotros</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
