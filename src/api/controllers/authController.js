const jwt          = require('jsonwebtoken');
const dotenv       = require("dotenv");
const compararMD5  = require('../../utils/md5Crypto.js');      
const dbConnection = require('../../database/mysqlConfig.js');

dotenv.config();
const SECRET = process.env.SECRET;

//Realizando Login
const login = function(req, res){
    try{
        let user = req.body.user; 
        const sql = "SELECT ID, NOME, SENHA FROM usuarios WHERE NOME = '" + user + "'";
        
        dbConnection.connect(function async(err) {
            if (err) throw err;
            dbConnection.query(sql, function async(err, result, fields) {
                if(!result){
                    return res.status(401).json({
                        statusCode: 401,
                        message: "Usuário não encontrado!",
                        data:{
                            user: req.body.user
                        }
                    });
                }

                //Validacao Senha
                const validacaoSenha = compararMD5(req.body.password, result.senha);
                if(!validacaoSenha){
                    return res.status(401).json({
                        statusCode: 401,
                        message: "Não autorizado!"
                    });
                }

                //Criacao Token JWT
                const token = jwt.sign({name: result.nome}, SECRET);

                res.status(200).json({
                    statusCode: 200,
                    message: "Login realizado com sucesso!",
                    data: {
                        token
                    }
                });

            });
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}


module.exports.login = login;