import React, { useRef } from "react";
import BaseButton from "./BaseButton";

const buttonContent = () => <button className="py-2 px-3">Cerrar</button>;

const backgroundStyles = [
  "fixed",
  "w-full",
  "h-full",
  "bg-black",
  "top-0",
  "left-0",
  "flex",
  "items-center",
  "justify-center",
  "opacity-50",
].join(" ");

const contentStyles = [
  "bg-white",
  "fixed",
  "w-full",
  "min-h-max",
  "bottom-0",
  "left-0",
].join(" ");

const Modal = ({
  show,
  content,
  title = "",
  onModalClose,
}: {
  show: boolean;
  title?: string;
  content: React.ReactNode;
  onModalClose?: any;
}) => {
  return (
    <div>
      <div className={backgroundStyles}></div>
      <div className={contentStyles}>
        <div className="container py-5 mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl uppercase font-bold text-gray-700">
              {title}
            </h2>
            <BaseButton
              content={buttonContent()}
              onClick={onModalClose}
            ></BaseButton>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
