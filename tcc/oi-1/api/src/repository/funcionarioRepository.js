import { con } from './connections.js'

export async function login(email,senha){

const comando = 

    `select  

                ds_email            email,
                ds_senha           senha

    from TB_FUNCIONARIO

    where ds_email            = ?

    and ds_senha               =?`

const[linhas] = await con.query(comando,[email, senha])

return linhas[0]; 

}