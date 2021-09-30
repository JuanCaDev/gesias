import * as React from "react";

import Img from "gatsby-image";
import IconAttendance from "../assets/attendance.svg";
import IconCellsGroups from "../assets/cells-groups.svg";

const Hero = ({ fluid }) => {
  const [number, setNumber] = React.useState(undefined)

  const handleChange = ({ target }) => {
    setNumber(target.number)
  }

  const handleClick = async () => {
    const response = await fetch("http://dashboard.iglenube.com/llamame", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        telefono: number
      })
    })

    console.log(response.json())
  }
  
  return (
    <div className="container grid mx-auto h-5/6 sm:grid-cols-2 lg:gap-10">
      <div className="px-3 mt-4 lg:p-20 md:pt-16">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800 sm:mb-8 lg:text-5xl md:text-4xl">
          Toda la información de tu iglesia a un clic
        </h1>
        <div className="relative">
          <input
            type="number"
            className="w-full px-4 py-3 rounded focus:outline-none"
            placeholder="Ingresa tu número"
            onChange={handleChange}
          />
          <button
            className="absolute px-2 py-1 font-semibold text-white rounded right-2 top-2 bg-blue-light"
            type="button"
            onClick={handleClick}
          >
            Llámame
          </button>
        </div>
      </div>
      <div className="relative">
        <figure
          style={{ maxWidth: 320 }}
          className="w-32 mx-auto mt-4 ma3x-w-xs sm:w-52"
        >
          <Img fluid={fluid} alt="Persona usando Iglenube en un iPad" />
        </figure>
        <div className="absolute flex gap-2 px-4 py-3 bg-white rounded-lg shadow-xl sm:bottom-40 lg:left-28 sm:left-16 bottom-16 left-6">
          <div className="p-2 rounded-full bg-blue-light">
            <IconAttendance width={24} height={24} />
          </div>
          <div>
            <h3 className="leading-tight">Asistencia</h3>
            <p className="text-sm text-gray-dark">Finanzas</p>
          </div>
        </div>
        <div className="absolute flex gap-2 px-4 py-3 bg-white rounded-lg shadow-xl w-max sm:bottom-64 lg:right-28 sm:right-16 bottom-40 right-6">
          <div className="p-2 rounded-full bg-blue-light">
            <IconCellsGroups width={24} height={24} />
          </div>
          <div>
            <h3 className="leading-tight">Celulas & Grupos</h3>
            <p className="text-sm text-gray-dark">Ministerios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
