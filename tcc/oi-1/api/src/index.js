import 'dotenv/config'

import express from 'express'

import cors from 'cors'

import agendamentoController from './controller/agendamentoController.js'

import funcionarioController from './controller/funcionarioController.js'
import { con } from'./repository/connections.js'



const server = express();

server.use(cors());

server.use(express.json());


server.use(funcionarioController);

server.use(agendamentoController);

server.listen(process.env.PORT, ()  => console.log(`Api conectada na porta ${process.env.PORT}`));

console.log('BD conectado!');

