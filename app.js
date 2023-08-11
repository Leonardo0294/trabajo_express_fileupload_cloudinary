const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const fileUpload = require("express-fileupload");

//variables de entorno
dotenv.config({ path: ".env" });

const { sequelize } = require("./database/database");

const app = express();

// Configuración
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(fileUpload());

// Conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a base de datos exitosa");
  })
  .catch((error) => console.error("Error al conectar a base de datos", error));

app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No hay archivos que subir." });
  }

  // El nombre del campo en el formulario debe ser 'archivo'
  const archivo = req.files.archivo;

  // Especifica la carpeta de destino donde se guardarán los archivos
  const uploadPath = path.join(__dirname, "uploads", archivo.name);

  // Mueve el archivo al directorio de destino
  archivo.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ mensaje: "Error al subir el archivo." });
    }

    res.status(200).json({ mensaje: "¡Archivo subido correctamente!" });
  });
});







// Enrutamiento
app.use("/", require("./routes/galeria.routes"));

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT} - ¡El servidor está corriendo!`);
});