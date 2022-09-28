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

const BaseButton = ({ content }: { content: any }) => (
  <div className={buttonClasses}>{content}</div>
);

export default BaseButton;
