import React from "react";
import { useSelector } from "react-redux";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Character } from "../services/Characters.service";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { characters } = useSelector((state: any) => state);

  return (
    <div className="">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionEnter={true}
        transitionLeave={true}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10"
      >
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default CharacterList;
