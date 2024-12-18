import toast from "react-hot-toast";

const uploadImage = async (file) => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "backpack");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ddttjz2rt/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.error) {
      toast.error("Imagem grande demais");
      return;
    }

    return data.secure_url;
  } catch (error) {
    console.error("Erro ao enviar a imagem:", error);
  }
};

export { uploadImage };
