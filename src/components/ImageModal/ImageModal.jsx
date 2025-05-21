import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          maxWidth: "80vw",
          maxHeight: "80vh",
          margin: "auto",
          padding: 0,
          background: "none",
          border: "none",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <img
        src={image.urls.full}
        alt={image.alt_description}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
    </Modal>
  );
};

export default ImageModal;
