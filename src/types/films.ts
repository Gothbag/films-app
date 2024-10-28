export enum FilmCategory {
  Action = "Action",
  Crime = "Crime",
  Romance = "Romance",
}

export interface IFilm {
  id: string;
  title: string;
  description: string;
  color: string;
  category: FilmCategory;
  director: string;
  writer: string;
  releaseYear: number;
  synopsis: string;
}