import React from "react";

const CharacterCard = () => (
  <div className="outline outline-2 outline-gray-300 p-3 rounded cursor-pointer hover:bg-gray-100">
    <img
      src="https://rickandmortyapi.com/api/character/avatar/289.jpeg"
      alt=""
      className="rounded w-full"
    />
    <div>
      <h2 className="text-2xl text-indigo-700 font-bold my-1">Rick</h2>
      <small className="text-gray-500">Alive - Human</small>
    </div>
  </div>
);

export default CharacterCard;
