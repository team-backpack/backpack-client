import "./styles.css";

import { IoCloseOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { MdGifBox } from "react-icons/md";

function PostModal({ isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className="modal-background">
          <div className="modal">
            <main>
              <div className="picture">
                <img
                  src="https://i.pinimg.com/736x/55/8f/3d/558f3de8bcf53e764e2d409aa1451ccc.jpg"
                  alt="Icone do Perfil"
                />
              </div>
              <div className="info">
                <form>
                  <textarea placeholder="Estou pensando sobre..." />
                </form>
              </div>
              <div className="close">
                <IoCloseOutline className="icon" onClick={toggleModal} />
              </div>
            </main>

            <div className="divider"></div>

            <footer>
              <div className="actions">
                <div className="image-input">
                  <input type="file" className="input-file" />
                  <LuImagePlus className="icon" />
                </div>
                <div className="image-input">
                  <MdGifBox className="icon" />
                </div>
              </div>

              <button className="blue button-submit">Publicar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModal;
