import {alterarConsulta, deletarConsulta, visualizarConsulta,  confirmarConsulta, solicitarConsulta } from '../repository/agendamentoRepository.js'

import { Router } from 'express'
import { con } from '../repository/connections.js';

const server = Router();

//  SOLICITAR CONSULTA
server.post('/consulta', async (req, resp) => {

    try {

        const resposta  = req.body;
        
        if (!resposta.nome)

            throw new Error('Necessário nome do paciente');

        if (!resposta.cpf)

            throw new Error('cpf do paciente necessário');

        if (!resposta.nascimento)

            throw new Error('nascimento do paciente necessário');

        if (!resposta.agendamento)

            throw new Error('hora da consulta nescessária');

        if (!resposta.consulta)

            throw new Error('dia da consulta nescessária');
        
        if (!resposta.telefone)

            throw new Error('telefone do paciente é nescessário');

    

        const solicitar = await solicitarConsulta(resposta)

        resp.send(solicitar);
            

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


// DELETAR CONSULTA
server.delete('/consulta/:id', async (req, resp) => {

    try {

        const { id } = req.params;

        const ab = await deletarConsulta(id);

        if (ab != 1)

            throw new Error('Consulta não foi removida');

        resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })
    }
    })


// ALTERAR CONSULTA
    server.put('/consulta/:id', async (req, resp) => {

        try {
            const { id } = req.params;
    
            const consulta = req.body;

            if (!consulta.paciente)
    
                throw new Error('Nome do paciente necessário');
    
    
            if (!consulta.cpf)
    
                throw new Error('cpf necessário');
    
            if (!consulta.nascimento)
    
                throw new Error('Data de nascimento do paciente é nescessário');

            if (!consulta.agendamento)
    
                throw new Error('Hora do agendamento é nescessário');
            
            if (!consulta.consulta)
    
                throw new Error('Dia do agendamento é nescessário');

            if (!consulta.telefone)
    
                throw new Error('Telefone do paciente é nescessário');

            if (!consulta.situacao)
    
                throw new Error('Situação do agendamento é nescessário');
            

                const ab = await alterarConsulta(id, consulta);

            if (ab != 1)
                throw new Error('Consulta não pode ser alterada');
    
        else
    
                resp.status(204).send();
    
        } catch (err) {
    
            resp.status(400).send({
    
                erro: err.message
    
            })
        }
        })


// VISUALIZAR CONSULTAS
        server.get('/consulta', async (req, resp) => {

            try {
        
                const ab = await visualizarConsulta();
                resp.send(ab);
        
            } catch (err) {
        
                resp.status(400).send({
        
                    erro: err.message
        
                })
        
            }
        
        })





// CONFIMAR CONSULTA
            server.put('/consulta/confirmar/:id', async (req, resp) => {

                try {
                    const id = req.params.id;
               
                    const consultaSituacao = await confirmarConsulta(id);
            
                    resp.send();

                } catch (err) {
                    resp.status(400).send({
                        erro: err.message
                    })
                }
            })

    
        export default server


    