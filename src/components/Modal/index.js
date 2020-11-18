import WrapperModal from "./components/WrapperModal";
import "./styles.css";

function Modal({ data, titleImage, src, closeModal }) {
  const { description, name } = data;
  return (
    <WrapperModal
      onClick={(e) => {
        e.preventDefault();
        return e.currentTarget.id === "wrapperModal" ? closeModal() : null;
      }}
    >
      <div className="modal" onClick={(ev) => ev.stopPropagation()}>
        <div>
          <p>{name}</p>
          <img src={src} alt={titleImage} />
        </div>
        <div>{description}</div>
        <button type="button" onClick={closeModal} className="closeModal">
          x
        </button>
      </div>
    </WrapperModal>
  );
}

export default Modal;
