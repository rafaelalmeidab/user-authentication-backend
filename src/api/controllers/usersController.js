const jwt          = require('jsonwebtoken');
const dotenv       = require("dotenv");
const compararMD5  = require('../../utils/md5Crypto.js');      
const dbConnection = require('../../database/mysqlConfig.js');

dotenv.config();
const SECRET = process.env.SECRET;

//Realizando Login
const users = async function(req, res){
    try{
        const sql = "SELECT ID, NOME, SENHA FROM usuarios";
        console.log(sql);
        
        // dbConnection.connect(function(err) {
        //     if (err) {
        //         console.error('Erro ao conectar ao banco de dados:', err);
        //         return res.status(500).json({
        //             statusCode: 500,
        //             message: "Erro interno do servidor",
        //         });
        //     }
            
        //     dbConnection.query(sql, function(err, result, fields) {
        //         if (err) {
        //             console.error('Erro ao executar a consulta:', err);
        //             return res.status(500).json({
        //                 statusCode: 500,
        //                 message: "Erro interno do servidor",
        //             });
        //         }

        //         if(result.length === 0){
        //             return res.status(401).json({
        //                 statusCode: 401,
        //                 message: "Usuários não encontrado!",
        //             });
        //         }

        //         res.status(200).json({
        //             statusCode: 200,
        //             data: 'teste'
        //         });
        //     });
        // });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

module.exports.users = users;