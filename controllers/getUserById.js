const Usuario = require("../model/usuario");

const getUserById = async (req, res) => {
  const { userId } = req.params;
  /**Se consultan los datos ingresados mendiante la Id */
  /**El numero 24 corresponde a la cantidad de caracteres que tiene la Id en Mongo DB */
  if (userId.length === 24) {
    Usuario.findById(userId).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con esa ID",
        });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
    /**En este caso en que la Id no contenga los 24 caracteres se emite el siguiente mensaje */
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUserById;