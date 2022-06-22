import menu from '../../componentes/menu'
import cabecalho from '../../componentes/cabecalho'



import { useState } from 'react'

import storage from 'local-storage'

import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { cadastrarCliente,alterarCliente } from '../../api/clienteApi'

export default function Index(){
    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState(0);
    const [nascimento,setNascimento] = useState('');
    const [horario,setHorario] = useState('');
    const [data,setData] = useState('');
    const [telefone,setTelefone] = useState('');
    const [situacao,setSituacao] = useState(false);
    const {id,setId}=useState(0);

    async function salvarClick(){
        try{
            const usuario= storage('usuario-logado').id;
            
            //let idFilme=0;
            if(id===0){
            const r= await cadastrarCliente(nome,cpf,nascimento,horario,data,telefone,situacao,usuario);
            toast('🔥 Alteração realizada com sucesso!');
            }
            else{
                await alterarCliente(id,nome,cpf,nascimento,horario,data,telefone,situacao,usuario);
            }
            toast('🔥 Cadastro realizado com sucesso!');
        }catch(err){
            toast(err.response.data.erro);
        }
    }

}
function novoClick (){
    setId(0);
    setCpf('');
    setNascimento('');
    setHorario('');
    setData('');
    setTelefone('');
    setSituacao(true);
}