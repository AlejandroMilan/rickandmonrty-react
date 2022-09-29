import axios from "axios";
import { DateTime } from "luxon";

export interface Character {
  id: number;
  created: Date;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
}

export const loadCharacters = async ({
  name,
  page,
}: {
  name?: string;
  page?: number;
}): Promise<Character[]> => {
  const { data } = await axios.get("/character", {
    params: { name, page },
  });
  return data.results.map((e: any) => {
    return {
      ...e,
      origin: e.origin.name,
      location: e.location.name,
      created: DateTime.fromISO(e.created).setLocale("es").toLocaleString(),
    };
  });
};
