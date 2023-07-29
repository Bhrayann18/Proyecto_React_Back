const express = require("express");
const cors = require("cors");
const db = require("./database/db");
/**Se importa de la carpeta controllers  */
const controllers = require('./controllers')
const app = express();

app.use(cors());
app.use(express.json());
/**Se importa el contenido de la carpeta controllers */
app.get('/user/:userId', controllers.getUserById)
app.post("/register", controllers.register);
app.post("/login", controllers.login);

const PORT = 4000;
/**Aqui se indica que el puerto esta funcionando una vez se ejecuta npm run dev  */
app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;