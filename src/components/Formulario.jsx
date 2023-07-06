import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from './Error'

export default function Formulario() {
  const { handleChangeDatos, datos, error, cotizarSeguro , setError} = useCotizador();

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes("")){
      setError("Todos los campos son obligatorios")
      return
    }
    setError("")
    cotizarSeguro()
  }

  return (
    <>
    {error && <Error/>}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            value={datos.marca}
            onChange={(e) => handleChangeDatos(e)}
          >
            <option value="">-- Selecciona Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            value={datos.year}
            onChange={(e) => handleChangeDatos(e)}
          >
            <option value="">-- Selecciona AÑO --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)}/>
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-gray-600 hover:bg-gray-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
}
