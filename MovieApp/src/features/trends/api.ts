import { X_API_KEY_Unofficial, kinopoiskUnofficial } from "#features/api/api";
import { KinopoinskAllUnofficial } from "#ui/cards/card-props";


export const api = {
  getTrendsMovies: (page: number): Promise<KinopoinskAllUnofficial> => {
    return fetch(
      `${kinopoiskUnofficial}api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': X_API_KEY_Unofficial,
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};