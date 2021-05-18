#!/usr/bin/env node

'use strict';

import express from 'express';

const app = express();
app.use(express.json());


app.get('/info', (req, resp) => {

    const result = {
    "componente": "resourcemanager",
    "descrição": "gerencia os recursos entre cliente e servidor",
    "versao": "0.1"}
    resp.send(result);
  
});

const server = app.listen(3002  , '0.0.0.0', () => {
  console.log("Aplicação Iniciada com Sucesso!")
})