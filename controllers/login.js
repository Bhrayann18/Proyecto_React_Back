const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const login = async (req, res) => {
    /**Se establecen los datos a consultar*/
    const { correo, contraseña } = req.body;
    /**Mensaje de usuario no encontrado en DB */
    Usuario.findOne({ correo }).then((usuario) => {
        if (!usuario) {
            return res.json({ mensaje: "Usuario no encontrado" });
        }
        /**Mediante nombre y Id se consulta si los datos son correctos o estan registrados */
        bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
            if (esCorrecta) {
                const { id, nombre } = usuario;

                const data = {
                    id,
                    nombre,
                };
                res.json({
                    mensaje: "Usuario logeado correctamente",
                    usuario: {
                        id,
                        nombre,
                    },
                });
                /**Condicional en caso de que los datos sean incorrectos */
            } else {
                return res.json({ mensaje: "Contraseña incorrecta" });
            }
        });
    });
};

module.exports = login;