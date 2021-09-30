import * as React from "react";

import Img from "gatsby-image";
import { toast } from 'react-toastify';
import cn from "classnames";

import IconAttendance from "../assets/attendance.svg";
import IconCellsGroups from "../assets/cells-groups.svg";

const Hero = ({ fluid }) => {
  const [number, setNumber] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleChange = ({ target }) => {
    setNumber(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!number) {
        throw { message: "Escribe un número valido" }
      } else if (number.trim().length < 6 || number.trim().length > 14) {
        throw { message: "Verifica tu número de contacto" }
      }

      setLoading(true)
      
      const response = await fetch("https://dashboard.iglenube.com/api/llamame", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telefono: number
        })
      })
  
      const data = await response.json()
      
      toast.info(data.message, {
        icon: "📞",
        autoClose: 10000,
      });
      
      setError("")
      setTimeout(() => {
        setLoading(false)
        setNumber("")
      }, 1000)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
    
  }
  
  return (
    <div className="container grid mx-auto h-5/6 sm:grid-cols-2 lg:gap-10">
      <div className="px-3 mt-4 lg:p-20 md:pt-16">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800 sm:mb-8 lg:text-5xl md:text-4xl">
          Toda la información de tu iglesia a un clic
        </h1>
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              className={cn("w-full px-4 py-3 border rounded focus:outline-none", {
                ["border-white"]: !error,
                ["border-red"]: error,
                ["bg-gray-lightest cursor-wait"]: loading,
              })}
              disabled={loading}
              placeholder="Ingresa tu número"
              onChange={handleChange}
              value={number}
            />
            <button
              className={cn("absolute px-2 py-1 font-semibold text-white rounded right-2 top-2 bg-blue-light", {
                ["opacity-50 cursor-wait"]: loading,
              })}
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando" : "Llámame"}
              
            </button>
            <p className="h-4 text-sm text-red">{error}</p>
          </form>
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
