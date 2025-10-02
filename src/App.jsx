import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TextField } from "./components/TextField"
import { Home } from "./pages/Home"
import { Planos } from "./pages/Planos"
import { UnityPages } from "./pages/Unidades"
import { Contato } from "./pages/Contato"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planos' element={<Planos />} />
          <Route path='/unidades' element={<UnityPages />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
