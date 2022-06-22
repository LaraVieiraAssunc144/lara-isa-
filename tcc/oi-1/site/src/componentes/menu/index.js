import storage from 'local-storage'
import './index.scss'

import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';

export default function Index(props){

const navigate = useNavigate();

    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }
    
    function verificarMenuSelecionado (menu){
        if(menu === props.selecionado)
            return 'selecionado'
        else
            return '';
    }
}