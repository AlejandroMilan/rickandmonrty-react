import React from "react";
import { Character } from "../services/Characters.service";

interface CharacterDictionary {
  created: string;
  status: string;
  origin: string;
  gender: string;
  location: string;
  species: string;
  id: string;
}

const dictionary: CharacterDictionary = {
  id: "ID",
  gender: "Género",
  status: "Estatus",
  origin: "Origen",
  location: "Ubicación",
  species: "Tipo",
  created: "Creación",
};

const CharacterInfo = ({ character }: { character: Character }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
      <img
        src={character.image}
        alt={`Imagen ${character.name}`}
        className="w-full rounded"
      />
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 outline outline-1 outline-gray-300 rounded p-2">
        <h2 className="md:col-span-2 text-2xl text-gray-700 font-bold">
          {character.name}
        </h2>

        {Object.keys(character)
          .filter((e) => dictionary[e as keyof CharacterDictionary])
          .map((key: string, index: number) => {
            const value = character[key as keyof Character];
            return (
              <div key={index} className="text-gray-700">
                <strong>
                  {dictionary[key as keyof CharacterDictionary].toString()}
                </strong>
                <p>{value.toString()}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CharacterInfo;
