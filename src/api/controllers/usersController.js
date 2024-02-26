const jwt      = require('jsonwebtoken');
const dotenv   = require("dotenv");
const mysql    = require('mysql');
const dbConfig = require('../../database/mysqlConfig.js');

dotenv.config();
const SECRET     = process.env.SECRET;
const connection = mysql.createConnection(dbConfig);

//Realizando Login
function users(req, res){
    try {
        var ans = '';
        const sql = "SELECT ID, NOME, SENHA FROM usuarios";

        connection.query(sql, (error, results, fields) => {
            if (error) {
                console.error("Erro ao executar a consulta:", error);
                return { status : 500, error: "Erro ao executar a consulta." };
            }

            ans = JSON.stringify(results);
            
        });
        
        
        connection.end((err) => {
            if (err) {
                console.error('Erro ao fechar conexão com o banco de dados:', err);
                return { status : 500, error: "Erro ao fechar conexão com o banco de dados." };
            }
            
            console.log('Conexão com o banco de dados MySQL fechada com sucesso');
            console.log('users', ans);
            return ans;
        });
        
    } catch(error) {
        console.error("Erro no bloco catch:", error);
        return { status : 500, error: "Erro interno do servidor." };
    }
}

module.exports = { users };
