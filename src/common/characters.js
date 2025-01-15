import { api } from "./base";
import { apikey } from "./constants";
import { charactersResponseAdapter } from "./adapters";

export const charactersApi = {
  findCharacters: () => api
    .get(`characters?apikey=${apikey}`)
    .then(charactersResponseAdapter)
}