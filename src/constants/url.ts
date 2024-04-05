export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = `https://image.tmdb.org/t/p/original`;

const BASE_NAME_TRENDING = '/trending';
const BASE_NAME_DISCOVER = '/discover';
const BASE_NAME_MOVIE = '/movie';

export const URL_PATH = {
  trendingAllDay: `${BASE_NAME_TRENDING}/all/day`,
  movieNowPlaying: (page: number) =>
    `${BASE_NAME_MOVIE}/now_playing?language=en-US&page=${page}`,
  moviePopular: (page: number) =>
    `${BASE_NAME_MOVIE}/popular?language=en-US&page=${page}`,
  movieDiscover: (page: number, sort_by: string, params: string) =>
    `${BASE_NAME_DISCOVER}/movie?language=en-US&page=${page}&sort_by=${sort_by}.desc&${params}`,
  koreanDramaDiscover: (page: number, genre: number) =>
    `${BASE_NAME_DISCOVER}/tv?language=en-US&page=${page}&sort_by=popularity.desc&watch_region=ID&with_genres=${genre}&with_original_language=ko&with_watch_monetization_types=flatrate%7Cfree%7Cads%7Crent%7Cbuy`,
};
