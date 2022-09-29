import React from "react";

const buttonClasses = [
  "bg-gradient-to-r",
  "from-sky-500",
  "to-indigo-500",
  "text-white",
  "font-bold",
  "uppercase",
  "flex",
  "items-center",
  "justify-center",
].join(" ");

const BaseButton = ({
  content,
  onClick,
}: {
  content: React.ReactNode;
  onClick?: any;
}) => (
  <div className={buttonClasses} onClick={onClick}>
    {content}
  </div>
);

export default BaseButton;
