import {Youtube_Key} from './keys';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = `https://image.tmdb.org/t/p/original`;
export const YT_THUMBNAIL = (key: string) =>
  `http://img.youtube.com/vi/${key}/hqdefault.jpg`;
export const YT_METADATA = (key: string) =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${key}&key=${Youtube_Key}`;

const BASE_NAME_TRENDING = '/trending';
const BASE_NAME_DISCOVER = '/discover';
const BASE_NAME_MOVIE = '/movie';
const BASE_NAME_TV = '/tv';
const BASE_NAME_SEARCH = '/search';
const BASE_NAME_PERSON = '/person';

export const URL_PATH = {
  trendingMovie: `${BASE_NAME_TRENDING}/movie/day?language=en-US`,
  trendingTv: `${BASE_NAME_TRENDING}/tv/day?language=en-US`,
  movieNowPlaying: (page?: number) =>
    `${BASE_NAME_MOVIE}/now_playing?language=en-US${
      page ? `&page=${page}` : ''
    }`,
  moviePopular: (page?: number) =>
    `${BASE_NAME_MOVIE}/popular?language=en-US${page ? `&page=${page}` : ''}`,
  movieDiscover: (sort_by?: string, params?: string, page?: number) =>
    `${BASE_NAME_DISCOVER}/movie?language=en-US&sort_by=${sort_by}.desc&${params}${
      page ? `&page=${page}` : ''
    }`,
  koreanDramaDiscover: (genre?: number, page?: number) =>
    `${BASE_NAME_DISCOVER}/tv?language=en-US&sort_by=popularity.desc&watch_region=ID&with_genres=${genre}&with_original_language=ko&with_watch_monetization_types=flatrate%7Cfree%7Cads%7Crent%7Cbuy${
      page ? `&page=${page}` : ''
    }`,
  searchMovie: (query: string) =>
    `${BASE_NAME_SEARCH}/multi?query=${query}&include_adult=false&language=en-US&page=1`,
  detailMovie: (movieId: number) =>
    `${BASE_NAME_MOVIE}/${movieId}?append_to_response=similar%2Cvideos%2Ccredits&language=en-US`,
  detailTV: (tvId: number) =>
    `${BASE_NAME_TV}/${tvId}?append_to_response=similar%2Cvideos%2Ccredits&language=en-US`,
  detailCast: (castId: number) =>
    `${BASE_NAME_PERSON}/${castId}/combined_credits?language=en-US`,
};
