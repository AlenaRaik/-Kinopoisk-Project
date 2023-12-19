import { X_API_KEY_Unofficial, kinopoiskUnofficial } from '#features/api/api';
import { FilterSmall, FilterBig } from '#ui/cards/card-props';


export const api = {
  getFiltersArr: (payload: FilterSmall): Promise<FilterBig> => {
    return fetch(
      `${kinopoiskUnofficial}api/v2.2/films?order=${payload.order}&type=ALL&ratingFrom=${payload.ratingFrom}&ratingTo=${payload.ratingTo}&yearFrom=${payload.yearFrom}&yearTo=${payload.yearTo}&keyword=${payload.keyword}&page=${payload.page}`,
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
