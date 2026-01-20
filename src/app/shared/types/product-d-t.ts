export interface IProductDT {
  id: number;
  title: string;
  slug: string;
  parent: string;
  children: string;
  image: string;
  originalPrice: number;
  price: number;
  discount: number;
  quantity: number;
  type: string;
  tag: string[];
  SKU: string;
  shortDesc: string;
  description: string;
  reviews: number;
  relatedImages: string[];
  topRated?: boolean;
  latest?: boolean;
  best_selling?: boolean;
  badge?: string;
}
