import '../styles/News.scss'  // Importa estilos específicos para este componente

// Componente funcional que recibe un objeto `data` con la información de una noticia
export const New = ({ data }) => {

    return (
        // Contenedor principal de la tarjeta de noticia con clase para estilos CSS
        <div className="news-card">
            {/* Título de la noticia */}
            <h2>{data.title}</h2>

            {/* Resumen o extracto de la noticia */}
            <p>{data.abstract}</p>

            {/* Enlace para leer la noticia completa
                - Abre en una pestaña nueva (target="_blank")
                - rel="noopener noreferrer" por seguridad y rendimiento */}
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                Leer más →
            </a>
        </div>
    )
}
