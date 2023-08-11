const imagesList = document.querySelector("#galleries");

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM Cargado");

  try {
    const images = await fetchImages();
    renderImages(images);
  } catch (error) {
    console.error(error);
    renderErrorMessage("Error al cargar las imágenes");
  }
});

const renderImages = (images) => {
  if (images.length === 0) {
    imagesList.innerHTML = `<p><span class="text-center">No hay imágenes aún.</span></p>`;
    return;
  }

  imagesList.innerHTML = images
    .map((image) => `<img src="${image.url}" alt="Imagen">`)
    .join("");
};

const renderErrorMessage = (message) => {
  imagesList.innerHTML = `<p><span class="text-center text-danger">${message}</span></p>`;
};

const fetchImages = async () => {
  try {
    const response = await fetch("http://localhost:4000/api");

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


