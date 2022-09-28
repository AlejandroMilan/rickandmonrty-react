import React from "react";

import BaseButton from "./BaseButton";
const buttonContent = () => <input type="submit" value="Buscar" />;

const SearchBar = () => (
  <form className="grid grid-cols-3 bg-white">
    <input
      type="text"
      placeholder="Buscar personaje"
      className="rounded p-2 text-gray-700 col-span-2"
    />
    <BaseButton content={buttonContent()} />
  </form>
);

export default SearchBar;
