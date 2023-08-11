import {Box, Button, TextField, Typography} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormNew = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
            .then(resposta => setNomeRestaurantes(resposta.data.nome))
          }
    }, [parametros])
    const [nomeRestaurante, setNomeRestaurantes] = useState('');
    
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
          axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {nome: nomeRestaurante})
               .then(() => {
                    alert("Restarante atualizado com sucesso!")
               })
        }else {
          axios.post('http://localhost:8000/api/v2/restaurantes/', {nome:nomeRestaurante})
          .then(() => {
            alert("Restaurantes cadastrado com sucesso")
          })
        }
      }
      return (
      <Box sx={{display:'flex', flexDirection:'column',alignItems:'center' }}>
        <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
          <Box component="form" onSubmit={aoSubmeterForm}>
              <TextField value={nomeRestaurante}
                        onChange={evento => setNomeRestaurantes(evento.target.value)} 
                        id="standard-basic" 
                        label="Nome do Restaurante" 
                        variant="standard" />
            <Button type="submit" variant="outlined">Salvar</Button>
          </Box>
      </Box>
    )
}

export default FormNew;