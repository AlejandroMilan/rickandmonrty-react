import { createSlice, createSelector, configureStore } from "@reduxjs/toolkit";
import { Character } from "../services/Characters.service";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
  },
  reducers: {
    addCharacters(
      state: { characters: Character[] },
      action: { payload: Character[] }
    ) {
      state.characters = [...state.characters, ...action.payload];
    },
  },
});

export const { addCharacters } = charactersSlice.actions;

const store = configureStore({
  reducer: charactersSlice.reducer,
});

export default store;
