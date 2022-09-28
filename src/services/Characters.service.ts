import axios from "axios";

export interface Character {
  id: number;
  created: Date;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string; url: "string" };
  location: { name: string; url: "string" };
}

export const loadCharacters = async ({
  name,
  page,
}: {
  name?: string;
  page?: number;
}): Promise<Character[]> => {
  return await axios.get("/character", { params: { name, page } });
};
