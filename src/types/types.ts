// src/data/types.ts

export interface NewsItem {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}

export interface Author {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}
