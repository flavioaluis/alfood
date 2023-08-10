import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Admin from './paginas/Administracao/Restaurantes/Admin';
import FormNew from './paginas/Administracao/Restaurantes/FormNew';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<Admin />} />
      <Route path="/admin/restaurantes/new" element={<FormNew />} />
      <Route path="/admin/restaurantes/:id" element={<FormNew />} />    
    </Routes>
  );
}

export default App;
