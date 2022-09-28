import React from "react";

import TheBanner from "./TheBanner";
import SearchBar from "./SearchBar";
import CharacterCard from "./CharacterCard";

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

const App: React.FC = () => (
  <div>
    <TheBanner content={bannerContent()} />

    <div className="container my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
      <CharacterCard />
    </div>
  </div>
);
export default App;
