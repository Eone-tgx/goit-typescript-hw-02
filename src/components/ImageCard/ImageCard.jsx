import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        loading="lazy"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
