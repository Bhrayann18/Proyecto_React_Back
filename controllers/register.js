const bcrypt = require("bcrypt");
/**Se importa de model usuario */
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      /**Se indica que el usuario existe o faltan datos */
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHasheada,
          });
          /**Se almacenan los datos y se emite el mensaje de registro con exito */
          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;