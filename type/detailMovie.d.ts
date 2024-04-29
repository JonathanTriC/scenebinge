interface IMovieDetail {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: Date;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  similar?: Similar;
  videos?: Videos;
  credits?: Credits;
}

interface Credits {
  cast?: Cast[];
  crew?: Cast[];
}

interface Cast {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: null | string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  department?: string;
  job?: string;
}

interface Genre {
  id?: number;
  name?: string;
}

interface ProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

interface Similar {
  page?: number;
  results?: SimilarResult[];
  total_pages?: number;
  total_results?: number;
}

interface SimilarResult {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  name?: string;
  original_language?: string;
  original_name?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

interface Videos {
  results?: VideosResult[];
}

interface VideosResult {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: Date;
  id?: string;
}
