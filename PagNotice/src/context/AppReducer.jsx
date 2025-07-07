// Reducer para manejar el estado relacionado con las noticias
const news = (state, action) => {

  // Evaluamos el tipo de acción recibida
  switch (action.type) {
    case 'GET_NEWS':
      // Cuando la acción es 'GET_NEWS', actualizamos el estado
      // con las noticias que vienen en action.payload
      return {
        ...state,          // Mantenemos el resto del estado sin cambios
        news: action.payload,  // Actualizamos la propiedad 'news' con los nuevos datos
      }
    default:
      // Si la acción no coincide con ningún caso, devolvemos el estado actual sin cambios
      return state
  }
}

export default news
