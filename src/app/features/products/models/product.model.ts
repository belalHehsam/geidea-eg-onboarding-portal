export interface CardScheme {
  name: string;
  logo: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;

  specifications?: string[];
  cardSchemes?: CardScheme[];
}
