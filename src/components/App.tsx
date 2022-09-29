import React, { useEffect } from "react";

import TheBanner from "./TheBanner";
import SearchBar from "./SearchBar";
import CharacterList from "./CharactersList";
import Modal from "./Modal";

import { addCharacters, fetchCharacters } from "../store";
import { useDispatch } from "react-redux";

const bannerContent = () => (
  <div className="w-full">
    <h1 className="text-3xl text-center font-bold mb-2">
      Rick and Morty <br /> Front-End App
    </h1>
    <div className="md:container mx-auto">
      <SearchBar />
    </div>
  </div>
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <TheBanner content={bannerContent()} />

      <div className="container mx-auto pt-5">
        <CharacterList />
      </div>
    </div>
  );
};

export default App;
