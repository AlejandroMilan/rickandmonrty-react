import { createSlice, createSelector, configureStore } from "@reduxjs/toolkit";
import { Character } from "../services/Characters.service";

import { loadCharacters } from "../services/Characters.service";

interface State {
  characters: Character[];
  search: string;
  page: number;
}

const initialState: State = {
  characters: [],
  search: "",
  page: 1,
};

export const stateSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters(state: State, action: { payload: Character[] }) {
      state.characters = [...state.characters, ...action.payload];
    },

    clearCharacters(state: State) {
      state.characters = [];
    },

    setSearch(state: State, action: { payload: string }) {
      state.search = action.payload;
    },
  },
});

export const { addCharacters, setSearch, clearCharacters } = stateSlice.actions;

const store = configureStore({
  reducer: stateSlice.reducer,
});

export const fetchCharacters = () => (dispatch: any) => {
  const { search, page } = store.getState();

  loadCharacters({ name: search, page })
    .then((characters) => {
      dispatch(addCharacters(characters));
    })
    .catch((error) => {
      console.error(error);
    });
};

export default store;
