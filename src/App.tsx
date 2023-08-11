import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdminBase from './componentes/AdminBase';
import Admin from './paginas/Administracao/Restaurantes/Admin';
import AdminPrato from './paginas/Administracao/Pratos/AdminPrato';
import FormNew from './paginas/Administracao/Restaurantes/FormNew';
import FormNewPrato from './paginas/Administracao/Pratos/FormNewPrato';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<AdminBase />}>
        <Route path="restaurantes" element={<Admin />} />
        <Route path="restaurantes/new" element={<FormNew />} />
        <Route path="restaurantes/:id" element={<FormNew />} />
        <Route path="pratos" element={<AdminPrato/>}/>
        <Route path="pratos/new" element={<FormNewPrato/>}/>
        <Route path="pratos/:id" element={<FormNewPrato/>}/>
      </Route>

    </Routes>
  );
}

export default App;
