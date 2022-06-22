USE PRETCC;

-- usuário solicitar consulta
SELECT 
       ID_AGENDAMENTO             id,
       NM_PACIENTE              nome,
       DS_CPF                    cpf,
       DT_NASCIMENTO      nascimento,
       HR_AGENDAMENTO           hora,
       DT_CONSULTA               dia,
       DS_TELEFONE          telefone,
       DS_SITUACAO          situacao 
FROM TB_AGENDAMENTO
WHERE NM_PACIENTE        = 'Robert Arboleda'
  AND DS_SITUACAO        = 'Confirmada';
        


-- efetuar login
INSERT INTO TB_FUNCIONARIO (NM_PSICOLOGO, DS_EMAIL, DS_SENHA)
	 VALUES ('ADMIN', 'ADMIN@GMAIL.COM', '1234');
     
SELECT ID_FUNCIONARIO     ID,
       NM_PSICOLOGO       NOME,
       DS_EMAIL           EMAIL,
       DS_SENHA           SENHA
  FROM TB_FUNCIONARIO
 WHERE DS_EMAIL         = 'ADMIN@GMAIL.COM'
   AND DS_SENHA         = '1234';
	

-- efetuar login
SELECT   
	   NM_PSICOLOGO        nome,
       DS_EMAIL            email,
       DS_SENHA            senha
       
 FROM TB_FUNCIONARIO
WHERE DS_EMAIL        = 'ADMIN@GMAIL.COM'
  AND DS_SENHA          = '1234';


-- alterar consultas
UPDATE TB_AGENDAMENTO
   SET NM_PACIENTE       = 'Calleri Matador',
       DS_CPF            = '125-145-258-23',
       DT_NASCIMENTO     = '2002-11-13',
       HR_AGENDAMENTO    = '14:00:00',   
       DT_CONSULTA   = '2002-06-29',  
       DS_TELEFONE       = '91234-2589',   
       DS_SITUACAO       = 'Confirmada'
	WHERE ID_AGENDAMENTO = 1;
  
    
    
-- deletar consultas
DELETE FROM TB_AGENDAMENTO
      WHERE ID_AGENDAMENTO = 1;
      
      
-- visualizar consultas
SELECT  ID_AGENDAMENTO,            
                NM_PACIENTE,
                DS_CPF,          
                DT_NASCIMENTO,   
                HR_AGENDAMENTO,
                DT_CONSULTA ,   
                DS_TELEFONE,      
                DS_SITUACAO  
      FROM TB_AGENDAMENTO

-- confirmar consultas
UPDATE TB_AGENDAMENTO
   SET DS_SITUACAO    = 'Confirmada'
 WHERE ID_AGENDAMENTO = 1;