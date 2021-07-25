import { pool } from '../database'
import { transporter } from '../auth/mailer'

//LISTAR CORREO
export const readAllCorreo = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select c.idcorreo, c.destinatario, c.titulo, c.mensaje, c.fecha, u.idusuario from correo c, usuario u where c.idusuario = u.idusuario and u.idusuario = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//LISTAR CORREO POR ID
export const readCorreoID = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select c.idcorreo, c.destinatario, c.titulo, c.mensaje, c.fecha, u.idusuario from correo c, usuario u where c.idusuario = u.idusuario and c.idcorreo', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//CORREO
export const enviarCorreo = async(req, res) => {
    try {
        const fecha= new Date();
        const { destinatario, titulo, mensaje,  idusuario } = req.body;
         await transporter.sendMail({
            from: '"PRUEBA EMAIL 👻" <leonardomatos@upeu.edu.pe>', // sender address
            to: destinatario, // list of receivers
            subject: titulo +" - " +fecha, // Subject line
            html: "<p>"+ mensaje +"</p>"  // html body
          });
        const response = await pool.query('insert into correo(destinatario, titulo, mensaje,fecha,  idusuario) values($1, $2, $3, $4, $5)', 
              [ destinatario, titulo, mensaje,fecha,  idusuario]);
        return res.status(200).json(
        response );
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

