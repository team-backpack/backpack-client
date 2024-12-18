import { useRef, useState } from "react";
import "./styles.css";

import { IoCloseOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { MdGifBox } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { uploadImage } from "../../../cloudinary/upload";
import { usePost } from "../../../hooks/usePost";
import { BeatLoader } from "react-spinners";
import { useAuth } from "../../../context/AuthContext";
import DefaultProfilePicture from "../../../assets/default-user.png";

function PostModal({ isOpen, toggleModal, isComment, parentId, setComment }) {
  const [inputs, setInputs] = useState({
    text: "",
    media: [],
  });

  const [previewURLs, setPreviewURLs] = useState([]);

  const { loading, publishPost, comment } = usePost();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mediaURLs = await Promise.all(
      inputs.media.map((file) => uploadImage(file))
    );

    const post = {
      text: inputs.text,
      mediaURLs,
    };

    if (isComment) {
      await comment(parentId, post)
      setComment()
    } else {
      await publishPost(post);
    } 

    toggleModal();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setInputs((prevInputs) => ({
      ...prevInputs,
      media: [...inputs.media, ...files],
    }));

    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setPreviewURLs([...previewURLs, ...imageURLs]);
  };

  const removeFile = (index) => {
    const updatedMedia = inputs.media.filter((_, i) => i !== index);
    const updatedPreviewURLs = previewURLs.filter((_, i) => i !== index);

    setInputs((prevInputs) => ({
      ...prevInputs,
      media: updatedMedia,
    }));
    setPreviewURLs(updatedPreviewURLs);
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const { user } = useAuth();

  const ModalContent = (
    <>
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <main>
            <div className="picture">
              <img
                src={user.profile.pictureURL || DefaultProfilePicture}
                alt="Icone do Perfil"
              />
            </div>
            <div className="info">
              <textarea
                placeholder="Estou pensando sobre..."
                name="text"
                value={inputs.text}
                onChange={(e) => setInputs({ ...inputs, text: e.target.value })}
              />
              <div className="preview-images">
                {previewURLs.map((previewURL, i) => (
                  <div key={i} className="preview-image">
                    <img key={i} src={previewURL} alt={`Preview ${i}`} />
                    <TiDelete className="icon" onClick={() => removeFile(i)} />
                  </div>
                ))}
              </div>
            </div>
            <div className="close">
              <IoCloseOutline className="icon" onClick={toggleModal} />
            </div>
          </main>

          <div className="divider"></div>

          <footer>
            <div className="actions">
              <div className="image-input">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  className="input-file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <LuImagePlus className="icon" onClick={handleImageClick} />
              </div>
              <div className="image-input">
                <MdGifBox className="icon" />
              </div>
            </div>

            <button className="blue button-submit">Publicar</button>
          </footer>
        </form>
      )}
    </>
  );

  return (
    <>
      {isOpen &&
        (!isComment ? (
          <div className="modal-background">
            <div className="modal">{ModalContent}</div>
          </div>
        ) : (
          <div className="comment">{ModalContent}</div>
        ))}
    </>
  );
}

export default PostModal;
