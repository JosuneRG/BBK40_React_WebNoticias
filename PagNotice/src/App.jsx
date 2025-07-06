import './App.css'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Form from './pages/Form'
import Home from './pages/Home'
import List from './pages/List'

import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <GlobalProvider>

    <Header />

    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>

    <Footer />
     
    </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
