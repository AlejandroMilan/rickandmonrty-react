import React from "react";
import { Character } from "../services/Characters.service";

const CharacterCard = ({
  character,
  onClick,
}: {
  character: Character;
  onClick?: any;
}) => {
  return (
    <div
      className="outline outline-1 outline-gray-300 p-3 rounded cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <img src={character.image} alt="" className="rounded w-full" />
      <div>
        <h2 className="text-2xl text-indigo-700 font-bold my-1">
          {character.name}
        </h2>
        <small className="text-gray-500">
          {character.status} - {character.species}
        </small>
      </div>
    </div>
  );
};

export default CharacterCard;
