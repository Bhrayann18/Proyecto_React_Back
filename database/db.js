const mongoose = require('mongoose')
/**Conexion a Mongo DB base de datos no relacional  */
/**Para poder ejecutar el inicio de sesion es necesario tener mongo db y en la parte de la conexion con 
mongo db poner el link de la conexion en su respectivo equipo y pegarlo en el codigo del proyecto*/
/**La parte back end se ejecuta con el comando npm run dev  */
const MONGO_URL = "mongodb://127.0.0.1:27017";

const db = async () => {
    await mongoose
      .connect(MONGO_URL)
      /**Se indica que la conexion con la DB esta funcionando  */
      .then(() => console.log("DB FUNCIONANDO"))
      .catch((error) => console.error(error));
  };

  module.exports = db
