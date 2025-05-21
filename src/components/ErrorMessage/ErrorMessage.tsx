import { FC } from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return <p className={css.errorMessage}>Ooops something went wrong</p>;
};

export default ErrorMessage;
