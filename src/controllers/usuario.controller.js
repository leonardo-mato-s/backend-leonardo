import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllUsers = async(req, res)=>{
    try {
        const response = await pool.query('select u.idusuario, u.username, u.password, u.estado, p.nombres, p.apellidos from usuario u, persona p where u.idpersona = p.idpersona');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createUser = async(req, res)=>{
    try {
        const{ username, password, idpersona} = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(username, password, idpersona, estado) values($1,$2,$3,1)', [username, password2, idpersona]);
        return res.status(200).json(
            `Usuario ${ username } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}