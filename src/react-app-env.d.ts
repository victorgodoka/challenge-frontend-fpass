/// <reference types="react-scripts" />

interface IThumbnail {
  thumbnail?: string;
}

interface IUsePagination {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

interface IPagination {
  total: number;
  url: string;
  count: number;
}
                       
interface IComic {
  text?: string[];
  position?: string[];
  thumbnail?: string;
  id: number;
}

interface IPanel {
  size?: 'sm' | 'xl';
}

interface ISearch {
  id: string;
  label: string;
}

interface IParams {
  [key: string]: any;
  name?: string;
  hero?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
}

interface IErrorPage {
  statusText?: string;
  message?: string;
}

interface IMarvel {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

interface Item2 {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

interface Item4 {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}
