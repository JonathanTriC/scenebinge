interface ICastDetail {
  cast?: Cast[];
  crew?: Cast[];
  id?: number;
}

interface Cast {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: null | string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  media_type?: MediaType;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: Date;
  name?: string;
  episode_count?: number;
  department?: string;
  job?: string;
}

type MediaType = 'movie' | 'tv';
