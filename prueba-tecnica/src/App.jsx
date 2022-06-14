import './App.css'
import Onboarding from './components/Onboarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './components/Registro'
import Resumen from './components/Resumen'
import { MonedasProvider } from './context/MonedasProvider'

function App() {

  return (
    <>
    <MonedasProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Onboarding/> } />
          <Route exact path="/registro" element={ <Registro/> } />
          <Route exact path="/resumen" element={ <Resumen/> } />
        </Routes>
      </BrowserRouter>
    </MonedasProvider>
    </>
  )
}

export default App
