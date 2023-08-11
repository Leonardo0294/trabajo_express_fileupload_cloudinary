// Función para manejar la carga de imágenes
const uploadImage = async (formData) => {
    try {
      const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.mensaje || 'Error al cargar la imagen');
      }
  
      return true; // Éxito
    } catch (error) {
      throw error; // Propaga el error para manejarlo externamente
    }
  };
  
  // Función para mostrar mensajes de error
  const showErrorMessage = (message) => {
    validationErrors.innerHTML = `<small class="text-danger">${message}</small>`;
  };
  
  // Manejador de envío del formulario
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    try {
      const fd = new FormData();
      fd.append('image', image.files[0]);
  
      // Intenta cargar la imagen
      await uploadImage(fd);
  
      // Limpia los mensajes de error
      validationErrors.innerHTML = '';
  
      // Espera un segundo y luego redirige
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (error) {
      // Muestra el mensaje de error
      showErrorMessage(error.message || 'Error desconocido');
    }
  });