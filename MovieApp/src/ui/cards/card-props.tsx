import { RelativeRoutingType, To } from "react-router-dom";

export interface CardProps {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
    like: number;
    dislike: number;
    user_choise: 'like' | 'dislike' | null;
  }

  export type KinopoinskProps = {
    id: number;
    description: string;
    poster: {
      previewUrl: string,
      url: string,
    }
    genres: [
      {
        name: string
      }
    ],
    year: number,
    name:string;
    items: Array<{
      kinopoiskId: number;
      externalId: {
        kpHD: string;
        imdb: string;
        tmdb: number;
      };
      name: string;
      alternativeName: string;
      enName: string;
      names: [
        {
          name: string;
          language: string;
          type: string;
        }
      ];
      type: string;
      typeNumber: number;
      year: number;
      description: string;
      shortDescription: string;
      slogan: string;
      status: string;
      rating: {
        kp: number,
        imdb: number,
        tmdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
      }
      votes: {
        kp: string,
        imdb: number,
        tmdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
      },
      movieLength: number,
      ratingMpaa: string,
      ageRating: number,
      logo: {
        url: string
      },
      poster: {
        url: string,
        previewUrl: string
      },
      backdrop: {
        url: string,
        previewUrl: string
      },
      videos: {
        trailers: [
          {
            url: string,
            name: string,
            site: string,
            type: string,
            size: number
          }
        ],
        teasers: [
          {
            url: string,
            name: string,
            site: string,
            type: string,
            size: number
          }
        ]
      },
      genres: [
        {
          name: string
        }
      ],
      countries: [
        {
          name: string
        }
      ],
      persons: [
        {
          id: 6317,
          photo: string,
          name:  string,
          enName: string,
          description: string,
          profession: string,
          enProfession: string
        }
      ],
      reviewInfo: {
        count: number,
        positiveCount: number,
        percentage: string
      },
      seasonsInfo: [
        {
          number: number,
          episodesCount: number
        }
      ],
      budget: {
        value: number,
        currency: string
      },
      fees: {
        world: {
          value: number,
          currency: string
        },
        russia: {
          value: number,
          currency: string
        },
        usa: {
          value: number,
          currency: string
        }
      },
      premiere: {
        country: string,
        world: string,
        russia: string,
        digital: string,
        cinema: string,
        bluray: string,
        dvd: string
      },
      similarMovies: [
        {
          id: number,
          rating: {
            kp: number,
            imdb: number,
            tmdb: number,
            filmCritics: number,
            russianFilmCritics: number,
            await: number
          },
          year: number,
          name: string,
          enName: string,
          alternativeName: string,
          type: string,
          poster: {
            url: string,
            previewUrl: string
          }
        }
      ],
      sequelsAndPrequels: [
        {
          id: number,
          rating: {
            kp: number,
            imdb: number,
            tmdb: number,
            filmCritics: number,
            russianFilmCritics: number,
            await: number
          },
          year: number,
          name: string,
          enName: string,
          alternativeName: string,
          type: string,
          poster: {
            url: string,
            previewUrl: string
          }
        }
      ],
      watchability: {
        items: [
          {
            name: string,
            logo: {
              url: string
            },
            url: string
          }
        ]
      },
      releaseYears: [
        {
          start: number,
          end: number
        }
      ],
      top10: number,
      top250: number,
      ticketsOnSale: boolean,
      totalSeriesLength: number,
      seriesLength: number,
      isSeries: boolean,
      audience: [
        {
          count: number,
          country: string
        }
      ],
      lists: [
        string
      ],
      networks: [
        {
          items: [
            {
              name: string,
              logo: {
                url: string
              }
            }
          ]
        }
      ],
      updatedAt: string,
      createdAt: string,
      facts: [
        {
          value: string,
          type: string,
          spoiler: boolean
        }
      ],
      imagesInfo: {
        postersCount: number,
        backdropsCount: number,
        framesCount: number
      }

    }>;
  };

  export type KinopoinskPropsFull = {
    id: number;

    items: Array<{
      kinopoiskId: number;
      externalId: {
        kpHD: string;
        imdb: string;
        tmdb: number;
      };
      name: string;
      alternativeName: string;
      enName: string;
      names: [
        {
          name: string;
          language: string;
          type: string;
        }
      ];
      type: string;
      typeNumber: number;
      year: number;
      description: string;
      shortDescription: string;
      slogan: string;
      status: string;
      rating: {
        kp: number,
        imdb: number,
        tmdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
      }
      votes: {
        kp: string,
        imdb: number,
        tmdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
      },
      movieLength: number,
      ratingMpaa: string,
      ageRating: number,
      logo: {
        url: string
      },
      poster: {
        url: string,
        previewUrl: string
      },
      backdrop: {
        url: string,
        previewUrl: string
      },
      videos: {
        trailers: [
          {
            url: string,
            name: string,
            site: string,
            type: string,
            size: number
          }
        ],
        teasers: [
          {
            url: string,
            name: string,
            site: string,
            type: string,
            size: number
          }
        ]
      },
      genres: [
        {
          name: string
        }
      ],
      countries: [
        {
          name: string
        }
      ],
      persons: [
        {
          id: 6317,
          photo: string,
          name:  string,
          enName: string,
          description: string,
          profession: string,
          enProfession: string
        }
      ],
      reviewInfo: {
        count: number,
        positiveCount: number,
        percentage: string
      },
      seasonsInfo: [
        {
          number: number,
          episodesCount: number
        }
      ],
      budget: {
        value: number,
        currency: string
      },
      fees: {
        world: {
          value: number,
          currency: string
        },
        russia: {
          value: number,
          currency: string
        },
        usa: {
          value: number,
          currency: string
        }
      },
      premiere: {
        country: string,
        world: string,
        russia: string,
        digital: string,
        cinema: string,
        bluray: string,
        dvd: string
      },
      similarMovies: [
        {
          id: number,
          rating: {
            kp: number,
            imdb: number,
            tmdb: number,
            filmCritics: number,
            russianFilmCritics: number,
            await: number
          },
          year: number,
          name: string,
          enName: string,
          alternativeName: string,
          type: string,
          poster: {
            url: string,
            previewUrl: string
          }
        }
      ],
      sequelsAndPrequels: [
        {
          id: number,
          rating: {
            kp: number,
            imdb: number,
            tmdb: number,
            filmCritics: number,
            russianFilmCritics: number,
            await: number
          },
          year: number,
          name: string,
          enName: string,
          alternativeName: string,
          type: string,
          poster: {
            url: string,
            previewUrl: string
          }
        }
      ],
      watchability: {
        items: [
          {
            name: string,
            logo: {
              url: string
            },
            url: string
          }
        ]
      },
      releaseYears: [
        {
          start: number,
          end: number
        }
      ],
      top10: number,
      top250: number,
      ticketsOnSale: boolean,
      totalSeriesLength: number,
      seriesLength: number,
      isSeries: boolean,
      audience: [
        {
          count: number,
          country: string
        }
      ],
      lists: [
        string
      ],
      networks: [
        {
          items: [
            {
              name: string,
              logo: {
                url: string
              }
            }
          ]
        }
      ],
      updatedAt: string,
      createdAt: string,
      facts: [
        {
          value: string,
          type: string,
          spoiler: boolean
        }
      ],
      imagesInfo: {
        postersCount: number,
        backdropsCount: number,
        framesCount: number
      }

    }>;
  };

  export type KinopoinskAllUnofficial = {
    total: number;
    totalPages: number;
    
    items: Array<{
      kinopoiskId: number;
      imdbId: string;
      nameRu: string;
      nameEn: null;
      nameOriginal: string;
      countries: [
        {
          country: string;
        }
      ];
      genres: [
        {
          genre: string;
        },
        {
          genre: string;
        }
      ];
      ratingKinopoisk: number;
      ratingImdb: number;
      year: number;
      type: number;
      posterUrl: string;
      posterUrlPreview: string;
    }>;
  };

  export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
  to: To;
  unstable_viewTransition?: boolean;
}

export type UserProps = {
  nameEmail: string | null;
  token: string;
  id: string;
};

export type FilterSmall = {
  order: string;
  keyword: string;
  ratingFrom: number;
  ratingTo: number;
  yearFrom: number;
  yearTo: number;
  page: number;
};

export type FilterBig = {
  total: number;
  totalPages: number;
  items: Array<{
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    countries: [
      {
        country: string;
      }
    ];
    genres: [
      {
        genre: string;
      }
    ];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
  }>;
};

export type SearchBig = {
  keyword: string;
  pagesCount: number;
  films: Array<{
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: [
      {
        country: string;
      },
      {
        country: string;
      }
    ];
    genres: [
      {
        genre: string;
      },
      {
        genre: string;
      },
      {
        genre: string;
      }
    ];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
  }>;
  searchFilmsCountResult: number;
};

export type SearchSmall = {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal:string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  slogan: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    }
  ];
  rating: string;
  ratingKinopoisk: number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
};

export type SearchRequest = {
  search: string;
  page: number;
};
