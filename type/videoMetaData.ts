interface IVideoMetadata {
  kind?: string;
  etag?: string;
  items?: Item[];
  pageInfo?: PageInfo;
}

interface Item {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet;
  contentDetails?: ContentDetails;
}

interface ContentDetails {
  duration?: string;
  dimension?: string;
  definition?: string;
  caption?: string;
  licensedContent?: boolean;
  contentRating?: ContentRating;
  projection?: string;
}

interface ContentRating {}

interface Snippet {
  publishedAt?: Date;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: Thumbnails;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: Localized;
  defaultAudioLanguage?: string;
}

interface Localized {
  title?: string;
  description?: string;
}

interface Thumbnails {
  default?: Default;
  medium?: Default;
  high?: Default;
  standard?: Default;
  maxres?: Default;
}

interface Default {
  url?: string;
  width?: number;
  height?: number;
}

interface PageInfo {
  totalResults?: number;
  resultsPerPage?: number;
}
