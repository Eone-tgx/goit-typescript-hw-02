import { FC, MouseEventHandler } from "react";
import { Image } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        loading="lazy"
        onClick={() => onClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
