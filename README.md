# BBK40_React_WebNoticias
<!-- Intsalacion:
# 1. Crear el proyecto con Vite
npm create vite@latest

# 2. Entra en el directorio del proyecto
cd React_Pagina_Personal

# 3. Instala dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5. Instala React Router DOM
npm install react-router-dom

# 6. Instala SASS como dependencia de desarrollo
npm install -D sass

# 7. Instala ANXIOS como dependencia de desarrollo
npm install axios
 
 ----------------------------------------------------------------------

 
Una aplicación web moderna construida con **React** que permite:

- Ver noticias actuales desde la API del New York Times.
- Añadir tus propias noticias con un formulario.
- Guardarlas en `localStorage`.
- Navegar entre secciones con React Router.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React**
- 🔀 **React Router DOM**
- 🎯 **Context API** para estado global
- 💅 **SCSS** modular para estilos
- 📦 **Axios** para peticiones HTTP
- 🗞️ **New York Times Top Stories API**

---

## 🧱 Estructura del proyecto

```bash
/src
│
├── App.jsx              # Enrutamiento principal
├── /pages               # Paginas o vistas principales (Home, Form, List)
│   ├── Header.jsx       # Navegación
│   ├── Footer.jsx       # Pie de página
│   ├── Home.jsx         # Página de inicio
│   ├── Form.jsx         # Formulario para añadir noticia
│   └── List.jsx         # Lista de noticias desde la API
│
├── /components
│   └── News.jsx          # Componente para renderizar una noticia individual
│
├── /context
│   ├── GlobalState.jsx  # Estado global y llamada a la API
│   └── AppReducer.jsx   # Reducer para actualizar estado
│
├── /styles              # Archivos SCSS
│   ├── Footer.scss
│   ├── Header.scss
│   ├── Form.scss
│   ├── Home.scss
│   ├── List.scss
│   └── New.scss

---

📌 Funcionalidades
🏠 Home
Muestra bienvenida y descripción de la app.

📝 Form
Formulario controlado con validación simple.

Guarda la noticia en localStorage.

Redirige automáticamente a la sección de List.

📋 List
Muestra noticias en tarjetas limpias y modernas.

Se conecta a la NYT Top Stories API.

---

🧪 Cómo ejecutar el proyecto

# 1. Clona este repositorio
git clone https://github.com/tu-usuario/news-app.git

# 2. Instala dependencias
npm install

# 3. Ejecuta en modo desarrollo
npm run dev


