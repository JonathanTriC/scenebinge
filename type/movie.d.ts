interface IMovieList {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  name?: string;
  original_language?: OriginalLanguage;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  profile_path?: string;
  media_type?: MediaType;
  genre_ids?: number[];
  popularity?: number;
  first_air_date?: Date;
  vote_average?: number;
  vote_count?: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: string;
  video?: boolean;
}

type MediaType = 'tv' | 'movie' | 'person';

type OriginalLanguage = 'en' | 'fr' | 'ja';
