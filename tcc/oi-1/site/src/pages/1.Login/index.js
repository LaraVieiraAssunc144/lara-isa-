import { login } from '../../api/usuarioApi'
import {useNavigate} from 'react-router-dom'


import storage from 'local-storage'
import LoadingBar from 'react top-loading-bar'
import{useState,useRef, useEffect} from 'react'

import menu from '../../componentes/menu'
import cabecalho from '../../componentes/cabecalho'

import './index.scss'



export default function Index() {
    const[email,setEmail]= useState('');
    const[senha,setSenha]= useState('');
    const[erro,setErro]= useState('');
    const[carregando,setCarregando]=useState(false);
    

    const navigate= useNavigate();
    const ref= useRef();


    useEffect(()=>{
        if(storage('usuario-logado')){
            navigate('/admin');
        }
    },[])

    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);
        try{
            const r =await login(email,senha);
            storage('usuario-logado', r)
            
            setTimeout(() =>  {
            navigate('/admin');
        }, 3000);

            
            
        }catch(err){
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }

    return(
        <main className='page page-login'>
            <LoadingBar color='#f11946' ref={ref} />
            <section className="box-login">
            <div>Seja bem-vindo a área administrativa</div>
                <div>
                    <label>E-mail:</label>
                    <input type='text' placeholder='Informe seu e-mail' value={email}onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Senha:</label>
                    <input type='password' placeholder='*' value={senha}onChange={e=>setSenha(e.target.value)}></input>
                </div>
                <div>
                    <button classNam='bnt-black'onClick={entrarClick}>Continuar</button>
                </div>
                <div className='form-entar invalido'>
                    {erro}
                </div>
                
            </section>

        </main>
    )
}   

