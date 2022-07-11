export interface Product {
  id?: number;
  category: string;
  name: string;
  img: string;
  description: string;
  price: number;
  rating?: number;
  isFavorite?: boolean;
  inShoppingCart?: boolean;
  quantity?: number;
}
