const { model, Schema } = require("mongoose");
/**Aqui se realiza la estructura de la DB donde el valor unico es correo */
const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

module.exports = model("Usuario", UsuarioSchema);