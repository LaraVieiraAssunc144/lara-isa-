import menu from '../../componentes/menu'
import cabecalho from '../../componentes/cabecalho'


import {  listarTodosClientes,buscarClientesporCPF  } from '../../api/clienteApi'

import'./index.sass'
import { useEffect, useState } from 'react'

export default function index(){
     const [cliente,setCliente]=useState([]);
     const [filtro,setFfiltro]=useState('');

    async function  filtrar(){
        const resp= await buscarClientesporCPF(filtro);
        setFfiltro(resp);
    }


    async function carregarTodososClientes(){
        const resp=await listarTodosClientes();
        setCliente(resp);
    }
    useEffect(()=>{
        carregarTodososClientes 
    },[])


{cliente.map(item=>
    <tr>
        <td>{item.id}</td>
        <td>{item.nome}</td>
        <td>{item.cpf}</td>
        <td>{item.nascimento.subtr(0,10)}</td>
        <td>{item.horario}</td>
        <td>{item.data.subtr(0,10)}</td>
        <td>{item.telefone}</td>
        <td>{item.situacao ?'Sim' :'Não'}</td>
    </tr>
    )}

}

