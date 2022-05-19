export interface Product {
  id: number;
  categoryId: number;
  name: string;
  img: string;
  description: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  inShoppingCart: boolean;
  quantity?: number;
}
