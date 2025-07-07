import React, { createContext, useReducer } from 'react'  // Importamos React, createContext para crear contexto, y useReducer para manejar estado complejo
import AppReducer from './AppReducer'  // Importamos el reducer que manejará las acciones del estado
import axios from 'axios'  // Importamos axios para hacer llamadas HTTP

// Estado inicial con una propiedad news que empieza como un arreglo vacío
const initialState = {
    news: [],
}

// Creamos un contexto global para compartir estado y funciones en toda la app
export const GlobalContext = createContext(initialState)

// Componente proveedor del contexto que envolverá la app y proveerá el estado y funciones
export const GlobalProvider = ({ children }) => {

    // useReducer devuelve el estado actual y una función dispatch para enviar acciones al reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Función asíncrona para obtener noticias desde la API de NYT
    const getNews = async () => {
      try {
        // Obtenemos la clave API desde variables de entorno (configuración segura)
        const apiKey = import.meta.env.VITE_NYT_API_KEY;

        // Realizamos la petición GET a la API con axios
        const res = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
        );

        // Enviamos la acción al reducer con el tipo 'GET_NEWS' y los datos obtenidos en payload
        dispatch({
          type: 'GET_NEWS',
          payload: res.data.results,
        })
      } catch (e) {
        // En caso de error, lo mostramos en consola
        console.error(e)
      }
    }

    // Proveemos el estado y funciones a los componentes hijos mediante el contexto
    return (
      <GlobalContext.Provider
          value={{
              news: state.news,  // pasamos las noticias del estado
              getNews,           // y la función para obtener noticias
          }}
      >
          {children}  {/* Renderizamos los componentes hijos */}
      </GlobalContext.Provider>
    )
}
