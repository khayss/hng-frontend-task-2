export interface Product {
  id: number;
  name: string;
  brand: string;
  brandCategory: string;
  images: string[];
  price: number;
  discountPercentage?: number;
  rating: number;
  amountSold: number;
  colors: string[];
  sizes: number[];
  stock: number;
  numReviews: number;
  description: string;
  favorite?: boolean;
  inCart?: boolean;
  color?: {
    text: string;
    color: string;
  };
  size?: number;
}
