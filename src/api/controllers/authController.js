const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET;

let usuarios = [
  { ID: 1, NOME: "user1", SENHA: "senha1" },
  { ID: 2, NOME: "user2", SENHA: "senha2" }
];

const login = function(req, res){
    try {
        let { user, password } = req.body;
        const usuario = usuarios.find(u => u.NOME === user);

        if (!usuario || usuario.SENHA !== password) {
            return res.status(401).json({
                statusCode: 401,
                message: "Usuário não encontrado ou senha inválida!"
            });
        }

        const token = jwt.sign({ name: usuario.NOME }, SECRET, { expiresIn: '1h' });

        res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso!",
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

module.exports.login = login;
