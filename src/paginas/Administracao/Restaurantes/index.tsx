import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import IRestaurante from '../../../interfaces/IRestaurante';

const AdmRestaurantes = () => {

const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

useEffect(() => {
  axios.get('http://localhost:8000/api/v2/restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))
}, [])


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante => <TableRow key={restaurante.id}> 
            <TableCell>
              {restaurante.nome}
            </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdmRestaurantes;