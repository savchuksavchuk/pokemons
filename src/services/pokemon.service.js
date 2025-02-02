import { API_URL } from "../config";

const controller = `${API_URL}/pokemon`;

export class PokemonsService {
  static loadPokemons = async (page, count, search) => {
    const searchParams = new URLSearchParams();

    searchParams.append("page", page);
    searchParams.append("count", count);
    searchParams.append("search", search);

    const result = await fetch(`${controller}?${searchParams.toString()}`, {
      method: "GET",
    });

    if (result.ok) {
      return result.json();
    }
  };
}
