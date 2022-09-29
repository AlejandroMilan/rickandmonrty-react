import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, fetchCharacters, clearCharacters } from "../store";

import BaseButton from "./BaseButton";
const buttonContent = () => (
  <input
    type="submit"
    value="Buscar"
    className="w-full h-full cursor-pointer"
  />
);

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: { search: string }) => state);

  const [searchLocal, setSearchLocal] = useState("");
  const handleSearch = (e: any) => {
    setSearchLocal(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const searchAction = (e) => {
    e.preventDefault();
    dispatch(clearCharacters());
    dispatch(fetchCharacters());
  };

  return (
    <form onSubmit={searchAction} className="grid grid-cols-3 bg-white">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar personaje"
        className="rounded p-2 text-gray-700 col-span-2"
      />
      <BaseButton content={buttonContent()} />
    </form>
  );
};

export default SearchBar;
