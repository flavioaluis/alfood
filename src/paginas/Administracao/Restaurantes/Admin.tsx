import { Link } from 'react-router-dom';
import http from "../../../http";
import { useEffect, useState } from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import IRestaurante from '../../../interfaces/IRestaurante';


const Admin = () => {

const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

useEffect(() => {
  http.get('restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))
}, [])

const excluir = (deleteRest: IRestaurante) => {
  http.delete(`restaurantes/${deleteRest.id}/` )
      .then(() => {
        const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== deleteRest.id)
        setRestaurantes([ ...listaRestaurante])
      })
}

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante => <TableRow key={restaurante.id}> 
            <TableCell>
              {restaurante.nome}
            </TableCell>
            <TableCell>
              [<Link to={`/admin/restaurantes/${restaurante.id}`}>editar</Link>]
            </TableCell>
            <TableCell>
              <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>Excluir</Button>
            </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Admin;
