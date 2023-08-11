import { Box, Button, TextField, Typography, Container, Paper} from '@mui/material';

import http from '../../../http';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormNew = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
            .then(resposta => setNomeRestaurantes(resposta.data.nome))
          }
    }, [parametros])
    const [nomeRestaurante, setNomeRestaurantes] = useState('');
    
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
          http.put(`restaurantes/${parametros.id}/`, {nome: nomeRestaurante})
               .then(() => {
                    alert("Restarante atualizado com sucesso!")
               })
        }else {
          http.post('restaurantes/', {nome:nomeRestaurante})
          .then(() => {
            alert("Restaurantes cadastrado com sucesso")
          })
        }
      }
      return (
          <Box>
            <Container maxWidth="lg" sx={{mt:1}}>
              <Paper sx={{p: 2}}>
                {/* conteudo da página  */}

                <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', flexGrow:'1' }}>
                  <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
                    <Box component="form" sx={{width: '100%'}} onSubmit={aoSubmeterForm}>
                      <TextField value={nomeRestaurante}
                          onChange={evento => setNomeRestaurantes(evento.target.value)} 
                          id="standard-basic" 
                          label="Nome do Restaurante" 
                          variant="standard" 
                          fullWidth
                          required/>
                      <Button sx={{marginTop:1}} type="submit" fullWidth variant="outlined">Salvar</Button>
                    </Box>
                </Box>
              </Paper>
            </Container>
          </Box>
    )
}

export default FormNew;