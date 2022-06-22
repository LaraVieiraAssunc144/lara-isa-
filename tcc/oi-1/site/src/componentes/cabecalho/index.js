import storage from 'local-storage'
import 'index.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Index(){
    const [usuario,setUsuario]= useState('-')

    const navigate =useNavigate();
    
    
    function inicial(){
        useEffect(()=>{
            if (!storage('usuario-logado'))
            navigate('/');
        },[])}
    else{
        const usuarioLogado =storage('usuario-logado');
        setUsuario(usuarioLogado.nome);
    }

    }

    