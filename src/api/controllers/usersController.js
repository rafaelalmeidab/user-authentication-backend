const jwt      = require('jsonwebtoken');
const dotenv   = require("dotenv");
const mysql    = require('mysql');
const db       = require('../../services/db.js');
const helper   = require('../../helper.js');

dotenv.config();
const SECRET     = process.env.SECRET;

//Teste
async function users(){
    const sql = "SELECT ID, NOME, SENHA FROM usuarios";
    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);
    
    return data;
}

module.exports = { users };