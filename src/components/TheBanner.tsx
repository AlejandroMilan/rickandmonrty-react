import React from "react";

const bannerClasses = [
  "bg-violet-800",
  "text-white",
  "py-5",
  "flex",
  "items-center",
  "bg-banner-image",
  "bg-cover",
  "h-64",
].join(" ");

const TheBanner = ({ content }: { content: React.ReactNode }) => (
  <div className={bannerClasses}>
    <div className="container mx-auto">{content}</div>
  </div>
);

export default TheBanner;
