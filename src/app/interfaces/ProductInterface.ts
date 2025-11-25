export interface Product {
  id: string;
  name: string;
}

export interface ImageData {
  id: string[];
  image: string;
}

export interface CompletedProduct {
  id: string;
  name: string;
  image: string | null;
}
