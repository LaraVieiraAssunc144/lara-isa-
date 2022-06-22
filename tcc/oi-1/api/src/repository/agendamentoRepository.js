import { con } from '../repository/connections.js';



// USÚARIO SOLICITAR CONSULTA
export async function solicitarConsulta(consulta) {

    const comando = 
    
        ` insert into TB_AGENDAMENTO ( NM_PACIENTE, DS_CPF, DT_NASCIMENTO, HR_AGENDAMENTO, DS_TELEFONE, DS_SITUACAO)
             values (?, ?, ?, ?, ?, 'Pendente')`;
    
    const [resposta] = await con.query (comando,[consulta.nome, consulta.cpf, consulta.nascimento, consulta.agendamento, consulta.consulta, consulta.telefone]);
    consulta.id = resposta.insertId;
    
  
    
    return consulta;
    
    
    }


// VISUALIZAR TODAS CONSULTAS    
export async function visualizarConsulta() {

const comando = 

    `SELECT  ID_AGENDAMENTO              ID,
                NM_PACIENTE                   NOME,
                DS_CPF                                CPF,          
                DT_NASCIMENTO   NASCIMENTO,   
                HR_AGENDAMENTO  HORA ,
                DS_TELEFONE           TELEFONE,      
                DS_SITUACAO            SITUAÇÃO    
      FROM TB_AGENDAMENTO`;

const [linhas] = await con.query (comando);
return linhas;

}


// PSICÓLOGO CONFIRMA A CONSULTA
export async function confirmarConsulta(id) {

    const comando = 
    
        `UPDATE TB_AGENDAMENTO
            SET  DS_SITUACAO    = 'Confirmado'
          WHERE ID_AGENDAMENTO  = ? `;
    
    const [linhas] = await con.query (comando, [id]);
    return linhas;
    
    }


    // ALTERAR CONSULTAS    
    export async function alterarConsulta(id, consulta) {
        const comando = 
            `UPDATE TB_AGENDAMENTO
            SET NM_PACIENTE       = ?,
                DS_CPF            = ?,
                DT_NASCIMENTO     = ?,
                HR_AGENDAMENTO    = ?,   
                DT_CONSULTA   = ?,  
                DS_TELEFONE       = ?,   
                DS_SITUACAO       = ?
             WHERE ID_AGENDAMENTO = ? `
        
        const [resposta] = await con.query(comando, [consulta.paciente, consulta.cpf, consulta.nascimento, consulta.agendamento, consulta.consulta, consulta.telefone, consulta.situacao, id]);
        return resposta.affectedRows;
    }


//DELETAR CONSULTA
export async function deletarConsulta(id) {

const comando = 

    `DELETE FROM TB_AGENDAMENTO
            WHERE ID_AGENDAMENTO = ?`;

const [resposta] = await con.query (comando, [id]);

return resposta.affectedRows;



}










