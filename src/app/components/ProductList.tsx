import { use } from "react";
import {
  CompletedProduct,
  Product,
  ImageData,
} from "../interfaces/ProductInterface";
import ProductListClient from "./ProductList.client";

const ProductList = () => {
  async function getProductData() {
    try {
      const res = await fetch("https://www.giovankov.com/api/product.json");
      if (!res.ok) {
        console.error("Failed to fetch product data");
        return { data: [] };
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching product data:", error);
      return { data: [] };
    }
  }

  async function getProductImageData() {
    try {
      const res = await fetch("https://www.giovankov.com/api/image.json");
      if (!res.ok) {
        console.error("Failed to fetch image data");
        return { data: [] };
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching image data:", error);
      return { data: [] };
    }
  }

  const { data: productData } = use(getProductData());
  const { data: imageData } = use(getProductImageData());

  const imageMap = new Map<string, string>();

  if (imageData && Array.isArray(imageData)) {
    imageData.forEach((imageGroup: ImageData) => {
      if (imageGroup.id && imageGroup.id.length) {
        imageGroup.id.forEach((id: string) => {
          imageMap.set(id, imageGroup.image);
        });
      }
    });
  }

  const completedProductList: CompletedProduct[] =
    productData && productData.length
      ? productData.map((product: Product) => ({
          ...product,
          image: imageMap.get(product.id) || null,
        }))
      : [];

  return <ProductListClient products={completedProductList} />;
};

export default ProductList;
