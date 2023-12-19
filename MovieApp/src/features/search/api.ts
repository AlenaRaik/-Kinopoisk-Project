import { X_API_KEY_Unofficial, kinopoiskUnofficial } from "#features/api/api";
import { SearchRequest, SearchBig } from "#ui/cards/card-props";

export const api = {
    search: (payload: SearchRequest): Promise<SearchBig> => {
      return fetch(
        `${kinopoiskUnofficial}api/v2.1/films/search-by-keyword?keyword=${payload.search}&page=${payload.page}`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': X_API_KEY_Unofficial,
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error('SERVER_ERROE');
        }
        return response.json();
      });
    },
  };
  