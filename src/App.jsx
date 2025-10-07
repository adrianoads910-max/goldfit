import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Planos } from "./pages/Planos";
import { UnityPages } from "./pages/Unidades";
import { Contato } from "./pages/Contato";
import { Institucional } from "./pages/Institucional";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/goldfit/">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Institucional' element={<Institucional />} />
          <Route path='/planos' element={<Planos />} />
          <Route path='/unidades' element={<UnityPages />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;