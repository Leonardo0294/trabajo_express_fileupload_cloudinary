const path = require("path");
const { cloudinary } = require("../settings/cloudinary");
const Image = require("../models/imagen.models");

const indexView = (_req, res) => {
  res.render("galerias/index", { mensaje: "" });
};

const createView = (_req, res) => {
  res.render("galerias/crear");
};

const index = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la lista de imágenes." });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).json({ mensaje: "Imagen no encontrada." });
    }
    res.status(200).json(image);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener los detalles de la imagen." });
  }
};

const store = async (req, res) => {
  let image;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No hay archivos que subir." });
  }

  image = req.files.image;

  const imageExists = await Image.findOne({
    where: {
      original_filename: image.name.split(".")[0],
    },
  });

  if (imageExists) {
    return res
      .status(400)
      .json({ mensaje: "La imagen ya existe en la base de datos." });
  }

  uploadPath = path.join(__dirname, "../files/", image.name);

  try {
    await image.mv(uploadPath); // Sube la imagen al servidor

    // Sube la imagen a Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(uploadPath);
    const {
      original_filename,
      format,
      resource_type,
      url,
      secure_url,
      asset_id,
      public_id,
      version_id,
      created_at,
    } = cloudinaryResponse;

    // Crea un nuevo registro en la base de datos
    const imagen = await Image.create({
      original_filename,
      format,
      resource_type,
      url,
      secure_url,
      asset_id,
      public_id,
      version_id,
      creation: created_at,
    });

    return res.status(201).json({ success: "Imagen subida correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al cargar la imagen." });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const newData = req.body; // Los nuevos datos para actualizar la imagen

  try {
    const image = await Image.findByPk(id);

    if (!image) {
      return res.status(404).json({ mensaje: "Imagen no encontrada." });
    }

    // Actualizar los campos de la imagen con los nuevos datos
    await image.update(newData);

    return res
      .status(200)
      .json({ mensaje: "Imagen actualizada correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar la imagen." });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByPk(id);

    if (!image) {
      return res.status(404).json({ mensaje: "Imagen no encontrada." });
    }

    // Eliminar la imagen de Cloudinary
    await cloudinary.uploader.destroy(image.public_id);

    // Eliminar la imagen de la base de datos
    await image.destroy();

    return res.status(200).json({ mensaje: "Imagen eliminada correctamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la imagen." });
  }
};

module.exports = {
  indexView,
  createView,
  index,
  show,
  update,
  store,
  destroy,
};
