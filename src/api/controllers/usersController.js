let usuarios = [
    { ID: 1, NOME: "user1", SENHA: "senha1" },
    { ID: 2, NOME: "user2", SENHA: "senha2" }
  ];
  
  const users = async function(req, res) {
      try {
          res.status(200).json({
              statusCode: 200,
              data: usuarios.map(u => ({ ID: u.ID, NOME: u.NOME }))
          });
      } catch (error) {
          console.log(error);
          res.status(500).json({
              statusCode: 500,
              message: error.message
          });
      }
  }
  
  module.exports.users = users;
  