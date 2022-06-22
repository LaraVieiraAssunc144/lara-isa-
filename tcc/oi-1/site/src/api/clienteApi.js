
import axios from "axios";
const api =axios.create({
    baseURL:'http://localhost:5000'
})


export async function cadastrarCliente(nome,cpf,nascimento,horario,data,telefone,situacao){
    const resposta =await api.post('/cliente',{
        nome:nome,
        cpf:cpf,
        nascimento:nascimento,
        horario:horario,
        data:data,
        telefone:telefone,
        situacao:situacao
    })
    return resposta.data;
}

export async function alterarCliente(id,nome,cpf,nascimento,horario,data,telefone,situacao){
    const resposta =await api.put(`/cliente/${id}`,{
        nome:nome,
        cpf:cpf,
        nascimento:nascimento,
        horario:horario,
        data:data,
        telefone:telefone,
        situacao:situacao
    })
    return resposta.data;
}

export async function listarTodosClientes(){
    const resposta =await api.get('/filme');
    resposta.data;
}

export async function buscarClientesporCPF(cpf){
    const resposta =await api.get(`/filme/busca?cpf=${cpf}`);
    resposta.data;
}