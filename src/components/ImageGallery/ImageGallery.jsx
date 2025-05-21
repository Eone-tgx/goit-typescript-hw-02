import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) {
    return <p className={css.text}>Введіть текст для пошуку</p>;
  }

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard onClick={() => onImageClick(image)} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
