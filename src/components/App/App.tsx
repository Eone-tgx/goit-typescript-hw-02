import Modal from "react-modal";
import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchData } from "../../api-requests";
import { ClipLoader } from "react-spinners";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "./App.types";

Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = async (query: string): Promise<void> => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setError(null);
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchData(query, 1);
      setImages(response.results);
      setTotalPages(response.total_pages);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreImages = async () => {
    setPage(page + 1);
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchData(query, page + 1);
      setImages((prev) => [...prev, ...response.results]);
      requestAnimationFrame(() => {
        window.scrollBy({
          top: window.innerHeight / 1.2,
          behavior: "smooth",
        });
      });
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (image: Image): void => setSelectedImage(image);
  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("ReactModal__Body--open");
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <Toaster position="top-right" reverseOrder={false} />

      <ImageGallery images={images} onImageClick={openModal} />

      {isLoading && <ClipLoader color="#646cff" size={50} />}

      {error && <ErrorMessage />}

      {images.length > 0 &&
        totalPages !== null &&
        page < totalPages &&
        !isLoading && <LoadMoreBtn onClick={loadMoreImages} />}

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
